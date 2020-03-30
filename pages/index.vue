<template>
  <div class="wrapper">
    <h1>Main page</h1>
  </div>
</template>

<script>
  export default {
    fetch({store, route}) {
      store.commit('path/setPath', route.path)
    }
  }
</script>

<style>



</style>
