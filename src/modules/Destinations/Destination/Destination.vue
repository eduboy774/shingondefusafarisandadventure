<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center" align="center">
          <h2 color="" class="orange--text">Choose Your Destination</h2>
        </v-row>
        <v-row justify="center" align="center">
          <h1 color="#525936" class="">
            Select Your Best Parks For Your Travel
          </h1>
        </v-row>
      </v-container>
      <DestinationContent />
    </v-main>
  </v-app>
</template>

<script>
import DestinationContent from "./DestinationContent.vue";
export default {
  components: { DestinationContent },
};
</script>

<style></style>
