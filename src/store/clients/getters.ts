import { GetterTree } from 'vuex';
import { ClientsState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<ClientsState, RootState> = {
  request: (state) => state.request,
  response: (state) => state.response,
  dataOptions: (state) => state.dataOptions,
  filterOptions: (state) => state.filterOptions,
};
