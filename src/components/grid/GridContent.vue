<template>
  <div id="grid-content">
    
    <div>
      <div v-for="(option, optionName) in dataOptions" :key="optionName">
        <span>{{option.name | translate}}</span>
      </div>
    </div>

    <div>
      <div v-for="obj in dataValues" :key="obj.Id" @click="$emit(clickHandler, obj.Id)">
        <div v-for="(value, name) in obj" :key="name">
          <span v-if="shouldShow(name)">{{value ? value : ''}}</span>
        </div>
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
}
</script>

<style lang="scss" scoped>
#grid-content{
  display: flex;
  flex: auto;
  flex-direction: row;
}
</style>