<template>
<div class="all">
  <div class="main">
      <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane name="first">
      <span slot="label"><i class="el-icon-user"></i>个人信息</span>
      <p>姓 名：但功达</p>
      <p>手 机 号 ： 17352468362</p>
      <p>邮 箱： 924931501@qq.com </p>
      <p>毕 业 学 校：南京邮电大学通达学院 （2016-2020）</p>
      <p>专 业：软件工程（本科）</p>
      <p>自 我 评 价：从大一就开始勤工俭学，抗压吃苦能力极强。自认为对工作认 真负责，有上进心，并且十分热爱程序员这份事业，希望能在 计算机行业长期发展。
</p>
    
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label"><i class="el-icon-s-opportunity"></i>专业技能</span>
      <p>1.熟练使用DIV+CSS布局的html代码编写，了解各种常用布局 。熟悉W3C标准，能根据交互原型和UI设计图完整制作出网页 。
</p>
      <p>2.掌握javascript原生代码，DOM和BOM的基本操作。熟悉面对对象编程思想。</p>
      <p>3.了解jQuery框架，掌握jQuery与DOM操作及事件处理。了解Ajax技术工作原理以及ES6语法。</p>
      <p>4.熟悉Vue框架，包括vue-router、vuecli以及webpack打包工具基础用法,并且了解bootstrap,element-ui等快速开发框架。</p>
      <p>5.会使用mysql数据库，掌握基本sql语句用法。</p>
    </el-tab-pane>
        <el-tab-pane>
      <span slot="label"><i class="el-icon-document-copy"></i>实习经历</span>
      <P>公司名称： 无锡高德环境有限公司</P>
      <p>职位名称： 前端开发人员</p>
      <p>在职时间： 2020.03-2020.06.18</p>
      <p>工作描述：1.利用百度地图或者高德地图API文档，对页面上所使用的地图添加样式</p>
      <p>2.对照页面需求设计数据库，并通过Ajax连接后台数据库数据，并通过js，jquery技术渲染到前端页面。</p>
      <p>3.利用空余的时间使用vue-cli完成项目，作品详见个人作品中</p>
    </el-tab-pane>
       <el-button @click="quit">返回主页</el-button>
  </el-tabs>
  </div>
</div>

</template>

<script>
export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      quit(){
        this.$router.push("/home")
      },
    }
  };
</script>

<style lang="less" scoped>
     p{
       font-size: 20px;
       color: rgb(240, 228, 228);
     }
    .all{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:#2b4b6b;
    }
    .main{
      width: 700px;
      height: 600px;
      position: absolute;
      border: 1px solid black;
      border-radius: 3px;
    }
</style>