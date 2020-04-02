<template>
  <section class="respondents">
    <div class="respondents__title">Добавить опрос</div>
    <Condition v-for="condition in conditions" :key="condition.id" :id="condition.id"/>
    <div class="addCondition">
      <div class="addCondition__button" @click="addCondition">
        <i class="fa fa-plus fa-2x"></i>
        <span>Нажмите, чтобы добавить новое условие выборки</span>
        <span>Все условия связываются между собой логическим "И"</span>
      </div>
    </div>
    <div class="respondents__footer">
      <TestButton />
      <NextButton />
    </div>

  </section>
</template>

<script>
  import Condition from "./conditions/Condition";
  import TestButton from "../Elements/TestButton";
  import NextButton from "../Elements/NextButton";
    export default {
        name: "respondents",
      components: {
        Condition,
        TestButton,
        NextButton
      },
      data() {
          return {
            countConditions: null
          }
      },
      computed: {
        conditions() {
          return this.$store.getters['condition/conditions']
        }
      },
      methods: {
        addCondition() {
          this.countConditions++;
          this.$store.commit('condition/addCondition', {id: this.countConditions})
        }
      }

    }
</script>

<style scoped lang="scss">
  .respondents {
    &__title {
      height: 4rem;
      padding: 20px 20px 10px 20px;
      font-size: 14px;
      line-height: 1rem;
      font-weight: bold;
      color: #C1C1C1;
    }
    &__footer {
      background-color: #F4F7F9;
      padding: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .addCondition {
    display: flex;
    padding: 40px;
    align-items: center;
    &__button {
      width: 100%;
      height: 8rem;
      border: 2px solid #ECF1F4;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #7DA888;
      cursor: pointer;
      box-shadow: 0 0 1px 1px #7DA888;
      &:hover {
        box-shadow: 0 0 2px 2px #7DA888;
      }
      &:active {
        box-shadow: 0 0 1px 1px #7DA888;
      }
    }
  }
  i {
    margin-bottom: 10px;
  }
</style>
