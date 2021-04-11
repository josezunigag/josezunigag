import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  	state: {
    	usuario: '',
    	nombre_usuario: 'Vanesa Miranda',
		arrHistorial: [{fecha_generacion: "01-04-2021", cantidad: 3500 ,usuario: "jose_zuniga"}]
  	},
  	mutations: {
    	setActive (state, usuarioParam) {
      		state.usuario = usuarioParam;
  		},
		setHistorial (state, reporte) {
			state.arrHistorial.unshift(reporte);
		},
  },
  actions: {
  },
  modules: {
  }
})
