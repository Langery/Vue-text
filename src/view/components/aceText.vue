<template>
  <div class="text-css">
    <editor v-model="content" @init="editorInit" lang="sql" theme="chrome" width="500" height="500" id="editor" style="float:left;"></editor>
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
      content: ''
    }
  },
  components: {
    editor: require('vue2-ace-editor')
  },
  mounted () {
    var editor = document.getElementById('editor')
    var editorEle = ace.edit(editor)
    console.log(editorEle)
    // editorEle.setTheme('brace/theme/monokai')
    editorEle.setTheme('brace/theme/sqlserver') // 设置主题
    editorEle.getSession().setMode('brace/mode/sql')
    editorEle.setFontSize(16)
    editorEle.setOptions({
      enableLiveAutocompletion: true, // 设置自动提示
      autoScrollEditorIntoView: true
    })
    this.editorInit()
    this.initEditor()
  },
  methods: {
    editorInit (editor) {
      require('brace/ext/language_tools') // language extension prerequsite...
      require('brace/mode/sqlserver')
      require('brace/mode/sql') // language
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
      // eslint-disable-next-line
      var ctext = text.replace(/\d\n/g, '')
      console.log(ctext)
      // 替换控制台打印(伪装效果)
      if (ctext.indexOf('console.log') > 0) {
        ctext = ctext.replace('console.log', 'document.write')
      }
      console.log(ctext)
      // 将输入框内的数据传给iframe
      iframe.contentDocument.write(ctext)
    }
  }
}
</script>

<style scoped>
.text-css{
  clear: both;
  width: 100%;
  height: auto;
  overflow: hidden;
}
</style>
<style>
.ace_line{
  float: left;
  clear: both;
}
</style>
