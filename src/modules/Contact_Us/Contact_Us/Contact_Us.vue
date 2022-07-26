<template>
 <v-main>
 <ToolBar/>
<Card/>
<Footer/>
 </v-main>
</template>

<script>
import ToolBar from '../../Home/Home_Main/Home_Shared/ToolBar.vue'
import Card from '../Contact_Us/Card.vue'
import Footer from '../../Home/Home_Main/Home_Shared/Footer.vue'
export default {
components:{
    ToolBar,
    Card,
    Footer
}
}
</script>

<style>

</style>