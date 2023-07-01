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

>  will doing & thinking

- [ ] 富文本编辑
- [ ] 图片处理
- [ ] 视频流处理

## Ace

&emsp;有一个需求是引入 [`Ace`](https://github.com/ajaxorg/ace) 模快进行输入文本自动匹配的功能，现已完成简单的内容，后续会不断的更迭此模快内容。但是基于是vue项目目前也未全部引用 Ace 模块，而是借助于vue的另一个 npm 组件 [`vue2-ace-editor`](https://www.npmjs.com/package/vue2-ace-editor) 来实现此功能的。
&emsp;参考资料：
  1. [Vue.js简单集成ACE代码编辑器](https://blog.csdn.net/YoshinoNanjo/article/details/82978668)

> 引入和使用

``` node
  $ npm install --save-dev vue2-ace-editor
```

&emsp;目前我们需要的模块并不是 ace 或 vue2-ace-editor ，而是在 node_modules 中的 brace 模块（目前我也没搞懂到底为什么是它，但是管用）。<br />
&emsp;[`brace`](https://www.npmjs.com/package/brace) 的坑也好多...

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

- [ ] ~~JS链接数据库框架~~
- [ ] 尝试做一个中间层

&emsp;Vue 层面问题

- [ ] 卫星守卫内部细节
- [ ] RxJS 功能操作未实现

## D3.js

&emsp;参考资料：

  1. [D3.js 入门系列 — 选择元素和绑定数据](https://www.cnblogs.com/tanlujia/p/6376686.html)
  2. [桔子桑](http://www.ecoblog.online/#/web/list?catid=6)
  3. [d3.js - force力学图](https://www.jianshu.com/p/cd618edc11a8)
  4. [D3 入门笔记](https://www.cnblogs.com/WEI-web/p/7209246.html)
  5. [D3力导向图及树状布局变换](https://blog.csdn.net/dlwbill/article/details/78083701)
  6. [D3 API Reference](https://github.com/d3/d3/blob/master/API.md)
  7. [svg给出两点坐标连一条曲线](https://www.jianshu.com/p/30f1ee0809d7)
  8. [D3 Cluster Dendrogram](https://observablehq.com/@awring/d3-cluster-dendrogram)
  9. [【 D3.js 入门系列 --- 9.3 】 弦图的制作](http://blog.sina.com.cn/s/blog_663d9a1f0102w5gn.html)
  10. [Circle Packing](https://observablehq.com/@d3/circle-packing)
  11. [D3 API Analysis](https://observablehq.com/@ahoak/d3-api-analysis)

> 引入和使用

&emsp;因为目前项目中的D3版本为此版本（V5.7.0），所以以项目为中心安装此依赖
``` node
  $ npm install --save-dev d3@5.7.0
```

> 关于扩展自定义 node_modules 模块

&emsp;在参考其他资料时遇到一个关于自己创建 node_modules 的问题，即自己在原有依赖的基础上自己创建一个新的 function ，在此需要说明一下，当创建完此方法后一定要在此文件夹（同级文件夹）下的 index.js 中做函数引用后方可在代码中调用此方法，否则程序会报 undefined

## xlsx

## excelJS

## Vue Node

1. [【应用】使用 vue-router 之导航守卫 + meta + localStorage 实现在未登录状态下跳转到登录页面的功能](https://blog.csdn.net/Dora_5537/article/details/88328578)
2. `config/index.js` 需要更改开发与生产的路径。`assetsPublicPath` 需要改成 `./`
3. [element-ui表格的表头使用类似下拉框样式](https://blog.csdn.net/qq_42376226/article/details/88144210)
4. [element UI table 实现合并单元格](https://blog.csdn.net/qq_16855093/article/details/82584734)
5. [【专题】（vue+element-ui）动态设置tabel列的显示与隐藏](https://blog.csdn.net/lu_kuankuan/article/details/82222372)
