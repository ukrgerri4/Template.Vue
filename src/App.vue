<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import router from './router';
import store from './store';

import MainLayout from '@/layouts/mainLayout/MainLayout.vue';

@Component({
  components: {
    MainLayout,
  },
})
export default class App extends Vue {
  private created() {
    const token = store.getters['auth/getToken'];
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    axios.interceptors.response.use(undefined, (error) => {
      return new Promise((resolve, reject) => {
        if (error.response.status === 401) {
          router.push({ name: 'login' });
        }
        throw error;
      });
    });
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  font-family: sans-serif;
}

#app{
  display: flex;
  flex: auto;
}
</style>
