<template>
  <v-container class="pa-4" fluid>
    <v-row justify="center">
      <h1 color="#525936" class="">Mount Kilimanjaro FAQ's</h1>
    </v-row>
    <v-row justify="center">
      <v-expansion-panels popout outlined>
        <v-expansion-panel v-for="(item, index) in FAQ" :key="index">
          <v-expansion-panel-header>{{ item.item }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ item.content }}
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
      { item: "Where Is Mount Kilimanjaro", content: "" },
      { item: "How Is High is Kilimanjaro", content: "" },
      { item: "Which Kilimanjaro Route is The Best", content: "" },
      { item: "Safety of Kilimanjaro Route", content: "" },
      { item: "What is Easiest Route to Climb Kilimanjaro", content: "" },
      { item: "Reason For Kilimanjaro Route Differ in Success ", content: "" },
      { item: "What are The Best  Climb Kilimanjaro Route", content: "" },


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
