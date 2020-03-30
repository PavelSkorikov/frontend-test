<template>
  <div class="top_panel">
    <div class="wrapper">
      <SearchInput />
      <UserInfo />
    </div>
    <BreadCrumb />
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

  }
</script>

<style scoped lang="scss">
  .top_panel {
    margin-bottom: 2rem;
  }
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
