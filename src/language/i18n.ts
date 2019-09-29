import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';
// import document from
import en_EN from '@/language/locales/en_EN.json';

// register i18n module
Vue.use(VueI18n);

const browserlocale = window.navigator.language;

const i18n = new VueI18n({
    // if you need get the browser language use following "window.navigator.language"
   locale: browserlocale ? browserlocale : 'en_EN',
   fallbackLocale: 'en_EN',
   messages: {
       en_EN,
   },
   silentTranslationWarn: true,
});

const translate = (key: string) => {
  if (!key) {
    return '';
  }
  return i18n.t(key);
};

const loadedLanguages = ['en_EN'];

const setI18nLanguage = (lang: string) => {
    i18n.locale = lang;
    axios.defaults.headers.common['Accept-Language'] = lang;
    document.querySelector('html')!.setAttribute('lang', lang);
    return lang;
};

const loadLanguageAsync = (lang: string) => {
// If the same language
    if (i18n.locale === lang) {
        return Promise.resolve(setI18nLanguage(lang));
    }

    // If the language was already loaded
    if (loadedLanguages.includes(lang)) {
        return Promise.resolve(setI18nLanguage(lang));
    }

    // If the language hasn't been loaded yet
    return import(/* webpackChunkName: "lang-[request]" */ `@/language/locales/${lang}.json`)
        .then((message) => {
            i18n.setLocaleMessage(lang, message.default);
            loadedLanguages.push(lang);
            return setI18nLanguage(lang);
        },
    );
};

export { i18n, translate, loadLanguageAsync}; // export above method
