<template>
<div class="main">
    <section class="list-item" @click="toresume">
      <div class="item-image">
        <img src="../assets/title.png" alt="item-image-1">
      </div>
      <div class="item-text">
        <div class="item-title">「个人简历」</div>
        <div class="item-desc"></div>
      </div>
    </section>
    <section class="list-item" @click="toopus">
      <div class="item-image">
        <img src="../assets/text.png" alt="item-image-2">
      </div>
      <div class="item-text">
        <div class="item-title">「个人作品」</div>
        <div class="item-desc"></div>
      </div>
    </section>
    <section class="list-item" @click="logout">
      <div class="item-image">
        <img src="../assets/quit.png" alt="item-image-3">
      </div>
      <div class="item-text" >
        <div class="item-title">「退出」</div>
        <div class="item-desc"></div>
      </div>
    </section>
</div>
</template>

<script>
export default {
    methods: {
        logout(){
            window.sessionStorage.clear();
            this.$router.push("/login")
            this.$message.success("退出成功")
        },
        toresume(){
            this.$router.push("/resume")
        },
        toopus(){
            this.$router.push("/opus")
        }
    },
}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}

html, body {
  padding: 0;
  margin: 0;
}

html {
  /* 需要隐藏最外层不可见区域以使视差生效 */
  overflow: hidden;
}

body {
  width: 100vw;
  height: 100vh;
  perspective: 100px;
  transform-style: preserve-3d;
  /* 3D的容器要允许overflow才能生效 */
  overflow-y: auto;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.list-item {
    cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 55vh;
  overflow: hidden;
}

.list-item:hover .item-image::before {
  background-color: rgba(0, 0, 0, 0.2);
}

.item-image {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateZ(-50px) scale(2.4);
  z-index: -1;
}

.item-image::before {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, .4);
}

.item-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-text {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  color: #ffffff;
}

.item-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.item-desc {
  font-size: 1.2rem;
}
</style>