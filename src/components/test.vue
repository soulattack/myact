<template>
  <div ref="list" @touchmove="handle" class="sc">
    <!---->
    <headerx v-show="ishow"></headerx>
    <el-main>
      <h1>{{ msg }}</h1>

      <div class="timeselect">
        <ul  >
          <li v-for="(item) in list" :key="item.id">{{item.name}}11</li>
        </ul>
         <ul class="nums">
           <li v-for="i in 31" :key="i">{{i}}</li>
       </ul>
        <div>
          <!-- <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="text">文字按钮</el-button>
          <mt-button type="primary" @click="sheetVisible = true">  选择操作   </mt-button>-->

          <div class="slider-img">
            <mt-swipe :auto="2000">
              <mt-swipe-item>
                <img src="../assets/images/1.jpg" height="120" width="100%">
              </mt-swipe-item>
              <mt-swipe-item>
                <img src="../assets/images/2.jpg" height="120" width="100%">
              </mt-swipe-item>
              <mt-swipe-item>
                <img src="../assets/images/3.jpg" height="120" width="100%">
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
      </div>
    </el-main>

    <!--<el-footer id="footer">
       <div>
         11fooet11
       </div>
    </el-footer>-->

    <footerx></footerx>
  </div>
</template>

<script>
import headerx from "./common/header.vue";
import footerx from "./common/footer.vue";

export default {
  name: "test",
  data() {
    return {
      msg: "test me",
      ishow:true,
      list: []
    };
  },
  components: {
    headerx,
    footerx
  },
  methods: {
    getdata() {
      console.log("data show");
      var self = this;
      // console.log(this);
      const dturl = "http://192.168.1.104/aj/art.php";
      const curl =
        "https://www.easy-mock.com/mock/5b574c739a5ff5320380791b/tuniu/citiesInfo";
      this.$axios
        .get(curl)
        .then(res => {
          console.log(res.data.data.hotCities);
          this.list = res.data.data.hotCities;
          //  console.log(self.list);
        })
        .catch(function(error) {
          console.log("运行错误" + error);
        });
    },
    handle (){
       console.log(" 你滑动了");
        var boxTop=this.$refs.list.scrollTop;
         console.log("=="+boxTop);
         if(boxTop<40){
             this.ishow=true;

         }else {
           this.ishow=false;
         }
  
    }
  },
  created: function() {
    this.getdata();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider-img {
  height: 120px;
}
.sc{height: 100%;overflow: scroll;}
/* .nums{height:200px;background: #00aced;overflow: scroll;} */
</style>










