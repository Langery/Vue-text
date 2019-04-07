<template>
  <div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    const one = true
    const three = 'hello'
    this.$emit('one', one, three)
    this.firstFun('hhh').then(this.firstFun(1234))
    this.secondFun(true).then(this.secondFun(false))
  },
  methods: {
    firstFun (num) {
      return new Promise((resolve, reject) => {
        // new Error()
        typeof num === 'number' ? resolve() : reject(new Error())
      }).then(() => {
        console.log('参数是一个number值')
      }, () => {
        console.log('参数不是一个number值')
      })
    },
    secondFun (data) {
      return new Promise((resolve, reject) => {
        data ? resolve() : reject(new Error())
      }).then(() => {
        console.log(!data)
      }, () => {
        console.log(data)
      })
    }
  }
}
</script>
