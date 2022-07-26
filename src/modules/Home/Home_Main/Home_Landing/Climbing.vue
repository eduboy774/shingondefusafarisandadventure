<template>
    <v-container class="pa-4 text-center">
        <v-row justify="center" align="center">
               <h2 color="#D9946C" class="orange--text">Choose Your Climbing</h2>
        </v-row>
               <v-row justify="center" align="center">
               <h1 color="#525936" class="">Mount Kilimanjaro Packages</h1>
               </v-row>
               <br><br>
                       <v-row dense>
                  <v-col
                    v-for="card in cards"
                    :key="card.title"
                    :cols="card.flex"
                  >
                    <v-card
                    link
                    :to="card.route"
                    >
                      <v-img
                        :src="card.src"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                      >
                        <v-card-title v-text="card.title"></v-card-title>
                      </v-img>
                    </v-card>
                  </v-col>
                       </v-row>
    </v-container>
</template>
<script>

  export default {
    data: () => ({
      cards: [
        { title: '6 Days Marangu Route', src:require('../../../../assets/img/marangu-route3-600x400.jpg'),route:"", flex: 4 },
        { title: '5 Days Marangu Route',src:require('../../../../assets/img/rongai-route2-600x400.jpg'),route:"", flex: 4 },
        { title: '6 Days Machame Route', src:require('../../../../assets/img/marangu-route2-600x400.jpg'),route:"", flex: 4 },
          { title:'7 Days Shira Route', src:require('../../../../assets/img/11-674x449.jpg'),route:"", flex: 4 },
        { title: '6 Days Rongai Route', src:require('../../../../assets/img/04-660x440.jpg'),route:"", flex: 4 },
        { title: '7 Days Rongai Route', src:require('../../../../assets/img/05-674x449.jpg'),route:"", flex: 4 },
      ],
    }),
  }
</script>