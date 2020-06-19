import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import Bmob from 'hydrogen-js-sdk'
import axios from 'axios'
// 导入Nprogress包所对应的js和css
import 'nprogress/nprogress.css'
import Nprogress from 'nprogress'

// axios全局接口（仅对登陆）
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

Vue.prototype.$http = axios
// 挂载到全局使用
Vue.prototype.Bmob = Bmob

Vue.config.productionTip = false

// 设置axiox拦截器 验证token
// 在request拦截器中，展示进度条Nprogress.start()
axios.interceptors.request.use(config => {
  Nprogress.start()
  // 为config中的headers添加authorization并且挂载token值
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// 在response拦截器中，隐藏进度条Nprogress.done()
axios.interceptors.response.use(config => {
  Nprogress.done()
  return config
})
Bmob.initialize('458e573be207c0ad', '971205')

// Bmob.debug(true)

// 设置自定义组件
Vue.directive('rainbow', {
  bind (el, binding, vnode) {
    //  有趣的彩虹"#"+Math.random().tostring(16),slice()
    el.style.color = '#' + Math.random().toString(16).slice(3, 9)
  }
})
// 自定义过滤器
// Vue.filter("to-stark",function(value){
//   return value.toUpperCase(),value.slice(0,10) + "...";
// });
// Vue.filter("to-short",function(value){
//   return value.slice(0,100) + "...";
// })
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
