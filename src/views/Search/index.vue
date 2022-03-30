<template>
  <div class="main">
    <div class="zw">

    </div>
    <van-search shape="round" v-model="value" placeholder="请输入搜索关键词" 
     @input="inpFn"
    />
    <div class="search_wrap" v-if="searchArr.length===0">
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <span class="hot_item" v-for="(obj,index) in hotArr" :key="index" 
        @click="fn(obj.first)"
        ref="">
            {{obj.first}}
        </span>
      </div>
    </div>

    <div class="search_wrap" v-else>
      <p class="hot_title">搜索结果</p>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell :title="obj.name" :label="obj.ar[0].name+' - '+obj.name" 
            center v-for="obj in searchArr" :key="obj.id"> 
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
              <template #right-icon>
                <span class="iconfont icon-zhima-shouquan shouquan" v-show="obj.privilege.toast?true:false"></span>
                <span class="iconfont icon-erji shouquan" v-show="obj.privilege.toast?false:true"></span>

                <van-icon name="play-circle-o" size="0.6rem" @click="fnPlay(obj.id)"/>
              </template>
      </van-cell>
     </van-list>
    </div>
  </div>
</template>

<script>
import "../../assets/font_iouvm44kcg/iconfont.css";
import {hotSearchApi,searchResultListApi} from '@/api'
export default {
  data() {
    return {
      value: '',
      hotArr:[],//热搜关键字
      searchArr:[],
      loading:false,
      finished:false,
      page:1 ,
      timer: null
    };
  },
 async created(){
    const res =  await hotSearchApi();
    this.hotArr= res.data.result.hots;
  },
  methods:{
     fn(val){
       this.page=1;
       this.finished=false;
       this.value=val;
       this.getListFn().then((res)=>{
         this.searchArr=res.data.result.songs
       this.loading=false;

       });
     },
     async getListFn(){
      return await searchResultListApi({
        keywords:this.value,
        limit:20,
        offset:(this.page-1)*20
      })
     },
     async inpFn(){
       this.page=1;
       if(this.timer) clearTimeout(this.timer)
         this.timer =setTimeout(async()=>{
            this.finished=false;
            if(this.value.length ==0||this.value==" "){
              this.searchArr=[];
              return
            }
              this.getListFn().then((res)=>{
                if(res.data.result.songs===undefined){
                  this.searchArr=[]
                  return
                }
              this.searchArr=res.data.result.songs
            });
          })
       
     },
     async onLoad(){
       this.page++
         this.getListFn().then((res)=>{
           if(res.data.result.songs == undefined||res.data.result.songs==""){
             this.finished =true;
             this.loading=false;
             return
           }
         this.searchArr= [...this.searchArr,...res.data.result.songs];
         this.loading=false
       });
     },
    fnPlay(idd){
       let id=idd
       this.$router.push({
         path:'/play',
         query:{
           id:id
         }
       })
     }
    },
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
.zw{
  margin: 10px 0;
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