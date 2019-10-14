<template>
  <div id="data-view-layout">
    <div>
      <left-nav-bar></left-nav-bar>
    </div>
    <router-view :key="$route.path"></router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LeftNavBar from '@/layouts/mainLayout/dataViewLayout/LeftNavBar.vue';

@Component ({
  components: {
    LeftNavBar,
  },
})
export default class DataViewLayout extends Vue {}
</script>

<style lang="scss" scoped>
#data-view-layout {
	display: flex;
	flex: auto;

  div {
    display: flex;
  }
}
</style>