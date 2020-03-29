<template>

</template>

<script>
  export default {
    fetch({store, route}) {
      const path = route.path;
      store.commit('path/setPath', path)
    }
  }

</script>

<style>


</style>
