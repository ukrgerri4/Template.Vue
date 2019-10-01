import { GetterTree } from 'vuex';
import { LanguageState } from './types';
import { RootState } from '../types';
import jwt_decode from 'jwt-decode';

export const getters: GetterTree<LanguageState, RootState> = {
  getPreferredLanguage: (state) => state.preferredLanguage,
};
