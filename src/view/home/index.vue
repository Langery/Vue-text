<template>
  <div>
    <GeneralAss></GeneralAss>
    <ComponentText></ComponentText>
    <DynamicData></DynamicData>
  </div>
</template>

<script>
import ComponentText from '@/view/home/components/ComponentText.vue'
import GeneralAss from '@/view/components/GeneralAss.vue'
import DynamicData from '@/view/home/components/DynamicData.vue'
export default {
  components: {
    ComponentText,
    GeneralAss,
    DynamicData
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
