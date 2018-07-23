# <center>Vue搭建与发布</center>

##  所需软件
1. NodeJs
2. Git
3. 任意前端编辑器,如:Atom、VS Code、Sublime、WebStorm

## 创建模板项目(delete)
### 安装vue脚手架
打开 `Git Bash` , 通过 `cd` 命令到达指定文件夹内执行脚手架的安装操作<br/>
**注:** 如果外网访问较慢，可以使用淘宝镜像: https://npm.taobao.org/

    $ npm install -g cnpm --registry=https://registry.npm.taobao.org

安装脚手架:

    $ npm install vue-cli -g

或(淘宝镜像安装后的情况下):

    $ cnpm install vue-cli -g

**注:** 淘宝镜像安装后,所有的 `npm` 都可以用 `cnpm` 来替换

### 初始化项目
    $ vue init webpack vue-demo
一直回车到自动安装插件库———— `node_modules`

### 安装依赖
若没有安装 `node_modules` 则执行:

    $ npm install

### 启动项目
    $ cd vue-demo/
    $ npm run dev
浏览器打开 `http://localhost:8080` 进行访问

## 基本(基础)项目结构
> 组件化开发基本结构:

    |-build                       // 构建脚本目录          
    | 　|-webpack.base.conf.js    // webpack基本配置 
    | 　|-webpack.dev.conf.js     // webpack开发环境配置
    | 　|-webpack.prod.conf.js    // webpack生产环境配置
    |-config                      // 项目配置   
    |   |-index.js                // 配置访问接口
    |-node_modules                // node依赖包   
    |-src   
    | 　|-assets                  // 本地资源目录   
    | 　| 　|-css                 // CSS目录  
    | 　| 　|-images              // 图片文件目录  
    | 　| 　|-script              // JS目录   
    |　 |-router                  // 路由目录  
    |　 |-view                    // 视图层文件目录 
    | 　| 　|-components          // 通用组件目录  
    | 　|　 |-home                // 各界面视图层文件目录(如:home)  
    | 　|　 | 　|-components      // 当前视图层组件文件目录  
    | 　|　 |　 |-index.vue       // 当前视图层主体文件  
    | 　|-App.vue                // 根组件  
    |　 |-main.js                // 入口js文件 
    |-static                     // 引入资源目录
    |   |-css
    |   |-images
    |   |-script 
    |-index.html                 // 入口页面  
    |-package.json               // 项目基本信息  
    |-web.js                     // Node启动文件  


## 环境准备过程
### 解压 `vue-demo` 到指定文件夹
### 打开 `Git Bash` 运行:

    $ cd vue-demo/
    $ npm install
    $ npm run dev
即可运行当前vue项目

## 文件作用详述
> 组件化开发基本结构:

    |-build                       // 构建脚本目录          
    | 　|-webpack.base.conf.js    // webpack基本配置 
    | 　|-webpack.dev.conf.js     // webpack开发环境配置
    | 　|-webpack.prod.conf.js    // webpack生产环境配置
    |-config                      // 项目配置   
    |   |-index.js                // 用来定义开发环境和生产环境中所需要的参数
    |-node_modules                // node依赖包   
    |-src   
    | 　|-assets                  // 本地资源目录   
    | 　| 　|-css                 // CSS目录  
    | 　| 　|-images              // 图片文件目录  
    | 　| 　|-script              // JS目录   
    |　 |-router                  // 路由目录  
    |　 |-view                    // 视图层文件目录 
    | 　| 　|-components          // 通用组件目录  
    | 　|　 |-home                // 各界面视图层文件目录(如:home)  
    | 　|　 | 　|-components      // 当前视图层组件文件目录  
    | 　|　 |　 |-index.vue       // 当前视图层主体文件  
    | 　|-App.vue                // 根组件  
    |　 |-main.js                // 入口js文件 
    |-static                     // 引入资源目录
    |   |-css
    |   |-images
    |   |-script 
    |-index.html                 // 入口页面  
    |-package.json               // 项目基本信息  
    |-web.js                     // Node启动文件  

## 文件作用详述
> build/webpack.base.conf.js

    'use strict'                          // 严格模式
    const path = require('path')
    const utils = require('./utils')
    const config = require('../config')   // 获取配置
    const vueLoaderConfig = require('./vue-loader.conf')

    const webpack = require('webpack')

    function resolve (dir) {
    return path.join(__dirname, '..', dir)
    }

    const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
    }
    })

    module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {                              // 配置webpack编译入口
        app: './src/main.js'
    },
    output: {                             // 配置webpack输出路径和命名规则
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {                          // 创建import或require的别名，一些常用的，路径长的都可以用别名
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'bootstrap': resolve('../node_modules/bootstrap')
        }
    },
    module: {
        rules: [
        ...(config.dev.useEslint ? [createLintingRule()] : []),
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: vueLoaderConfig
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    // 增加一个plugins
    plugins: [
        new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
        })
    ]
    }

> config/index.js

    'use strict'                         // 严格模式
    // Template version: 1.3.1
    // see http://vuejs-templates.github.io/webpack for documentation.

    const path = require('path')

    module.exports = {
    dev: {

        // Paths
        assetsSubDirectory: 'static',    // 编译输出的二级目录
        assetsPublicPath: '/',
        proxyTable: {},

        // Various Dev Server settings
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined  接口位置:8080,如果出现接口占位的问题可以更改此位置
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: true,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,

        /**
        * Source Maps
        */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    },

    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',   // 编译输出的二级目录
        assetsPublicPath: './',     // 在封装发布时，需将此处的 '/' 改为 './'

        /**
        * Source Maps
        */

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
    }

