<template>
  <div class="user_info">
    <img src="@/static/img/Admin.png" class="user_face">
    <div class="user_text">
      <h3>Alexander C.</h3>
      <span style="color: #B0B0B0">Администратор</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserInfo"
    }
</script>

<style scoped lang="scss">
  .user_info {
    display: flex;
    align-items: center;
    width: 150px;
    height: 50px;
  }
  .user_face {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
  .user_text {
    margin-left: 10px;
  }

</style>
