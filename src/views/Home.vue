<template>
  <Landing />
</template>

<script>
// @ is an alias to /src
import { Vue, Component } from "vue-property-decorator";

import Landing from '@/components/LandingComponent.vue';

@Component({
  name: 'Home',
  components: {
    Landing
  }
})
export default class Home extends Vue {
  
}
</script>
