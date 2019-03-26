<template>
  <div class="mainView">
    <h1>彩蛋</h1>
    <p>点击一次和双击</p>
    <button @click="first()" @dblclick="second()">点击一下</button>
    <span>{{say}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      say: ''
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    first () {
      const person = {
        name: 'Story',
        age: '24',
        like: 'guitar',
        say: '第一个彩蛋'
      }
      this.say = person.say
    },
    second () {
      this.say = ''
    }
  }
}
</script>

<style lang="less" scoped>
.mainView{}
</style>
