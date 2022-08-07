<template>
  <v-container class="pa-4" fluid>
    <v-row justify="center" align="center">
      <h2 color="" class="orange--text">Choose Your Package</h2>
    </v-row>
    <v-row justify="center">
      <h1 color="#525936" class="">
        Select The Best Destination For Your Travel
      </h1>
    </v-row>
    <br /><br />
    <v-slide-group multiple show-arrows class="slick-slide" fluid center-active>
      <v-slide-item
        v-for="(n, index) in cards"
        :key="index"
        v-slot="{ active, toggle }"
        class="slick-list"
      >
        <v-card
          class="mx-auto"
          max-width="400"
          :input-value="active"
          active-class="purple white--text"
          depressed
          rounded
          @click="toggle"
        >
          <v-img class="white--text align-end" height="200px" :src="n.src">
            <v-card-title>Tanzania</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    cards: [
      {
        title: "6 Days Marangu Route",
        src: require("../../../../assets/img/marangu-route3-600x400.jpg"),
        route: "",
        flex: 4,
      },
      {
        title: "5 Days Marangu Route",
        src: require("../../../../assets/img/rongai-route2-600x400.jpg"),
        route: "",
        flex: 4,
      },
      {
        title: "6 Days Machame Route",
        src: require("../../../../assets/img/marangu-route2-600x400.jpg"),
        route: "",
        flex: 4,
      },
      {
        title: "7 Days Shira Route",
        src: require("../../../../assets/img/11-674x449.jpg"),
        route: "",
        flex: 4,
      },
      {
        title: "6 Days Rongai Route",
        src: require("../../../../assets/img/04-660x440.jpg"),
        route: "",
        flex: 4,
      },
      {
        title: "7 Days Rongai Route",
        src: require("../../../../assets/img/05-674x449.jpg"),
        route: "",
        flex: 4,
      },
    ],
  }),
};
</script>
<style scoped>
.slick-slide {
  margin: 0 10px;
}
/* the parent */
.slick-list {
  margin: 0 -10px;
}
</style>
