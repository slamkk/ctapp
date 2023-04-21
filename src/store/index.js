import { createStore } from "vuex";
const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    login(context, user) {
      context.commit("setUser", user);
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
});
export default store;
