<template>
  
  <v-card 
    class="mt-4 mx-auto px-4 py-4"
    max-width= "500"
  >
    <v-form
      lazy-validation
      style="text-align: center;"
      class="mx-auto"
      @submit.prevent="onSubmit"
    >
      <h1>Signing in</h1>
      <v-progress-linear
        :active="loading"
        indeterminate
        color="yellow darken-2"
      ></v-progress-linear>
      <v-text-field
        v-model="username"
        label="Username"
        :rules="[rules.required]"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        :rules="[rules.required]"
        type="password"
        required
      ></v-text-field>

      <v-row>
        <v-spacer></v-spacer>
        <v-btn class="secondary">
          Register
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="primary"  type="sumit" :disabled="loginButtonState">
          Login
        </v-btn>
        <v-spacer></v-spacer>
      </v-row>
    </v-form>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { User } from '../models';

@Component
export default class Login extends Vue {
  username: String = "";
  password: String = "";

  loading: Boolean = false;

  rules: Object = {
    required: (v: string) => !!v || "This fields is required",
  };
  
  created(): void {
    const user: User = this.$store.getters.getUser;

    if (user) {
      this.username = user.username;
    }
  }

  get loginButtonState(): Boolean {
    return !this.username || !this.password;
  }

  onSubmit(): void {
    this.loading = true;
    this.$store.dispatch('login', {
      username: this.username,
      password: this.password,
    }).then(() => {
      this.loading = false;
      this.$router.push('/profile');
    })
  }
}
</script>

<style>

</style>
