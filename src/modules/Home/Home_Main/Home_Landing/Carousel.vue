<template>
<v-app>
  <v-main>
  <v-carousel
    cycle
    height="830"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    >
    <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2 white--text">
            {{ slide }} 
          </div>
        </v-row>
    </v-carousel-item>
  </v-carousel>
  </v-main>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        slides: [
          'Discover The Unexpected Adventures'
        ],
        items: [
          {
            src: require('../../../../assets/img/ngorongoro-1920x1280.jpg')
          },
          {
            src: require('../../../../assets/img/serengeti-500x510.jpg')
          },
          {
            src: require('../../../../assets/img/masai-giraffe-masai-mara-1250x700.jpg')
          },
        ],
      
      }
    },
  }
</script>