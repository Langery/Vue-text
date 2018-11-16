<template>
  <div class="lunbo">
    <div class="tupian">
      <ul id="imgul">
        <li class="imgli" v-for="(item,index) in ImgList" :key="index">
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
      i: 0,
      timer: null,
      j: 0,
      clickJudge: false,
      ImgList: [
        {
          img: '../static/Jay1.jpg'
        },
        {
          img: '../static/Jay2.jpg'
        },
        {
          img: '../static/Jay3.jpg'
        },
        {
          img: '../static/Jay1.jpg'
        }
      ]
    }
  },
  mounted () {
    setInterval(() => {
      const listNum = this.ImgList.length
      if (this.i < listNum - 1) {
        this.i++
        // 获取到li的下标,可以监听到当前的li
        // const index = this.i - 1
        // 修改li的样式
        // debugger
        const ulpx = '-600' * this.i + 'px'
        document.getElementById('imgul').style.left = ulpx
        console.log(document.getElementById('imgul').style.left)
      } else if (this.i === listNum - 1) { // 3
        this.i = 0
        document.getElementById('imgul').style.left = '0px'
      }
    }, 4000)
  },
  methods: {
    // 点击切换图片 左右按钮 Btn
    change () {

    },
    // 鼠标点击拖拽图片 mouseover mouserup
    mouseDraw () {

    },
    // 底部点击切换图片
    bottomBtn () {

    },
    // 自动切换图片 setTimeout
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
  width: 600px;
  height: 280px;
  position: relative;
}
ul{
  width: 2400px;
  list-style: none;
  list-style-type: none;
  position: absolute;
  top: 0px;
  left: 0px;
}
li{
  float: left;
  height: 280px;
  overflow: hidden;
  left: 0px;
  top: 0px;
}
</style>
