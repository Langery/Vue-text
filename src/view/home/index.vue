<template>
  <div>
    <top-title></top-title>
    <component-text></component-text>
    <dynamic-data></dynamic-data>
    <data-text></data-text>
    <two-way-binding></two-way-binding>
    <cascade-form></cascade-form>
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
    'CascadeForm': () => import('@/view/components/CascadeForm')
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
