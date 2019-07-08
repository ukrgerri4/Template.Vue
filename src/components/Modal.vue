<template>
	<div class="model">
		<transition name="modal">
			<div class="modal-mask" @click="$emit('close')">
				<div class="modal-container" @click.stop>
					
					<div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>

					<div class="modal-footer">
            <slot name="footer">
							<button @click="$emit('close')">
							 <v-icon :icon-style="{ fontSize: '48px' }">home</v-icon>
							</button>
            </slot>
          </div>

				</div>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
  public mounted() {
    // tslint:disable-next-line:no-console
    console.log('Add event on keyup');
    window.addEventListener('keydown', (event) => {
      if (event && event.keyCode === 27) {
        this.$emit('close');
      }
    });
  }

  public beforeDestroy() {
    // tslint:disable-next-line:no-console
    console.log('Remove event on keyup');
    window.removeEventListener('keydown', (event) => {
      if (event && event.keyCode === 27) {
        this.$emit('close');
      }
    });
  }
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}

// .modal-wrapper {
//   display: flex;
// }

.modal-container {
  z-index: 9999;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 80%;
	max-height: 80%;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

slot{
	z-index: 10000;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

