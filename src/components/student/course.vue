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
      <v-row class="px-12" style="height: 100px;"></v-row>
      <v-row class="px-12" style="height: 50px;" align="start" justify="center">
        <v-col cols="8">
          <v-card flat color="grey lighten-5">
            <v-card-title>
              <p class="display-2 brown--text text--darken-3 font-weight-black">美美的紅鬚玉米筍Ａ</p>
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card flat color="grey lighten-5">
            <v-card-title class="justify-end mr-12">
              <p class="display-1 black--text font-weight-black">預計收成時間：</p>
            </v-card-title>
            <v-card-title class="justify-end mr-12">
              <p class="display-2 lime--text text--darken-2 font-weight-black">2020 年 5 月</p>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-row dense class="px-12" style="height: 200px;" align="end" justify="start">
        <v-col cols="7">
          <v-card flat color="grey lighten-5">
            <v-card-title>
              <p class="headline black--text font-weight-black" wrap>
                哈囉許小銓，
                你今天有來自王大姐的一則訊息、張老師的兩則訊息喔！
                記得去看看他們說了些什麼。
              </p>
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="5">
          <v-card flat color="grey lighten-5"></v-card>
        </v-col>
      </v-row>

      <v-row dense class="px-12" style="height: 150px;" align="start" justify="start">
        <v-col cols="3">
          <v-card flat color="grey lighten-5">
            <v-img src="./album.png" transition="scale-transition" max-height="250" contain eager></v-img>
            <v-card-actions class="align-start justify-center">
              <v-btn :to="{name: 'album'} " color="lime darken-2">
                <span class="title black--text font-weight-black">成長相簿</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card flat color="grey lighten-5">
            <v-img src="./diary.png" transition="scale-transition" max-height="220" contain eager></v-img>
            <v-card-actions class="align-start justify-center">
              <v-btn :to="{name: 'diary'} " color="lime darken-2">
                <span class="title black--text font-weight-black">我的日記</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card flat color="grey lighten-5">
            <v-img src="./question.png" transition="scale-transition" max-height="250" contain eager></v-img>
            <v-card-actions class="align-start justify-center">
              <v-btn :to="{name: 'question'} " color="lime darken-2">
                <span class="title black--text font-weight-black">想問問題</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card flat color="grey lighten-5" >
            <v-card-actions class="align-start justify-center">
              <v-btn :to="{name: 'message'} " color="orange darken-2">
                <span class="title black--text font-weight-black">你有一個留言喔！</span>
              </v-btn>
            </v-card-actions>
            <v-img src="./farmer.png" transition="scale-transition" max-height="180" contain></v-img>
            <v-card-title class="align-end justify-center">
              <p class="title black--text font-weight-black" wrap>農夫王小美</p>
            </v-card-title>
          </v-card>

          <v-card flat color="grey lighten-5" >
            <v-card-actions class="align-start justify-center">
              <v-btn :to="{name: 'message'} " color="orange darken-2">
                <span class="title black--text font-weight-black">你有二個留言喔！</span>
              </v-btn>
            </v-card-actions>
            <v-img src="./teacher.png" transition="scale-transition" max-height="180" contain></v-img>
            <v-card-title class="align-end justify-center">
              <p class="title black--text font-weight-black" wrap>張小寧老師</p>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-row style="height: 700px;" align="end" justify="center">
        <v-img src="./background.png" transition="scale-transition" fill-width eager ></v-img>
      </v-row>
    </v-container>
    <v-spacer></v-spacer>
    <v-footer  color="brown darken-3">
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
  }
};
</script>
