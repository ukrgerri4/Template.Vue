<template>
  <div id="grid-layout">
    <h2>{{entity}}</h2>
 
    <grid-filter
      :entity="entity">
    </grid-filter>

    <grid-content
      :entity="entity"
      :data="response.Values"
      clickHandler="onRowClick">
    </grid-content>

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
import GridFilter from '@/components/grid/GridFilter.vue';
import GridContent from '@/components/grid/GridContent.vue';
import { myContainer } from '@/helpers/app.container';
import { BaseSelectResponse } from '@/types/common/BaseSelectRequest.ts';
import { BaseService } from '@/services/baseService';

@Component({
  components: {
    GridFilter,
    GridContent,
  },
})
export default class VGrid<TSelect, TDetail, TCreate, TKey> extends Vue {
  @Prop({ default: '' }) public entity?: string;
  @Prop({ default: '' }) public serviceName?: string;
  private service?: BaseService<TSelect, TDetail, TCreate, TKey>;

  constructor() {
    super();
    this.service = myContainer.get(this.serviceName ? this.serviceName : '');
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
      this.$router.push({ path: `${this.entity}/${id}` });
    } else {
    // tslint:disable-next-line:no-console
    console.error(`id of element not exist.`);
    }
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