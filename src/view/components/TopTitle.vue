<template>
  <div class="toptitle">
    <h2>{{titleName}}</h2>
  </div>
</template>

<script>
export default {
  name: 'top-title',
  data () {
    return {
      titleName: 'Vue学习整理'
    }
  }
}
</script>

<style lang="less" scoped>
.toptitle{
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #86A697;
  border-bottom: 1px solid #BDC0BA;
  h2{
    color: #FCFAF2;
    margin: 0;
    text-align: start;
    padding-left: 20px;
    font-weight: normal;
  }
}
</style>
