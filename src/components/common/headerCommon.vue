<template>
  <div>
     <mt-header class="ht">
      <router-link @click.prevent="$router.go(-1);" slot="left">
        <mt-button icon="back">111</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>

  
</template>

<script>


export default {
  name: "headercm",
  data() {
    return {
      msg: "header"
    };
  },
   components:{
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ht{position: fixed;width: 100%;}
</style>
