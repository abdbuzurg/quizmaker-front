<template>
  <v-card
    class="mx-auto"
    max-width="inherit"
    elevation="5"
  >
    <v-list-item two-line class="mt-4">
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Welcome to the quiz generator</v-list-item-title>
        <v-list-item-subtitle>You can participate or create a quiz</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text class="secondary" to="/login">Sign in</v-btn>
      <v-btn text class="primary" to="/register">Sign up</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script class="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Landing extends Vue {

}
</script>

<style>

</style>