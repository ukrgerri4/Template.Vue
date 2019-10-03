<template>
  <div id="grid-layout">
    <h2>{{entity}}</h2>
    <div style="display:flex;flex:auto;">
      <div v-for="obj in response.Values" :key="obj.Id">
        <div v-for="(value, name) in obj" :key="name">
          <span>{{name}}</span>
          <span>{{value}}</span>
        </div>
      </div>
    </div>
    <v-paginate
      :currentPage="request.PageNumber" 
      :pageSize="request.PageSize"
      :total="response.Count"
      @changePage="changePage">
    </v-paginate>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import store from '@/store';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { myContainer } from '@/helpers/app.container';
import { BaseSelectResponse } from '@/types/common/BaseSelectRequest.ts';
import { BaseService } from '../services/baseService';

@Component
export default class VGrid<TSelect, TDetail, TCreate, TKey> extends Vue {
  @Prop({ default: '' }) public entity?: string;
  @Prop({ default: '' }) public serviceName?: string;
  private service?: BaseService<TSelect, TDetail, TCreate, TKey>;
  private response?: BaseSelectResponse<TSelect>;

  constructor() {
    super();
    this.response = {
      Count: 0,
      Values: [],
    };
    this.service = myContainer.get(this.serviceName ? this.serviceName : '');
  }

  get request() {
    return store.getters[`${this.entity}/request`];
  }

  private created() {
    this.getData();
  }

  private getData() {
    if (this.service) {
      this.service.select(this.request)
        .then((resp) => {
          this.response = resp;
          // tslint:disable-next-line:no-console
          console.log(this.response);
        })
        .catch((err) => {
          // tslint:disable-next-line:no-console
          console.error('get clients error');
        });
    }
  }

  private changePage(pageNumber: number) {
    // tslint:disable-next-line:no-console
    console.log(`go to page ${pageNumber}`);
    store.commit(`${this.entity}/UPDATE_PAGE_NUMBER`, pageNumber);
    this.getData();
  }
}
</script>

<style lang="scss" scoped>
#grid-layout {
  display: flex;
  flex: auto;
  flex-direction: column;
}
</style>