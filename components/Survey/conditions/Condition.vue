<template>
    <div class="condition">
      <SelectField :numCondition="id" @set="getCondition" />
      <OldRange v-if="selectedCondition.component === 'OldRange'" />
      <CardStatus v-if="selectedCondition.component === 'CardStatus'" />
      <CardType v-if="selectedCondition.component === 'CardType'" />
      <div class="buttons">
        <div class="empty-wrapper"></div>
        <div class="buttons-wrapper">
          <AddButton v-if="selectedCondition.id>0" :label="selectedCondition.labelButton" />
          <RemoveButton />
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
        "id": Number,
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
      // computed: {
      //   getCondition() {
      //     return this.$store.getters['condition/conditionById'](this.id)
      //   }
      // },
      methods: {
        getCondition(item) {
          this.selectedCondition = item
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
