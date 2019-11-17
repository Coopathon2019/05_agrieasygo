<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Dashboard</div>
          <div class="card-body">
            <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
          </div>
          <div class="card-header">Information</div>
          <div class="card-body">
            <div v-if="user" class="alert alert-success" role="alert">食農easy-go</div>
          </div>
          <form action="#" @submit.prevent="submit">
            <div class="card-header">前往首頁</div>
            <div class="card-body">
              <button type="submit" class="btn btn-primary">前往首頁</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
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
    submit() {
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