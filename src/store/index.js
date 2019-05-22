import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import canvasMaps from './modules/canvasMaps'
import dataStore from './modules/datastore'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app, canvasMaps, dataStore
  },
  getters
})
