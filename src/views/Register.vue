<template>
  <v-card 
    class="mt-4 mx-auto px-4 py-4"
    max-width= "800"
  >
    <v-form
      @submit.prevent="onSubmit" 
      lazy-validation
    >
      <h1>Signing up</h1>
      <v-progress-linear
        :active="loading"
        indeterminate
        color="yellow darken-2"
      ></v-progress-linear>
      <v-text-field 
        v-model="user.username"
        label="Username"
        :rules="[rules.required, rules.username]"
        required
      ></v-text-field>
      <v-row>
        <v-col col="12" md="6">
          <v-text-field
            v-model="user.password"
            :rules="[rules.required, rules.password]"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="confirmPassword"
            :rules="[rules.required, rules.password, rules.areEqual]"
            label="Confirm Password"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12" md="6">
          <v-text-field
            v-model="user.firstName"
            :rules="[rules.required]"
            label="First name"
            required
          ></v-text-field>
        </v-col>
        <v-col col="12" md="6">
          <v-text-field
            v-model="user.lastName"
            :rules="[rules.required]"
            label="Last name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn class="secondary" type="submit">Register</v-btn>
        <v-spacer></v-spacer>  
      </v-row>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { User, UserRegister } from '../models';

@Component
export default class Register extends Vue {
  user: UserRegister = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  }
  confirmPassword: String = "";
  loading: Boolean = false;
  
  rules: Object = {
    required: (v: string): String | Boolean => !!v || "This field is required",
    username: (v: string): String | Boolean => (v && v.length >= 6) || "Username must be 6 characters or longer",
    password: (v: string): String | Boolean => (v && v.length > 6) || "Password must be more than 6 characters",
    areEqual: (v: string): String | Boolean => this.areEqual() || "Passwords should match",
  }

  areEqual(): Boolean {
    return this.user.password === this.confirmPassword;
  }

  get registerButtonState(): Boolean {
    return !this.user.username || !this.user.password || !this.user.firstName || !this.user.lastName;
  }

  onSubmit(): void {
    this.loading = true;
    this.$store.dispatch('register', this.user)
      .then(() => {
        this.loading = false;
        this.$router.push('/login');
      });
  }
}
</script>

<style>

</style>