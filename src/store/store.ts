import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { name: 'To make myself happy', done: true, editing: false },
      { name: 'Buy the car', done: false, editing: false },
      { name: 'Become President of USA', done: false, editing: false },
    ],
  },
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production',
});
