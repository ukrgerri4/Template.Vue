import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { auth } from './auth/index';
import { language } from './language/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
      version: '1.0.0', // a simple property
  },
  modules: {
    auth,
    language,
  },
};

export default new Vuex.Store<RootState>(store);
