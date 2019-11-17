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
      <v-row class="px-12" style="height: 200px;" align="end" justify="start">
        <h1 class="display-2 brown--text text--darken-3 font-weight-black">
          想問問題
          <p class="px-1 headline black--text font-weight-black">這裡可以提出對於課程的相關問題喔!!!</p>
        </h1>
      </v-row>

      <v-row height="auto" align="start" justify="start" class="px-12">
        <v-btn :to="{name: 'uploadquestion'} " color="lime darken-2" height="60">
          <span class="display-1 white--text font-weight-black">我要提問</span>
        </v-btn>
      </v-row>

      <v-row height="auto" align="start" justify="start" class="px-12 py-4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" shaped color="white" width="1200">
            <v-card-title>
              <v-icon large class="px-2">mdi-alert-box-outline</v-icon>

              <p1 class="headline orange--text text--darken-3 font-weight-black px-12" wrap>
                環境友善的方法是什麼呢？
                <br />
                <p2
                  class="subtitle grey--text text--darken-2 font-weight-black px-12"
                  wrap
                >許小銓----2020.04.21</p2>
                <p3 class="subtitle grey--text text--lighten-1 font-weight-regular">@2020.04.15王大姐訊息</p3>
              </p1>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-row>

      <v-row height="auto" align="start" justify="start" class="px-12 py-4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" shaped color="white" width="1200">
            <v-card-title>
              <v-icon large class="px-2">mdi-alert-box-outline</v-icon>

              <p1 class="headline orange--text text--darken-3 font-weight-black px-12" wrap>
                怎樣成功的栽種玉米筍？
                <br />
                <p2
                  class="subtitle grey--text text--darken-2 font-weight-black px-12"
                  wrap
                >漢小良----2020.04.21</p2>
                <p3 class="subtitle grey--text text--lighten-1 font-weight-regular">@2020.04.15王大姐訊息</p3>
              </p1>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-row>

      <v-row height="auto" align="start" justify="start" class="px-12 py-4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" shaped color="white" width="1200">
            <v-card-title>
              <v-icon large class="px-2">mdi-check-box-outline</v-icon>

              <p1 class="headline lime--text text--darken-3 font-weight-black px-12" wrap>
                請問校外教學要自己準備午餐嗎？
                <br />
                <p2
                  class="subtitle grey--text text--darken-2 font-weight-black px-12"
                  wrap
                >許小銓----2020.04.01</p2>
                <p3 class="subtitle grey--text text--lighten-1 font-weight-regular">@2020.04.01張小寧老師訊息</p3>
              </p1>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-row>

      <v-spacer></v-spacer>
      <v-row height="auto" align="center" justify="center" class="px-12 py-4">
        <v-btn :to="{name: 'course'} " color="lime darken-2">
          <span class="title white--text font-weight-black">回個人主頁</span>
        </v-btn>
      </v-row>
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
  }
};
</script>
