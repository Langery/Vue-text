<template>
  <div class="twowaybinding">
    <h2>{{title}}</h2>
    <input type="text" v-model="addname">
    <h1>{{addname}}</h1>
    <button v-on:click="clickMe">click me!</button>
  </div>
</template>

<script>
export default {
  name: 'TwoWayBinding',
  data () {
    return {
      title: '',
      addname: ''
    }
  },
  // Object.definrProperty
  methods: {
    clickMe () {
      this.title = 'hello world'
    },
    // Promise
    runAsynce () {
      // Promise 处理异步问题
      const p = new Promise(function (resolve, reject) {
        setTimeout(() => {
          console.log('setTimeout is finished')
          resolve('OK')
        }, 2000)
      })
      return p
    },
    // 封装流程
    getRun () {
      this.runAsynce()
        .then(function (data) {
          // console.log('This is then')
          console.log('success')
        })
        .catch(function (data) {
          console.log('This is catch')
        })
    }
  },
  mounted () {
    window.setTimeout(() => {
      this.title = 'hello'
    }, 1000)
    this.getRun()
  }
}
</script>

<style lang="less" scoped>
.twowaybinding{
  width: 100%;
  height: 100%;
  background: #FB9966;
  h2{
    font-weight: normal;
  }
}
</style>
