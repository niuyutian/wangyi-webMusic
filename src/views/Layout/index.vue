<template>
  <div>
    <van-nav-bar
      class="music-head"
    />
    <span class="logo iconfont icon-qingning"> 青柠-音乐</span>
    <span class="login" @click="loginFn" v-if="name==''">请登录</span>
    <span class="login" v-if="!name==''"> 
        {{name}}
    </span>

    <keep-alive>
      <router-view></router-view>      
    </keep-alive>
      <van-tabbar v-model="active" route class="music-footer">
        <van-tabbar-item icon="home-o" replace to="/layout/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" replace to="/layout/search">搜索页</van-tabbar-item>
        <van-tabbar-item icon="friends-o" replace to="/layout/friend">朋友</van-tabbar-item>
        <van-tabbar-item icon="setting-o" replace to="/layout/set">设置</van-tabbar-item>
      </van-tabbar>

  </div>
</template>

<script>
import "../../assets/font_iouvm44kcg/iconfont.css"
export default {
  data() {
    return {
      active:0,
      titleName:this.$route.meta.title,
      name:this.$route.query.nam||""
    }
  },
  methods:{
    loginFn(){
        this.$router.push({
         path:'/login',
       })
    }
  },
  watch:{
    $route(){
      this.titleName =this.$route.meta.title
    }
  }
}
</script>

<style >
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
.music-head{
  background: #1cb8c0 ;
  position: fixed;
  width: 10rem;
}
.van-ellipsis{
  color: #fff;
  font-size: 20px;
}
.music-footer{
  background: #1cb8c0 ;
}
.van-tabbar-item{
  color: #fff;
}
.van-tabbar-item--active{
  background-color: #007981;
  font-weight: bold;
  font-size: 15px;
}
.logo{
  position: fixed;
  color: #fff;
  z-index: 3;
  top: 12px;
  left: 10px;
}
.login{
    position: fixed;
    color: #fff;
    z-index: 3;
    top: 12px;
    right: 10px;
    font-size: 16px;
    font-weight: normal;
}
.van-tabbar-item__text{
  font-family:fangsong;
} 
</style>