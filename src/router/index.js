import Vue from 'vue'
import Router from 'vue-router'
import mainView from '@/view/mainView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: mainView
      // 独享守卫
      // beforeEnter: (to, from, next) => {
      // }
    }
  ]
})
