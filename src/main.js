// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AppX from './AppX'

import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$axios = axios                // axios的使用方式为 挂载在Vue函数的原型方法上 不要以Vue.use()使用 这点和vue-resource不同

import elmentUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(elmentUI)

import Mint from  'mint-ui'
import 'mint-ui/lib/style.css'; 
Vue.use(Mint);


//import vuex from 'vuex'
//Vue.use(vuex)


import "./assets/css/basic.css"                // 通用性css样式
import './assets/font/iconfont.css'         //引入阿里第三方图标

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
