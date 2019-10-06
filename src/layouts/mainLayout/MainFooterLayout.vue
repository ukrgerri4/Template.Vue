<template>
	<div id="main-footer-layout">
		<span>Some additional information</span>
		<span v-once>{{ appVersion }}</span>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store';

@Component
export default class MainFooterLayout extends Vue {
  get appVersion(): string {
    return `Version ${store.state.version}`;
  }
}
</script>

<style lang="scss" scoped>
#main-footer-layout {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
	min-height: 20px;
	color: #d2dae2;
	background-color: #1e272e;
	font-size: 0.8em;
}
</style>