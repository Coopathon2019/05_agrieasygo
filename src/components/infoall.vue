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
        <v-btn :to="{name: 'student'} " color="lime darken-2">
          <span class="white--text font-weight-black">回個人主頁</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-container fluid>
      <v-row class="px-12" style="height: 200px;" align="end" justify="start">
        <h1 class="display-1 font-weight-black light-green--text text--darken-4">
          熱門體驗
          <br />
          <h2 class="title font-weight-black lime--text text--darken-2">體驗最受歡迎的食農教育活動</h2>
          <br />
        </h1>
      </v-row>

      <v-layout row wrap>
        <v-flex md3 class="pr-3 px-6">
          <v-layout column justify-space-between fill-height>
            <v-card
              hover="2"
              tile
              color="#FFFCF0"
              height="400px"
              v-for="card in card1"
              :key="card.title"
            >
              <v-img
                :src="card.src"
                class="black--text align-end justify-center"
                height="280px"
                contain
              ></v-img>
              <v-card-title class="headline font-weight-black justify-center" v-text="card.title"></v-card-title>
              <v-card-title
                class="subtitle-1 font-weight-regular justify-center"
                v-text="card.subtitle"
              ></v-card-title>
            </v-card>
          </v-layout>
        </v-flex>
        <v-flex md3 class="pr-3">
          <v-layout column justify-space-between fill-height>
            <v-card
              hover="2"
              tile
              color="#FFFCF0"
              height="400px"
              v-for="card in card2"
              :key="card.title"
            >
              <v-img
                :src="card.src"
                class="black--text align-end justify-center"
                height="280px"
                contain
              ></v-img>
              <v-card-title class="headline font-weight-black justify-center" v-text="card.title"></v-card-title>
              <v-card-title
                class="subtitle-1 font-weight-regular justify-center"
                v-text="card.subtitle"
              ></v-card-title>
            </v-card>
          </v-layout>
        </v-flex>
        <v-flex md6 class="pr-6">
          <v-card color="lime lighten-4" height="812px">
            <v-row dense>
              <v-col cols="8">
                <v-card flat color="lime lighten-4">
                  <v-card-title>
                    <p class="display-1 text-center font-weight-black black--text">美美的紅鬚玉米筍</p>
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="6">
                <v-card flat color="lime lighten-4">
                  <v-card-title>
                    <p class="subtitle text-center font-weight-black black--text">
                      作物種類：玉米筍
                      <br />預定收成日：2020/6
                      <br />專案收穫：20斤玉米筍
                      <br />專案金額：15,000元
                      <br />農場體驗次數：2次
                    </p>
                  </v-card-title>
                </v-card>
              </v-col>

              <v-col cols="6">
                <v-card flat color="lime lighten-4">
                  <v-img
                    src="https://upload.cc/i1/2019/11/14/0U6IQc.png"
                    class="black--text align-end justify-center"
                    aspect-ratio="1"
                    transition="scale-transition"
                    max-width="200"
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="12" align-self="center">
                <v-card flat color="lime lighten-4" max-width>
                  <v-card-text class="mx-auto">
                    <h1 class="title text-center font-weight-black black--text" wrap>
                      哇！這個看起來好像玉米的小孩子喔！
                      對喔～玉米筍其實就是大家吃的玉米，
                      只是趁還沒有完全長大的時候就先收成了，
                      不過有些玉米筍也有自己的品種喔！王大姐所種的紅鬚玉米筍品種，
                      每一穗都飽滿鮮甜，尤其吃起來風味濃郁、
                      口感更為細緻爽脆，跟進口的就是不一樣。
                      堅持無農藥、無化肥、無除草劑的有機栽種，
                      讓玉米筍連鬚鬚都能煮茶喝。在這個食農專案中，
                      你會學到玉米筍的生長故事，
                      包含栽種的各個成長階段、會遇到的病蟲害、
                      環境友善栽種方法的好處以及
                      最後烹煮進食的食譜喔，
                      趕緊跟王大姐一起探索玉米筍的奧妙吧！
                    </h1>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-card-actions class="align-end justify-center">
              <v-dialog v-model="dialog" persistent width="500" dark>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" color="orange lighten-2">
                    <span class="title white--text font-weight-black">選擇此食農學習專案</span>
                  </v-btn>
                </template>
                <v-row>
                  <v-col justify-space-between>
                    <v-card>
                      <v-card-actions class="justify-center">
                        <v-btn color="lime darken-2" :to="{name: 'student'} ">
                          <span class="title black--text font-weight-black">確定選擇此食農學習專案</span>
                        </v-btn>
                        <v-btn color="lime darken-2" @click="dialog = false">
                          <span class="title black--text font-weight-black">取消選擇</span>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-dialog>

              <v-btn :to="{name: 'platform'} " color="orange lighten-2">
                <span class="title white--text font-weight-black">檢視合作評價</span>
              </v-btn>
              <v-btn :to="{name: 'platform'} " color="orange lighten-2">
                <span class="title white--text font-weight-black">檢視相關教案</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
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
      }
    ],
    card2: [
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