> package.json

    {
    "name": "vue-demo",                      // 项目名称
    "version": "1.0.0",                      // 项目版本
    "description": "A Vue.js project",       // 项目描述
    "author": "Lahy <1245066197@qq.com>",    // 项目作者
    "private": true,
    "scripts": {
        "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
        "start": "npm run dev",
        "unit": "jest --config test/unit/jest.conf.js --coverage",
        "e2e": "node test/e2e/runner.js",
        "test": "npm run unit && npm run e2e",
        "lint": "eslint --ext .js,.vue src test/unit test/e2e/specs",
        "build": "node build/build.js"
    },
    "dependencies": {
        "popper.js": "^1.14.3",
        "vue": "^2.5.2",                     // vue版本
        "vue-resource": "^1.5.1",            // vue-resource版本
        "vue-router": "^3.0.1"               // vue-router版本
    },
    "devDependencies": {                     // 所需npm库内容
        "autoprefixer": "^7.1.2",
        "babel-core": "^6.22.1",
        "babel-eslint": "^8.2.1",
        "babel-helper-vue-jsx-merge-props": "^2.0.3",
        "babel-jest": "^21.0.2",
        "babel-loader": "^7.1.1",
        "babel-plugin-dynamic-import-node": "^1.2.0",
        "babel-plugin-syntax-jsx": "^6.18.0",
        "babel-plugin-transform-es2015-modules-commonjs": "^6.26.0",
        "babel-plugin-transform-runtime": "^6.22.0",
        "babel-plugin-transform-vue-jsx": "^3.5.0",
        "babel-preset-env": "^1.3.2",
        "babel-preset-stage-2": "^6.22.0",
        "babel-register": "^6.22.0",
        "bootstrap": "^4.1.2",                // bootstrap版本号
        "chalk": "^2.0.1",
        "chromedriver": "^2.27.2",
        "copy-webpack-plugin": "^4.0.1",
        "cross-spawn": "^5.0.1",
        "css-loader": "^0.28.0",
        "eslint": "^4.15.0",
        "eslint-config-standard": "^10.2.1",
        "eslint-friendly-formatter": "^3.0.0",
        "eslint-loader": "^1.7.1",
        "eslint-plugin-import": "^2.7.0",
        "eslint-plugin-node": "^5.2.0",
        "eslint-plugin-promise": "^3.4.0",
        "eslint-plugin-standard": "^3.0.1",
        "eslint-plugin-vue": "^4.0.0",
        "extract-text-webpack-plugin": "^3.0.0",
        "file-loader": "^1.1.4",
        "friendly-errors-webpack-plugin": "^1.6.1",
        "html-webpack-plugin": "^2.30.1",
        "jest": "^22.0.4",
        "jest-serializer-vue": "^0.3.0",
        "jquery": "^3.3.1",
        "nightwatch": "^0.9.12",
        "node-notifier": "^5.1.2",
        "optimize-css-assets-webpack-plugin": "^3.2.0",
        "ora": "^1.2.0",
        "portfinder": "^1.0.13",
        "postcss-import": "^11.0.0",
        "postcss-loader": "^2.0.8",
        "postcss-url": "^7.2.1",
        "rimraf": "^2.6.0",
        "selenium-server": "^3.0.1",
        "semver": "^5.3.0",
        "shelljs": "^0.7.6",
        "uglifyjs-webpack-plugin": "^1.1.1",
        "url-loader": "^0.5.8",
        "vue-jest": "^1.0.2",
        "vue-loader": "^13.3.0",
        "vue-style-loader": "^3.0.1",
        "vue-template-compiler": "^2.5.2",
        "webpack": "^3.6.0",
        "webpack-bundle-analyzer": "^2.9.0",
        "webpack-dev-server": "^2.9.1",
        "webpack-merge": "^4.1.0"
    },
    "engines": {                             // 版本需求
        "node": ">= 6.0.0",                  // node版本不得低于6.0.0
        "npm": ">= 3.0.0"                    // npm版本不得低于3.0.0
    },
    "browserslist": [
        "> 1%",
        "last 2 versions",
        "not ie <= 8"
    ]
    }

## 搭建合并、发布
### 编译
首先修改 `config/index.js` 中的build：

    build: {
        assetsPublicPath: './',
    }
然后执行:

    npm run build
在vuer-demo中生成 `dist` 文件夹,所有的vue打包文件都在 `dist` 文件夹内,之后 `Node` 启动 `dist/index.html`,即可Node启动此项目.

## 搭建过程中可能会出现的错误问题汇总(delete)
> 若出现:

    $ npm install vue-cli -g 
    npm ERR! Unexpected end of JSON input while parsing near '..."tarball":"https://re'
    
    npm ERR! A complete log of this run can be found in:
    npm ERR! C:\Users\Lahy\AppData\Roaming\npm-cache\_logs\2018-07-19T06_14_53_953Z-debug.log

&emsp;运行:

    $ npm cache clean --force
