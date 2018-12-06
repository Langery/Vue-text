<template>
  <div>
    <!-- 头部信息 -->
    <top-title></top-title>
    <!-- 瀑布流 -->
    <!-- 一列的内容控制 -->
    <!-- line-gap 行高 -->
    <waterfall :line-gap="200">
      <!-- 一行的内容控制 -->
      <!-- 设置长宽 -->
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
// 此文件需要在home文件夹下,若再在此文件的子文件下会消失热插拔效果
export default {
  components: {
    'Waterfall': () => import('vue-waterfall/lib/waterfall'),
    'WaterfallSlot': () => import('vue-waterfall/lib/waterfall-slot'),
    'TopTitle': () => import('@/view/components/TopTitle'),
    'ComponentText': () => import('@/view/home/components/ComponentText.vue'),
    'DynamicData': () => import('@/view/home/components/DynamicData.vue'),
    'DataText': () => import('@/view/home/components/DataText.vue'),
    'TwoWayBinding': () => import('@/view/home/components/TwoWayBinding.vue')
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
