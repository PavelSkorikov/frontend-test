<template>
  <div class="wrapper">
    <h1>Users</h1>
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
    padding-top: 20px;
  }


</style>
