
<template>
  <div v-on:click.self="hiddenme" class="cc">
    <!--分享弹出窗 begin-->
    <mt-popup class="sharePopup" v-model="$store.state.showme" position="left">
      <div class="sbd"  >
        <dl class="sbd_h">
          <dt>
            <div class="dt-l">
              <router-link to="/ucenter">
                 <img src="../../../static/images/h1.jpg" alt="">      
              </router-link>
                
            </div>
            <div class="dt-r iheadtools">          
              <router-link to="" class="iu_packet"><i class="iconfont icon-icon_coinpurse_line"></i></router-link>            
              <router-link to="iu_scan"><i class="iconfont icon-icon_scan"></i></router-link>            
            </div>
            </dt>
          <dd> 
               <span class="iuser_name">尾巴着火</span>
               <span class="iuser_lv">lv7</span>
               <span class="iuser_type">大会员</span>           
          </dd>
          <dd>
                <span></span>
          </dd>
        </dl>
     <div class="sbd_follow">
       <ul>
         <li>1</li>
         <li>23</li>
         <li>4</li>
       </ul>
     </div>
     <div style="height:500px;background:;">
      <ul class="shareUl">
         <li><router-link to="/index"><i class="iconfont icon-home-fill"></i><span>首页</span></router-link></li>         
         <li><router-link to="/index"><i class="iconfont icon-time-circle-fill"></i><span>历史</span></router-link></li>         
         <li><router-link to="/index"><i class="iconfont icon-heart-fill"></i><span>关注</span></router-link></li>         
         <li><router-link to="/index"><i class="iconfont icon-star-fill"></i><span>收藏</span></router-link></li>         
         <li><router-link to="/index"><i class="iconfont icon-flag-fill"></i><span>创作</span></router-link></li>                               
        </ul> 
       <ul><li v-for="i in 30" :key="i">{{i}}</li></ul>
      </div>
        <div class="shareFooter">
          <ul class="sf_tools">
                    <li @click="hiddenme"><router-link to="/test" ><span><i class="iconfont icon-setting-fill"></i></span></router-link></li>
                    <li><span><i class="iconfont icon-appstore-fill"></i></span></li>
                    <li><span><i class="iconfont icon-dashboard-fill"></i></span></li>                
          </ul>     
          <div class="shareCancel" @click.stop="hiddenme"><i class="iconfont icon-close"></i>取消</div>
        </div>
      </div>
      <div class="sbd_close" @click="hiddenme"></div>
    </mt-popup>
    <!--分享弹出窗 end-->
  </div>
</template>

<script>
export default {
  name: "indexside",
  data() {
    return {
      msg: "Wel",
      popupVisible: false
    };
  },
  components: {},
  methods: {
    hiddenme() {
      this.$store.state.showme = false;
    },
    hi (){

        alert("hi")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>



















































