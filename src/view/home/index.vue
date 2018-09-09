<template>
  <div>
    <general-ass></general-ass>
    <component-text></component-text>
    <dynamic-data></dynamic-data>
    <data-text></data-text>
    <two-way-binding></two-way-binding>
    <cascade-form></cascade-form>
  </div>
</template>

<script>
import ComponentText from '@/view/home/components/ComponentText.vue'
import GeneralAss from '@/view/components/GeneralAss.vue'
import DynamicData from '@/view/home/components/DynamicData.vue'
import DataText from '@/view/home/components/DataText.vue'
import TwoWayBinding from '@/view/home/components/TwoWayBinding.vue'
import CascadeForm from '@/view/components/CascadeForm'

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
    ComponentText,
    GeneralAss,
    DynamicData,
    DataText,
    TwoWayBinding,
    CascadeForm
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
