<template>
  <div class="search_input">
      <input type="search"  placeholder="Поиск по системе" v-model="query_string">
      <i class="fa fa-search" @click="onSearch"/>
  </div>
</template>

<script>
    export default {
        name: "SearchInput",
      data() {
          return {
            query_string: '',
          }
      },
      methods: {
          onSearch() {
            console.log(`beginSearch: ${this.query_string}`)
          }
      }
    }
</script>

<style scoped lang="scss">
.search_input {
  width: 600px;
  height: 3rem;
  box-shadow: 0 0 3px rgba(0,0,0,.3);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 1rem;
  & :first-child {
    border: none;
    width: 450px;
    height: 3rem;
  }
}
i {
  font-size: 20px;
  color: #B0B0B0;
  cursor: pointer;
}
</style>
