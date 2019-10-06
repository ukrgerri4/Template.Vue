<template>
	<div id="main-layout">
    <main-header-layout></main-header-layout>
    <main-content-layout></main-content-layout>
    <main-footer-layout></main-footer-layout>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainHeaderLayout from './MainHeaderLayout.vue';
import MainFooterLayout from './MainFooterLayout.vue';
import MainContentLayout from './MainContentLayout.vue';
import { State, Action, Getter, namespace } from 'vuex-class';

@Component({
  components: {
    MainHeaderLayout,
    MainContentLayout,
    MainFooterLayout,
  },
})
export default class MainLayout extends Vue {}
</script>

<style lang="scss" scoped>
#main-layout {
	display: flex;
	flex: auto;
	flex-direction: column;
}
</style>
