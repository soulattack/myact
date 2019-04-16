<template>
  
    <mt-header class="ht">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  
</template>

<script>
export default {
  name: "headerx",
  data() {
    return {
      msg: "header"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ht{position: fixed;width: 100%;}
</style>
