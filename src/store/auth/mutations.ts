import { MutationTree } from 'vuex';
import { AuthState, User } from './types';

export const mutations: MutationTree<AuthState> = {
  AUTH_REQUEST(state) {
    state.status = 'loading';
  },
  AUTH_SUCCESS(state, { token, user }) {
    state.status = 'success';
    state.token = token;
    state.user = user;
  },
  AUTH_ERROR(state) {
    state.status = 'error';
  },
  LOGOUT(state) {
    state.status = '';
    state.token = '';
  },
};
