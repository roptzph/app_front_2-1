import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import UserList from '@/components/UserList.vue'

const router = new VueRouter({
  routes: [
     { path: '/', redirect: '/users'},
     { path: '/users', component:  UserList}
  ]
})
//或export default router  不能写错
export default router