<template>
  <div id="app">
    <router-view v-if="isAlive"/>
  </div>
</template>

<script>

  import apiUrl from './utils/api'

export default {
  name: 'App',
  provide() {
      return {
        reload: this.reload          
      }
    },
  data(){
  	return{
  		isAlive: true     //防止刷新出现空白
  	}
  },
  created(){

  },
  methods:{
  	reload() {
        this.isAlive = false;
        this.$nextTick(function () {
          this.isAlive = true
        })
    }
  }
}
</script>

<style>
#app {

}
</style>
