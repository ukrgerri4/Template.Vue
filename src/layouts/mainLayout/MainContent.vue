<template>
	<div id="main-content">
		<div class="left-nav-bar">
			<v-icon v-for="icon in icons" :key="icon.name" :icon-style="icon.style">
				{{ icon.name }}
			</v-icon>
		</div>
		<div>
			<v-grid title="Client"></v-grid>
			<!-- <keep-alive>
				<component v-bind:is="currentTabComponent"></component>
			</keep-alive> -->
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter, namespace } from 'vuex-class';
import { Icon } from '@/types/types.ts';
// import Vgrid from '@/components/Vgrid.vue';

// import { required, minLength, maxLength } from 'vuelidate/lib/validators';

@Component
export default class MainContent extends Vue {
  private icons: Icon[];
  private iconStyle: any = { fontSize: '48px'};

  constructor() {
    super();
    this.icons = [
      { name: 'settings', style: this.iconStyle},
      { name: 'person', style: this.iconStyle},
      { name: 'send', style: this.iconStyle},
    ];
  }
}
</script>

<style lang="scss" scoped>
#main-content {
	display: flex;
	flex: auto;

	.left-nav-bar {
		display: flex;
		flex-direction: column;
		width: 50px;
	}
}
</style>
