import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import one from '../components/one.vue'
import newpage from '@/components/new'
import other from '@/components/inter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/one',
      component: one
    }, {
      path: '/new',
      name: 'new page',
      component: newpage
    }, {
      path: '/new/inter',
      component: other
    }
  ]
})
