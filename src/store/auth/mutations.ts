import { MutationTree } from 'vuex';
import { AuthState, User } from './types';

export const mutations: MutationTree<AuthState> = {
  AUTH_REQUEST(state) {
    state.status = STATE_LOADING;
  },
  AUTH_SUCCESS(state, { token, user }) {
    state.status = STATE_SUCCESS;
    state.token = token;
    state.user = user;
  },
  AUTH_ERROR(state) {
    state.status = STATE_ERROR;
  },
  LOGOUT(state) {
    state.status = '';
    state.token = '';
  },
};
