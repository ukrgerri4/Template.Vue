import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';
import Vicon from './components/Vicon.vue';
import Vgrid from './components/Vgrid.vue';
// import '@/plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.component('v-icon', Vicon);
Vue.component('v-grid', Vgrid);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
