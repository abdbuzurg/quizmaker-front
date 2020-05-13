<template>
  <v-card elevation="5">
    <v-card-title class="title">Feed</v-card-title>
    <v-divider></v-divider>
    <v-card>
      <v-card-text 
        class="display text-center py-5"
        v-if="tests.length === 0"
      >
        <v-progress-circular
          indeterminate
          :size="150"
          :width="15"
          color="primary"
        ></v-progress-circular>
      </v-card-text>
    </v-card>
    <Test v-for="test in tests" :key="test.name+test.creator" :test="test"/>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Test from './TestComponent.vue';

@Component({
  components: {
    Test
  }
})
export default class Feed extends Vue {
  tests: Array<Object> = [
    {
      name: "Lorem ipsum",
      creator: "nagibator228",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare risus quis dui euismod, consequat sodales nunc posuere. Nunc pellentesque velit at volutpat mollis. Morbi tristique vel leo at bibendum. Nulla commodo lorem nisl, nec fermentum urna placerat vitae. Quisque dictum lectus mauris, non maximus leo pretium non. Nam ultricies.",
      avarageScore: 69,
      highestScore: 95,
      takenBy: 123
    },
    {
      name: "Lorem ipsum2222",
      creator: "vortex",
      description: "Lorem ipsum dolor 12312312 31 23 sit amet, consectetur adipiscing elit. Curabitur ornare risus quis dui euismod, consequat sodales nunc posuere. Nunc pellentesque velit at volutpat mollis. 12312 123 12 312 12  Morbi tristique vel leo at bibendum. Nulla commodo lorem nisl, nec fermentum urna placerat vitae. Quisque dictum lectus mauris, non maximus leo pretium non. Nam ultricies.",
      avarageScore: 55,
      highestScore: 71,
      takenBy: 57
    },
    {
      name: "How to degradate",
      creator: "nagibator228",
      description: "Lorem 123  ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare risus quis dui euismod, consequat sodales nunc posuere. Nunc pellentesque velit at 123123 123 12 312 volutpat mollis. Morbi tristique vel leo at bibendum. Nulla commodo lorem nisl, nec fermentum urna placerat vitae. Quisque dictum lectus mauris, non maximus leo pretium non. Nam ultricies.",
      avarageScore: 85,
      highestScore: 100,
      takenBy: 222
    },
  ];
}
</script>

<style>

</style>