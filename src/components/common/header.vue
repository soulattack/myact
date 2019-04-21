<template>
  
    <mt-header class="ht">
      <a @click.prevent="$router.go(-1);"  to="" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
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
