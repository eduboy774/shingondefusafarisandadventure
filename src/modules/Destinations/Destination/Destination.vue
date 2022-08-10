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

        <DestinationContent />
        <WhyTravelWithUs />
        <Package />

        <br /><br />
        <col cols="12" md="4" />
        <div class=""></div>
        <col />

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DestinationContent from "./DestinationContent.vue";
import Package from "../../Home/Home_Main/Home_Landing/Package.vue";
import WhyTravelWithUs from "../../Home/Home_Main/Home_Landing/WhyTravelWithUs.vue";
export default {

  components: { DestinationContent, Package, WhyTravelWithUs },
};
</script>

<style></style>

