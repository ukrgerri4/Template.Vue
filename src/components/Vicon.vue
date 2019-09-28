<template>
  <i class='material-icons' :style="iconStyle">
		<slot></slot>
	</i>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Vicon extends Vue {
  // @Prop({type: Object as () => User})
  @Prop({
    type: Object as () => any,
    default: () =>  {
      return { fontSize: '24px' };
    },
  }) public iconStyle!: any;
}
</script>

<style lang="scss" scoped>
i {
  cursor: pointer;
}
</style>
