<template>
  <div ref="list" @touchmove="handle" class="sc">
    <!---->
    <headerx v-show="ishow"></headerx>
    <el-main>
      <h1>{{ msg }}</h1>
      <div>
      <ul>
        <li v-for="item in list" :key="item.id">
           <router-link :to="'/artInfo/'+item.id"> {{item.title}}</router-link>
         
          </li>

      </ul>

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
import headerx from "./../common/header.vue";
import footerx from "./../common/footer.vue";

export default {
  name: "artx",
  data() {
    return {
      msg: "test this is 文脏区",
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
      const dturl = "http://192.168.1.104/data/news.php";
      const curl =    "https://www.easy-mock.com/mock/5b574c739a5ff5320380791b/tuniu/citiesInfo";    
      this.$axios
        .get(dturl)
        .then(res => {
          console.log(res.data);
          this.list = res.data;
        
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










