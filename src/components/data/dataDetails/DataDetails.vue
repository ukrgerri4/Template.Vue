<template>
  <div id="data-details">
    CLIENT DETAILS
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DataDetails extends Vue {
  @Prop() private id?: string;
  @Prop() private entity?: string;

  constructor() {
    super();
    // console.log(this.$route);
    console.log(`Details: ${this.id},${this.entity}`);
  }
}
</script>

<style lang="scss" scoped>
#data-details {
  display: flex;
  flex: auto;
}
</style>