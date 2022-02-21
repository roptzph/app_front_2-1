module.exports = {
    devServer:{
        port: 4000, //本地端口
        open: true,
       // proxy: 'http://localhost:5000' //服务器+端口
        proxy: {
            '/': {
            target: 'http://localhost:5000/', //ftp服务器的地址
            changeOrigin: true,
            pathRewrite: {
                '^/': ''
            }
            },
            '/ftp': {
            target: 'http://localhost:5000/ftp', //ftp服务器的地址
            changeOrigin: true,
            pathRewrite: {
                '^/ftp': ''
            }
            },
            '/upload': {
            target: 'http://localhost:5000/upload', //ftp服务器的地址
            changeOrigin: true,
            pathRewrite: {
                '^/ftp': ''
            }
            }
        },
    


    }
}

         
            
  

