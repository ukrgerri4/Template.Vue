import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';
import Vicon from './components/Vicon.vue';
import Vgrid from './components/Vgrid.vue';
import { i18n, translate } from '@/language/i18n';
// import '@/plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.component('v-icon', Vicon);
Vue.component('v-grid', Vgrid);
Vue.filter('translate', translate);

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
