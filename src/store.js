import Vue from 'vue';
import Vuex from 'vuex';
import aData from "./db.json"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    aData,
    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
    countador: 0,
  },


  getters: {
    
    getAllProducts: state => state.aData.products,
    getAllCategorias: state => state.aData.categories,
    getProductsInCart: state => state.cartProducts,
    getcountproduct: state => state.countador,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart
    
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      //Eliminar 1 elemento desde el índice 
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },

    COUNT: (state, product) => {
      state.count = 2;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },

    addcount: (context, product) => {
      context.commit('COUNT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },

  /*const actions = {
  isToggleWithoutAnimation ({ commit }, value) {
    commit('TOGGLE_WITHOUT_ANIMATION', value)
  },
}*/



 });