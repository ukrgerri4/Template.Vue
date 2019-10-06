<template>
  <div id="data-grid-content">
    
    <div>
      <div v-for="(option, optionName) in dataOptions" :key="optionName">
        <span>{{option.name | translate}}</span>
      </div>
    </div>

    <div>
      <div v-for="obj in dataValues" :key="obj.Id" @click="$emit('onRowClick', obj.Id)">
        <template v-for="(value, name) in obj">
          <div v-if="shouldShow(name)" :key="name">
            <span>{{value ? value : getDefaultValue(name)}}</span>
          </div>
        </template>
      </div>  
    </div>

  </div>
</template>

<script lang="ts">
import store from '@/store';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataOptions } from '@/types/common/DataOptions';

@Component
export default class GridContent extends Vue {
  @Prop({ default: '' }) public entity?: string;
  @Prop({ default: '' }) public data?: any[];
  @Prop({ default: '' }) public clickHandler?: string;


  get dataOptions(): DataOptions {
    return store.getters[`${this.entity}/dataOptions`];
  }

  get dataValues(): any[] {
    return this.data ? this.data : [];
  }

  private shouldShow(name: string): boolean {
    return this.dataOptions[name] ? true : false;
  }

  private getDefaultValue(name: string): string {
    return this.dataOptions[name] ? this.dataOptions[name].default : '';
  }
}
</script>

<style lang="scss" scoped>
#data-grid-content{
  display: flex;
  flex: auto;
  flex-direction: row;
}
</style>