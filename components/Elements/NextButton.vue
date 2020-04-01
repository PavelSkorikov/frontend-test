<template>
  <button>
    Далее
    <i class="fa fa-arrow-right" />
  </button>
</template>

<script>
    export default {
        name: "NextButton"
    }
</script>

<style scoped lang="scss">
  button {
    width: 100px;
    height: 3rem;
    background: #00A334;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    box-shadow: 3px 3px grey;
    cursor: pointer;
    opacity: .7;
    &:hover {
      opacity: 1;
    }
    &:active {
      box-shadow: -1px -1px green;

    }
  }

</style>
