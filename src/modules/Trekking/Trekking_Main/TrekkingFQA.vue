<template>
  <v-container class="pa-4" fluid>
    <v-row justify="center">
      <h1 color="#525936" class="">Mount Kilimanjaro FAQ's</h1>
    </v-row>
    <v-row justify="center">
      <v-expansion-panels popout outlined>
        <v-expansion-panel v-for="(item, index) in FAQ" :key="index">
          <v-expansion-panel-header
            ><b
              ><p>{{ item.item }}</p></b
            ></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <p class="text-justify">
              <b>{{ item.content }}</b>
            </p>
            <p class="text-justify">
              <b>{{ item.content1 }}</b>
            </p>
            <p class="text-justify">
              <b>{{ item.content2 }}</b>
            </p>
            <p class="text-justify">
              <b>{{ item.content3 }}</b>
            </p>
            <p class="text-justify">
              <b>{{ item.content4 }}</b>
            </p>
            <p class="text-justify">
              <b>{{ item.content5 }}</b>
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    FAQ: [
      {
        item: "Where Is Mount Kilimanjaro",
        content:
          "Kilimanjaro has an elevation of 5,895m or 19,340 feet above mean sea level.Mount Kilimanjaro is the World highest free standing mountain.It's one of the dormant volcanic mountain with three peaks i.e Kibo, Mawenzi and Shira.",
        content1:
          "The highest Peak is Uhuru, which is the summit point at 5,895m, Mawenzi second highest peak at 5,149 and Shira is the lowest peak with 4,005m from the sea level. When climbing Kilimanjaro you will summit at Kibo's Crater Rim which the highest point of the Kilimanjaro mountain.",
      },
      {
        item: "Which Kilimanjaro Route is The Best",
        content:
          "Climbing up to the summit of Kilimanjaro you will have to choose one of the several routes. You will have to learn and choose the best Kilimanjaro route that can take you to the top of the mountain.",
        content1:
          "Each route has its own advantage and disadvantages. Some routes you will have best acclimatization but don't have good scenery. Other routes can offer high success rate to the summit but sometimes its so populated in some seasons during the year.",

        content2:
          "In summary we conclude that Kilimanjaro Routes differs as bellow:",
        content3: "Scenery",
        content4:
          "Difficultness levels,Route Traffic,Best Acclimatization,Success Rates,Comfort of the accommodation",
        content5:
          "There are six Kilimanjaro Routes, of which either of the route can take you up to the base of the Kibo Summit. Kibo is the peak with amazing view full of snow.",
      },
      {
        item: "How Is High is Kilimanjaro",
        content:
          "Kilimanjaro has an elevation of 5,895m or 19,340 feet above mean sea level. Mount Kilimanjaro is the World highest free standing mountain. It's one of the dormant volcanic mountain with three peaks i.e Kibo, Mawenzi and Shira.",
        content1:
          "The highest Peak is Uhuru, which is the summit point at 5,895m, Mawenzi second highest peak at 5,149 and Shira is the lowest peak with 4,005m from the sea level. When climbing Kilimanjaro you will summit at Kibo's Crater Rim which the highest point of the Kilimanjaro mountain.",
      },
      {
        item: "Safety of Kilimanjaro Route",
        content:
          "All routes ascending to Kilimanjaro Summit are safe with exception Arrow Glacier Route. The Arrow Glacier Route is very dangerous to falling rocks and melting glaciers. Other routes are very safe up to the crater rim",
      },
      {
        item: "What is Easiest Route to Climb Kilimanjaro",
        content:
          "The most popular and easiest route to Climb Kilimanjaro is through Marangu Route. Its famously known as Coca-cola Route. It's the shortest route up to the summit, which can be done for 5-days for both ascent and descent.",
        content1:
          "The Marangu route is steady with gentle climb up to the summit. It's the only route with hut accommodations. Though this route is easy to climb Kilimanjaro but has very low success rate.",
        content2:
          "The reason behind is due to few number of days to the summit. Climbers do have quick ascent to high altitude without acclimatization. Failing to have proper acclimatization leads to low success rate for this route.",
      },
      {
        item: "Reason For Kilimanjaro Route Differ in Success Rate ",
        content:
          "The success rate for different Kilimanjaro Routes do differs. The reason behind are as below:",
        content1:
          "The number of days you chose to climb Kilimanjaro. If you choose program with shorter days then you will lack acclimatization, the longer the program the better the acclimatization. If you have better acclimation possibility to reach at summit is high.",
        content2:
          "Ability of the body to acclimatize to high altitude. Depending on genetic for some climbers fails to acclimatize to high altitude. If you body will have adapt easily to high altitude then you can will not have any problem to reach at summit. Climbing Kilimanjaro has seven different routes to the summit. The routes are Marangu, Machame, Lemosho, Rongai, Umbwe, Shira and Mweka.",
      },
      {
        item: "What are The Best  Climb Kilimanjaro Route",
        content:
          "All routes varies from each other such as scenery, length to summit, number of tourists, difficultness to the top, accommodation used etc.",
        content1: "The best scenic Kilimanjaro Route - Lemosho or Machame",
        content2:
          "Kilimanjaro Climbing in rainy season? - we recommend Rongai Route",
        content3:
          "The most popular Kilimanjaro Route? - Machame RouteIf your beginner climbing Kilimanjaro we recommend Marangu Route.",
        content4:
          "If you look for shortest and cheapest Kilimanjaro Route then choose Marangu Route",
        content5:
          "What is the most difficult for climbing Kilimanjaro? Its Umbwe Route",
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
