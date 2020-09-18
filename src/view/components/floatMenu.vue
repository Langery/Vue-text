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
      showMenu: false
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.float-menu{
  position: fixed;
  right: 0;
  top: 100px;
}
.left-icon{
  display: inline-block;
  width: 50px;
  height: 50px;
  background: #ccffcc;
  position: relative;
  right: 0px;
  top: -125px;
  border-radius: 20% 0 0 20%;
}
img{
  width: 40px;
  height: 40px;
}
.right-infor{
  display: inline-block;
  width: 0px;
  transition: width 800ms;
  -moz-transition: width 800ms; /* Firefox 4 */
  -webkit-transition: width 800ms; /* Safari and Chrome */
  -o-transition: width 800ms; /* Opera */
  border: 2px #ccc solid;
  text-align: start;
}
.left-icon:hover ~ .right-infor{
  width: 150px;
}
.right-infor:hover{
  width: 150px;
}
</style>
