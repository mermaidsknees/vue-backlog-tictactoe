import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  store: {},

  state: {
    cells: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
    },
    activePlayer: "O",
    moves:0,
    backlog: [],
  },
  mutations: {
    restartMoves(state, payload){
        state.moves = payload
    }
  },
  actions: {},
  modules: {},
});
