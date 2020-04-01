<template>
  <button class="add-button">
    <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
    <span>{{label}}</span>
  </button>
</template>

<script>
  export default {
    name: "AddButton",
    props: {
      "label": String
    }
  }
</script>

<style scoped lang="scss">
  .add-button {
    width: 150px;
    height: 3rem;
    padding: 10px ;
    background: white;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 1px 1px #7DA888;
    color: #7DA888;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 2px 2px #7DA888;
    }
    &:active {
      box-shadow: 0 0 1px 1px #7DA888;
    }

  }
</style>
