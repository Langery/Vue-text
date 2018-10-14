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
  width: 100%;
  height: 100%;
  background: #EEA9A9;
  button{
    width: 60px;
    height: 20px;
    line-height: 10px;
    font-size: 18px;
    background: #81C7D4;
    border-radius: 10px;
  }
}
</style>
