<template>
  <div id="data-details">
    <template v-if="customComponent">
      <component v-bind:is="customComponent"></component>      
    </template>
    <template v-else>
      CLIENT DETAILS
    </template>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { Component, Prop, Vue } from 'vue-property-decorator';
import ExampleCustomDataDetail from './ExampleCustomDataDetail.vue';
import { BaseService } from '@/services/baseService';

@Component({
  components: {
    ExampleCustomDataDetail,
  },
})
export default class DataDetails<TSelect, TDetail, TCreate, TKey> extends Vue {
  @Prop({ default: '' }) private customComponent?: string;
  private id?: string;
  private entity?: string;
  private service?: BaseService<TSelect, TDetail, TCreate, TKey>;

  private created() {
    this.id = this.$route.params.id;
    this.entity = this.$route.params.entity;
  }
}
</script>

<style lang="scss" scoped>
#data-details {
  display: flex;
  flex: auto;
}
</style>