import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const dataFieldsStore = new Vuex.Store({
  state: {
    dataFields: [
      {
        name: 'foo1',
        value: 'bar1'
      },
      {
        name: 'foo2',
        value: 'bar2'
      },
      {
        name: 'foo3',
        value: 'bar3'
      },
      {
        name: 'foo4',
        value: 'bar4'
      },
      {
        name: 'foo5',
        value: 'bar5'
      },
      {
        name: 'foo6',
        value: 'bar6'
      },
      {
        name: 'foo7',
        value: 'bar7'
      },
      {
        name: 'foo8',
        value: 'bar8'
      },
      {
        name: 'foo9',
        value: 'bar9'
      },
      {
        name: 'foo10',
        value: 'bar10'
      },
      {
        name: 'fajdbhjfbajkdbfhbabfdjbjadbhfjbadfjbja',
        value: 'fajdbhjfbajkdbfhbabfdjbjadbhfjbadfjbja'
      }
    ]
  },
  getters: {
  },
  mutations: {
    updateObject (state, { index, newObj }) {
      state.dataFields.splice(index, 1, newObj)
    }
  },
  actions: {
  },
  modules: {
  }
})
