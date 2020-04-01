<template>
    <div class="condition">
      <SelectField :numCondition="numCondition" @selected_condition="addCondition" />
      <OldRange v-if="selectedCondition.component === 'OldRange'" />
      <CardStatus v-if="selectedCondition.component === 'CardStatus'" />
      <CardType v-if="selectedCondition.component === 'CardType'" />
      <div class="buttons">
        <div class="empty-wrapper"></div>
        <div class="buttons-wrapper">
          <AddButton :label="selectedCondition.labelButton"/>
          <RemoveButton/>
        </div>
      </div>
    </div>
</template>

<script>
  import SelectField from "../../Elements/SelectField";
  import RemoveButton from "../../Elements/RemoveButton";
  import AddButton from "../../Elements/AddButton";
  import OldRange from "./OldRange";
  import CardStatus from "./CardStatus";
  import CardType from "./CardType";
    export default {
        name: "Condition",
      props: {
        "numCondition": Number,
      },
      components: {
        SelectField,
        RemoveButton,
        AddButton,
        OldRange,
        CardStatus,
        CardType
      },
      data() {
          return {
            selectedCondition: {}
          }
      },

      methods: {
          addCondition(item) {
            this.selectedCondition = item
            // this.$store.commit(['condition/setCondition'], this.numCondition)

          }
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
    justify-content: space-between;
    width: 70%;
  }
</style>
