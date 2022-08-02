<template>
  <v-main>
    <v-container pa-10>
      <v-layout row wrap>
        <v-row justify="center">
          <div class="">
            <h1 class="orange--text font-weight-bold">About Us</h1>
          </div>
        </v-row>
        <v-row align="center">
          <v-item-group
            v-model="window"
            class="shrink mr-6"
            mandatory
            color="#515934"
          >
            <v-item v-for="n in length" :key="n"> </v-item>
          </v-item-group>

          <v-col lg="6">
            <v-window
              v-model="window"
              class="elevation-1"
              vertical
              rounded
              outline
            >
              <v-window-item v-for="n in infos" :key="n">
                <v-card flat>
                  <v-card-text>
                    <v-row class="mb-4" align="center">
                      <strong class="text-h6 orange--text"> {{ n.title }}</strong>
                      <v-spacer></v-spacer>
                    </v-row>
                    <!-- <p>
                      shingondefusafaris Ltd, has acquired over the last 5 years
                      considerable experience in organizing scheduled departures
                      for set itineraries on specific days of the week,
                      customised individual itineraries as well as handling
                      incentive groups for large European companies in Kenya and
                      Tanzania. We operate from our own offices in Karatu Arusha
                      in Tanzania. Our centrally situated offices have been
                      custom built to accommodate our Management staff,
                      Reservations and operations departments, Accounts as well
                      as our in-house workshops to maintain our fleet of
                      vehicles.
                    </p> -->
                   <p>
                    We are well-established business founded in 2020 by Emanuel Mayo (Managing Director) who worked as a tour guide and driver 
                    before founding the company. We are locally owned and based in Karatu, Arusha - Tanzania. We also operate our own fleet of vehicles and employ 
                    our own drivers and guides which makes our prices competitive as it eliminates commission to third parties. KARIBU SANA.
                   </p>
                    <h4 class="orange--text">We provide</h4>
                    <v-list>
                      <v-list-item>
                        <v-icon color="success" class="mr-3"
                          >mdi-check-all</v-icon
                        >
                        <v-list-item-subtitle
                          >Modern fleet of custom built 4x4 Toyota Landcruisers
                          to ensure the most efficient means of transport during
                          the safari
                        </v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item>
                        <v-icon color="primary" class="mr-3"
                          >mdi-check-all</v-icon
                        >
                        <v-list-item-subtitle
                          >Each equipped with large pop-up roof and sliding
                          windows, ideal for photography.</v-list-item-subtitle
                        >
                      </v-list-item>
                      <v-list-item>
                        <v-icon color="success" class="mr-3"
                          >mdi-check-all</v-icon
                        >
                        <v-list-item-subtitle
                          >Dedicated file handling and assistance by well
                          trained and experienced multi-lingual
                          staff</v-list-item-subtitle
                        >
                      </v-list-item>
                      <v-list-item>
                        <v-icon color="primary" class="mr-3"
                          >mdi-check-all</v-icon
                        >
                        <v-list-item-subtitle>
                          Extensive experience in customer care and handling as
                          well as health and safety standards and
                          issues</v-list-item-subtitle
                        >
                      </v-list-item>
                      <v-list-item>
                        <v-icon color="success" class="mr-3"
                          >mdi-check-all</v-icon
                        >
                        <v-list-item-subtitle
                          >Strong links with hotels and lodges, which were
                          developed over the years, which ensures special rates
                          for our clients</v-list-item-subtitle
                        >
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-window-item>
            </v-window>
          </v-col>
          <v-col lg="6"> </v-col>
        </v-row>
        <br /><br />
        <Team />
        <Footer />
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
import Team from "./Team.vue";
export default {
  components: {
    Team,
  },
  data: () => ({
    length: 1,
    window: 0,
    infos: [{ title: "We are Shingondefu Adventure and Safaris" }, { title: "We are Shingondefu Adventure and Safaris?" }],
  }),
};
</script>

<style>
.main {
  background-image: url("../../../../assets/img/about.jpeg");
}
</style>