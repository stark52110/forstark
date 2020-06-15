<template>
<!-- <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"> -->
 <div class="all">
     <div class="header">
         <div class="tab1" @click="wb">博客</div>
         <div class="tab2" @click="wtwb">写博客</div>
         <div class="tab3" @click="tohome">退出</div>
     </div>
    
     <div class="myblog" v-show="tab1" :model="tab1">
         <h1 class="maintitle">博客预览</h1>
         <input type="text" v-model="search" class="sreachipt" required placeholder="sreach blog">
          <!-- <div class="el-icon-search" @click="searchblog"></div> -->
         <div v-for="(item,i) in newblog" :key="item.i" class="allblogs" @click="checkblog(i)">
         <div v-rainbow><h2>{{item.title | toStark}}</h2></div>
         <div>{{item.body | toShort}}</div>
         </div>
     </div>
     <div class="seeblog" v-show="tab3" :model="tab3">
         <div v-for="(item) in nowblog" :key="item.id" class="thisblog" @click="returnblog">
            <h2>{{item.title}}</h2>
            <div>{{item.body}}</div>
            <div>作者：{{item.author}}</div>
            <!-- <div>{{item.objectId}}</div> -->
            <el-button type="danger" class="delbtn" @click="delblog(item.objectId)">删除</el-button>
          </div> 
     </div>
     <div class="xieweibo" v-show="tab2" :model="tab2">
        <div class="maintitle">
         <h2>添加博客</h2>
     </div>
         <form class="addbl">
             <div class="bltitle">
             <label for="标题">博客标题:</label>
            <input type="text" v-model="blog.title" required>
             </div>
             <div class="substance">
              <label for="内容">博客内容:</label>
              <textarea type="text" required v-model="blog.content"></textarea>
              </div>
              <div class="blauthor">
              <label for="作者">作者：</label>
              <input type="text" required v-model="blog.author">
              </div>
 
              <el-row>
                  <!-- click加入prevent可以防止点击时刷新页面 -->
                <el-button type="danger" @click.prevent="post" class="addbtn">添加</el-button>
              </el-row>
         </form>
         <hr/>
         <div id=preview>
             <h2>博客预览</h2>
             <p>博客标题:{{blog.title}}</p>
             <p>博客内容：</p>
             <p>{{blog.content}}</p>
         </div>
     </div>
 </div>
</template>

<script>
export default {
    created() {
        this.getdata()
    },
    data() {
        return {
          tab1:true,
          tab2:false,
          tab3:false,
          arrblogs:[],
          nowblog:[],
        //   objectId:"",
          search:"",

          blog:{
              title:"",
              content:"",
              author:""
          }
        }
    },
    methods: {
        tohome(){
            this.$router.push("/home")
            this.opensuc("退出成功")
        },
        wb(){
            this.tab2 = false;
            this.tab1 = true;
            this.teb3 = false
            this.getdata()
            this.nowblog = "";
        },
        getdata(){
       const query = Bmob.Query('blog');
         query.find().then(res => {
           this.arrblogs = res
          })
        },
        wtwb(){
            this.tab2 = true;
            this.tab1 = false;
            this.tab3 = false;
             this.nowblog ="";
        },
        post(){
            if(this.blog.content == "" ||this.blog.title == ""||this.blog.author == "") return this.openfal("请输入内容");
               const query = Bmob.Query("blog")
                query.set("title",this.blog.title);
                query.set("body",this.blog.content);
                query.set("author",this.blog.author);
                query.save().then(res=>{
                 this.opensuc("添加成功")
                   this.blog.content = "" ;
                   this.blog.title = "";
                   this.blog.author = "";                     
             });
        },
        checkblog(i){
            this.tab2 = false;
            this.tab1 = false;
            this.tab3 = true;
            this.nowblog = this.newblog.splice(i,1)
        },
        returnblog(){
            this.wb()
        },
        delblog(type){
            // console.log(this.nowblog.objectId)
        var query = Bmob.Query('blog');
         query.destroy(type).then(res => {
           this.wb();
           this.opensuc("删除成功")
          })
        },
        opensuc(words){
             this.$message({
         type: 'success',
          showClose: true,
          message: words
        });
        },
        openfal(words){
         this.$message({
         type: 'error',
          showClose: true,
          message: words
        });
        },

    },
    computed: {
        newblog:function(){
            return this.arrblogs.filter((blog)=>{
                return blog.title.match(this.search)
            })
        }
    },
    filters:{
        toStark(value){
             return value.toUpperCase(),value.slice(0,15) + "...";
        },
        toShort(value){
            return value.slice(0,150)+"..."
        }
    }
}
</script>

<style lang="less" scoped>
// .el-icon-search{
//     position: absolute;
//     right: 0px;
//     top: 47px;
//     width: 20px;
//     height: 20px;
//     cursor: pointer;
// }
// .delbtn{
//     position: relative;
//     top: 0px;
// }
.seeblog{
    max-width: 700px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
.thisblog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #eee;
    cursor: pointer; 
    position: relative;
}
.sreachipt{
    width: 100%;
    height: 20px;
}
.sreachipt:focus{
    outline:2px solid rgb(98, 155, 240)
}
.allblogs{
   padding: 20px;
   margin: 20px 0;
   box-sizing: border-box;
   background-color: gray;
  cursor: pointer; 
  position: relative;
}
.allblogs:hover{
    transition: all 0.5s ease;
    background-color: rgba(252, 252, 252, 0.986);
}

.myblog{
    max-width: 500px;
    margin: 0 auto;
    position: relative;
}
*{
    margin: 0;
    padding: 0;
}
.all{
    background-image: url(../assets/beijin.jpg);
    background-size: 100% 100%;
    background-origin: content-box;
    height: 100%;
    height: 100%;
}
.header{
    width: 100%;
    height: 60px;
    background-color:#2b4b6b;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header div{
    width: 50px;
    height: 30px;
    color: white;
    cursor: pointer;
    text-align: center;
}
.header .tab3{
    margin-left: 80px;
}
.header div:hover{
      transition: all 0.5s ease;
    background-color: white;
    color: black;
}
.maintitle{
    text-align: center;
    color: white;
}
label{
    display: block;
}
.addbl{
    text-align: center;
    line-height: 25px;
}
.addbl .substance textarea{
    width: 300px;
    height: 100px;
    resize: none ;
    font-family:'Times New Roman', Times, serif; 
}
.addbl input{
    width: 300px;
}
.addbtn{
    margin: 10px 0;
}
#preview{
    padding: 10px 20px;
    margin: 30px 0 ;
    color: white;
}

#preview h2{
    text-align: center;
}
</style>