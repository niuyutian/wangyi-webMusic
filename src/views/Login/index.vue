<template>
  <div class=""> 
      <div class="title">
          <span @click="clouseFN">x</span> 登录
      </div>
      <div class="inpDiv">
         <label for="">账号:</label><input type="text" name="" id="zh" v-model="zzh"> 
      </div>
      <div class="inpDiv">
         <label for="">密码:</label><input type="text" name="" id="mima" v-model="mimima">
      </div>
        <button class="loginBtn" @click="loginPd()">登录</button>
      <div class="alert" v-if="show">
           <div class="title cl">温馨提示 <span @click="guanbi()">x</span></div>
           <p>账号或密码输入不正确</p>
           <div class="sure" @click="guanbi()">确定</div>
           <div  class="close" @click="guanbi()">关闭</div> 
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            zzh:"",
            mimima:"",
            show:false
        }
    },
    methods:{
        clouseFN(){
        this.$router.push({
                path:'/',
            })
        },
        loginPd(){
            if(this.zzh=="134400" && this.mimima=="asd12300"){
                this.$router.push({
                    path:'/',
                     query:{
                       nam:"南非的企鹅",
                       login:true
                     }
                })
            }else{
               this.show=true
            }
        },
        guanbi(){
            this.show=false
        }
    }
}
</script>

<style >

    #zh,#mima{
        width: 7rem;
        border: none;
        font-size:16px; 
        padding-left: .2rem;
    }
    .inpDiv{
        border-bottom: 1px solid rgb(112, 111, 111);
        width: 9rem;
        margin: 0 .5rem;
        padding-bottom: 123;
    }
    #zh{
        margin-top: .9rem;
    }
    #mima{
        margin-top: .7rem;
    }
    label{
        font-size: 16px;
        margin-left:.5rem ;
    }
    .loginBtn{
        width: 9rem;
        border-radius: .5rem;
        margin: 0 .5rem;
        margin-top: 1rem;
        background-color: #fff;
        border: 1px solid #000;
    }
    .title{
        font-size: 20px;
        padding:  10px ;
        background-color: #1cb8c0;
        color: #fff;
    }
    .title span{
        float: right;
    }
    .alert{
        position: fixed;
        width: 8rem;
        height: 4rem;
        border: 1px solid rgb(139, 139, 139);
        top: 180px;
        left:1rem;
        background: #fff;
        border-radius:.3rem ;
    }
    .alert p{
        margin-top: .5rem;
        margin-left: .7rem;
        font-size: 14px;
    }
    .cl{
        border-radius: .3rem .3rem 0 0;
        border: 1px solid  #1cb8c0;
    }
    .sure{
        position: absolute;
        background: #1cb8c0;
        width: 1.3rem;
        height: .7rem;
        font-size: 16px;
        line-height: .7rem;
        text-align: center;
        border-radius: .1rem;
        left: 1.7rem;
        bottom: .3rem;
        color: #000;
    }
    .close{
        position: absolute;
        box-sizing: border-box;
        width: 1.3rem;
        height: .7rem;
        font-size: 16px;
        line-height: .7rem;
        text-align: center;
        border-radius: .1rem;
        color: #1cb8c0;
        border: 1px solid #1cb8c0;
        left: 5rem;
        bottom: .3rem;
    }
</style>