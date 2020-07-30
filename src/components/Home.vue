<template>
<div>
    <h1>Bowling Scores</h1>
        <div>
            <b-button squared size="lg" v-on:click="getPoints()">Get bowling points</b-button>
        </div>
        <br>
        <div>
            <h1>Points</h1>
            <p style="font-size: 2rem">{{showPoints}}</p>
        </div>
        <div>
            <h1>Score</h1>
             
        </div>

</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from '../store'


export default {
    name: 'Home',
    methods: {
        getPoints(){
            console.log("getting bowling points")
            store.dispatch('fetchPoints')
        },
    },computed: {
        showPoints() {
            return store.getters.getBPoints
        }
    }
}
</script>

<style>

</style>