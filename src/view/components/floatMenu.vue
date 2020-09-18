<template>
  <div class="float-menu" ref="floatMenu">
    <!-- loop list -->
    <img src="../../assets/logo.png" />
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
img{
  background: #ccffcc;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  display: inline-block;
  position: absolute;
  top: 0;
  left: -50px;
}
.right-infor{
  display: inline-block;
  width: 0px;
  transition: width 800ms;
  -moz-transition: width 800ms; /* Firefox 4 */
  -webkit-transition: width 800ms; /* Safari and Chrome */
  -o-transition: width 800ms; /* Opera */
}
img:hover ~ .right-infor{
  width: 150px;
}
.right-infor:hover{
  width: 150px;
}
</style>
