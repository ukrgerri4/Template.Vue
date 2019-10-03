import { MutationTree } from 'vuex';
import { ClientState } from './types';

export const mutations: MutationTree<ClientState> = {
  UPDATE_PAGE_NUMBER(state, pageNumber) {
    state.request.PageNumber = pageNumber > 0 ? pageNumber : 1;
  },

  UPDATE_PAGE_SIZE(state, pageSize) {
    state.request.PageSize = pageSize > 0 ? pageSize : 10;
  },

  UPDATE_NAME(state, name) {
    state.request.Name = name ? name : '';
  },
};
