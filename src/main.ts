import 'reflect-metadata';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';
import VIcon from './components/VIcon.vue';
import TButton from '@/components/TButton.vue';
import { i18n, configureUILanguage, translate } from '@/language/i18n';
import { axiosInterceptorsSetup } from './helpers/interceptors';

Vue.config.productionTip = false;

axiosInterceptorsSetup();
configureUILanguage();

Vue.use(Vuelidate);
Vue.component('v-icon', VIcon);
Vue.component('t-button', TButton);

Vue.filter('translate', translate);

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
