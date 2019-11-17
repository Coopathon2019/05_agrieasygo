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
      <v-row style="height: 150px;" align="end" justify="start" class="px-12">
        <v-btn :to="{name: 'upload'} " color="lime darken-2">
          <span class="title white--text font-weight-black">資訊上架</span>
        </v-btn>
      </v-row>

      <v-row class="px-12" style="height: 100px;" align="end" justify="start">
        <h1 class="display-1 font-weight-black grey--text text--darken-1">
          未配對
          <br />
          <h2 class="title font-weight-black blue-grey--text text--lighten-3">已上傳之農作資訊，等待食農教育者配對</h2>
        </h1>
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

      <v-row class="px-12" style="height: 100px;" align="end" justify="start">
        <h1 class="display-1 font-weight-black light-green--text text--darken-4">
          已配對
          <br />
          <h2 class="title font-weight-black lime--text text--darken-2">已配對尚未開始之課程套裝行程</h2>
        </h1>
      </v-row>

      <v-card flat>
        <v-row>
          <v-col v-for="card in card2" :key="card.title" :cols="card.flex">
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

      <v-row class="px-12" style="height: 150px;" align="center" justify="start">
        <h1 class="display-1 font-weight-black amber--text text--accent-4">
          進行中
          <br />
          <h2 class="title font-weight-black amber--text text-- lighten-2">開始進行的課程，進入課程上傳更多內容</h2>
        </h1>
      </v-row>

      <v-card flat>
        <v-row>
          <v-col v-for="card in card3" :key="card.title" :cols="card.flex">
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

      <v-row class="px-12" style="height: 150px;" align="center" justify="start">
        <h1 class="display-1 font-weight-black grey--text text--darken-1">
          已結束
          <br />
          <h2 class="title font-weight-black blue-grey--text text--lighten-3">課程結束後可進行評價與回覆喔</h2>
        </h1>
      </v-row>

      <v-card flat>
        <v-row>
          <v-col v-for="card in card4" :key="card.title" :cols="card.flex">
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
        title: "美美的紅鬚玉米筍-B",
        subtitle: "預計採收日期 : 2020/6",
        src: "https://upload.cc/i1/2019/11/14/0U6IQc.png",
        flex: 2
      },
      {
        title: "美美的紅鬚玉米筍-C",
        subtitle: "預計採收日期 : 2020/8",
        src: "https://upload.cc/i1/2019/11/14/0U6IQc.png",
        flex: 2
      }
    ],

    card2: [
      {
        title: "美美的紅鬚玉米筍-A",
        subtitle: "預計採收日期 : 2020/5",
        src: "https://upload.cc/i1/2019/11/14/0U6IQc.png",
        flex: 2
      }
    ],

    card3: [
      {
        title: "美美的紅鬚玉米筍",
        subtitle: "結束日期 : 2019/11/9",
        src: "https://upload.cc/i1/2019/11/14/0U6IQc.png",
        flex: 2
      }
    ],
    card4: [
      {
        title: "美美的紅鬚玉米筍-B",
        subtitle: "預計採收日期 : 2020/6",
        src: "https://upload.cc/i1/2019/11/14/0U6IQc.png",
        flex: 2
      },
      {
        title: "美美的紅鬚玉米筍-C",
        subtitle: "預計採收日期 : 2020/8",
        src: "https://upload.cc/i1/2019/11/14/0U6IQc.png",
        flex: 2
      }
    ]
  })
};
</script>
