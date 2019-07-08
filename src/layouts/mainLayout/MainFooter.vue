<template>
	<div id="main-footer">
        <span>Some additional information</span>
        <span v-once>{{ appVersion }}</span>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MainFooter extends Vue {
    private appVersion: string = `Version ${process.env.VUE_APP_VERSION}`;
}
</script>

<style lang="scss" scoped>
#main-footer {
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