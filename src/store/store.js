/* eslint-disable */

// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex';
import moduloCampeonato from './modulos/campeonato'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

//Vue.use(Vuex)


export const store = createStore({
  state:{
    valor: 10,
    nombre: 'Federico',
    comentarios:"Comentarios desde el store"
  },
  getters,
  mutations,
  actions,
  modules:{
      moduloCampeonato
  }
})