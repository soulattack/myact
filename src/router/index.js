import Vue from 'vue'
import Router from 'vue-router'


//

import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index/Index.vue'
import test from '@/components/test.vue'
import News from '@/components/News/news.vue'
import usercenter from '@/components/usercenter/usercenter.vue'
import article from '@/components/Article/art.vue'
import artinfo from '@/components/Article/artinfo.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect:"/index"
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
      {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/ucenter',
      name: 'usercenter',
      component: usercenter
    },
    {
      path: '/art',
      name: 'artx',
      component: article
    },
    {
      path: '/artinfo/:id',
      name: 'artinfo',
      component: artinfo
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
})
