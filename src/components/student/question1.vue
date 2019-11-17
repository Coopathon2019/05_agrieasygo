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
        <h1 class="display-2 brown--text text--darken-3 font-weight-black">
          想問什麼問題呢？
          <v-btn text>
            <span>
              <p class="px-2 title grey--text text--darken-1 font-weight-black">相關訊息 @</p>
            </span>
          </v-btn>
        </h1>
      </v-row>
      <v-card>
        <v-card-text>
          <v-form @submit.prevent="uploadquestion" id="question-form" v-model="form.valid">
            <v-text-field
              v-model="form.qtitle"
              label="問題標題 -- 什麼是紅鬚玉米筍？ "
              name="qtitle"
              type="text"
            />
            <v-text-field
              v-model="form.qcont"
              label="問題補充 -- 紅鬚玉米筍跟普通玉米筍差在哪裡？"
              name="qcont"
              type="text"
            />
          </v-form>
        </v-card-text>

        <v-card-actions class="justify-center ">
          <v-btn width="100" color="lime darken-2" type="submit" form="question-form">
            <span class="white--text font-weight-black">提問</span>
          </v-btn>
        </v-card-actions>
      </v-card>


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
import { db } from "../../db";

const fStore = db.firestore();

export default {
    computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },

  data() {
    return {
      form: {
        valid: true,
        qtitle: "",
        qcont: ""
      },
      error: null
    };
  },

  methods: {
    uploadquestion() {
      fStore
        .collection("questions")
        .add({
          question: this.form.qtitle,
          content: this.form.qcont,
          name: this.$store.getters.user.data.displayName
        })
        .then(() => {
          this.$router.push({ name: "question" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>
