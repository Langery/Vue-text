<template>
  <div>
    <!-- 头部信息 -->
    <top-title></top-title>
    <!-- 瀑布流 -->
    <!-- 一列的内容控制 -->
    <waterfall :line-gap="200">
      <waterfall-slot :width="500" :height="500">
        <progress-bar></progress-bar>
      </waterfall-slot>
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
    <waterfall :line-gap="200">
      <waterfall-slot :width="500" :height="500">
        <dynamic-data></dynamic-data>
      </waterfall-slot>
      <waterfall-slot :width="500" :height="500">
        <cascade-form></cascade-form>
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
    'ProgressBar': () => import('@/view/home/components/ProgressBar'),
    'TopTitle': () => import('@/view/components/TopTitle'),
    'ComponentText': () => import('@/view/home/components/ComponentText.vue'),
    'DynamicData': () => import('@/view/home/components/DynamicData.vue'),
    'DataText': () => import('@/view/home/components/DataText.vue'),
    'TwoWayBinding': () => import('@/view/home/components/TwoWayBinding.vue'),
    'CascadeForm': () => import('@/view/components/CascadeForm'),
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
