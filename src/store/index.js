import { createStore } from "vuex";

export default createStore({
    state: () => ({
        liga: '',
        saison: '',
        spieltag: '',
        errorMess: ''
    }),

    mutations: {
        setLiga(state, ligaN) {
            state.liga = ligaN
        },
        setSpieltag(state, spieltagN) {
            state.spieltag = spieltagN
        },
        setSaison(state, saisonN) {
            state.saison = saisonN
        },
        setError(state, errorN) {
            state.error = errorN
        }
    },
    actions: {
        setLiga({ commit }, data) {
            commit('setLiga', data)
        },
        setSpieltag({ commit }, data) {
            commit('setSpieltag', data)
        },
        setSaison({ commit }, data) {
            commit('setSaison', data)
        },
        setError({ commit }, data) {
            commit('setError', data)
        }

    },
    getters: {
        getLiga(state) {
            return state.liga
        },
        getSaison: state => {
            return state.saison
        },
        getSpieltag(state) {
            return state.spieltag
        },
        getError(state) {
            return state.error
        }
    },
    modules: {},
});
