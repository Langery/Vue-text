<template>
  <div>
    <button @click="addWrapper()">
      Add Comment
    </button>
    <div id="content">
      <!-- <div class="demo-split">
        <Split v-model="split1">
          <div slot="left" class="demo-split-pane">
            Left Pane
          </div>
          <div slot="right" class="demo-split-pane">
            Right Pane
          </div>
        </Split>
      </div> -->
      
      <div id="div1">

        Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的<span id="target1" class="textdiv">渐进式框架</span>。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
      </div>

      <div id="div2" class="mydiv"></div>
      <div id="line" class="line"></div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      split1: 0.5,
      num: 1
    }
  },
  props: [
  ],
  mounted () {
    this.adjustLine(
      document.getElementById('target1'),
      document.getElementById('div2')
    )
  },
  methods: {
    adjustLine (from, to, line = document.getElementById('line')) {
      var zIndex = getComputedStyle(from).getPropertyValue("z-index")
      zIndex = zIndex === "auto" ? 0 : +zIndex
      var fT = from.offsetTop + from.offsetHeight / 2
      var tT = to.offsetTop + to.offsetHeight / 2
      var fL = from.offsetLeft + from.offsetWidth / 2
      var tL = to.offsetLeft + to.offsetWidth / 2

      // 三角高
      var CA = Math.abs(tT - fT)
      // 三角底边长
      var CO = Math.abs(tL - fL)
      // 勾股定理算斜边
      var H = Math.sqrt(CA * CA + CO * CO)
      // 计算斜边与底边的夹角
      var ANG = 180 / Math.PI * Math.acos(CA / H)

      var top = Math.abs((tT - fT) / 2) + Math.min(fT, tT)
      var left = Math.abs((tL - fL) / 2) + Math.min(fL, tL)

      if ((fT < tT && fL < tL) || (tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)) ANG *= -1
      top -= H / 2

      line.style["-webkit-transform"] = 'rotate(' + ANG + 'deg)'
      line.style["-moz-transform"] = 'rotate(' + ANG + 'deg)'
      line.style["-ms-transform"] = 'rotate(' + ANG + 'deg)'
      line.style["-o-transform"] = 'rotate(' + ANG + 'deg)'
      line.style["-transform"] = 'rotate(' + ANG + 'deg)'
      line.style.top = top + 'px'
      line.style.left = left + 'px'
      line.style.height = H + 'px'
      line.style.zIndex = zIndex - 1
    },
    addWrapper () {
      var selection = window.getSelection()
      let range = selection.getRangeAt(0)
      let documentFragment = range.extractContents()
      let n = document.createElement("span")
      n.appendChild(documentFragment)
      n.classList.add("textdiv")
       
      this.num++
      n.setAttribute('id', `target${this.num}`)
      
      let ndiv = document.createElement('div')
      let nline = document.createElement('div')
      
      const content = document.getElementById('content')

      ndiv.classList.add('mydiv')
      nline.classList.add('line')

      ndiv.setAttribute('id', `comment${this.num}`)
      nline.setAttribute('id', `line${this.num}`)
      
      content.insertBefore(ndiv, content.lastChild)
      content.insertBefore(nline, content.lastChild)

      range.insertNode(n)
      console.log(documentFragment)

      this.adjustLine(
        document.getElementById(`target${this.num}`),
        document.getElementById(`comment${this.num}`)
      )
    }
  }
}
</script>

<style>
#content{
  position:relative;
}
.textdiv{
  border:1px solid #368ABB;
  background-color:#43A4DC;
}
.mydiv{
  border:1px solid #368ABB;
  background-color:#43A4DC;
  float: right;
  width:100px;
  min-height:40px;
}

#div1{
  width:80%;
  display: inline-block;
}
#div2{
  /* float: right;
  width:100px;
  min-height:40px; */
}

.line{
  position:absolute;
  width:2px;
  margin-top:-1px;
  background-color:red;
}
</style>
