<template>
  <div class="">
     <headc></headc>
     <div class="ucenter_top">
       <div class="uctools">
         <router-link to=""><i class="iconfont icon-qrcode"></i></router-link>
         <router-link to=""><i class="iconfont icon-scan"></i></router-link>
         <router-link to=""><i class="iconfont icon-setting"></i></router-link>
         <router-link to=""><i></i></router-link>
         <router-link to=""><i></i></router-link>
       
        
        </div>
       <div class="userInfo">
         <div class="userImg">
              <span class="headcircle_1">
              <span class="headcircle_2">                    
                   <b class="userImg_x"><img src="" alt=""></b>                                 
              </span>
            </span>    
         </div>
          <div class="userMsg">
           <ul>
             <li>1</li>
             <li>2</li>
             <li>3</li>
           </ul>
          </div>
       
       </div>
      
     </div>
     <div class="ucenter_ct">
       <h5>用户中心</h5>

     </div>

       
         
  </div>
</template>

<script>
import headc from '../common/headerCommon'
export default {
  name: 'usercenter',
  data () {
    return {
      msg: 'Welcome usercenter',
      userinfo:{}
    }
  },
  components:{
   headc
  },
  methods:{
     uinfo (){      
      const durl = "http://192.168.1.104/data/userinfo.php";
        
      this.$axios.get(durl).then(res => {
        // console.log(res.data);
         this.userinfo = res.data;
         console.log(this.userinfo);      
        })
        .catch(function(error) {
          console.log("运行错误" + error);
        });
     }
  },


  mounted:function(){
    this.uinfo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ucenter_top{padding: 42px 0 0 0;height: auto;overflow: hidden;background: #10c5fb}
.uctools{height: auto;overflow: hidden; padding: 4px 0;}
.uctools a{color: white;float: right;margin: 0 5px;}
.uctools i{font-size: 28px;}


.userInfo{height: auto;overflow: hidden;display: flex;padding: 0 0 15px 0;}
.userImg{position: relative;margin: 0 0 0 15px;}
.userImg span{display: block;float: left;border-radius: 50%;}
.headcircle_1{background: rgba(255, 254, 254, 0.4);padding: 5px;}
.headcircle_2{background: rgba(255, 254, 254, 0.3);padding: 5px;}
.headcircle_3{background: rgba(255, 254, 254, 0.2);padding: 5px;}
.headcircle_4{background: rgba(255, 254, 254, 0.1);padding: 5px;}
.userImg_x{display: block;width: 50px;height: 50px;border-radius: 50%; background:#f55656;}

.userMsg{margin: 0 0 0 10px;}
</style>
