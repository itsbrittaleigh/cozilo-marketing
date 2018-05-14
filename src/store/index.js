/* eslint-disable no-shadow */
import Vue from 'vue';
import Vuex from 'vuex';

import Navigation from './modules/Navigation';

Vue.use(Vuex);

const state = {};
const getters = {};
const actions = {};
const mutations = {};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    Navigation,
  },
});
