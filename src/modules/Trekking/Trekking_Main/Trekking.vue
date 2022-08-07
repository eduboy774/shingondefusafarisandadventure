<template>
  <v-app>
    <v-main>
      <v-container class="pa-10" fluid>
        <v-row justify="center" align="center">
          <h2 color="" class="orange--text">Special Safari Packages</h2>
        </v-row>
        <v-row justify="center" align="center">
          <h1 color="#525936" class="">Our Best Tanzania Adventures</h1>
        </v-row>
        <TrekkingContent />
        <Climbing />
        <WhyTravelWithUs />
        <TrekkingFQA />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TrekkingContent from "./TrekkingContent.vue";
import Climbing from "../../Home/Home_Main/Home_Landing/Climbing.vue";
import WhyTravelWithUs from "../../Home/Home_Main/Home_Landing/WhyTravelWithUs.vue";
import TrekkingFQA from "./TrekkingFQA.vue";
export default {
  components: { TrekkingContent, Climbing, WhyTravelWithUs, TrekkingFQA },
};
</script>

<style></style>
