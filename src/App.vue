<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainLayout from '@/layouts/mainLayout/MainLayout.vue';

@Component({
  components: {
    MainLayout,
  },
})
export default class App extends Vue {
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
