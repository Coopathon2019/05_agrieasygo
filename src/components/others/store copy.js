import Vue from "vue";
import Vuex from "vuex";
import { db } from './db';


Vue.use(Vuex);
const fStore = db.firestore();
fStore.collection("users").add({
        email: this.form.email,
        name: this.form.name,
        role: this.selected
    })
    .then(() => { });
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
                commit("SET_ROLE", {
                    role: user.displayName
                });
            } else {
                commit("SET_ROLE", null);
            }

        }
    }
});