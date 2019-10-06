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
  @Prop({ default: '' }) public entity?: string;
}
</script>

<style lang="scss" scoped>
#data-details {
  display: flex;
  flex: auto;
}
</style>