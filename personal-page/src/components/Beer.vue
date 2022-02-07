<template>
    <div class="wrapper">
        <div class="intro">
            <h1>Try this one and explore who you are!</h1>
            <button>GO!</button>
        </div>
        <div class="head">            
            <div class="head_item">Brand</div>
            <div>Name</div>
            <div>Style</div>
            <div>Alcohol</div>
            <div>BLG</div>
        </div>
        <div class="head" v-for="item in list" v-bind:key="item.id">
            <div class="head_item">{{item.brand}}</div>
            <div class="head_item">{{item.name}}</div>
            <div class="head_item">{{item.style}}</div>
            <div class="head_item">{{item.alcohol}}</div>
            <div class="head_item">{{item.blg}}</div>            
        </div>
        <div class="bg">
            <div class="go">
                <h1>or try another one =)</h1>
                <button v-on:click="fetchData">OK</button>
            </div>
            <img src="https://avatarko.ru/img/kartinka/14/multfilm_Simpsons_Homer_13968.jpg" alt="pic">
        </div>
    </div>    
</template>

<script>
import BeerItem from '@/components/BeerItem'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name: "beersItem",
    data() {
        return { list: undefined }
    },
    mounted() {
        axios.get('https://random-data-api.com/api/beer/random_beer')
        .then((response) => {
            this.list = [response.data]
            console.log(this.list)
        })
    },
    components: {
        
    },
    methods: {
        fetchData() {
            axios.get('https://random-data-api.com/api/beer/random_beer')
            .then((response) => {
            this.list = [response.data]
            })
        }
    }
}
</script>

<style scoped>

    .intro {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .intro button {
        margin-left: 1rem;
    }

    .head {
        background-color: #fff;
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-around;
        padding: .5rem 2rem;
        margin-bottom: 1rem;        
    }

    .bg {
        display: flex;
        justify-content: center;
    }

    button {
        height: 2rem;
        width: 5rem;
        background: yellow;
        border-color: cornflowerblue;
        color: cornflowerblue;
        font-weight: bold;
        font-size: 18px;
        border-radius: 10px;        
    }

    button:active {
        background: cornflowerblue;
        border-color: yellow;
        color: yellow
    }

    .wrapper {                
        height: 720px;        
    }
</style>