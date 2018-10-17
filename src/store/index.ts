import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { todos } from './todos/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: require('../../package.json').version,
  },
  modules: {
    todos,
  },
  strict: process.env.NODE_ENV !== 'production',
};

export default new Vuex.Store<RootState>(store);
