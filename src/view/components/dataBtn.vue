<template>
  <div>
    <div v-for='(item, index) in this.nameMap' :key='index'>
      <div v-for="(jtem, i) in item" :key="i" class="word-box">
        <span :class="jtem[1] === 'O' ? '' : 'back-span'" @click="clickWord(jtem, i)">
          <span class="word-up">{{jtem[0]}}</span>
          <span class="word-down" v-if="jtem[1] !== 'O'">{{jtem[1]}}</span>
          <span class="word-down" v-if="jtem[1] === 'O'">&nbsp;</span>
        </span>
        <tool-tip
          v-show="showTop === jtem[0]" 
          v-if="jtem[1] !== 'O'"
          :sendJ="sendJ"
          :sendI="sendI"
          >
        </tool-tip>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  components: {
    'ToolTip': () => import('@/view/components/toolTip')
  },
  data () {
    return {
      nameMap: {
        '0': [
          ['Ilhan', 'O', {}],
          ['Omar', 'PER', {}],
          ['Democrat', 'MISC', {}]
        ],
        '1': [
          ['The', 'O', {}],
          ['US', 'LOC', {}],
          ['president', 'O', {}],
          ['spliced', 'PER', {}],
          ['Ilhan Omar', 'PER', {}]
        ],
        '10': [
          ['Democrats', 'MISC', {}],
          [',', 'O', {}]
        ]
      },
      showTop: '',
      sendJ: [],
      sendI: 0
    }
  },
  mounted () {

  },
  methods: {
    clickWord (item, i) {
      console.log(item)
      console.log(i)
      if (this.showTop === item[0]) {
        this.showTop = ''
        this.sendI = 0
        this.sendJ = []
      } else {
        this.showTop = item[0]
        this.sendJ = item
        this.sendI = i
        console.log(this.sendJ, this.sendI)
      }
    }
  }
}
</script>

<style scope>
.word-box{
  display: inline-block;
  font-size: 16px;
  margin: 5px 10px 0px 0px;
  padding: 6px;
  text-align: center;
  color: #303133;
  position: relative;
}
.back-span{
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: #eee;
  border-radius: 3px;
  cursor: pointer;
}
.word-up{
  display: block;
  font-weight: 700;
}
.word-down{
  display: block;
  font-size: 10px !important;
  font-style: italic !important;
  opacity: 0.5 !important;
}
</style>
