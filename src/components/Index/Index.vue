<template>
  <div class="hello"  ref="index">
     <itop ></itop>
     <slider></slider>
     <show></show>
   
   <ul @touchmove="handle">
     <li v-for="i in 30" :key="i">{{i}}</li>
   </ul>
    <side></side>
  </div>
</template>

<script>
import slider from "./slider.vue"
import show from "./indexshow.vue"
import itop from "./indexheader.vue"
import side from "./indexside.vue"
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to INDEX'
    }
  },
  components:{
    slider:slider,
    show:show,
    itop,
    side
  },
  methods:{
   handle (){

    
     
    // var boxTop=this.$refs.index.scrollTop;
   // var boxTop=document.documentElement.scrollTop||document.body.scrollTop;
   // let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
   var boxTop=this.$refs.index.scrollTop;
   console.log(boxTop);
    // console.log(this.$refs.index.scrollTop);
  
   }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
