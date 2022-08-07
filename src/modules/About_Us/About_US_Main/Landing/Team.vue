<template>
  <v-container class="pa-4 text-center" fluid>
    <v-row justify="center">
     <h2 color="#D9946C" class="orange--text">Meet Shingondefu Team</h2>
    </v-row>
     <v-row justify="center">
      <h1 color="#525936" class="">Our Guides are in Different Year Expert in Travel</h1>
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
                    class="white--text align-end"
                    contain
                >
              <v-card-title v-text="item.title"></v-card-title>
              </v-img>
              <v-card-text>
                    <div class="font-weight-bold ml-8 mb-2">
                        Particulars
                    </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              :key="i"
              small
            >
            <div class="font-weight-bold">
                  Name: <strong>{{ item.from }}</strong> 
            </div>
          </v-timeline-item>
          <v-timeline-item color="orange">
            <div class="font-weight-bold">
               Position: {{ item.message }}
            </div>
          </v-timeline-item>
          <v-timeline-item color="#515934">
              <div class="font-weight-bold">
                 Experience {{ item.time }}
             </div>
          </v-timeline-item>
          </v-timeline>
        </v-card-text>
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
          img: require('../../../../assets/img/ceo.png'),
          from: 'Emanuel Mayo',
          message: `Director & Tour Guide.`,
          time: '13 Years of experiance',
         
        },
        {
          img: require('../../../../assets/img/beatus.png'),
          from: 'Beatus Pantaleo',
          message: ` Tour Guide.`,
          time: '23 Years of experiance',
        }
        ,
        {
          img: require('../../../../assets/img/alletour.png'),
          from:'Allawi',
          message: ` Tour guide.`,
          time: '6 Years of experiance',
          color: 'orange',
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