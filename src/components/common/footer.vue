<template>
  <div id="footer">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖"><router-link to="/">外卖</router-link></mt-tab-item>
      <mt-tab-item id="订单">订单</mt-tab-item>
      <mt-tab-item id="发现">发现</mt-tab-item>
      <mt-tab-item id="我的">我的</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "footerx",
  data() {
    return {
      msg: "footer",
      selected:"sss"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
