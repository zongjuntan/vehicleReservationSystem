module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 后端接口的地址
        changeOrigin: true,  // 是否改变请求源
        pathRewrite: {
          '^/api': '/api'  // 重写路径，去掉/api前缀
        },
        secure: false,  // 如果是https接口需要设置为false
      }
    }
  }
};
