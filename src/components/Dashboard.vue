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

    <v-content>
      <v-container fluid>
        <v-row style="height: 300px;" align="end" justify="center">
          <v-img
            src="../assets/farmer 1.png"
            aspect-ratio="1"
            transition="scale-transition"
            max-width="200"
          ></v-img>
        </v-row>

        <v-row style="height: 300px;" align="center" justify="center">
          <v-col cols="12" md="4">
            <v-form @submit.prevent="jump" id="jump">
              <v-card elevation="12" max-width="800" justify="center">
                <v-card-title
                  class="title justify-center font-weight-black lime--text text--darken-2"
                >你已登入完成!!</v-card-title>

                <v-spacer />

                <v-card-title
                  class="title justify-center font-weight-black lime--text text--darken-2"
                >歡迎來到食農 easy-go!!</v-card-title>

                <v-card-actions class="justify-center">
                  <v-btn rounded width="300" color="lime darken-2" type="submit" form="jump">
                    <span class="white--text font-weight-black">點擊立即前往體驗</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>




<script>
import { mapGetters } from "vuex";
import store from "../store";
//import { db } from "../db";

//const fStore = db.firestore();
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    jump() {
      if (store.getters.user.role.role == "農民") {
        this.$router.push({ name: "farmer" });
      }
      if (store.getters.user.role.role == "學生") {
        this.$router.push({ name: "student" });
      }
      if (store.getters.user.role.role == "老師") {
        this.$router.push({ name: "teacher" });
      }
    }
  }
};
</script>