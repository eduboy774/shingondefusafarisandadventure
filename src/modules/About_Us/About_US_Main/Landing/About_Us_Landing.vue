<template>
    <v-main>
     <ToolBar/>
    <v-row align="center">
    <v-item-group
      v-model="window"
      class="shrink mr-6"
      mandatory
     color="#515934"
    >
      <v-item
        v-for="n in length"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <div>
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-col lg="6">
      <v-window
        v-model="window"
        class="elevation-1"
        vertical
      >
        <v-window-item
          v-for="n in infos"
          :key="n"
        >
          <v-card flat>
            <v-card-text>
              <v-row
                class="mb-4"
                align="center"
              >
                <v-avatar
                  color="grey"
                  class="mr-4"
                ></v-avatar>
                <strong class="text-h6"> {{ n.title }}</strong>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon color="secondary">mdi-account-question-outline</v-icon>
                </v-btn>
              </v-row>
               <h2 class="orange--text">We are Shingondefu Adventure and  Safaris</h2>
              <p>
                shingondefusafaris Ltd, has acquired over the last 5 years considerable experience in organizing scheduled departures for set itineraries on specific days of the week, 
                customised individual itineraries as well as handling incentive groups for large European companies in Kenya and Tanzania. We operate from our own offices in Karatu Arusha
                in Tanzania. Our centrally situated offices have been custom built to accommodate our Management staff, Reservations and operations departments, Accounts as well as our in-house 
                workshops to maintain our fleet of vehicles. 
              </p>

               <h4 class="orange--text">We provide</h4>
               <v-list>
            <v-list-item>
               <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
               <v-list-item-subtitle>Modern fleet of custom built 4x4 Toyota Landcruisers to ensure the most efficient means of transport during the safari
              </v-list-item-subtitle>
            </v-list-item>
             <v-list-item>
               <v-icon color="primary" class="mr-3">mdi-check-all</v-icon>
               <v-list-item-subtitle>Each equipped with large pop-up roof and sliding windows, ideal for photography.</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
               <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
               <v-list-item-subtitle>Dedicated file handling and assistance by well trained and experienced multi-lingual staff</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
               <v-icon color="primary" class="mr-3">mdi-check-all</v-icon>
               <v-list-item-subtitle> Extensive experience in customer care and handling as well as health and safety standards and issues</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
               <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
               <v-list-item-subtitle>Strong links with hotels and lodges, which were developed over the years, which ensures special rates for our clients</v-list-item-subtitle>
            </v-list-item>
          </v-list>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
     <v-col lg="6">
    </v-col>
    </v-row>
    <br><br>
    <Team/>
      <Footer/>
    </v-main>
  
</template>

<script>
import Footer from '../../../Home/Home_Main/Home_Shared/Footer.vue'
import ToolBar from '../../../Home/Home_Main/Home_Shared/ToolBar.vue'
import Team from './Team.vue'
export default {
  components: { 
    Footer,ToolBar, Team},
    data:()=>(
      {
        length:2,window: 0,
        infos:[
        {  title:"Who are we ?"},
        {  title:"Who are we ?"}

        ] ,
        

        }
    )

}
</script>

<style>
.main
{
  background-image: url("../../../../assets/img/about.jpeg")
}
</style>