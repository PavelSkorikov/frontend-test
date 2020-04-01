<template>
    <button>
      Протестировать опрос
    </button>
</template>

<script>
    export default {
        name: "TestButton"
    }
</script>

<style scoped lang="scss">
  button {
    width: 150px;
    color: #5CD291;
    background: white;
    line-height: 3rem;
    border: none;
    border-radius: 3px;
    box-shadow: 3px 3px #E4E5E6;
    cursor: pointer;
    opacity: .9;
    &:hover {
      opacity: 1;
    }
    &:active {
      box-shadow: 1px 1px #E4E5E6;
      box-shadow: -1px -1px #E4E5E6;
    }
  }


</style>
