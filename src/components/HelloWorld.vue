<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="/#/one" class="pagejump">第二页</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '你好 Vue.js'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.pagejump {
  color: #2eb0c7;
}
</style>
