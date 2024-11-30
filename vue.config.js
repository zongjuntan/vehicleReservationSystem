module.exports = {
  devServer: {
    proxy: {
      '/auth': {
        target: 'http://106.53.26.57:19100', // 后端接口的地址
        changeOrigin: true,  // 是否改变请求源
        pathRewrite: {
          '^/auth': ''  // 重写路径，去掉/auth前缀
        },
        secure: false,  // 如果是https接口需要设置为false
      }
    }
  }
};
