module.exports = {
    devServer:{
        port: 4000, //本地端口
        open: true,
        proxy: 'http://localhost:5000' //服务器+端口
    }
}

        //跨域指向服务器，前后端一定会涉及跨域问题
        //main.js中基地址baseURL可以不写
        //axios.defaults.baseURL ='http://localhost:3000'
        
       // proxy:  'http://192.168.1.100:6060'             
      // '/v1': {
        // /api 的意义在于，声明axios中url已/api开头的请求都适用于该规则，
        // 注意是以/api开头，即：axios.post({url: '/api/xxx/xxx'})
        //target: 'http://192.168.1.100:6060/v1',
        // 此处target的意义在于：造成跨域是因为访
        // 问的host与我们的请求头里的origin不一致，所以我们要设置成一致，这个具体请看下文
        //changeOrigin: true,
        //pathRewrite: {'^/v1': ''}
        // 此处是大部分文章都不会明说的的地方，
        // 既然我们设置了代理，则所有请求url都已写成/api/xxx/xxx，那请求如何知道我们到底请求的是哪个服务器的数据呢
        // 因此这里的意义在于， 以 /api开头的url请求，代理都会知道实际上应该请求那里，
        // ‘我是服务器/api’，后面的/api根据实际请求地址决定，即我的请求url：/api/test/test，被代理后请求的则是
        // https://我是服务器/api/test/test
         
            
  

