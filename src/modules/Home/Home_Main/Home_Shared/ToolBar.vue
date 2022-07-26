<template>
  <v-app-bar
    color="#525936"
    :collapse="!collapseOnScroll"
    :collapse-on-scroll="collapseOnScroll"
    height="80vh"
  >
    <v-img
      width="100"
      src="../../../../assets/img/logo.png"
      class="shrink mr-2"
      contain
    ></v-img>
    <span class="white--text font-weight-black subheader"
      >Shingondefu Safaris</span
    >

    <v-spacer></v-spacer>
    <br /><br />
    <div class="hidden-sm-and-down">
      <v-btn text class="white--text text-none" link to="/"> Home </v-btn>
      <v-btn text class="white--text text-none" link to="/about_us">
        About Us
      </v-btn>
      <v-btn text class="white--text text-none" link to="/destination">
        Destinations
      </v-btn>
      <v-btn text class="white--text text-none" link to="/tours_safaris">
        Tours& Safaris
      </v-btn>
      <v-btn text class="white--text text-none" link to="/trekking">
        Trekking
      </v-btn>
      <v-btn class="white--text" color="#D9946C" link to="/contact_us">
        Contact Us
      </v-btn>
    </div>
     <div class="hidden-md-and-up">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    collapseOnScroll: true,
  }),
  methods: {
    go_to_home() {
      console.log("Home");
    },
  },
};
</script>
<style scoped>
.shingoheader {
  position: relative;
  font-size: medium;
  top: 15px;
}
</style>