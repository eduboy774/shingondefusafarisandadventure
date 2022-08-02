<template>
  <v-app-bar
    color="#525936"
    :collapse="!collapseOnScroll"
    :collapse-on-scroll="collapseOnScroll"
    height="60vh"
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
      <v-btn class="white--text bold" color="#D9946C" link to="/contact_us" rounded>
        Contact Us
      </v-btn>
    </div>
     <div class="hidden-md-and-up">
      
          <v-menu dense 
            bottom
            origin="center center"
            transition="scale-transition"
          >
        <template v-slot:activator="{ on, attrs }" color="#525936">
          <v-btn plain  dark v-bind="attrs" v-on="on">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>
        <v-list dense >
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            router
            :to="item.route"
            link
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    collapseOnScroll: true,
     items: [
        {  title: "Home", route: "/" },
        { title: "About Us", route: "/about_us" },
        {  title: "Destinations", route: "/destination" },
         {  title: "Tours&Safaris", route: "/tours_safaris" },
        { title: "Trekking", route: "/trekking" },
        {  title: "Contact Us", route: "/contact_us" },
      ],
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