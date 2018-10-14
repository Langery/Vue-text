<template>
  <ul>
    <li v-for="(article, index) in articles" :key="index">
      {{article.title}}
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      articles: []
    }
  },
  mounted: function () {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
      headers: {

      },
      emulateJSON: true
    }).then(response => {
      // 这里是处理正确的回调
      this.articles = response.data.subjects
      // this.articles = response.data["subjects"] 也可以
    }, response => {
      // 这里是处理错误的回调
      console.log(response)
    })
  }
}
</script>

<style lang="less" scoped>
ul{
  list-style-type: none;
  width: 100%;
  height: 100%;
  background: #F19483;
  li{
    float: left;
    padding-left: 10px;
    color: #0C0C0C;
  }
}
</style>
