// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuex)

/**
 * 卫星守卫
 * Link: [导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)
 */
// 前置守卫
router.beforeEach((to, from, next) => {
  // 当前导航正要离开的路由
  console.log('上一个页面：', from)
  // 即将进入目标的路由对象
  console.log('下一个页面：', to)
  // next
  /**
   * function => resolve
   * next() --> 下一个钩子
   * next(false) --> 中断当前导航
   * next('/) or next({path:'/'}) --> 当前导航被中断，然后进行一个新的导航
   * next(error) --> 终止，并传递给 router.onError()
   */
})
// 后置钩子
router.afterEach((to, from) => {
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
