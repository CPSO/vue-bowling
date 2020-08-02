<template>
<div>
    <h1>Bowling Scores</h1>
        <div>
            <b-button name="button" squared size="lg" v-on:click="getPoints()">Get bowling points</b-button>
        </div>
        <b-spinner v-if="getPointsPressed" class="m-3" label="Loading..."></b-spinner>
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
            <b-button squared size="lg" v-on:click="sendScore()">Send bowling score</b-button>
        </div>
        <div class="text-center" >
            <b-spinner v-if="postScorePressed" class="m-3" label="Loading..."></b-spinner>
            <p v-if="showResponse.status == '200'" class="m-3" style="font-size: 2rem">Score posted with code: {{showResponse.status}} , and sucsess: {{showResponse.success}} <b-icon icon="check-circle-fill" variant="success"></b-icon> </p>
            <p v-else-if="showResponse.status == '400'" class="m-3" style="font-size: 2rem"> ERROR Failed to post with code: {{showResponse.status}} , reason: {{showResponse.success}} <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon> </p>
        </div>

</div>
</template>
<script>

import store from '../store'
export default {
    name: 'Home',
    data: function () {
        return {
        getPointsPressed: false,
        postScorePressed: false,
        response: false
    }   
},
    methods: {
        getPoints(){
            console.log("getting bowling points")
            store.dispatch('fetchPoints')
            this.getPointsPressed = true
        },
        sendScore(){
            console.log('Posting Scores')
            store.dispatch('postScore')
            this.postScorePressed = true
        }
    },computed: {
        showPoints() {
            return store.getters.getBPoints
        },
        showScore() {
            return  store.getters.getBScore.join(' - ')  
        },
        showResponse() {
            return store.getters.getSuccess
        }
    }, watch: {
        showPoints(){
            this.getPointsPressed = false
        },
        showResponse() {
            this.postScorePressed = false
        }
    }
}
</script>

<style>
</style>