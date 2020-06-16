import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login.vue"
import Home from "../components/Home.vue"
import Resume from "../components/Resume.vue"
import Opus from "../components/Opus.vue"
Vue.use(VueRouter)

const routes = [
  {path:"/login" , component:Login},
  {path:"/" , redirect:"/login"},
  {path:"/home",component:Home},
  {path:"/resume",component:Resume},
  {path:"/opus",component:Opus}
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to,from,next) =>{
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 代表一个函数，表示放行
  //  其中有两个用法 next() 放行 next("/login") 强制跳转
  if(to.path === "/login" ) return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem("token")
  if(!tokenStr) return next("/login"), Vue.prototype.$message.error("请登录！");
  next()
})
export default router
