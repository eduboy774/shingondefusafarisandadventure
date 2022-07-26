<template>
  <v-container class="pa-4 text-center">
    <v-row justify="center">
     <h2 color="#D9946C" class="orange--text">Special Safari Packages</h2>
    </v-row>
     <v-row justify="center">
      <h1 color="#525936" class="">Our Best Tanzania Adventures</h1>
    </v-row>
    <br><br>
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <template v-for="(item, i) in items">
        <v-col
          :key="i"
          cols="12"
          md="3"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              router
              :to="item.route"
              link
              dense
            >
              <v-img
                :src="item.img"
                height="200px"
                class="white--text align-end"
              >
              <v-card-title v-text="item.title"></v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({

      items: [
        {
          title: 'Three (3) Days Serengeti & Ngorongoro',
          img: require('../../../../assets/img/budget-safaris-382x457.jpg'),
          route:""
        },
        {
          title: '4 Days Tanzania Camping Safari',
          img: require('../../../../assets/img/camping-safaris-382x456.jpg'),
          route:""
        }
        ,
        {
          title: '4 Days Tanzania Family Safari',
          img: require('../../../../assets/img/6-days-tanzania-family-safari-shingondefu-382x456.jpg'),
          route:""
        },
        {
          title: '7 Days Arusha,Tarangire - Private Safari',
          img: require('../../../../assets/img/arusha-national-park-1-382x456.jpg'),
          route:''
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
  }
</script>
<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
.color_of
{
  text-decoration-color: #0D0D0D;
}
</style>