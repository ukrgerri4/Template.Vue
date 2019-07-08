import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { User, AuthState } from './types';
import { RootState } from '../types';

export const state: AuthState = {
  status: '',
  token: localStorage.getItem('token') || '',
  user: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
};

// const namespaced: boolean = true;

export const auth: Module<AuthState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
