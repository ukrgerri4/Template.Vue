<template>
  <div id="paginate" v-show="currentPage && pageSize && total">
    <div @click="onPageChange(currentPage - 1)" v-show="currentPage > 1">
      <v-icon :icon-style="{ fontSize: '24px'}">
        arrow_back_ios
      </v-icon>
    </div>
    
    <div v-for="index in pages" :key="index" @click="onPageChange(index)" :class="index === currentPage ? 'active' : ''">
      {{index}}
    </div>
    
    <div @click="onPageChange(currentPage + 1)" v-show="currentPage < pages">
      <v-icon :icon-style="{ fontSize: '24px', marginLeft: '5px'}">
        arrow_forward_ios
      </v-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VPaginate extends Vue {
    @Prop() private currentPage?: number;
    @Prop() private pageSize?: number;
    @Prop() private total?: number;

    get pages(): number {
      if (this.total && this.pageSize) {
        return Math.ceil(this.total / this.pageSize);
      }
      return 0;
    }

    public onPageChange(choosenPage: number) {
      if (this.currentPage !== choosenPage) {
        this.$emit('changePage', choosenPage);
      }
    }
}
</script>

<style lang="scss" scoped>
#paginate {
	display: flex;
  justify-content: center;

  div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    border: 1px solid black;
  }

  .active{
    background-color: gray;
  }
}

</style>