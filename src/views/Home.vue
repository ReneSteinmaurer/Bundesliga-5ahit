  <template>
  <!--  
    https://getbootstrap.com/docs/5.0/layout/containers/
  -->
  <div>
    <div id="error" v-if="errorMess.length">
      <h3>Fehlermeldung:</h3>
      {{ errorMess }}
    </div>
    <div class="container-fluid text-sm-center p-6">
      <div class="container-fluid text-sm-center container-bg">
        <h2 class="display-2">Aktueller Spieltag</h2>

        <hr class="my-4" />
        <p class="lead">
          Aktueller Spieltag (Allle Mannschaften mit Resultat, wenn dieses schon
          gültig ist)
        </p>
        <hr class="my-4" />
      </div>
      <div class="container-fluid container-bg">
        <div class="row">
          <div class="col-md-4" style="min-height: 500px">
            <div
              class="d-flex align-items-center justify-content-center vh-100"
            >
              <form>
                <div class="mb-3 form-control-sm">
                  <label for="selectLiga" class="form-label">Liga</label>
                  <select
                    class="form-select form-select-sm"
                    id="selectLiga"
                    aria-label="selectLiga"
                    v-model="liga"
                  >
                    <option selected>Bundesliga</option>
                    <option value="bl1">Bundesliga</option>
                    <option value="bl2">2. Liga</option>
                    <option value="bl3">3. Liga</option>
                    <option value="uefacl">CL</option>
                  </select>
                </div>
                <div class="mb-3 form-control-sm">
                  <label for="selSaison" class="form-label">Saison</label>
                  <vue-select
                    v-model="saison"
                    :options="saisonOptions"
                  ></vue-select>
                </div>
                <div class="mb-3 form-control-sm">
                  <label for="loginInputSpieltag" class="form-label"
                    >Spieltag</label
                  >
                  <vue-select
                    v-model="spieltag"
                    :options="spieltagOptions"
                  ></vue-select>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-8">
            <BL_Home :saison="saison" :teams="teams" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BL_Home from '@/components/BL_Home.vue';
import { onMounted, ref, computed, watch, inject } from 'vue';
import VueSelect from 'vue-next-select';
import 'vue-next-select/dist/index.min.css';
import { useStore } from 'vuex';

export default {
  name: 'Home',
  components: {
    BL_Home,
    VueSelect,
  },
  setup() {
    const store = useStore();
    //https://vuex.vuejs.org/guide/forms.html#two-way-computed-property
    let liga = computed({
      get() {
        return store.getters.getLiga;
      },
      set: (value) => {
        store.commit('setLiga', value);
      },
    });
    liga.value = 'bl1';
    let saison = computed({
      get: () => {
        return store.getters.getSaison;
      },
      set: (value) => {
        console.log('set saison ' + value);
        store.commit('setSaison', value);
      },
    });
    saison.value = '2021';
    let spieltag = computed({
      get: () => {
        return store.getters.getSpieltag;
      },
      set: (value) => {
        console.log('set spieltag ' + value);
        store.commit('setSpieltag', value);
      },
    });
    spieltag.value = '1';
    let errorMess = computed({
      get: () => {
        return store.getters.getSpieltag;
      },
      set: (value) => {
        store.commit('setError', value);
      },
    });
    errorMess.value = '';
    //https://vuejs.org/guide/components/provide-inject.html#provide
    const baseURL = inject('baseURL');
    let spieltagOptions = ref([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 27, 29, 29, 30, 31, 32, 33, 34,
    ]);

    let saisonOptions = [
      '2021',
      '2020',
      '2019',
      '2018',
      '2017',
      '2016',
      '2015',
      '2014',
      '2013',
      '2012',
      '2011',
      '2010',
    ];
    /*
CL:

Spielplan: https://www.openligadb.de/Spielplan/4505/7
https://www.openligadb.de/Ergebnisse/4505/1
leider uneinheitliches API
*/

    /*  provide('liga', liga);
    provide('saison', saison);
    provide('spieltag', spieltag);
    provide('error', errorMess); */

    let teams = ref([{}]);

    function updateTabelle() {
      //https://github.com/OpenLigaDB/OpenLigaDB-Samples
      console.log('Liga: ' + liga.value);
      let url = baseURL + 'getbltable/' + liga.value + '/' + saison.value;
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => {
          teams.value = jsonData;
        })
        .catch((err) => {
          console.log('Error occured ' + err);
        });
    }

    onMounted(() => {
      //https://github.com/OpenLigaDB/OpenLigaDB-Samples
      let url = baseURL + 'getcurrentgroup/bl1';
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          spieltag.value = data.GroupOrderID;
          console.log('Spieltag: ' + data.GroupOrderID);
        })
        .catch((err) => {
          console.log('Error occured ' + err);
        });

      //https://www.netlify.com/blog/2021/01/29/deep-dive-into-the-vue-composition-apis-watch-method/
      //https://vuejs.org/api/reactivity-core.html
      watch(liga, (currentValue, oldVal) => {
        console.log('===WATCH::Liga: ' + currentValue + ', ' + oldVal);
        if (currentValue != oldVal) updateTabelle();
      });
      watch(saison, (currentValue, oldVal) => {
        console.log('===WATCH::Saison: ' + currentValue + ', ' + oldVal);
        if (currentValue != oldVal) updateTabelle();
      });
      watch(spieltag, (currentValue, oldVal) => {
        if (currentValue != oldVal) updateTabelle();
      });
    });

    return {
      teams,
      liga,
      spieltag,
      saison,
      updateTabelle,
      errorMess,
      spieltagOptions,
      VueSelect,
      saisonOptions,
    };
  },
};
</script>
<style scoped>
.container-bg {
  background: rgb(248, 248, 237) !important;
}
#error {
  color: red;
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 40px;
}
#error h3 {
  margin: 0;
  color: black;
}
</style>
