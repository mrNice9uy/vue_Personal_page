<template>
    <div class="container">
        <h2>Let's get it started!</h2> 
        <div class="to-beer">
            <router-link to="/beer" class="link"><p>GO</p></router-link>
            <img src="https://avatarko.ru/img/kartinka/14/multfilm_Simpsons_Homer_13968.jpg" alt="pic">
        </div> 
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .container {        
        height: 720px;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .to-beer {
        display: flex;
        flex-direction: column;
        justify-content: center;        
        align-items: center;
    }
    .link {
        text-decoration: none;        
        height: 2rem;
        width: 5rem;
        background: yellow;
        border: 2px solid cornflowerblue;        
        color: cornflowerblue;
        font-weight: bold;
        font-size: 18px;
        border-radius: 10px;               
    }
    .link p {        
        margin: 8px;    
        font-weight: bold;
        font-size: 18px;
    }
    .link:active {
        background: cornflowerblue;
        border-color: yellow;
        color: yellow
    }
</style>