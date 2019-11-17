<template>
  <v-app>
    <v-app-bar app color="white">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="display-1 font-weight-black amber--text text--accent-4 mr-2">食農</v-toolbar-title>
      <span></span>
      <v-toolbar-title class="headline font-weight-black">
        <span class="lime--text text--darken-2">easy-go</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-title class="title font-weight-regular mr-4">
        <span class="black--text">{{user.data.displayName}}</span>
      </v-toolbar-title>

      <div class="text-center" cols="12" sm="4">
        <v-btn :to="{name: 'home'} " color="lime darken-2">
          <span class="white--text font-weight-black">登出</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-container fluid>
      <v-row class="px-12" style="height: 150px;" align="end" justify="start">
        <h1 class="display-2 brown--text text--darken-3 font-weight-black">成長相簿</h1>
      </v-row>

      <v-row dense class="px-8" style="height: 150px;" align="end" justify="start">
        <v-col cols="4">
          <v-card flat color="grey lighten-5">
            <v-card-title>
              <p class="headline black--text font-weight-black" wrap>
                歡迎來到0000農場的成長相簿～
                你的0000已經生長了100天了，總共搜集了...張照片。
                趕緊來看看你的紅鬚玉米筍的成長相簿吧！
              </p>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <!--
      <v-row style="height: 150px;" align="start" justify="start" class="px-12">
        <v-btn :to="{name: 'upload'} " color="lime darken-2" height="80">
          <span class="display-2 white--text font-weight-black">播放照片</span>
        </v-btn>
      </v-row>
      -->

      <v-row height="auto" align="start" justify="start" class="px-12">
        <v-carousel height="auto" continuous >
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            contain
          ></v-carousel-item>
        </v-carousel>

      </v-row>

      <v-row height="auto" align="start" justify="center" class="px-12 py-4">
        <v-btn :to="{name: 'course'} " color="lime darken-2">
          <span class="title white--text font-weight-black">回個人主頁</span>
        </v-btn>
      </v-row>
    </v-container>
    <v-spacer></v-spacer>
    <v-footer align="end" color="brown darken-3">
      <h1 class="subtitle-1 font-weight-regular white--text">聯絡我們</h1>
      <v-spacer></v-spacer>
      <h1 class="subtitle-1 font-weight-regular white--text">© 2019 URBANMAN All Rights Reserved.</h1>
    </v-footer>
  </v-app>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      items: [
        {
          src: "https://upload.cc/i1/2019/11/17/GZErIC.jpg"
        },
        {
          src: "https://upload.cc/i1/2019/11/17/qCmloc.jpg"
        },
        {
          src: "https://upload.cc/i1/2019/11/17/sTrQ8l.jpg"
        }
      ]
    };
  },

  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>