<template>
  <div id="data-default">
    DEFAULT PAGE
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DataDefault extends Vue {}
</script>

<style lang="scss" scoped>
#data-default {
  display: flex;
  flex: auto;
}
</style>