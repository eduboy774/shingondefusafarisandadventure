<template>
  <v-container  fluid>
    <v-layout row wrap>
     <h1></h1>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    items:[
      {
        title:"edwin", src: require('../../../assets/img/ngorongoro-1920x1280.jpg')
        
        },
         {
        title:"edwin", src: require('../../../assets/img/ngorongoro-1920x1280.jpg')
        
        },
         {
        title:"edwin", src: require('../../../assets/img/ngorongoro-1920x1280.jpg')
        
        }
    ]
  }),
};
</script>

<style>
</style>