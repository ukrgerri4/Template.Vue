<template>
  <div>
    Sent 'customComponent' props to DataDetails component for using this "Example custom data detail component"
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ExampleCustomDataDetail extends Vue {}
</script>