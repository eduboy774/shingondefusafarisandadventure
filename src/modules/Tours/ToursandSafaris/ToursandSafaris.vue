<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center" align="center">
          <h2 color="" class="orange--text">
            Choose Your Choose Your Packages
          </h2>
        </v-row>
        <v-row justify="center" align="center">
          <h1 color="#525936" class="">Tanzania Safari Packages</h1>
        </v-row>
        <TourandSafarisContent />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TourandSafarisContent from "./TourandSafarisContent.vue";
export default {
  components: { TourandSafarisContent },
};
</script>

<style>
</style>