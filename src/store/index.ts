import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { auth } from './auth/index';
import { language } from './language/index';
import { clients } from './clients/index';


Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
      version: process.env.VUE_APP_VERSION, // a simple property
  },
  modules: {
    auth,
    language,
    clients,
  },
};

export default new Vuex.Store<RootState>(store);
