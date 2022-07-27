<template>
  <v-app>  
    <ToolBar/> 
    <v-main>
      <router-view />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './modules/Home/Home_Main/Home_Shared/Footer.vue';
import ToolBar from './modules/Home/Home_Main/Home_Shared/ToolBar.vue';
export default {
    data: () => ({}),
    components: { ToolBar, Footer }
}
</script>
<style scoped>
.main {
  background-color:#F2F2F2;
  background-size: cover
  
}
</style>
