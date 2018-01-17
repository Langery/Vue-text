<template>
  <div id="one">
      <h1>标题</h1>
      <a href="/#/" class="uppage">上一页</a>
      <a class="authorname">作者：{{ author }}</a>
      <a href="/#/new page" class="downpage">下一页</a>
  </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return{
                author: 'story'
            }
        }
    }
</script>
<style>
h1{
    font-weight: normal;
}
.authorname{
    color: orange;
}
.uppage{
    color: pink;
    margin: 0 5%;
}
.downpage{
    color: pink;
    margin: 0 5%;
}
</style>

