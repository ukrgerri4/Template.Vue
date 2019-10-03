import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ClientState } from './types';
import { RootState } from '../types';


const state: ClientState = {
  request: {
    PageNumber: 1,
    PageSize: 10,
    Name: '',
  },
};

// const namespaced: boolean = true;
export const client: Module<ClientState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
