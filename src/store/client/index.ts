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
  response: {
    Count: 0,
    Values: [],
  },
  dataOptions: {
    // Id: { name: 'client.table.id' },
    ClientId: { name: 'client.table.clientId' },
    ClientName: { name: 'client.table.clientName' },
    Enabled: { name: 'client.table.enabled' },
  },
  filterOptions: [
    { index: 0, name: 'client.filter.clientId', type: 'text', handler: '' },
    { index: 1, name: 'client.filter.clientName', type: 'checkbox', handler: '' },
    { index: 2, name: 'client.filter.createDate', type: 'datepicker', handler: '' },
    { index: 3, name: 'client.filter.someData', type: 'dropdown', handler: '' },
  ],
};

// const namespaced: boolean = true;
export const client: Module<ClientState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
