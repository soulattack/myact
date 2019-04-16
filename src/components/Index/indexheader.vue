<template>
  <div class="indextop itop" ref="itop">
      
<mt-header title="" class="ihead">
  <router-link to="/" slot="left">
    <mt-button class="iconfont icon-menu" @click="showside" ></mt-button>
    <!-- <mt-button >{{this.$store.state.showme}}</mt-button> -->
    <i ></i>
  </router-link>
  <mt-button icon="search" slot="right"></mt-button>
  <mt-button icon="more" slot="right"></mt-button>
 
</mt-header>

  </div>
</template>

<script>

export default {
  name: 'indexheader',
  data () {
    return {
      msg: 'Wel'
    }
  },
  components:{
   
  },
  methods:{
          showside (){

              this.$store.state.showme=true;
          }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showtest{ padding: 5px 10px;}
.ihead{background: #ff5722;}
.ihead a{font-size: 22px;}
</style>
