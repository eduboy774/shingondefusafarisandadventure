<template>
<div id="app">
  <v-app>
    <v-content>
      <v-container>
        <v-carousel>
          <v-carousel-item v-for="item in items" :key="item.id" v-html="item.content">
          </v-carousel-item>
          </v-carousel>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
export default {
    
    data: () => ({
    items: [{
      id: "1",
      content: '<iframe width="830" height="820" src="https://www.youtube.com/embed/zjcVPZCG4sM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'},
            { id: "2",
      content: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zjcVPZCG4sM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}
    ]
  })


}
</script>
<style scoped>
iframe {
  width: 100%;
  height: 500px;
}
</style>
  