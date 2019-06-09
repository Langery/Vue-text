<template>
  <div class="mainView">
    <h1>彩蛋</h1>
    <p>点击一次和双击</p>
    <!--  @dblclick="second()" -->
    <button @click="first()">点击一下</button>
    <span>{{say}}</span>
    <one
      v-on:one="two"
    ></one>
    <editor v-model="content" @init="editorInit" lang="javascript" theme="chrome" width="500" height="500" id="editor" style="float:left;"></editor>
    <div style="width: 60%; float: right;">
      <div><button id="rundata" @click="rundata()">RUN</button></div>
      <div><iframe id="iframe1"></iframe></div> 
    </div>
  </div>
</template>

<script>
var ace = require('brace')

export default {
  data () {
    return {
      say: '',
      count: 0,
      content: ''
    }
  },
  components: {
    'one': () => import('@/view/components/one'),
    editor: require('vue2-ace-editor')
  },
  created () {
  },
  mounted () {
    // var ace = require('vue2-ace-editor')
    var editorEle = ace.edit('editor')
    editorEle.setOptions({
      enableLiveAutocompletion: true
    })
    console.log(editorEle)
    editorEle.setTheme('brace/theme/monokai')
    editorEle.getSession().setMode('brace/mode/javascript')
    editorEle.setFontSize(16)
    this.initEditor()
    this.editorInit()
  },
  methods: {
    editorInit (editor) {
      require('brace/ext/language_tools') // language extension prerequsite...
      require('brace/mode/html')                
      require('brace/mode/javascript') // language
      require('brace/mode/less')
      require('brace/theme/chrome')
    },
    initEditor (editor) {
      require('brace/mode/json')
      require('brace/theme/chrome')
    },
    rundata () {
      // 获取输入框内的数据
      var text = document.getElementById('editor').innerText
      var iframe = document.getElementById('iframe1')
      // 先清空iframe
      if (iframe.contentWindow.document.body != null) {
        iframe.contentWindow.document.body.innerText = ''
      }
      // 添加script标签，去掉开头的行号
      var ctext = '<script>' + text.replace(/\d\n/g, '') + '<\/script>'
      console.log(ctext)
      // 替换控制台打印(伪装效果)
      if (ctext.indexOf('console.log') > 0) {
        ctext = ctext.replace('console.log', 'document.write')
      }
      console.log(ctext)
      // 将输入框内的数据传给iframe
      iframe.contentDocument.write(ctext)
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
.mainView{}
</style>
<style>
</style>
