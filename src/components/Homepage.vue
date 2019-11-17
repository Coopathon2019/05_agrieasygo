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





      <div class="text-center" cols="12" sm="4">
        <v-btn :to="{name: 'login'} " color="lime darken-2">
          <span class="white--text font-weight-black">登入</span>
        </v-btn>
      </div>
      <div class="text-center" cols="12" sm="4">
        <v-btn :to="{name: 'register'} " color="lime darken-2">
          <span class="white--text font-weight-black">註冊</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <div>
          <v-row style="height: 300px;" align="end" justify="center">
            <v-img
              src="../assets/farmer 1.png"
              aspect-ratio="1"
              transition="scale-transition"
              max-width="200"
            ></v-img>
          </v-row>

          <v-spacer></v-spacer>

          <v-row style="height: 150px;" align="center" justify="center">
            <h1 class="display-1 text-center font-weight-black lime--text text--darken-2">
              配對命中註定的農夫
              <br />開始獨一無二的食農教育體驗
            </h1>
            <br />
            <br />
            <br />
          </v-row>

          <v-row style="height: 500px;" align="start" justify="center">
            <v-col sm="4">
              <v-text-field label="輸入農作物/地點，尋找適合的食農體驗" single-line outlined></v-text-field>
            </v-col>
          </v-row>

          <v-row style="height: 150px;" align="center" justify="center">
            <h1 class="display-1 text-center font-weight-black light-green--text text--darken-4">
              熱門作物
              <br />
              <h2
                class="title text-center font-weight-black lime--text text--darken-2"
              >認識最適合進行食農教育的作物</h2>
            </h1>
          </v-row>

          <v-card class="mx-auto" max-width="1600">
            <v-row dense>
              <v-col v-for="card in cardsf" :key="card.title" :cols="card.flex">
                <v-hover v-slot:default="{ hover }">
                  <v-card :elevation="hover ? 12 : 2" :to="{name: card.lname} ">
                    <v-img
                      :src="card.src"
                      class="white--text align-end justify-center"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="400px"
                      contain
                    >
                      <v-card-title
                        class="headline font-weight-black justify-center"
                        v-text="card.title"
                      ></v-card-title>
                      <v-card-title
                        class="subtitle-1 font-weight-regular justify-center"
                        v-text="card.subtitle"
                      ></v-card-title>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-card>

          <v-row style="height: 150px;" align="center" justify="center">
            <h1 class="display-1 text-center font-weight-black amber--text text--accent-4" dark>
              熱門體驗
              <br />
              <h2
                class="title text-center font-weight-black orange--text text--accent-1"
              >體驗最受歡迎的食農教育活動</h2>
            </h1>
          </v-row>

          <v-card class="mx-auto" max-width="1600">
            <v-row dense>
              <v-col v-for="card in cardse" :key="card.title" :cols="card.flex">
                <v-hover v-slot:default="{ hover }">
                  <v-card :elevation="hover ? 12 : 2" :to="{name: card.lname} ">
                    <v-img
                      :src="card.src"
                      class="white--text align-end justify-center"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="400px"
                      contain
                    ></v-img>
                    <v-card-title
                      class="headline font-weight-black justify-center"
                      v-text="card.title"
                    ></v-card-title>
                    <v-card-title
                      class="subtitle-1 font-weight-regular justify-center"
                      v-text="card.subtitle"
                    ></v-card-title>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-card>
        </div>
        <br />
      </v-container>
    </v-content>

    <v-footer color="brown darken-3">
      <h1 class="subtitle-1 font-weight-regular white--text">聯絡我們</h1>
      <v-spacer></v-spacer>
      <h1 class="subtitle-1 font-weight-regular white--text">© 2019 URBANMAN All Rights Reserved.</h1>
    </v-footer>
  </v-app>
</template>


<script>
export default {
  name: "grid",

  data: () => ({
    cardsf: [
      {
        title: "白米",
        subtitle: "平均種植週期 : 90天",
        src: "https://upload.cc/i1/2019/11/14/mvcGyh.jpg",
        lname: "info", //作為router的路由設定
        flex: 3
      },

      {
        title: "玉米筍",
        subtitle: "平均種植週期 : 70天",
        src: "https://upload.cc/i1/2019/11/14/0U6IQc.png",
        lname: "info",
        flex: 3
      },
      {
        title: "白木耳",
        subtitle: "平均種植週期 : 40天",
        src: "https://upload.cc/i1/2019/11/14/xetorh.png",
        lname: "info",
        flex: 3
      },
      {
        title: "波菜",
        subtitle: "平均種植週期 : 40天",
        src: "https://upload.cc/i1/2019/11/14/JBMPTO.jpg",
        lname: "info",
        flex: 3
      }
    ],

    cardse: [
      {
        title: "小林先生有機白木耳",
        subtitle: "預計採收日期 : 2020/5",
        src: "https://upload.cc/i1/2019/11/14/xetorh.png",
        lname: "info",
        flex: 3
      },
      {
        title: "美美的紅鬚玉米筍",
        subtitle: "預計採收日期 : 2020/5",
        src: "https://upload.cc/i1/2019/11/14/0U6IQc.png",
        lname: "info",
        flex: 3
      },
      {
        title: "古坑有機柳丁",
        subtitle: "預計採收日期 : 2020/5",
        src: "https://upload.cc/i1/2019/11/14/Cg7Y3S.png",
        lname: "info",
        flex: 3
      },
      {
        title: "蜜芭蕉在旗山",
        subtitle: "預計採收日期 : 2020/5",
        src: "https://upload.cc/i1/2019/11/14/ZGdBLF.png",
        lname: "info",
        flex: 3
      }
    ]
  })
};
</script>