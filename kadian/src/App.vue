<template>
  <div id="app">
    <img v-if="$route.meta.isShow" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  }
}
</script>

<style>

</style>
