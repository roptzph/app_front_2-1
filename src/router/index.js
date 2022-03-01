import Vue from 'vue'
import VueRouter from 'vue-router'
//获取vuex数据
import store from '../store/index'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
        path:'',
        component:Layout,
        meta:{ isLogin:true },
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


//路由拦截
router.beforeEach((to,from,next)=>{
  //1. 判断是否需要登录
  if(to.matched.some(ele=>ele.meta.isLogin)){
      //2. 判断当前的用户是否已经登录
     let token=store.state.loginModule.userinfo.token;
     console.log(token)
      //let token = ''
      if(token){
        next()
      }else{
        next('/login')
      }
  }else{// 不需要登录
    next();
  }
})





export default router

