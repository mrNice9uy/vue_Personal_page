<template>
    <div class="wrapper">
        <div class="bg">
            <div class="head_">            
                <div >ID:</div>
                <div>Password:</div>
                <div>First Name:</div>
                <div>Lirst Name:</div>
                <div>Login:</div>
                <div>e-mail:</div>
                <div>Gender:</div>
                <div>Phone:</div>
                <div>Social Insurance:</div>
                <div>Date of birth:</div>
                <div>Employment:</div>
                <div>Address:</div>
            </div>                
        <div class="head_" v-for="item in list" v-bind:key="item.id">
            <div>{{item.id}}</div>
            <div>{{item.password}}</div>
            <div>{{item.first_name}}</div>
            <div>{{item.last_name}}</div>            
            <div>{{item.username}}</div>
            <div>{{item.email}}</div>
            <div>{{item.gender}}</div>
            <div>{{item.phone_number}}</div>
            <div>{{item.social_insurance_number}}</div>
            <div>{{item.date_of_birth}}</div>            
            <div>{{item.employment.title}}</div>            
            <div>{{item.avatar.city}}</div>            
        </div>
        <div>            
           <img height="520px" v-for="img in images" v-bind:src="img" alt="pic" :key="img.id">
        </div>
        </div>
        <div class="intro">
            <h1>Do you like it?</h1>
            <div class="ok">            
            <button v-on:click="fetchData">Not really</button>                    
        </div>
        <button><router-link class="link" to="/beer">Back 2 Homer</router-link></button>    
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name: "userItem",
    data() {
        return {
            loading: true,
            images: undefined,
            list: undefined,
        }
    },
    mounted() {
        axios.get('https://random-data-api.com/api/users/random_user')
        .then((response) => {
            this.list = [response.data]
            this.loading = false
            this.images = [response.data.avatar]
        })
        .catch(e => console.log('Oh, no!', e.message))
    },
    methods: {
        fetchData() {
            axios.get('https://random-data-api.com/api/users/random_user')
            .then((response) => {
                this.list = [response.data]
                this.images = [response.data.avatar]
            })
            .catch(e => console.log('Oh, no!', e.message))
        }        
    },
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
    .head_ {
        background-color: #fff;
        border: 2px solid cornflowerblue;        
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: .5rem 2rem;    
    }
    .head {
        background-color: #fff;
        border: 2px solid cornflowerblue;        
        display: flex;
        
        justify-content: space-around;
        padding: .5rem 2rem;    
    }
    .ok h1 {
        margin-top: 0;
    }
    .bg {
        margin-top: 1rem;
        display: flex;   
        justify-content: center;
                
    }
    button {
        height: 4rem;
        width: 8rem;
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
    .link {
        text-decoration: none;
        color: cornflowerblue;
    }
    .wrapper {                
        height: 720px;
    }
</style>