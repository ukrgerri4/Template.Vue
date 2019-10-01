import { ActionTree } from 'vuex';
import { LanguageState } from './types';
import { RootState } from '../types';
import { i18n } from '@/language/i18n';
import axios from 'axios';

export const actions: ActionTree<LanguageState, RootState> = {
    setLanguage(context, lang: string) {
        i18n.locale = lang;
        axios.defaults.headers.common['Accept-Language'] = lang;
        document.querySelector('html')!.setAttribute('lang', lang);
        return lang;
    },

    loadLanguage(context, lang: string) {
        // If the same language
        if (i18n.locale === lang) {
            return Promise.resolve(context.dispatch('setLanguage', lang));
        }

        // If the language was already loaded
        if (context.state.loadedLanguages.includes(lang)) {
            return Promise.resolve(context.dispatch('setLanguage', lang));
        }

        // If the language was not loaded but cashed
        const langData = localStorage.getItem(lang);
        if (langData) {
            i18n.setLocaleMessage(lang, JSON.parse(langData));
            context.commit('ADD_LOADED_LANGUAGE', lang);
            return Promise.resolve(context.dispatch('setLanguage', lang));
        }

        // If the language hasn't been loaded yet
        return import(/* webpackChunkName: "lang-[request]" */ `@/language/locales/${lang}.json`)
            .then((message) => {
                i18n.setLocaleMessage(lang, message.default);
                localStorage.setItem(lang, JSON.stringify(message.default));
                context.commit('ADD_LOADED_LANGUAGE', lang);
                return context.dispatch('setLanguage', lang);
            },
        );
    },
};
