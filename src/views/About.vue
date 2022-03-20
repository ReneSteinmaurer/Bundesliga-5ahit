<template>
  <div class="jumbotron">
    <h1 class="display-4">HTL Wels / 5aHIT</h1>
    <p class="lead">Projekt für den Montag Vormittag</p>
    <hr class="my-4" />
    <p>
      Daten werden vom openligadb-Portal (https://www.openligadb.de/) zur
      Verfügung gestellt..
    </p>
    <h5>Saison: {{ saison }}</h5>
    <h5>Spieltag: {{ spieltag }}</h5>
    <hr class="my-4" />

    <h3>Beteiligte Teams/Personen</h3>

    <div class="container my-4">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-6">
          <!-- https://getbootstrap.com/docs/5.0/components/list-group/ -->
          <ol class="list-group list-group-numbered">
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Projektleitung</div>
                Helml/Reitinger
              </div>
              <span class="badge bg-primary rounded-pill">2</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Aktueller Spieltag</div>
                Bramberger,Lattner,Modl,
              </div>
              <span class="badge bg-primary rounded-pill">2</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Alle Teams</div>
                Erk,Mach
              </div>
              <span class="badge bg-primary rounded-pill">2</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Hinrundenspiele</div>
                Friedl,Kronberger
              </div>
              <span class="badge bg-primary rounded-pill">2</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Rückrundenspiele</div>
                Hyseni,Kriesmann
              </div>
              <span class="badge bg-primary rounded-pill">2</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Spiele 2er Teams</div>
                Rumpfhuber,Schmidtsberger
              </div>
              <span class="badge bg-primary rounded-pill">2</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Topscorer</div>
                Demir,Serifi
              </div>
              <span class="badge bg-primary rounded-pill">2</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Zuschauer</div>
                Ruhland,Schmied
              </div>
              <span class="badge bg-primary rounded-pill">2</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Alle Spieler</div>
                Dragecevic
              </div>
              <span class="badge bg-primary rounded-pill">2</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const liga = computed(() => store.getters.getLiga);
    const saison = computed(() => store.getters.getSaison);
    const spieltag = computed(() => store.getters.getSpieltag);

    console.log('Liga: ' + liga.value);
    return {
      liga,
      saison,
      spieltag,
    };
  },
};
</script>
