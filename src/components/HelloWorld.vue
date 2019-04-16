<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  
    <h2>Ecosystem</h2>
       
            <div class="timeselect">
            <div class="block" size="small">
                    <el-date-picker
                        v-model="value7"
                        type="daterange"
                        align="left"
                        format="yyyy/MM/dd"
                        size="small"
                        unlink-panels                        
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions2">                        
                    </el-date-picker>
                </div>


    
            </div>
         
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
       pickerOptions0: {
         // disabledDate(time) {
          //  return time.getTime() < Date.now() - 8.64e7;
         // }
        }
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
