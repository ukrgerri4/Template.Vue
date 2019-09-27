import { MutationTree } from 'vuex';
import { AuthState, User } from './types';
import { State } from '../../constants/constants';

export const mutations: MutationTree<AuthState> = {
  AUTH_REQUEST(state) {
    state.status = State.LOADING;
  },
  AUTH_SUCCESS(state, { token, user }) {
    state.status = State.SUCCESS;
    state.token = token;
    state.user = user;
  },
  AUTH_ERROR(state) {
    state.status = State.ERROR;
  },
  LOGOUT(state) {
    state.status = '';
    state.token = '';
  },
};
