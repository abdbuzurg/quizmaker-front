<template>
  <v-app>
    <Navigation :isRegistered="isRegistered" :key="isRegistered"/>
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import Navigation from '@/components/NavigationComponent.vue';
import { User } from './models';

@Component({
  name: 'App',
  components: {
    Navigation
  }
})
export default class App extends Vue{
  get isRegistered(): Boolean | undefined {
    const user: User = this.$store.getters.getUser;
    if (user) return true;
    else false;
  }
}
</script>

<style>
@media only screen and (min-width: 1904px){
  .container {
      max-width: 1185px !important;
  }
}
</style>
