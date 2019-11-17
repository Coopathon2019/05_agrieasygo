import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/router";
import firebase from 'firebase/app';
import { firestorePlugin } from "vuefire";
import {db} from './db';
import vuetify from './plugins/vuetify';

Vue.use(firestorePlugin)
Vue.config.productionTip = false;


firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  db,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");