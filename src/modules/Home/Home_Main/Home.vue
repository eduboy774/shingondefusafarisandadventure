<template>
  <v-main>
    <Carousel />
    <v-row justify="center">
      <v-btn icon large color="orange"
        ><v-icon large>mdi-chevron-down-circle</v-icon></v-btn
      >
    </v-row>
    <Special_Offer />
    <br /><br />
    <Climbing />
    <br /><br />
    <Package />
    <br /><br />
    <WhyTravelWithUs />
  </v-main>
</template>

<script>
import Carousel from "./Home_Landing/Carousel.vue";
import Special_Offer from "./Home_Landing/Special_Offer.vue";
import Climbing from "./Home_Landing/Climbing.vue";
// import Footer from './Home_Shared/Footer.vue'
import Package from "./Home_Landing/Package.vue";
import WhyTravelWithUs from "./Home_Landing/WhyTravelWithUs.vue";
export default {
  components: {
    Carousel,
    Special_Offer,
    Climbing,
    Package,
    WhyTravelWithUs,
  },
};
</script>

<style>
</style>