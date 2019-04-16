<template>
  <div class="">  
         <div class="sliderbanner">
            <mt-swipe :auto="10000" class="sw">
              <mt-swipe-item class="swt">
                <img src="../../assets/images/1.jpg" height="100%" width="100%"><span>1</span>
              </mt-swipe-item>
              <mt-swipe-item class="swt">
                <img src="../../assets/images/2.jpg" height="100%" width="100%"><span>2</span>
              </mt-swipe-item>
              <mt-swipe-item class="swt">
                <img src="../../assets/images/3.jpg" height="100%" width="100%"><span>4</span>
              </mt-swipe-item>
            </mt-swipe>
          </div>
    
  </div>
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      msg: 'Welcome to INDEX'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
