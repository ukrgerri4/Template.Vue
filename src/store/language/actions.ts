import { ActionTree } from 'vuex';
import { LanguageState } from './types';
import { RootState } from '../types';
import { i18n } from '@/language/i18n';

export const actions: ActionTree<LanguageState, RootState> = {
    translate(context, key: string) {
        if (!key) {
            return '';
        }
        return i18n.t(key);
    },
};
