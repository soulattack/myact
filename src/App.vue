<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->




   <transition name="main">
     <router-view/>
   </transition>



  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
   color:#776;

}

.main-enter{opacity:0;transform:translateX(100%);position:absolute;}
.main-leave-to{opacity:0;transform:translateX(-100%);position:absolute;}
.main-enter-active{ transition:all 0.4s ease;}
.main-leave-active{ transition:all 0.4s ease;}

</style>
