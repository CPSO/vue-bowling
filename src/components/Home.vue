<template>
<div>
    <h1>Bowling Scores</h1>
        <div>
            <b-button name="button" squared size="lg" v-on:click="getPoints()">Get bowling points</b-button>
        </div>
        <br>
        <div>
            <h1>Points</h1>
            <p style="font-size: 2rem">{{showPoints}}</p>
        </div>
        <div>
            <h1>Score</h1>
            <p style="font-size: 2rem">{{showScore}}</p>  
        </div>
        <div>
            <h1>Send score</h1>
            <b-button squared size="lg" v-on:click="sendScore()">Send bowling score</b-button>
        </div>

</div>
</template>

<script>

import store from '../store'


export default {
    name: 'Home',
    methods: {
        getPoints(){
            console.log("getting bowling points")
            store.dispatch('fetchPoints')
        },
        sendScore(){
            console.log('Posting Scores')
            store.dispatch('postScore')
        }
    },computed: {
        showPoints() {
            return store.getters.getBPoints
        },
        showScore() {
            return  store.getters.getBScore.join(' - ')  
        }
    }
}
</script>

<style>

</style>