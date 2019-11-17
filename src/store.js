import Vue from "vue";
import Vuex from "vuex";
import { db } from "./db";

const fStore = db.firestore();
//role = fStore.collection("users").where("email", "==", this.user.data.email).get().then(querySnapshot => {querySnapshot.forEach(doc.data()["role"])})

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null,
            role: null
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
        SET_ROLE(state, role) {
            state.user.role = role;
        }
    },
    actions: {
        fetchUser({ commit }, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                commit("SET_USER", null);
            }

            if (user) {
                fStore.collection("users").where("email", "==", user.email).get().then(snapshot => {
                    snapshot.forEach(doc => {
                        if (doc.exists) {
                            commit("SET_ROLE", {
                                role: doc.data()["role"]
                            })
                        }
                    })
                });
            } else {
                commit("SET_ROLE", null);
            }


        }
    }
});