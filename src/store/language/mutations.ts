import { MutationTree } from 'vuex';
import { LanguageState } from './types';

export const mutations: MutationTree<LanguageState> = {
  ADD_LOADED_LANGUAGE(state, lang: string) {
    state.loadedLanguages.push(lang);
  },
};
