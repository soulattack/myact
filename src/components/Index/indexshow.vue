<template>
  <div class="indexshow">
      <div class="showtest"><router-link to="/test"><span class="iconfont icon-home"></span>测</router-link></div>
    
  </div>
</template>

<script>

export default {
  name: 'indexshow',
  data () {
    return {
      msg: 'Wel'
    }
  },
  components:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showtest{ padding: 5px 10px;}
</style>
