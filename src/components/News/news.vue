<template>

  <div class="hello">
    <h1>{{ msg }}</h1> 
            <div class="timeselect">
              <ul>
                   <li v-for="(item) in list" :key="item.id">
                      {{item.name}}1222
                   </li>

              </ul>


    
            </div>
         
  </div>
</template>

<script>

export default {
  name: 'news',
  data () {
    return {
      msg: 'test me',
      list:[]
    }
  },

  methods:{  
    getdata () {
     console.log("data show");
     var self=this;
       // console.log(this);    
     const dturl="http://192.168.1.104/aj/art.php";
     const curl="https://www.easy-mock.com/mock/5b574c739a5ff5320380791b/tuniu/citiesInfo";
     this.$axios.get(curl)
           .then((res) =>{
                  console.log(res.data.data.hotCities);
                this.list=res.data.data.hotCities;  
              //  console.log(self.list);  
                  
               })
           .catch(function (error) {
              console.log("运行错误"+error);
            });
    }

  },
  created:function(){
    this.getdata();    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>










