<template>
  <div id="data-grid">
    <h2>{{entity}}</h2>
 
    <data-grid-filter
      :entity="entity">
    </data-grid-filter>

    <data-grid-content
      :entity="entity"
      :data="response.Values"
      @onRowClick="onRowClick">
    </data-grid-content>

    <paginate
      :currentPage="request.PageNumber" 
      :pageSize="request.PageSize"
      :total="response.Count"
      @changePage="changePage">
    </paginate>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import store from '@/store';
import { Component, Prop, Vue } from 'vue-property-decorator';
import DataGridFilter from '@/components/data/dataGrid/DataGridFilter.vue';
import DataGridContent from '@/components/data/dataGrid/DataGridContent.vue';
import Paginate from '@/components/Paginate.vue';
import { myContainer } from '@/helpers/app.container';
import { BaseSelectResponse } from '@/types/common/BaseSelectRequest.ts';
import { BaseService } from '@/services/baseService';

@Component({
  components: {
    DataGridFilter,
    DataGridContent,
    Paginate,
  },
})
export default class DataGrid<TSelect, TDetail, TCreate, TKey> extends Vue {
  @Prop() private entity?: string;
  private service?: BaseService<TSelect, TDetail, TCreate, TKey>;

  constructor() {
    super();
    const serviceName = this.getServiceName();
    this.service = myContainer.get(serviceName);
  }

  get request() {
    return store.getters[`${this.entity}/request`];
  }

  get response(): BaseSelectResponse<TSelect> {
    return store.getters[`${this.entity}/response`];
  }

  private created() {
    this.getData();
  }

  private getServiceName(): string {
    if (this.entity && this.entity.length > 0) {
      return `${this.entity[0].toUpperCase()}${this.entity.slice(1)}Service`;
    }
    return '';
  }

  private getData() {
    if (this.service) {
      this.service.select(this.request)
        .then((resp) => {
          store.commit(`${this.entity}/UPDATE_RESPONSE`, resp);
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

  private onRowClick(id: TKey) {
    if (id) {
      // tslint:disable-next-line:no-console
      console.log(`Go to: [${this.entity}/${id}].`);
      this.$router.push({ path: `${this.entity}/${id}` });
    } else {
      // tslint:disable-next-line:no-console
      console.error(`id of element not exist.`);
    }
  }
}
</script>

<style lang="scss" scoped>
#data-grid {
  display: flex;
  flex: auto;
  flex-direction: column;
}
</style>