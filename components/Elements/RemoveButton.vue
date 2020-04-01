<template>
    <button class="remove-button">
      <i class="fa fa-trash fa-2x" aria-hidden="true"></i>
      <span>Удалить условие</span>
    </button>
</template>

<script>
    export default {
        name: "RemoveButton"
    }
</script>

<style scoped lang="scss">
  .remove-button {
    width: 150px;
    height: 3rem;
    padding: 10px ;
    background: white;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 1px 1px #FE1227;
    color: #FE1227;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 2px 2px #FE1227;
    }
    &:active {
      box-shadow: 0 0 1px 1px #FE1227;
    }

  }
</style>
