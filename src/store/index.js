import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  	state: {
    	usuario: '',
    	nombre_usuario: 'Vanesa Miranda'
  	},
  	mutations: {
    	setActive (state, usuarioParam) {
      		state.usuario = usuarioParam
  		},
  },
  actions: {
  },
  modules: {
  }
})
