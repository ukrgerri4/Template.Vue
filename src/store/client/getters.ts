import { GetterTree } from 'vuex';
import { ClientState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<ClientState, RootState> = {
  request: (state) => state.request,
  response: (state) => state.response,
  dataOptions: (state) => state.dataOptions,
  filterOptions: (state) => state.filterOptions,
};
