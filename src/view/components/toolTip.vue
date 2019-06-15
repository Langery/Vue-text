<template>
  <div class="top-box">
    <img @click="changeImg1()" :class="activeImg1 === sendI ? 'activeButton' : ''" class="img-up buttonCustom">
    <img @click="changeImg2()" :class="activeImg2 === sendI ? 'activeButtoned' : ''" class="img-down buttonCustomer">
  </div>
</template>

<script>
export default {
  props: {
    sendJ: Array,
    sendI: Number
  },
  data () {
    return {
      activeImg1: -1,
      activeImg2: -1
    }
  },
  mounted () {
  },
  methods: {
    changeImg1 () {
      if (this.activeImg2 === this.sendI) {
        this.activeImg2 = -1
        this.activeImg1 = this.sendI
      } else if (this.activeImg1 === this.sendI) {
        this.activeImg1 = -1
      } else {
        this.activeImg1 = this.sendI
      }
    },
    changeImg2 () {
      if (this.activeImg1 === this.sendI) {
        this.activeImg1 = -1
        this.activeImg2 = this.sendI
      } else if (this.activeImg2 === this.sendI) {
        this.activeImg2 = -1
      } else {
        this.activeImg2 = this.sendI
      }
    }
  }
}
</script>

<style scoped>
.top-box{
  display: inline-block;
  width: 100px;
  height: 40px;
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: solid 1px #dcdfe6;
  position: absolute;
  top: -45px;
  left: -10px;
}
.img-up{
  position: absolute;
  top: 10px;
  left: 25%;
  cursor: pointer;
  z-index: 100;
}
.img-down{
  position: absolute;
  top: 10px;
  right: 25%;
  cursor: pointer;
  z-index: 100;
}

.buttonCustom{
  background-image:url('../../assets/img/zan.png');
  width: 20px;
  height: 20px;
}
.buttonCustom:hover{
  background-image:url('../../assets/img/zan2.png');
  width: 20px;
  height: 20px;
}
.buttonCustom.activeButton{
  background-image:url('../../assets/img/zan4.png');
}
.buttonCustomer{
  background-image:url('../../assets/img/zan1.png');
  width: 20px;
  height: 20px;
}
.buttonCustomer:hover{
  background-image:url('../../assets/img/zan3.png');
  width: 20px;
  height: 20px;
}
.buttonCustomer.activeButtoned{
  background-image:url('../../assets/img/zan5.png');
}
</style>
