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
                  </select>
                </div>
                <div class="mb-3 form-control-sm">
                  <label for="selSaison" class="form-label">Saison</label>
                  <select
                    class="form-select"
                    aria-label="selSaison"
                    v-model="saison"
                  >
                    <option selected>2021/22</option>
                    <option value="2021">2021/22</option>
                    <option value="2020">2020/21</option>
                    <option value="2019">2019/20</option>
                  </select>
                </div>
                <div class="mb-3 form-control-sm">
                  <label for="loginInputSpieltag" class="form-label"
                    >Spieltag</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="loginInputSpieltag"
                    v-model="spieltag"
                  />
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
import { onMounted, ref, inject, watch, provide } from 'vue';

export default {
  name: 'Home',
  components: {
    BL_Home,
  },
  setup() {
    let liga = ref('bl1');
    let saison = ref('2021');
    let spieltag = ref('1');
    let errorMess = ref('');
    //https://vuejs.org/guide/components/provide-inject.html#provide
    const baseURL = inject('baseURL');

    provide('liga', liga);
    provide('saison', saison);
    provide('spieltag', spieltag);
    provide('error', errorMess);

    let teams = ref([{}]);

    function updateTabelle() {
      //https://github.com/OpenLigaDB/OpenLigaDB-Samples
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
        //console.log('===WATCH::Liga: ' + currentValue + ', ' + oldVal);
        if (currentValue != oldVal) updateTabelle();
      });
      watch(saison, (currentValue, oldVal) => {
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
