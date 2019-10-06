<template>
  <div id="grid-filter">
    <div v-for="option in filterOptions" :key="option.index">
      <span>{{option.name | translate}}</span>
      <div v-if="option.type === 'text'">
        <input type="text">
      </div>
      <div v-else-if="option.type === 'checkbox'">
        <input type="checkbox">
      </div>
      <div v-else-if="option.type === 'datepicker'">
        <date-pick></date-pick>
      </div>
      <div v-else-if="option.type === 'dropdown'">
        <dropdown
          :options="arrayOfObjects"
          :selected="object" 
          v-on:updateOption="methodToRunOnSelect" 
          :placeholder="'Select an Item'">
        </dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { FilterOption } from '@/types/common/FilterOptions';
import Dropdown from '@/components/Dropdown.vue';
// @ts-ignore
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

@Component({
  components: {
    DatePick,
    Dropdown,
  },
})
export default class GridFilter extends Vue {
  @Prop({ default: '' }) public entity?: string;
  private date: any = { date: '2019-01-01' };
  private arrayOfObjects: any = [ { name: 'one' }, { name: 'two' }, { name: 'three' } ];
  private object: any = { name: 'Object Name' };

  get filterOptions(): FilterOption[] {
    return store.getters[`${this.entity}/filterOptions`];
  }
}
</script>

<style lang="scss" scoped>
#grid-filter {
  display: flex;
  flex: auto;
  flex-direction: row;
}
</style>