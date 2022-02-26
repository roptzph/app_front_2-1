import Vue from 'vue'
import App from './App.vue'
import router from './router'
import resource from 'vue-resource'
const bodyParser = require('body-parser')
import EIementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import dayjs   from  'dayjs'


import axios from 'axios'

//这句一定要，如果没有的话，在UserList中要引入上面axios
Vue.prototype.axios = axios 
//Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(EIementUI)
Vue.prototype.dayjs = dayjs
//基地址设置为本地+端口，proxy处设为服务器地址
//axios.defaults.baseURL = 'http://localhost:4000'  //无论开发或布署时都可以省略不写
//Vue.prototype.$axios = axios
//Vue.prototype.$http = axios

new Vue({

  router,
  render: h => h(App)
}).$mount('#app')
