import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { pc } from '../logic/pointcalc'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bpoints: [],
    btoken: '',
    bscore: [],
    postSuccess: [{}]
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
    },
    UPDATE_BSCORE(state, payload) {
      state.bscore = payload
      console.log("UPDATE BSCORE")
    },
    UPDATE_RESPONSE(state, payload) {
      state.postSuccess = payload
    }
  },
  actions: {
    fetchPoints({ commit }) {
      console.log("fetchScores");
      axios.get('http://13.74.31.101/api/points')
      .then(function (response) {
        console.log(`Points: ${JSON.stringify(response.data.points)}  `)
        commit('UPDATE_BSCORES', response.data.points)
        commit('UPDATE_BTOKEN', response.data.token)
        commit('UPDATE_RESPONSE', false)


      })
      .catch(function (error) {
          console.log(error);
      });
    },
    postScore({commit}){
      console.log('post scores')
      axios.post('http://13.74.31.101/api/points',{
        token: this.getters.getBToken,
        points: this.getters.getBScore
      })
      .then((response) => {
        console.log(response);
        commit('UPDATE_RESPONSE', {'success': response.data.success,'status':response.status})
      }, (error) => {
        console.log(error);
        commit('UPDATE_RESPONSE', {'success': error,'status':error})

      });
      
    }
  },
  getters: {
    getBPoints: state => state.bpoints.join(' - '),
    getBPointsRaw: state => state.bpoints,
    getBToken: state => state.btoken,
    getBScore: state => state.bscore,
    getSuccess: state => state.postSuccess
  }
})
