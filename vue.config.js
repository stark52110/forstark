module.exports = {
    lintOnSave:false,
  //基本路径
      publicPath: './',
  outputDir: 'dist',
    // 放置静态资源的地方 (js/css/img/font/...)
      assetsDir: 'static',
  //以多页模式构建应用程序。
  pages: undefined,
  //是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // 是否为生产环境构建生成 source map？
      productionSourceMap: false,
   devServer: {
    https:false,
    open:false,
    // publicPath: '../',
    // 设置代理
    // proxy: {
    //   "/api/private/v1": {
    //     target: 
    //     "http://127.0.0.1:8888/api/private/v1/",// 跨域访问
    //     ws: true, // 是否启用websockets
    //     changOrigin: true, //开启代理
    //     secure: false, // 将安全设置为false,才能访问https开头的
    // pathRewrite: {
    //       '^/api/private/v1': '/'
    //     }
    //   }
    // }
  }
}