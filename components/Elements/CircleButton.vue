<template>
  <nuxt-link to="/">
    <div class="circle_button">
    </div>
  </nuxt-link>
</template>

<script>
    export default {
        name: "CircleButton"
    }
</script>

<style scoped lang="scss">
  .circle_button{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: red;
    margin-bottom: 40px;
  }
</style>
