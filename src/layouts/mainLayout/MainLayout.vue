<template>
	<div id="main-layout">
    <main-header></main-header>
    <main-content></main-content>
    <main-footer></main-footer>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainHeader from './MainHeader.vue';
import MainFooter from './MainFooter.vue';
import MainContent from './MainContent.vue';
import { State, Action, Getter, namespace } from 'vuex-class';

@Component({
  components: {
    MainHeader,
    MainContent,
    MainFooter,
  },
})
export default class MainLayout extends Vue {
}
</script>

<style lang="scss" scoped>
#main-layout {
	display: flex;
	flex: auto;
	flex-direction: column;
}
</style>
