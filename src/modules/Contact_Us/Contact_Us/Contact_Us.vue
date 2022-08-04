<template>
  <v-app>
    <v-main>
      <v-container pa-10>
        <v-layout row wrap>
          <v-row justify="center">
            <div class="">
              <h1 class="orange--text font-weight-bold">Contact Us</h1>
            </div>
          </v-row>
          <div pa-10></div>
        </v-layout>
        <br /><br /><br /><br />
        <TopStart />
         <div class="pa-10">
          <v-row>
            <v-col cols="12" sm="6">

            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="6">
              <v-layout row wrap>
                <v-row>
                  <v-col cols="12" sm="6" md="4" class="d-flex">
                    <v-text-field
                      label="Name"
                      outlined
                      dense
                      small
                      color="orange"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" class="d-flex">
                    <v-text-field
                      label="Subject"
                      outlined
                      dense
                      color="orange"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-layout>
              <v-layout row wrap>
                <v-row>
                  <v-col cols="11" sm="5" md="4" class="d-flex" small>
                    <v-text-field
                      label="email"
                      placeholder="shingondefu@gmail.com"
                      outlined
                      dense
                      color="orange"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="11" sm="5" md="4" small class="d-flex">
                    <v-textarea
                      label="Your Message"
                      auto-grow
                      outlined
                      rows="3"
                      row-height="25"
                      shaped
                      required
                      color="orange"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-layout>
              <v-layout row wrap>
                <v-row>
                  <v-col cols="12" sm="6" class="d-flex"> </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-btn color="#D9946C" class="hange white--text">
                      Submit</v-btn
                    >
                  </v-col>
                </v-row>
              </v-layout>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-layout row wrap>
              </v-layout>
            </v-col>
          </v-row>
        </div>
        <div class="pa-10">
          <v-layout row wrap>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-card class="d-flex" width="200" outlined height="200">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4"><b>Phone</b></div>
                      <v-list-item-title>
                        +255 (0) 762 670 710
                      </v-list-item-title>
                      <v-list-item-title>
                        +255 (0) 786 424 721
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-card class="d-flex" width="200" outlined height="200">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">
                        <b><strong>Working Hours</strong></b>
                      </div>
                      <v-list-item-title>
                        Tanzania Head Office
                      </v-list-item-title>
                      <v-list-item-title>
                        P.O.BOX 4 Karatu, Arusha
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-card class="d-flex" width="200" outlined height="200">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">
                        <b><strong>Working Hours</strong></b>
                      </div>
                      <v-list-item-title>
                        <b> 24/7 <strong>Days</strong></b>
                      </v-list-item-title>
                      <v-list-item-title> Monday - Sunday </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </v-layout>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TopStart from "./TopStart.vue";
export default {
  components: { TopStart },
};
</script>

<style>
.hhdhd {
  width: 100;
  height: 100px;
}
.hange {
  text-transform: unset !important;
}
</style>