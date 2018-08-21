<template>
  <div>
    <general-ass></general-ass>
    <component-text></component-text>
    <dynamic-data></dynamic-data>
    <data-text></data-text>
  </div>
</template>

<script>
import ComponentText from '@/view/home/components/ComponentText.vue'
import GeneralAss from '@/view/components/GeneralAss.vue'
import DynamicData from '@/view/home/components/DynamicData.vue'
import DataText from '@/view/home/components/DataText.vue'

export default {
  components: {
    ComponentText,
    GeneralAss,
    DynamicData,
    DataText
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>

</style>
