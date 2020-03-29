<template>
  <div class="wrapper">
    <h1>Coll center</h1>
  </div>
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
  .wrapper {
    width: 100%;

  }


</style>
