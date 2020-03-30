<template>
  <div class="wrapper">
    <h1>Questions page</h1>
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
  .wrapper {
    width: 100%;

  }


</style>
