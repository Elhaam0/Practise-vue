import Vuex from "vuex";
import Vue from "vue";

import albumList from "./modules/albumList";

//loaud Vuex
Vue.use(Vuex);

//create store
export default new Vuex.Store({
  modules: {
    albumList,
  },
});
