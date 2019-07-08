# vue-demo

> A Vue.js project

## Clear the `node_modules` Tree

``` bash
# remove node_modules
rm -rf node_modules

# remove package-lock.json
rm package-lock.json

# clear the module tree
npm cache clear --force

# install node_modules
npm install
```

## Ace

&emsp;有一个需求是引入[`Ace`](https://github.com/ajaxorg/ace)模快进行输入文本自动匹配的功能，先已完成简单的内容，后续会不断的更迭此模快内容。但是基于是vue项目目前也未全部引用 Ace 模块，而是借助于vue的另一个 npm 组件[`vue2-ace-editor`](https://www.npmjs.com/package/vue2-ace-editor)来实现此功能的。
&emsp;参考资料：
  1. [Vue.js简单集成ACE代码编辑器](https://blog.csdn.net/YoshinoNanjo/article/details/82978668)

> 引入和使用

``` bash
  $ npm install --save-dev vue2-ace-editor
```

&emsp;目前我们需要的模块并不是 ace 或 vue2-ace-editor ，而是在 node_modules 中的 brace 模块（目前我也没搞懂到底为什么是它，但是管用）。<br />
&emsp;[`brace`](https://www.npmjs.com/package/brace)的坑也好多...

``` javascript
  <script>
    var ace = require('brace')

    export default {
      data () {
        return {}
      },
      components: {
        editor: require('vue2-ace-editor')
      },
      mounted () {
        ...
        // 具体参见 src/view/components/aceText 和 src/view/components/textAce
      }
    }
  </script>
```

> other

&emsp;目前已知需通过JS框架链接数据库，所以需要先创建数据库与JS链接，或者通过中间件查询数据库
- [ ] JS链接数据库框架
- [ ] 尝试做一个中间层

## D3.js

&emsp;参考资料：
  1. [D3.js 入门系列 — 选择元素和绑定数据](https://www.cnblogs.com/tanlujia/p/6376686.html)
  2. [桔子桑](http://www.ecoblog.online/#/web/list?catid=6)

> 引入和使用

&emsp;因为目前项目中的D3版本为此版本，所以以项目为中心安装此依赖
``` node
  $ npm install --save-dev d3@5.7.0
```

> other

&emsp;在参考其他资料时遇到一个关于自己创建 node_modules 的问题，即自己在原有依赖的基础上自己创建一个新的 function ，在此需要说明一下，当创建完此方法后一定要在此文件夹下的 index.js 中做函数引用后方可在代码中调用此方法，否则程序会报 undefined
