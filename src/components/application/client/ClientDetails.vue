<template>
  <div id="client-details">
    CLIENT DETAILS
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ClientDetails extends Vue {
  @Prop({ default: '' }) public entity?: string;
}
</script>

<style lang="scss" scoped>

</style>