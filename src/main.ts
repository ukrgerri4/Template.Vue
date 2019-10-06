import 'reflect-metadata';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';
import VIcon from './components/VIcon.vue';
import VGrid from './components/grid/VGrid.vue';
import VPaginate from './components/VPaginate.vue';
import { i18n, configureUILanguage, translate } from '@/language/i18n';
import { axiosInterceptorsSetup } from './helpers/interceptors';
// import '@/plugins/vuetify';

Vue.config.productionTip = false;

axiosInterceptorsSetup();
configureUILanguage();

Vue.use(Vuelidate);
Vue.component('v-icon', VIcon);
// Vue.component('v-grid', VGrid);
// Vue.component('v-paginate', VPaginate);

Vue.filter('translate', translate);

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
