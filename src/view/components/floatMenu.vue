<template>
  <div class="float-menu" ref="floatMenu">
    <!-- loop list -->
    <div class="left-icon">
      <img src="../../assets/logo.png" />
      <!-- <slot></slot> -->
    </div>
    <div class="right-infor">
      <Anchor show-ink>
        <AnchorLink href="#one" title="Basic Usage" />
        <AnchorLink href="#static_position" title="Static Position" />
        <AnchorLink href="#API" title="API">
          <AnchorLink href="#Anchor_props" title="Anchor props" />
          <AnchorLink href="#Anchor_events" title="Anchor events" />
          <AnchorLink href="#AnchorLink_props" title="AnchorLink props" />
        </AnchorLink>
      </Anchor>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.float-menu{
  position: fixed;
  right: -50px;
  top: 100px;
}
.left-icon{
  width: 50px;
  height: 50px;
  background: #ccffcc;
  position: relative;
  right: 50px;
  top: 55px;
  border-radius: 20% 0 0 20%;
  border: 1px #ccc solid;
  box-shadow: 3px 3px 3px #E9E9E9;
  z-index: -1;
}
img{
  width: 40px;
  height: 40px;
}
.right-infor{
  background: #fff;
  padding: 10px;
  width: 0px;
  transition: width 800ms;
  -moz-transition: width 800ms; /* Firefox 4 */
  -webkit-transition: width 800ms; /* Safari and Chrome */
  -o-transition: width 800ms; /* Opera */
  border: 1px #ccc solid;
  text-align: start;
  box-shadow: 3px 3px 3px 3px #E9E9E9;
  border-radius: 10px 0 0 10px;
  z-index: 100;
}
.left-icon:hover ~ .right-infor{
  width: 185px;
}
.right-infor:hover{
  width: 185px;
}
</style>
