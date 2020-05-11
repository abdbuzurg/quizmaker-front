<template>
  <div class="profile">
    <v-row>
      <v-col col="12" md="4">
        <v-card elevation="5">
          <v-card-title class="display-1"> {{ username }} </v-card-title>
          <v-card-subtitle class="title">{{ firstName }} {{ lastName }} </v-card-subtitle>
          <v-card-text class="subtitle-1 text-center">
            <v-divider></v-divider>
            <p>Number of quizes created</p>
            <p class="text-center">{{ numberOfCreated }}</p>
            <v-divider></v-divider>
            <p>Number of quizes taken</p>
            <p class="text-center">{{ numberOfTaken }}</p>
          </v-card-text>
          <div class="d-flex flex-column">
            <v-btn color="primary" block tile>Create a Quiz</v-btn>
            <v-btn color="yellow" block tile>Manage Quizes</v-btn>
            <v-btn color="green" block tile>Take a Quiz</v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col col="12" md="8">
        <Feed />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Feed from '@/components/FeedComponent.vue';

@Component({
  name: 'Profile',
  components: {
    Feed
  }
})
export default class Profile extends Vue {
  username: String = "";
  firstName: String = "";
  lastName: String = "";
  numberOfCreated: Number = 0;
  numberOfTaken: Number = 0;

  beforeMount(): void {
    const user = this.$store.getters.getUser;
    this.username = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }
}
</script>

<style scoped>

</style>