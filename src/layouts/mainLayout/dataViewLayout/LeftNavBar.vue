<template>
  <div id="left-nav-bar">
    <t-button v-for="button in buttons" :key="button.name" @click="$router.push({ path: `/${button.route}` }).catch(error => {})">
      {{button.name | translate}}
    </t-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter, namespace } from 'vuex-class';
import { Icon, Button } from '@/types/types.ts';

@Component
export default class LeftNavBar extends Vue {
  private buttons: Button[];

  constructor() {
    super();
    this.buttons = [
      { name: 'mainContent.leftNavBar.users', style: '', route: 'users' },
      { name: 'mainContent.leftNavBar.clients', style: 'clients', route: 'clients' },
      { name: 'mainContent.leftNavBar.resources', style: '', route: '' },
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