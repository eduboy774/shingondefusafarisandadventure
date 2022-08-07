<template>
  <v-container class="pa-10" fluid>
    <v-row justify="center" align="center">
      <h2 color="" class="orange--text">Why Travel With</h2>
    </v-row>
    <v-row justify="center">
      <h1 color="#525936" class="">Shingondefu Adventure & Safari</h1>
    </v-row>
    <br /><br />
    <v-layout row wrap>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="(item, index) in items"
          :key="index"
        >
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              class="d-flex"
              width="300"
              outlined
              height="100"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-list-item three-line justify="center">
                <v-list-item-content>
                  <div class="text-overline mb-3">
                    <h3 class="text-center">{{ item.item }}</h3>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        item: "Comfortable safari vehicles",
      },
      {
        item: "Comfortable accommodations",
      },
      {
        item: "Unique Safari",
      },
      {
        item: "Memories",
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
