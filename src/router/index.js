import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import UserList from   '@/views/users/UserList.vue'
import UserDetail from '@/views/users/UserDetail.vue'
import Layout from     '@/views/layout/index.vue'
import Home from       '@/views/home/index.vue'

const router = new VueRouter({
  routes: [
     {
      path:'',
      component:Layout,
      meta:{

      },
      
      children: [
        { 
          path: '/', 
          redirect: '/home'
        },
        { path: '/home',
          name: 'Home',
          component: Home
        },
        { path: '/users',
          name: 'UserList',
          component:  UserList
        },
        { path: '/users/:id',
          component:  UserDetail, 
          props: true
        }
      ]
    }  
  ]
})
//或export default router  不能写错
export default router
