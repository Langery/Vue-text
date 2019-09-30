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
      </my-list>
    </section>
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
      </div>`
    },
    'one': () => import('@/view/components/one'),
    'TextAce': () => import('@/view/components/textAce'),
    'DataBtn': () => import('@/view/components/dataBtn'),
    'AceText': () => import('@/view/components/aceText')
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
    
  },
  methods: {
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
</style>
