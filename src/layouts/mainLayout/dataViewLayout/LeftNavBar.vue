<template>
  <div id="left-nav-bar">
    <v-icon v-for="icon in icons" :key="icon.name" :icon-style="icon.style">
      {{ icon.name }}
    </v-icon>
    <t-button>Adafrfgg</t-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter, namespace } from 'vuex-class';
import { Icon } from '@/types/types.ts';

@Component
export default class LeftNavBar extends Vue {
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
#left-nav-bar {
  display: flex;
	flex: auto;
  flex-direction: column;
}
</style>