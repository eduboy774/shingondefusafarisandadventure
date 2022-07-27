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
        </v-layout>
        <div class="pa-10">
          <v-row>
            <v-col xs12 sm="6" justify>
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
                <h1 class="font-weight-bold" color="#525936">Let's Talk</h1>
                <p>
                  If you have any questions or enquiries please feel free to
                  contact us on the details provided above or alternatively you
                  can complete our online enquiry form and we will get back to
                  you as soon as possible.
                </p>
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
                      <div class="text-overline mb-4">Phone</div>
                      <v-list-item-title>
                        +255 (0) 762 670 710  
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >
                        +255 (0) 786 424 721 
                        </v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-card class="d-flex" width="200" outlined height="200">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">Address</div>
                      <v-list-item-title>
                        Tanzania Head Office
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >
                        P.O.BOX 4 Karatu, Arusha 
                        </v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-card class="d-flex" width="200" outlined height="200">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">
                        Working Hours</div>
                      <v-list-item-title>
                        07:30AM - 20:00PM  
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >
                       Monday - Sunday 
                        </v-list-item-subtitle
                      >
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
export default {
  components: {},
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