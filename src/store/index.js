import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    products: [],
    users: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('');
      commit('SET_PRODUCTS', response.data);
    },
    async fetchUsers({ commit }) {
      const response = await axios.get('');
      commit('SET_USERS', response.data);
    },
  },
});

export default store;
