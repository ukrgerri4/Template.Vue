<template>
  <div id="login-layout">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Username</label>
        <input
          v-model.trim="userLogin.value"
          :name="userLogin.name"
          :type="userLogin.type"
          :label="userLogin.label"
          autocomplete="login"
        >
        <div v-if="submitted && !$v.userLogin.value.required">Name is required</div>
        <div v-if="submitted && !$v.userLogin.value.minLength">Name must have at least {{$v.userLogin.value.$params.minLength.min}} letters.</div>
      </div>
      <div>
        <label>Password</label>
        <input
          v-model.trim="password.value"
          :name="password.name"
          :type="password.type"
          :label="password.label"
          autocomplete="password"
        >
        <div v-if="submitted && !$v.password.value.required">Password is required.</div>
        <div v-if="submitted && !$v.password.value.minLength">Password must have at least {{ $v.password.value.$params.minLength.min }} letters.</div>
        <div v-if="submitted && !$v.password.value.maxLength">Password must have no more then {{ $v.password.value.$params.maxLength.max }} letters.</div>
      </div>
      <button type="submit" :disabled="submitStatus === 'PENDING'">Login</button>
      <p v-if="submitted && submitStatus === 'ERROR'">Please fill the form correctly.</p>
      <p v-if="submitted && submitStatus === 'PENDING'">Sending...</p>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter, namespace } from 'vuex-class';
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import { Property } from './types';

@Component({
  validations() {
    return {
      userLogin: {
        value: {
          required,
          minLength: minLength(4),
        },
      },
      password: {
        value: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(10),
        },
      },
    };
  },
})
export default class Auth extends Vue {
  @Action('login', { namespace: 'auth' }) public storelogin: any;

  private userLogin: Property;
  private password: Property;
  private submitted: boolean = false;
  private submitStatus: string = 'OK';

  constructor() {
    super();
    this.userLogin = {
      name: 'login',
      type: 'text',
      label: 'Login',
      value: '',
    };

    this.password = {
      name: 'password',
      type: 'password',
      label: 'Password',
      value: '',
    };
  }

  public handleSubmit(): void {
    this.submitted = true;
    this.$v.$touch();
    if (this.$v.$invalid) {
      this.submitStatus = 'ERROR';
    } else {
      this.submitStatus = 'PENDING';
      this.storelogin({
        username: this.userLogin.value,
        password: this.password.value,
      }).then(() => {
        this.submitStatus = 'OK';
        this.$router.push({ name: 'default' });
      }).catch(() => {
        this.submitStatus = 'ERROR';
      });
    }
  }
}
</script>

<style lang="scss" scoped>
#login-layout {
  display: flex;
  flex: auto;
  flex-direction: column;
}
</style>