import Vue from 'vue';
import Vuex from 'vuex';
import patients from './modules/patients';
import graph from './modules/graph';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    patients,
    graph
  }
});
