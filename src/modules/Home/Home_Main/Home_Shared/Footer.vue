<template>

    <v-card
      class="flex"
      flat
      color="#525936"
    >
    <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md4>
          <v-card-text>
          <strong class="d-flex subheading white--text align-end"> Follow Us!</strong>
            <v-btn
              icon
              href="https://www.facebook.com/profile.php?id=100080185462367&_rdc=1&_rdr" target="_blank"
              >
            <v-icon size="24px" color="white">
              mdi-facebook
              </v-icon>
              </v-btn>
              <v-btn
              icon
              href="https://www.instagram.com/shingondefuadventureandsafaris/?igshid=YmMyMTA2M2Y%3D" target="_blank"
              >
            <v-icon size="24px" color="white">
              mdi-instagram
              </v-icon>
              </v-btn>
              <v-btn
              icon
              href="https://twitter.com/shingondefu?t=ja_g34d6dJEUGjVVVylNxg&s=01" target="_blank"
              >
            <v-icon size="24px" color="white">
              mdi-twitter
              </v-icon>
              </v-btn>
              <v-btn icon>
              <v-icon size="24" color="white">mdi-whatsapp</v-icon>
              </v-btn>
            </v-card-text>
         </v-flex>
         <v-flex d-flex xs12 sm6 md3>
          <v-card-text>
          <strong class="d-flex subheading white--text align-end"> About Us!</strong>
            <v-btn
              icon
              href="https://www.facebook.com/profile.php?id=100080185462367&_rdc=1&_rdr" target="_blank"
              >
            <v-icon size="24px" color="white">
              mdi-facebook
              </v-icon>
              </v-btn>
              <v-btn
              icon
              href="https://www.instagram.com/shingondefuadventureandsafaris/?igshid=YmMyMTA2M2Y%3D" target="_blank"
              >
            <v-icon size="24px" color="white">
              mdi-instagram
              </v-icon>
              </v-btn>
              <v-btn
              icon
              href="https://twitter.com/shingondefu?t=ja_g34d6dJEUGjVVVylNxg&s=01" target="_blank"
              >
            <v-icon size="24px" color="white">
              mdi-twitter
              </v-icon>
              </v-btn>
              <v-btn icon>
              <v-icon size="24" color="white">mdi-whatsapp</v-icon>
              </v-btn>
            </v-card-text>
         </v-flex>
         <v-flex d-flex xs12 sm6 md2>
           <v-card-text>
          <strong class="d-flex subheading white--text align-end"> Our Address!</strong>
            <v-btn
              icon
              href="https://www.facebook.com/profile.php?id=100080185462367&_rdc=1&_rdr" target="_blank"
              >
            <v-icon size="24px" color="white">
              mdi-facebook
              </v-icon>
              </v-btn>
              <v-btn
              icon
              href="https://www.instagram.com/shingondefuadventureandsafaris/?igshid=YmMyMTA2M2Y%3D" target="_blank"
              >
            <v-icon size="24px" color="white">
              mdi-instagram
              </v-icon>
              </v-btn>
              <v-btn
              icon
              href="https://twitter.com/shingondefu?t=ja_g34d6dJEUGjVVVylNxg&s=01" target="_blank"
              >
            <v-icon size="24px" color="white">
              mdi-twitter
              </v-icon>
              </v-btn>
              <v-btn icon>
              <v-icon size="24" color="white">mdi-whatsapp</v-icon>
              </v-btn>
            </v-card-text>
         </v-flex>
           <v-flex d-flex xs12 sm6 md2>
           <v-card-text>
          <strong class="d-flex subheading white--text align-end"> Our Address!</strong>
              <v-list color="#525936">
                <v-list-item>
                  <v-icon color="white" class="mr-3">mdi-map-marker-multiple</v-icon>
                  <v-list-item-subtitle>
                    <!-- P. O. BOX 4 
                    Karatu - Arusha, Tanzania -->
                  </v-list-item-subtitle>
                </v-list-item>
                 <v-list-item>
                  <v-icon color="white" class="mr-3">mdi-cellphone-sound</v-icon>
                  <v-list-item-subtitle>
                    +255 762 670 710
                    +255 786 424 721
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
         </v-flex>
         
         <v-card-text class="py-2 white--text text-center">
               <strong> © {{ new Date().getFullYear() }} shingondefusafaris.All Rights Reserved.</strong>
           </v-card-text>
          <v-divider>
            horizontal
          </v-divider>
</v-layout>
    </v-card>
</template>
<script>
  export default {
    data: () => ({
      methods:()=>
      {
        open
      }
    }),
  }
</script>