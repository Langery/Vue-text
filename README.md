# vue-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

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

> 引入和使用

``` bash
  $ npm install --save-dev vue2-ace-editor
```

&emsp;目前我们需要的模块并不是 ace 或 vue2-ace-editor ，而是在 node_modules 中的 brace 模块（目前我也没搞懂到底为什么是它，但是管用）。

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
