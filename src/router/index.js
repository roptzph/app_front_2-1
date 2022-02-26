import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import UserList from   '@/views/users/UserList.vue'
import UserDetail from '@/views/users/UserDetail.vue'
import Layout from     '@/views/layout/index.vue'
import Login from     '@/views/login/index.vue'
import Home from       '@/views/home/index.vue'
import BaseRule from   '@/views/baseRule/index.vue'

const router = new VueRouter({

  routes: [
     {
        path:'/home',
        component:Layout,
        meta:{  },
        children: [
          { path: '/home', component: Home },
          { path: '/users',component:  UserList },
          { path: '/users/:id', component:  UserDetail, props: true },
          { path: '/baseRule',  component:  BaseRule }
        ]
     },
     { path: '/', redirect: 'login' }, 
     { path: '/login', component: Login }
  ]
})
//或export default router  不能写错
export default router

