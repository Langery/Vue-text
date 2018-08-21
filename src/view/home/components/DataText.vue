<template>
  <div class="datatext">
    <p>{{$store.state.count}}</p>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
  </div>
</template>

<script>
import store from '@/store/index'
import { mapState } from 'vuex'

export default {
  name: 'data-text',
  store,
  computed: {
    ...mapState(['count']),
    count () {
      return this.$store.state.count
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.datatext{
  display: block;
  clear: both;
}
</style>
