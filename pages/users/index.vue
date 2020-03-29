<template>
  <div class="wrapper">
    <h1>Users</h1>
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
    padding-top: 20px;
  }


</style>
