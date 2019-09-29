<template>
  <div id="grid-layout">
    <h2>{{title}}</h2>
    <div v-for="obj in objects" :key="obj.Id">
      <span>{{obj.Id}}</span>
      <span>{{obj.ClientId}}</span>
      <span>{{obj.ClientName}}</span>
      <span>{{obj.Enabled}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { BaseSelectRequest } from '@/types/common/BaseSelectRequest.ts';
import { GetClientsViewModel } from '@/types/client/GetClientsViewModel.ts';


@Component
export default class Vgrid extends Vue {
  @Prop({ default: '' }) public title!: string;

  private request: BaseSelectRequest;
  private objects: GetClientsViewModel[];

  constructor() {
    super();
    this.request = {
      PageNumber: 1,
      PageSize: 10,
    };
    this.objects = [];
  }

  private created() {
    axios({
      url: `${process.env.VUE_APP_IDS_URL}/api/client/select`,
      data: this.request,
      method: 'POST',
    })
      .then((resp) => {
        this.objects = resp.data.Values;
        // tslint:disable-next-line:no-console
        console.log(this.objects);
      })
      .catch((err) => {
        // tslint:disable-next-line:no-console
        console.error('get clients error');
      });
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