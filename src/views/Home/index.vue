<template>
  <div class="main">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="http://imge.kugou.com/mobilebanner/20200407/20200407002358781022.jpg" alt="" class="img001">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://imgessl.kugou.com/mobilebanner/20200407/20200407002325623540.jpg" alt="" class="img001">
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://imge.kugou.com/mobilebanner/20200407/20200407002420495175.jpg" alt="" class="img001">
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://imge.kugou.com/mobilebanner/20200407/20200407002436824510.jpg" alt="" class="img001">
      </van-swipe-item>
    </van-swipe>
    <p class="title">推荐歌单</p>
    <van-row gutter="5" >
      <van-col span="8" v-for="(obj,index) in music" :key="index">
        <img
          class="aaa"
          :src="obj.picUrl"
        />
        <div class="mus">
           <i class="iconfont icon-erji"></i> {{obj.trackCount+" 万"}}
        </div>
        <p class="song_name">{{obj.name}}</p>
      </van-col>
    </van-row>
    <p class="title">最新音乐</p>    
    <van-cell :title="obj.name" :label="obj.song.artists[0].name+' - '+obj.name" 
    center v-for="obj in newMusic" :key="obj.id"> 
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <span class="iconfont icon-zhima-shouquan shouquan" v-show="obj.song.album.subType=='录音室版'?true:false"></span>
        <span class="iconfont icon-erji shouquan" v-show="obj.song.album.subType=='录音室版'?false:true"></span>

        <van-icon name="play-circle-o" size="0.6rem" @click="playFn(obj.id)" />
      </template>
     </van-cell>
  </div>
</template>

<script>
import {recommendMusicApi,newMusicApi} from '@/api';
import "../../assets/font_iouvm44kcg/iconfont.css";
export default {
   async created(){
      const res = await recommendMusicApi({
        limit:12
      })
      this.music=res.data.result.splice(6,13)
      const res2 =await newMusicApi({
        limit:20
      })
      this.newMusic=res2.data.result
      console.log(this.newMusic);
   },
   data() {
     return {
        music:[],
        newMusic:[],
     }
   },
   methods:{
     playFn(idd){
       let id=idd
       this.$router.push({
         path:'/play',
         query:{
           id:id
         }
       })
     }
   }
}
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 3.75rem;
    height: 3.75rem;
  }
  .img001{
    width: 10rem;
    height: 3.75rem;
  }
  .van-cell{
    border-bottom: 1px solid lightgray;
    font-size: 15px;
    font-weight: bold;
  }
  .van-cell__label{
    font-size: 5px;
    margin: 0;
    padding-left: 15px;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    width: 7.5rem;
  }
  .aaa{
    width: 95%;
    height: 3rem;
    border-radius: 15px;
    box-shadow: 10px 10px px #888888;
    border:3px solid #888888;
  }
  .van-col{
    position: relative;
  }
  .mus{
    position: absolute;
    display: block;
    height: 30px;
    top: .05px;
    right: 10px;
    font-size: 12px;
    line-height: 30px;
    color: #fff;
    font-weight: normal;
  }
  .shouquan{
    position: absolute;
    left: 14px;
    bottom: 8px;
    color: green;
  }
</style>