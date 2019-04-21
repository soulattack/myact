<template>
  <div ref="list" @touchmove="handle" class="sc">
    <!---->
    <headerx v-show="ishow"></headerx>
    <el-main>
      <h1>{{ msg }}</h1>
      <div>
      <ul>
        <li>{{list.title}}</li>
        {{this.$route.params.id}}
      </ul>

      </div>

    </el-main>


    <footerx></footerx>
  </div>
</template>

<script>
import headerx from "./../common/header.vue";
import footerx from "./../common/footer.vue";

export default {
  name: "artinfo",
  data() {
    return {
      msg: "test this is 文脏区",
      ishow:true,
      list: [],
      uid:this.$route.params.id
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
    
      this.$axios
        .get(dturl)
        .then(res => {
          console.log(res.data);
             var arr=res.data;
          arr.forEach((item,i) => {
            //  console.log(item);
               // console.log("sss"+i);
               if(item.id==this.uid){
                 this.list=item;
             }
          });
          //this.list = res.data;
        
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










