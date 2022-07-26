<template>
<v-main>
<ToolBar/>
<Carousel/>
<v-row justify="center">
<v-btn icon large color="orange"><v-icon large>mdi-chevron-down-circle</v-icon></v-btn>
</v-row>
<br><br>
<Special_Offer/>
<br><br>
<Climbing/>
<br><br>
<Package/>
<br><br>
<Footer/>
</v-main>
</template>

<script>
import ToolBar from './Home_Shared/ToolBar.vue'
import Carousel from './Home_Landing/Carousel.vue'
import Special_Offer from './Home_Landing/Special_Offer.vue'
import Climbing from './Home_Landing/Climbing.vue'
import Footer from './Home_Shared/Footer.vue' 
import Package from './Home_Landing/Package.vue'
export default {
 components: {
    ToolBar,
    Carousel,
    Special_Offer,
    Climbing,
  Package,
  Footer
}
}
</script>

<style>

</style>