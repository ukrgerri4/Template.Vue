import { GetterTree } from 'vuex';
import { AuthState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<AuthState, RootState> = {
  isLoggedIn: (state) => !!state.token,
  authStatus: (state) => state.status,
  getToken: (state) => state.token,
};
