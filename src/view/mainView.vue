<template>
  <div class="mainView">
    <!-- <h1>彩蛋</h1>
    <p>点击一次和双击</p> -->
    <!--  @dblclick="second()" -->
    
    <!-- <button @click="first()">点击一下</button>
    <span>{{say}}</span> -->

    <!-- <one
      v-on:one="two"
    ></one> -->
    <!-- <text-ace></text-ace> -->
    <!-- <data-btn></data-btn> -->
    <!-- <ace-text></ace-text> -->
    <!-- <tree-diagram></tree-diagram> -->
    <!-- <test-dia></test-dia> -->
    <!-- <transit-animat></transit-animat> -->
    <!-- <radial-dendrogram></radial-dendrogram> -->
    <!-- <chord-dia></chord-dia> -->
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
    'one': () => import('@/view/components/one'),
    'TextAce': () => import('@/view/components/textAce'),
    'DataBtn': () => import('@/view/components/dataBtn'),
    'AceText': () => import('@/view/components/aceText'),
    'TreeDiagram': () => import('@/view/components/D3/treeDiagram'),
    'TestDia': () => import('@/view/components/D3/testDia'),
    'TransitAnimat': () => import('@/view/components/transitAnimat'),
    'RadialDendrogram': () => import('@/view/components/D3/radialDendrogram'),
    'ChordDia': () => import('@/view/components/D3/chordDia')
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
      // this.count++
      // new Promise((resolve, reject) => {
      //   this.count % 2 === 0 ? resolve() : reject(new Error())
      // }).then(() => {
      //   this.say = person.say
      // }, () => {
      //   this.say = ''
      // })
    },
    second () {
      this.say = ''
    }
  }
}
</script>

<style lang="less" scoped>
</style>
