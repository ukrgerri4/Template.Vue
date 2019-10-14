import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ClientsState } from './types';
import { RootState } from '../types';


const state: ClientsState = {
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
    ClientId: { name: 'clients.table.clientId', default: 'not set' },
    ClientName: { name: 'clients.table.clientName', default: 'not set' },
    Enabled: { name: 'clients.table.enabled', default: 'not set' },
  },
  filterOptions: [
    { index: 0, name: 'clients.filter.clientId', type: 'text', handler: '' },
    { index: 1, name: 'clients.filter.clientName', type: 'checkbox', handler: '' },
    { index: 2, name: 'clients.filter.createDate', type: 'datepicker', handler: '' },
    { index: 3, name: 'clients.filter.someData', type: 'dropdown', handler: '' },
  ],
};

// const namespaced: boolean = true;
export const clients: Module<ClientsState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
