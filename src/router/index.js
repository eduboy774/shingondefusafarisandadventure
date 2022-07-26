import Vue from "vue";
import VueRouter from "vue-router";
import About from '../modules/About_Us/About_US_Main/Landing/About_Us_Landing.vue'
import Home from '../modules/Home/Home_Main/Home.vue'
import Contact from '../modules/Contact_Us/Contact_Us/Contact_Us.vue'
import Destination from '../modules/Destinations/Destination/Destination.vue'
import Trekking from '../modules/Trekking/Trekking_Main/Trekking.vue'
import Tours from '../modules/Tours/ToursandSafaris/ToursandSafaris.vue'
Vue.use(VueRouter);

const routes = [
  // route for home
  {
    path:"/",
    name:"home",
    component: Home
  },
  // route for about us
  {
    path:"/about_us",
    name:"About",
    component:About
  },
  // route for contact us
  {
    path:'/contact_us',
    name:"Contact",
    component:Contact

  },
  // route for Destination
  {
     path:"/destination",
     name:"Destination",
     component:Destination

  },
  // route for Tours and Safararis
  {
    path:"/tours_safaris",
    name:"ToursandSafaris",
    component:Tours
  },
  //route for trekking 
  {
     path:"/trekking",
     name:"Trekking",
     component:Trekking
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
