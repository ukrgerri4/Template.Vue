<template>
  <div id="home-layout">
    <header>
      <router-link tag="button" :to="{ name: 'login'}">Login</router-link>
      <button>Register</button>
      <router-link tag="button" :to="{ name: 'viewer'}">Viewer</router-link>
      <button v-for="(value, key) in modals" :key="key" @click="modals[key] = true">{{ key }}</button>
    </header>

    <div>
      <!-- TEST -->
      <div v-for="(value, key) in modals" :key="key">
        <keep-alive>
          <modal v-if="modals[key]" @close="closeModal(key)">
            <div slot="header">{{ key }}</div>
            <div slot="body">
              <input type="text">
            </div>
          </modal>
        </keep-alive>
      </div>
      <!-- TEST -->
    </div>

    <footer></footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Modal from '@/components/Modal.vue';

@Component({
  components: {
    Modal,
  },
})
export default class Home extends Vue {
  private modals: any = {
    testModal: false,
    testModal1: false,
    testModal2: false,
  };

  public closeModal(modalName: string) {
    this.modals[modalName] = false;
  }
}
</script>

<style lang="scss" scoped>
#home-layout {
  display: flex;
	flex: auto;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
