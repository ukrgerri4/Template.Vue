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

<style lang="scss">
@import './styles/reset.scss';

html, body {
  height: 100%;
  width: 100%;
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
