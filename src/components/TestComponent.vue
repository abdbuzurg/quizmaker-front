<template>
  <v-card tile>
    <v-card-title>{{ test.name }}</v-card-title>
    <v-card-subtitle>Created by {{ test.creator }}</v-card-subtitle>
    <v-card-text style="color: black">
      <v-row>
        <v-col cols="12" md="8">
          {{ test.description }}
          <v-divider class="my-3"></v-divider>
          <v-card-actions>
            <v-btn v-if="username === test.username" color="yellow">Edit</v-btn>
            <v-btn v-if="username === test.username" color="red">Delete</v-btn>
            <v-btn color="green">Try</v-btn>
          </v-card-actions>
        </v-col>
        <v-col cols="12" md="4">
          <p>People taken: {{ test.takenBy }}</p>
          <v-divider class="mb-4"></v-divider>
          <p>Avarange score: {{ test.avarageScore}}</p>
          <v-divider class="mb-4"></v-divider>
          <p>Highest Score: {{ test.highestScore}}</p>
          <v-divider class="mb-4"></v-divider>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

interface TestShape {
  name: string;
  description: string;
  creator: string;
  takenBy: number;
  avarageScore: number;
  highestScore: number;
}

@Component({})
export default class Test extends Vue {
  @Prop({type: Object}) test: TestShape | undefined;
  username: String = this.$store.getters.getUser.username;
}
</script>

<style>

</style>