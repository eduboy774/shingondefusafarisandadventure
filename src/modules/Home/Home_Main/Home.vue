<template>
  <v-main>
    <Carousel />
    <v-row justify="center">
      <v-btn icon large color="orange"
      @click="scrollToBottom"  
      ><v-icon large>mdi-chevron-down-circle</v-icon></v-btn
      >
    </v-row>
    <div ref="bottom">
    <Special_Offer />
    <br /><br />
    <Climbing />
    <br /><br />
    <Package />
    <br /><br />
    <WhyTravelWithUs />
   </div>
   <div ref="bottom">

   </div>
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
  methods:{
    scrollToBottom() {
      this.$nextTick(() => {
        
        const bottomElement = this.$refs.bottom;

        if (bottomElement) {
          const bottomPosition = bottomElement.offsetTop;
          window.scrollTo({
            top: bottomPosition,
            behavior: 'smooth'
          });
        } else {
          // Fallback code if the bottom element is undefined
          console.warn('The bottom element is undefined');
        }
      });
    }
  


    }

};
</script>

<style>
</style>