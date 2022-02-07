<template>
  <div id="app">
  <h1>Choose your destiny</h1>
  <hr>
  <Beer />
  </div>
</template>

<script>
import Beer from '@/components/Beer'
export default {
  name: 'App',
  /*methods: {
    fetchData() {
      fetch('https://random-data-api.com/api/beer/random_beer')
      .then(response => response.json())
      .then(json => {console.log(json)})
    }
  },*/
  components: {
    Beer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
