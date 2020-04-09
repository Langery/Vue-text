<template>
  
</template>

<script>
import Excel from 'exceljs'

export default {
  data () {
    return {}
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      var workbook = new Excel.Workbook()
      workbook.creator = 'Me'
      workbook.lastModifiedBy = 'Her'
      workbook.created = new Date(1985, 8, 30)
      workbook.modified = new Date()
      workbook.lastPrinted = new Date(2016, 9, 27)
      workbook.properties.date1904 = true
      console.log(workbook)
    }
  }
}
</script>

<style scoped>

</style>
