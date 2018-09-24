<template>
  <div class="progress-bar">
    <h2>My skill</h2>
    <ul id="skill">
      <li>
        <span class="expand html5"></span>
        <em>HTML 5</em>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.progress-bar{
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
}
#skill{
  list-style:none;
  padding-top:30px;
  li {
    margin-bottom:70px;
    background:#554236;
    height:5px;
    border-radius:3px;
    border-left:1px solid #111;
    border-top:1px solid #111;
    border-right:1px solid #333;
    border-bottom:1px solid #333;
    em {
      position:relative;
      top: -30px;
      font: 12px normal Verdana;
    }
  }
}
.expand { 
  height: 1px;
  background: #D7B98E;
  position: absolute;
  left: 5px;
  margin: 2px 0px;
}
.html5{
  width:70%;
  -moz-animation:html5 2s ease-out;
  -webkit-animation:html5 2s ease-out;
}
@-moz-keyframes html5 { 0% { width:0px;} 100%{ width:70%;}  }
@-webkit-keyframes html5  { 0% { width:0px;} 100%{ width:70%;}  }
</style>
