<template>
  <div id="list-demo" class="demo">
    <transition-group name="list" tag="p">
      <span v-for="item in items" v-bind:key="item" class="list-item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  mounted () {
    setInterval(() => {
      this.items.unshift(this.nextNum++)
      if (this.items.length >= 10) {
        this.items.pop()
      }
    }, 5000)
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.list-item {
  display: block;
  margin-right: 10px;
  margin-bottom: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateX(30px);
}
</style>
