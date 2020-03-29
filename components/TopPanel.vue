<template>
  <div class="top_panel">
    <div class="wrapper">
      <SearchInput />
      <UserInfo />
    </div>
    <BreadCrumb :path="path"/>
  </div>

</template>

<script>
  import SearchInput from "../components/Elements/SearchInput";
  import UserInfo from "./Elements/UserInfo";
  import BreadCrumb from "./Elements/BreadCrumb";
  export default {
      name: "TopPanel",
    components: {
      SearchInput,
      UserInfo,
      BreadCrumb
    },
    computed: {
        path() {
          console.log(this.$store.getters['path/path'])
          return this.$store.getters['path/path']
        }
    }
  }
</script>

<style scoped lang="scss">
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

</style>
