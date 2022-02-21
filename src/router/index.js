import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import UserList from '@/components/UserList.vue'
import UserDetail from '@/components/UserDetail.vue'

const router = new VueRouter({
  routes: [
     { path: '/', redirect: '/'},
     { path: '/users', component:  UserList},
     { path: '/users/:id', component:  UserDetail, props: true}
  ]
})
//或export default router  不能写错
export default router
