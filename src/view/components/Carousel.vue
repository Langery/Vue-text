<template>
  <div class="lunbo">
    <div class="tupian">
      <ul>
        <li v-for="(item,index) in ImgList" :key="index">
          <img :src="item.img" alt="">
        </li>
      </ul>
    </div>
    <div class="anniu">
      <div class="leftBtn">

      </div>
      <div class="rightBtn">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   /*可循环*/
  //   loop: {
  //     type: Boolean,
  //     default: true
  //   },
  //   /*自动播放*/
  //   autoPlay: {
  //     type: Boolean,
  //     default: true
  //   },
  //   /*间隔*/
  //   interval: {
  //     type: Number,
  //     default: 4000
  //   }
  // },
  data () {
    return {
      clickJudge: false,
      ImgList: [
        {
          img: '../static/Chou.jpg'
        },
        {
          img: '../static/Jay.jpg'
        },
        {
          img: '../static/JJ.jpeg'
        }
      ]
    }
  },
  mounted () {
    setTimeout(() => {

    })
  },
  methods: {
    // 点击切换图片
    change () {

    },
    // 鼠标点击拖拽图片
    mouseDraw () {

    },
    // 底部点击切换图片
    bottomBtn () {

    },
    // 自动切换图片
    autoPlay () {

    }
  }
}
</script>

<style lang="css">
.lunbo{
  width: 100%;
  height: 100%;
}
.tupian{
  overflow: hidden;
}
ul{
  width: 100%;
  height: 100%;
  list-style-type: none;
}
li{
  float: left;
  height: 280px;
  overflow: hidden;
}
</style>
