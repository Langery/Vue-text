<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <br>
    <div id="view">
        <router-link class="title" to="/">首页</router-link>
        <router-link class="title" to="/one">数字增加或删减</router-link>
        <router-link class="title" to="/new">建筑照片</router-link>
        <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
img{
  display: block;
  margin: 0 auto;
}
#view{
  text-align: center;
}
.title{
  margin: 0 5%;
  text-decoration: none;
  color:lightgreen;
}
</style>
