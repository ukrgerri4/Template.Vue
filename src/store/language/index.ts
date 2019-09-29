import { Module } from 'vuex';
// import { getters } from './getters';
import { actions } from './actions';
// import { mutations } from './mutations';
import { LanguageState } from './types';
import { RootState } from '../types';

const state: LanguageState = {
  language: '',
};

// const namespaced: boolean = true;
export const language: Module<LanguageState, RootState> = {
  namespaced: true,
  state,
//   getters,
  actions,
//   mutations,
};
