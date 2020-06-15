<template>
<!-- <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"> -->
    <div class="login_containter">
          <!-- <div class="block" v-for="fit in fits" :key="fit">
         <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :fit="fit"></el-image>
       </div> -->
        <div class="login_box">
            <!-- 头像区 -->
            <div class="avatar_box">
                <img src="../assets/touxiang.jpg" alt="头像">
            </div>
            <!-- 登陆表单区 -->
            <el-form class="form-login" ref="loginFormRef" :model="loginForm" :rules="loginRules">
            <el-form-item  prop='username'>
                <!-- 用户名 -->
            <el-input prefix-icon="el-icon-s-custom"  placeholder="请输入账号" v-model="loginForm.username"></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop='password'>
            <el-input  type="password" placeholder="请输入密码" prefix-icon="el-icon-key" v-model="loginForm.password" ></el-input>
            </el-form-item>
            <el-form-item class="btns">
            <el-button type="primary" @click="login">登陆</el-button>
            <el-button type="info" @click="resetloginForm">重置</el-button>
            </el-form-item>
            </el-form>
        </div>
     </div>
</template>

<script>
export default {
    data() {
        return {
            // 登陆表单的数据绑定对象
            loginForm:{
                username:"admin",
                password:"123456",
            },
             // 表单验证规则对象
    loginRules:{
        // 验证合法规则
        username:[
            // 用户名
            {required:true,message:"请输入账号",trigger:"blur"},
            {min:3,max:8,message:"长度在3到8个字符",trigger:"blur"}
        ],
        password:[
            // 密码
            {required:true,message:"请输入密码",trigger:"blur"},
            {min:3,max:8,message:"长度在3到8个字符",trigger:"blur"}
        ]
    }
        }
    },
    methods: {
        resetloginForm(){
            // 通过对$refs的属性绑定上的loginFormRef获取到表单数据，并使用element.ui中的resetFields()方法
            this.$refs.loginFormRef.resetFields()
        },
        login(){
            this.$refs.loginFormRef.validate(async valid=>{
               if(!valid) return;
               const {data:res}=await this.$http.post("login",this.loginForm);
               if(res.meta.status !== 200) return this.openfal();
               this.opensuc();
            //    将token存储到window的sessionstorage中 作为登陆状态保证
               window.sessionStorage.setItem("token",res.data.token);
            //    通过路由push跳转
               this.$router.push("/home")
            })
        },
        opensuc() {
        this.$message({
          showClose: true,
          message: '登陆成功',
          type:"success"
        });
         },
        openfal() {
        this.$message({
          showClose: true,
          message: '登陆失败',
          type: 'error'
        });
      },
    },
}
</script>

<style scoped lang='less'>
.login_containter{
    background-image: url(../assets/beijin.jpg);
    background-size: 100% 100%;
    background-origin: content-box;
    background-repeat:no-repeat; 
    height: 100%;
    width: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.815);
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -225px;
    margin-top: -150px;

}
img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
}
.form-login{
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 0 30px;
    // 盒子溢出处理  （怪异盒子）
    box-sizing: border-box;   
}
.btns{
    display: flex;
    justify-content: flex-end;
}
</style>