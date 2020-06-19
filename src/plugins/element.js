import Vue from 'vue'
// import { Button } from 'element-ui'
// import {Form,FormItem} from "element-ui"
// import{Input} from "element-ui"
// 导入弹框提示组件
import { Message, Button, Form, FormItem, Input, Container, Aside, Main, Footer, Header, Col, Row, Icon, TabPane, Tabs, MessageBox, Alert, Image,Dialog } from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Header)
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Image)
Vue.use(Dialog)
// 必须把message进行全局挂载
Vue.prototype.$message = Message
Vue.prototype.$messagebox = MessageBox
Vue.prototype.$alert = Alert
// Vue.prototype.$dialog = Dialog