<template>
  <div class="">
     <!----> 
     <headc></headc> 
     <div class="ucenter_top">
       <div class="uctools">
         <router-link to="/index"><i class="iconfont icon-qrcode"></i></router-link>
         <router-link to="/index"><i class="iconfont icon-scan"></i></router-link>
         <router-link to="/index"><i class="iconfont icon-setting"></i></router-link>
         <router-link to="/index"><i></i></router-link>
         <router-link to="/index"><i></i></router-link>     
        </div>
       <div class="userInfo">
         <div class="userImg">
              <span class="headcircle_1">
              <span class="headcircle_2">                    
                   <b class="userImg_x"><img :src=imgpath alt=""></b>                                 
              </span>
            </span>    
         </div>
          <div class="userMsg">
           <ul>
             <li class="um_name">
               <span class="spanName">{{userinfo.name}}</span>
               <span class="spanSex">
                  <i class="iconfont icon-man" v-if="userinfo.sex=='男'"></i>
                  <i class="iconfont icon-woman" v-else=""></i>  </span> 
               <span class="spanLv">Lv<em>7</em></span>
              </li>
             <li class="um_lv"></li>
             <li class="um_type"><span>超级会员</span></li>
             <li class="um_pack"><span>积分:102</span><span>硬币:233</span></li>
           </ul>
          </div>      
       </div>     
     </div>
     <div class="ucenter_ct">     
         <ul class="midboard">
         <li><router-link to="" class="a_history"><i class="iconfont icon-time-circle-fill"></i><span>历史</span></router-link></li>
         <li><router-link to="" class="a_msg"><i class="iconfont icon-message-fill"></i><span>消息</span></router-link></li>
         <li><router-link to="" class="a_att"><i class="iconfont icon-eye"></i><span>关注</span></router-link></li>
         <li><router-link to="" class="a_coll"><i class="iconfont icon-star-fill"></i><span>收藏</span></router-link></li>       
       </ul>
      </div>  

      <div class="ucenter_list">  
        <h5>用户中心</h5> 
        <ul>
               <li><router-link to=""><i class="iconfont icon-dingdan"></i><span>每日任务</span><em class="">1</em></router-link></li>
               <li><router-link to=""><i class="iconfont icon-icon_shakehands"></i><span>话题组</span></router-link></li>
               <li><router-link to=""><i class="iconfont icon-icon_workfile_line"></i><span>收藏夹</span></router-link></li>
               <li><router-link to=""><i class="iconfont icon-YUAN"></i><span>我的钱包</span></router-link></li>
               <li><router-link to=""><i class="iconfont icon-compass"></i><span>帮助与反馈</span></router-link></li>
               <li><router-link to=""><i class="iconfont icon-setting"></i><span>设置</span></router-link></li>
        </ul>
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
      userinfo:{},
      // pathurl:'http://192.168.1.104/data/'
       pathurl:this.$store.state.pathurl
    }
  },
  computed:{
    imgpath:function () {
          
            return this.pathurl+this.userinfo.headimg;
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
.ucenter_top{padding: 42px 0 0 0;height: auto;overflow: hidden;
    background: linear-gradient(to top right, #ff9143 0%, #ea8a45 25%, #ffcc3b 100%);
}
.uctools{height: auto;overflow: hidden; padding: 4px 0;}
.uctools a{color: white;float: right;margin: 0 5px;}
.uctools i{font-size: 28px;}


.ucenter_ct{    box-shadow: 0 0 6px 3px #4c4c4cab;}


.userInfo{height: auto;overflow: hidden;display: flex;padding: 0 0 15px 0;}
.userImg{position: relative;margin: 0 0 0 15px;}
.userImg span{display: block;float: left;border-radius: 50%;}
.headcircle_1{background: rgba(255, 254, 254, 0.4);padding: 8px;}
.headcircle_2{background: rgba(255, 254, 254, 0.3);padding: 8px;}
.headcircle_3{background: rgba(255, 254, 254, 0.2);padding: 5px;}
.headcircle_4{background: rgba(255, 254, 254, 0.1);padding: 5px;}
.userImg_x{display: block;width: 65px;height: 65px;border-radius: 50%; background:#f55656;overflow: hidden;}
.userImg_x img{display: block;width: 100%;height: 100%;}
.userMsg{margin: 0 0 0 10px;color: white}
.userMsg ul{margin:  10px 0 0 10px;font-size: 12px; } 
.userMsg ul li.um_name{font-size: 17px;}
.userMsg ul li.um_name .spanName{margin: 0 5px 0 0}
.userMsg ul li.um_lv{margin: 5px 0 10px 0; } 
.userMsg ul li.um_type span{padding: 3px 6px; background: #fff8dc50; border-radius:3px;}
.userMsg ul li.um_pack{margin: 8px 0 0 0 }
.midboard{display: flex;background: white;padding: 8px 0; }
.midboard li{width: 25%;}
.midboard li a{display: block;text-align: center;padding: 10px 0;}
.midboard li a i{display: block;font-size: 40px;}
.a_history{color:#737ba7}
.a_msg {color:#8bc34a;}
.a_att{color: #f72e18}
.a_coll{color:#fbc90b;}
.linearcolor{background: linear-gradient(to top right, #CDDC39 0%, #8BC34A 25%, #FFEB3B 100%)}
.midboard li a span{display: block;font-size: 14px;}
.ucenter_list{}
.ucenter_list h5{padding:5px 10px;font-size: 18px;color: black;}
.ucenter_list{background: white;    box-shadow: 0 0 6px 3px #ccc7c7ab;}
.ucenter_list ul{padding: 0 10px}
.ucenter_list li{border-bottom:1px solid #e2e2e2;position: relative; }
.ucenter_list li a::after{  
    content: " ";
    display: inline-block;
    height: 8px;
    width: 8px;
    border-width: 2px 2px 0 0;
    border-color: #cdcdcd;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);

    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -5px;
    right: 5px;
    border-radius: 1px;
    }
.ucenter_list li:last-child{border-bottom: none;}
.ucenter_list li a{ display: flex; padding: 4px 0; }
.ucenter_list li a i{ font-size: 28px;margin: 0 5px 0px 5px;}
.ucenter_list li a span{ font-size: 14px;line-height: 32px;color: #8e8e8e}
.ucenter_list li a em{ font-size: 16px;line-height: 32px;   justify-content:flex-end}
</style>
