<template>
	<div id="main-header">
		<div>
			<router-link :to="{ name: 'home'}">
				<span>{{'home' | translate }}</span>
				<v-icon :icon-style="iconStyle">
					home
				</v-icon>
			</router-link>
		</div>
		<div>
			<v-icon v-for="icon in icons" :key="icon.name" :icon-style="icon.style">
				{{ icon.name }}
			</v-icon>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Icon } from '@/types/types.ts';

@Component
export default class MainHeader extends Vue {
  private icons: Icon[];
  private iconStyle: any = { fontSize: '24px', padding: '0 10px', color: '#fff' };

  constructor() {
    super();
    this.icons = [
      { name: 'directions_run', style: this.iconStyle},
      { name: 'pool', style: this.iconStyle},
      { name: 'toggle_off', style: this.iconStyle},
    ];
  }
}
</script>

<style lang="scss" scoped>
#main-header {
    display: flex;
		justify-content: space-between;
    align-items: center;
    min-height: 30px;
    background-color: #1e272e;
}
</style>
