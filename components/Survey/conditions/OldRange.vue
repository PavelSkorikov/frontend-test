<template>
  <div class="old-range">
    <div class="old-range__label">
      Диапазон {{}}
    </div>
    <div class="old-range__item">
      <span>от</span>
      <div class="old-range__item_field"></div>
      <span>до</span>
      <div class="old-range__item_field"></div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "OldRange"
    }
</script>

<style scoped lang="scss">
  .old-range {
    display: flex;
    align-items: center;
    padding-top: 2rem;
    font-size: 14px;
    &__label {
      width: 30%;
    }
    &__item {
      position: relative;
      width: 70%;
      height: 3rem;
      display: flex;
      align-items: center;
      &_field {
        display: inline-block;
        width: 20%;
        height: 3rem;
        margin: 0 10px 0 10px;
        background: white;
        border: none;
        border-radius: 5px;
        box-shadow: 0 0 3px rgba(0, 0, 0, .3);
        cursor: pointer;
      }
    }
  }

</style>
