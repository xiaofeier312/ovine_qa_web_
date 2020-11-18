// ovine 编译配置 文档： https://ovine.igroupes.com/org/docs/advance/configurations
module.exports = {
  favicon: '/static/images/favicon.ico', // 页面 icon
  title: 'SiteTitle', // 页面标题
  envModes: ['localhost', 'staging', 'production'], // 对应的 env 的三个配置，可以自行添加，或者修改。
  // devServerProxy: {
  //   '/ovapi/*': {
  //     target: 'http://172.16.140.59:3000/ovapi',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/ovapi': '',
  //     }
  //   }
  // }  
  devServerProxy: {
    '/ovapi': {
      target: 'http://localhost:8081/',
      changeOrigin: true,
      pathRewrite: {
        '^/ovapi': '/',
      }
    }
  }
}
