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
import axios from 'axios';
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';
import { BaseSelectRequest, BaseSelectResponse } from '@/types/common/BaseSelectRequest.ts';
import { ClientSelectModel } from '@/services/clients/types';
import { ClientService } from '@/services/clients/clientService';

@Component
export default class Vgrid extends Vue {
  @Prop({ default: '' }) public title!: string;
  private clientService!: ClientService;

  private request: BaseSelectRequest;
  private objects: ClientSelectModel[];

  constructor() {
    super();
    this.request = {
      PageNumber: 1,
      PageSize: 10,
    };
    this.objects = [];
    this.clientService = new ClientService();
  }

  private created() {
    this.clientService.select(this.request)
      .then((resp) => {
        this.objects = resp.Values;
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