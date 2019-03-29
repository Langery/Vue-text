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
  },
  methods: {

  }
}
</script>
