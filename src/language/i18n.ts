import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '../store';
import JwtDecode from 'jwt-decode';
// import document from
import en from '@/language/locales/en-EN.json';

// register i18n module
Vue.use(VueI18n);

const i18n = new VueI18n({
  // if you need get the browser language use following "window.navigator.language"
  locale: 'en-EN',
  fallbackLocale: 'en-EN',
  messages: {
    'en-EN': en,
  },
  silentTranslationWarn: true,
});

const translate = (key: string) => {
  if (!key) {
    return '';
  }
  return i18n.t(key);
};

const configureUILanguage = () => {
    const token = store.getters['auth/getToken'];
    let jwt: any;
    if (token) {
      jwt = JwtDecode(token);
    }
    const browserLanguage = window.navigator.language;
    const lang = jwt && jwt.lang ? jwt.lang : browserLanguage;
    store.dispatch('language/loadLanguage', lang);
};

export { i18n, configureUILanguage , translate }; // export above method
