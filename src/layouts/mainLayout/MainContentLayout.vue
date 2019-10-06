<template>
	<div id="main-content-layout">
    <router-view></router-view>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MainContentLayout extends Vue {}
</script>

<style lang="scss" scoped>
#main-content-layout {
	display: flex;
	flex: auto;
}
</style>
