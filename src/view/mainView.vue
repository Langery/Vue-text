<template>
  <div class="mainView">
    <h1>彩蛋</h1>
    <p>点击一次和双击</p>

    <button @click="first()" @dblclick="second()">点击一下</button>
    <span>{{say}}</span>

    <one
      v-on:one="two"
    ></one>
    <!-- <text-ace></text-ace> -->
    <!-- <data-btn></data-btn> -->
    <!-- <ace-text></ace-text> -->
    <section>
      <my-list>
        <template v-slot:header>name：header具名插槽</template>
        <div>内容被放到默认插槽中</div>
        <template v-solt:footer>Footer 插槽</template>
      </my-list>
    </section>
    <xlsx></xlsx>
    <excel></excel>
    <br />
    <!-- <text-notes></text-notes> -->
    <float-menu></float-menu>
    <!-- <div class="goodShow">

      <Anchor show-ink :affix="false" container=".goodShow">
        <AnchorLink href="#basic_usage" title="Basic Usage" />
        <AnchorLink href="#static_position" title="Static Position" />
      </Anchor>

      <div id="basic_usage" style="height:30rem;">12312312312</div>
      <div id="static_position" style="height:30rem;">123123123123</div>

    </div> -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      say: '',
      count: 0
    }
  },
  components: {
    myList: {
      template:
      `<div>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>`
    },
    'one': () => import('@/view/components/one'),
    'TextAce': () => import('@/view/components/textAce'),
    'DataBtn': () => import('@/view/components/dataBtn'),
    'AceText': () => import('@/view/components/aceText'),
    'Xlsx': () => import('@/view/components/xlsx'),
    'Excel': () => import('@/view/components/excel'),
    // 'TextNotes': () => import('@/view/components/textNotes')
    'FloatMenu': () => import('@/view/components/floatMenu')
    // 'TreeDiagram': () => import('@/view/components/D3/treeDiagram'),
    // 'TestDia': () => import('@/view/components/D3/testDia'),
    // 'TransitAnimat': () => import('@/view/components/transitAnimat'),
    // 'RadialDendrogram': () => import('@/view/components/D3/radialDendrogram'),
    // 'ChordDia': () => import('@/view/components/D3/chordDia'),
    // 'AnalysisDiagram': () => import('@/view/components/D3/analysisDiagram')
  },
  created () {
  },
  mounted () {
    this.classFun()
  },
  methods: {
    classFun () {
      class Point {
        constructor (x, y) {
          this.x = x
          this.y = y
        }
      }
      /**
       * defined the Class function
       * Point is a object and get the parameters
       * user can give one or some parameters to set its attribute
       */
      let testP = new Point(1, 5)
      console.log(testP)
    },
    two (one, three) {
      console.log(one)
      console.log(three)
    },
    first () {
      const person = {
        name: 'Story',
        age: '24',
        like: 'guitar',
        say: '第一个彩蛋'
      }
      this.say = person.say
    },
    second () {
      this.say = ''
    }
  }
}
</script>

<style lang="less" scoped>
.goodShow{
  position: relative;
  overflow-y: scroll;
}
</style>
