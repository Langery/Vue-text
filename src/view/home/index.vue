<template>
  <div>
    <!-- 头部信息 -->
    <top-title></top-title>
    <!-- 瀑布流 -->
    <!-- 一列的内容控制 -->
    <waterfall :line-gap="200">
      <!-- 一行的内容控制 -->
      <waterfall-slot :width="500" :height="500">
        <!-- bootstrap 应用 -->
        <component-text></component-text>
      </waterfall-slot>
      <waterfall-slot :width="500" :height="500">
        <data-text></data-text>
      </waterfall-slot>
      <waterfall-slot :width="500" :height="500">
        <two-way-binding></two-way-binding>
      </waterfall-slot>
    </waterfall>
    <!-- 第二行文本内容 -->
    <waterfall :line-gap="200">
      <waterfall-slot :width="500" :height="500">
        <dynamic-data></dynamic-data>
      </waterfall-slot>
    </waterfall>
  </div>
</template>

<script>
/**
 * 生命周期
 * beforeCreate
 *  初始化事件，进行数据观测
 * created
 * beforeMount
 * mounted
 * beforeUpdate
 * updated
 * beforeDestroy
 * destroyed
 */
export default {
  components: {
    'TopTitle': () => import('@/view/components/TopTitle'),
    'ComponentText': () => import('@/view/home/components/ComponentText.vue'),
    'DynamicData': () => import('@/view/home/components/DynamicData.vue'),
    'DataText': () => import('@/view/home/components/DataText.vue'),
    'TwoWayBinding': () => import('@/view/home/components/TwoWayBinding.vue'),
    'Waterfall': () => import('vue-waterfall/lib/waterfall'),
    'WaterfallSlot': () => import('vue-waterfall/lib/waterfall-slot')
  },
  data () {
    return {
    }
  },
  beforeCreate () {
    // console.log('--------------------------------------beforeCreate')
  },
  created () {
    // console.log('--------------------------------------created')
  },
  beforeMount () {
    // console.log('--------------------------------------beforeMount')
  },
  mounted () {
    // console.log('--------------------------------------mounted')
  },
  beforeUpdate () {
    // console.log('---------------------------------------beforeUpdate')
  },
  updated () {
    // console.log('----------------------------------------updated')
  },
  beforeDestroy () {
    // console.log('----------------------------------------beforeDestroy')
  },
  destroyed () {
    // console.log('----------------------------------------destroyed')
  }
}
</script>

<style lang="less" scoped>

</style>
