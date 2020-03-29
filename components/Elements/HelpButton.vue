<template>
  <div class="help_button">
  <nuxt-link to="/questions">
      <i class="fa fa-question"></i>
  </nuxt-link>
  </div>
</template>

<script>
    export default {
        name: "HelpButton"
    }
</script>

<style scoped lang="scss">
  .help_button {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid black;
    text-align: center;
    margin-top: 400px;
  }
i {
  font-size: medium;
  line-height: 25px;
  color: #0BA72B;
}
</style>
