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
        <v-btn :to="{name: 'teacher'} " color="lime darken-2">
          <span class="white--text font-weight-black">回個人主頁</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-container fluid>
      <v-row class="px-12" style="height: 200px;" align="end" justify="start">
        <h1 class="display-1 font-weight-black light-green--text text--darken-4">
          最新資訊
          <br />
          <h2 class="title font-weight-black lime--text text--darken-2">等待媒合的最新上傳農場資訊</h2>
          <br />
        </h1>
      </v-row>

      <v-row class="px-12">
        <v-col cols="10" align-self="center" class="mx-auto">
          <v-card flat>
            <v-row>
              <v-col v-for="card in card1" :key="card.title" :cols="card.flex" class="mx-auto">
                <v-hover v-slot:default="{ hover }">
                  <v-card :elevation="hover ? 12 : 2" tile color="#FFFCF0">
                    <v-img
                      :src="card.src"
                      class="black--text align-end justify-center"
                      height="200px"
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
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="#036358">
                        <v-row>
                          <v-col justify-space-between>
                            <v-dialog v-model="dialog" persistent fullscreen>
                              <template v-slot:activator="{ on }">
                                <v-btn v-on="on" color="orange lighten-2">
                                  <span class="title white--text font-weight-black">選擇學習專案</span>
                                </v-btn>
                              </template>
                              <v-row>
                                <v-col justify-space-between>
                                  <v-card>
                                    <v-card-title
                                      class="display-1 font-weight-black justify-center"
                                      v-text="card.title"
                                    ></v-card-title>
                                    <v-card-title
                                      class="subtitle-1 font-weight-regular justify-center"
                                      v-text="card.subtitle"
                                    ></v-card-title>
                                    <v-card-text
                                      class="title mx-auto text-center font-weight-black black--text"
                                      wrap
                                      v-text="card.info"
                                    ></v-card-text>
                                    <v-card-actions class="justify-center">
                                      <v-btn
                                        color="lime darken-2"
                                        :to="{name: 'teacher'} "
                                      >確定選擇此食農學習專案</v-btn>
                                      <v-btn color="lime darken-2" @click="dialog = false">取消選擇</v-btn>
                                    </v-card-actions>
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-dialog>
                          </v-col>
                        </v-row>

                        <v-row>
                          <v-col justify-space-between>
                            <v-btn :to="{name: 'platform'} " color="orange lighten-2">
                              <span class="title white--text font-weight-black">檢視合作評價</span>
                            </v-btn>
                          </v-col>
                        </v-row>

                        <v-row>
                          <v-col justify-space-between>
                            <v-btn :to="{name: 'platform'} " color="orange lighten-2">
                              <span class="title white--text font-weight-black">檢視相關教案</span>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-card>

          <v-card flat>
            <v-row>
              <v-col v-for="card in card2" :key="card.title" :cols="card.flex" class="mx-auto">
                <v-hover v-slot:default="{ hover }">
                  <v-card :elevation="hover ? 12 : 2" tile color="#FFFCF0">
                    <v-img
                      :src="card.src"
                      class="black--text align-end justify-center"
                      height="200px"
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
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="#036358">
                        <v-row>
                          <v-col justify-space-between>
                            <v-dialog v-model="dialog" persistent fullscreen>
                              <template v-slot:activator="{ on }">
                                <v-btn v-on="on" color="orange lighten-2">
                                  <span class="title white--text font-weight-black">選擇學習專案</span>
                                </v-btn>
                              </template>
                              <v-row>
                                <v-col justify-space-between>
                                  <v-card>
                                    <v-card-title
                                      class="display-1 font-weight-black justify-center"
                                      v-text="card.title"
                                    ></v-card-title>
                                    <v-card-title
                                      class="subtitle-1 font-weight-regular justify-center"
                                      v-text="card.subtitle"
                                    ></v-card-title>
                                    <v-card-text
                                      class="title mx-auto text-center font-weight-black black--text"
                                      wrap
                                      v-text="card.info"
                                    ></v-card-text>
                                    <v-card-actions class="justify-center">
                                      <v-btn
                                        color="lime darken-2"
                                        :to="{name: 'teacher'} "
                                      >確定選擇此食農學習專案</v-btn>
                                      <v-btn color="lime darken-2" @click="dialog = false">取消選擇</v-btn>
                                    </v-card-actions>
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-dialog>
                          </v-col>
                        </v-row>

                        <v-row>
                          <v-col justify-space-between>
                            <v-btn :to="{name: 'platform'} " color="orange lighten-2">
                              <span class="title white--text font-weight-black">檢視合作評價</span>
                            </v-btn>
                          </v-col>
                        </v-row>

                        <v-row>
                          <v-col justify-space-between>
                            <v-btn :to="{name: 'platform'} " color="orange lighten-2">
                              <span class="title white--text font-weight-black">檢視相關教案</span>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
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
export default {
  data: () => ({
    dialog: false,
    card1: [
      {
        title: "小林先生有機白木耳",
        subtitle: "預計採收日期 : 2020/5",
        info:
          "詳細資訊：作物種類：白木耳，預計提供農作數量：20斤，預計採收日期：2020/5，專案特色解說：採用生態工法，有機肥料進行栽種",
        src: "https://upload.cc/i1/2019/11/14/xetorh.png",
        flex: 4
      },

      {
        title: "古坑有機柳丁",
        subtitle: "預計採收日期 : 2020/5",
        info:
          "詳細資訊：作物種類：柳丁，預計提供農作數量：20斤，預計採收日期：2020/5，專案特色解說：採用生態工法，有機肥料進行栽種",
        src: "https://upload.cc/i1/2019/11/14/Cg7Y3S.png",
        flex: 4
      },
      {
        title: "蜜芭蕉在旗山",
        subtitle: "預計採收日期 : 2020/5",
        info:
          "詳細資訊：作物種類：芭蕉，預計提供農作數量：20斤，預計採收日期：2020/5，專案特色解說：採用生態工法，有機肥料進行栽種",
        src: "https://upload.cc/i1/2019/11/14/ZGdBLF.png",
        flex: 4
      }
    ],

    card2: [
      {
        title: "古坑有機柳丁",
        subtitle: "預計採收日期 : 2020/5",
        info:
          "詳細資訊：作物種類：柳丁，預計提供農作數量：20斤，預計採收日期：2020/5，專案特色解說：採用生態工法，有機肥料進行栽種",
        src: "https://upload.cc/i1/2019/11/14/Cg7Y3S.png",
        flex: 4
      },

      {
        title: "美美的紅鬚玉米筍",
        subtitle: "預計採收日期 : 2020/5",
        info:
          "詳細資訊：作物種類：玉米筍，預計提供農作數量：100斤，預計採收日期：2020/5，專案特色解說：採用生態工法，有機肥料進行栽種",
        src: "https://upload.cc/i1/2019/11/14/0U6IQc.png",
        flex: 4
      },

      {
        title: "蜜芭蕉在旗山",
        subtitle: "預計採收日期 : 2020/5",
        info:
          "詳細資訊：作物種類：芭蕉，預計提供農作數量：50斤，預計採收日期：2020/5，專案特色解說：採用生態工法，有機肥料進行栽種",
        src: "https://upload.cc/i1/2019/11/14/ZGdBLF.png",
        flex: 4
      }
    ]
  })
};
</script>
