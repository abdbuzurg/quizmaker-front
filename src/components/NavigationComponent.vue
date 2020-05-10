<template>
  <div v-if="isRegistered">
    <v-app-bar>
      <v-btn text to="/profile">Profile</v-btn>
      <v-btn text to="/settings">Settings</v-btn>
      <v-btn text @click="logout">Log out</v-btn>
    </v-app-bar>
  </div>
  <div v-else>
    <v-app-bar>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/login">Login</v-btn>
      <v-btn text to="/register">Register</v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { User } from '../models';

@Component
export default class Navigation extends Vue {
  @Prop({ default: false, type: Boolean }) isRegistered: Boolean | undefined;

  logout(): void {
    this.$store.dispatch('logout');
    this.$router.push('/');
  }
}
</script>

<style>

</style>