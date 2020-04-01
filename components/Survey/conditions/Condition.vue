<template>
    <div class="condition">
      <SelectField :numCondition="numCondition"/>
      <div class="buttons">
        <div class="empty-wrapper"></div>
        <div class="buttons-wrapper">
          <RemoveButton/>
        </div>
      </div>
    </div>
</template>

<script>
  import SelectField from "../../Elements/SelectField";
  import RemoveButton from "../../Elements/RemoveButton";
    export default {
        name: "Condition",
      props: {
        "numCondition": Number
      },
      components: {
          SelectField,
        RemoveButton
      }
    }
</script>

<style scoped lang="scss">
  .condition{
    background-color: #FAFAFA;
    padding: 20px 40px 40px 40px;
    display: flex;
    flex-direction: column;
  }
  .buttons {
    display: flex;
    margin-top: 3rem;
  }
  .empty-wrapper {
    width: 30%;
  }
  .buttons-wrapper {
    display: flex;
    justify-content: end;
    width: 70%;
  }
</style>
