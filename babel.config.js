// 项目发布阶段需要用到的babel插件
// const prodPlugins = []
// if(process.env.NODE_ENV ==="production"){
//   prodPlugins.push("transform-remove-consolo")
// }
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // // 发布的时候插件数组
    // ...prodPlugins,
    // "@babel/plugin-syntax-dynamic-import"
  ]
}
