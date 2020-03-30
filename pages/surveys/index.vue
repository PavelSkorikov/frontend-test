<template>
  <AddSurvey />
</template>

<script>
  import AddSurvey from "../../components/Elements/AddSurvey";
  export default {
    components: {
      AddSurvey
    },
    fetch({store, route}) {
      store.commit('path/setPath', route.path)
    }
  }

</script>


<style>


</style>
