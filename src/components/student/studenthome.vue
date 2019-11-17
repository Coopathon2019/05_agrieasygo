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

      <div cols="12" sm="4">
        <v-btn :to="{name: 'infoall'} " color="lime darken-2" text>
          <span class="title blue-grey--text text--darken-1 font-weight-black">搜尋熱門食農課程資訊</span>
        </v-btn>
      </div>

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
        <h1 class="display-1 font-weight-black light-green--text text--darken-4">我訂購的體驗</h1>
      </v-row>

      <v-card flat>
        <v-row>
          <v-col v-for="card in card1" :key="card.title" :cols="card.flex">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 12 : 2" tile color="#FFFCF0">
                <v-img
                  :src="card.src"
                  class="black--text align-end justify-center"
                  height="200px"
                  contain
                ></v-img>
                <v-card-title class="headline font-weight-black justify-center" v-text="card.title"></v-card-title>
                <v-card-title
                  class="subtitle-1 font-weight-regular justify-center"
                  v-text="card.subtitle"
                ></v-card-title>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-card>

      <v-row class="px-12" style="height: 50px;" align="end" justify="start">
        <h1 class="display-1 font-weight-black amber--text text--accent-4">我參與的體驗</h1>
      </v-row>

      <v-card flat>
        <v-row>
          <v-col v-for="card in card2" :key="card.title" :cols="card.flex">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 12 : 2" tile color="#FFFCF0" :to="{name: 'course'} ">
                <v-img
                  :src="card.src"
                  class="black--text align-end justify-center"
                  height="200px"
                  contain
                ></v-img>
                <v-card-title class="headline font-weight-black justify-center" v-text="card.title"></v-card-title>
                <v-card-title
                  class="subtitle-1 font-weight-regular justify-center"
                  v-text="card.subtitle"
                ></v-card-title>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <v-footer color="brown darken-3">
      <h1 class="subtitle-1 font-weight-regular white--text">聯絡我們</h1>
      <v-spacer></v-spacer>
      <h1 class="subtitle-1 font-weight-regular white--text">© 2019 URBANMAN All Rights Reserved.</h1>
    </v-footer>
  </v-app>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },

  name: "grid",

  data: () => ({
    card1: [
      {
        title: "小林先生的有機白木耳",
        subtitle: "體驗開始 : 2020/05/18",
        src: "https://upload.cc/i1/2019/11/14/xetorh.png",
        flex: 2
      },

      {
        title: "美美的紅鬚玉米筍-C",
        subtitle: "體驗開始 : 2020/04/12",
        src: "https://upload.cc/i1/2019/11/14/0U6IQc.png",
        flex: 2
      }
    ],

    card2: [
      {
        title: "古坑有機柳丁",
        subtitle: "體驗開始 : 2019/06/12",
        src: "https://upload.cc/i1/2019/11/14/Cg7Y3S.png",
        flex: 2
      }
    ]
  })
};
</script>
