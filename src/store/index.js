import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { pc } from '../logic/pointcalc'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bpoints: [],
    btoken: ''
  },
  mutations: {
    UPDATE_BSCORES(state, payload) {
      state.bpoints = payload
      pc.calcPoints()
      console.log("UPDATE_BSCORES");
    },
    UPDATE_BTOKEN(state, payload) {
      state.btoken = payload
      console.log("UPDATE BTOKEN")
    }
  },
  actions: {
    fetchPoints({ commit }) {
      console.log("fetchScores");
      axios.get('http://13.74.31.101/api/points')
      .then(function (response) {
        commit('UPDATE_BSCORES', response.data.points)
        commit('UPDATE_BTOKEN', response.data.token)

      })
      .catch(function (error) {
          console.log(error);
      });
    }
  },
  getters: {
    getBPoints: state => state.bpoints.join(' - '),
    getBPointsRaw: state => state.bpoints,
    getBToken: state => state.btoken
  }
})
