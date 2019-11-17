<template>
  <v-app>
    <v-app-bar app color="white">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="display-1 font-weight-black amber--text text--accent-4 mr-2">食農</v-toolbar-title>
      <span></span>
      <v-toolbar-title class="headline font-weight-black">
        <span class="lime--text text--darken-2">easy-go</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row style="height: 300px;" align="end" justify="center">
          <v-img
            src="../assets/farmer 1.png"
            aspect-ratio="1"
            transition="scale-transition"
            max-width="200"
          ></v-img>
        </v-row>

        <v-row align="center" justify="center">
          <v-col cols="12" sm="4" md="4">
            <v-card class="elevation-12">
              <v-card-title
                class="display-1 justify-center font-weight-black lime--text text--darken-2"
              >註冊</v-card-title>
              <v-spacer />

              <v-card-text>
                <v-form @submit.prevent="register" id="register-form" v-model="form.valid">
                  <v-text-field v-model="form.email" label="Email" name="email" type="text" />
                  <v-text-field v-model="form.name" label="Name" name="name" type="text" />
                  <v-text-field
                    v-model="form.password"
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    required
                  />
                  <v-select v-model="form.select" :items="form.items" label="Role" required></v-select>
                </v-form>
              </v-card-text>

              <v-card-actions class="justify-end mr-4">
                <v-btn :to="{name: 'login'} " text>
                  <span class="black--text font-weight-regular">已擁有帳號，點擊登入</span>
                </v-btn>
                <v-btn width="100" color="lime darken-2" type="submit" form="register-form">
                  <span class="white--text font-weight-black">註冊</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
import firebase from "firebase";
import { db } from "../db";

const fStore = db.firestore();

export default {
  data() {
    return {
      form: {
        valid: true,
        name: "",
        email: "",
        password: "",
        select: null,
        items: ["農民", "學生", "老師"]
      },
      error: null
    };
  },

  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => { 
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });

      fStore
        .collection("users")
        .add({
          email: this.form.email,
          name: this.form.name,
          role: this.form.select
        })
        .then(() => {
          this.$router.replace({ name: "dashboard" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

