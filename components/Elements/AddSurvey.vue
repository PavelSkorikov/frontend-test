<template>
    <button class="add_survey" @click="add_survey">
      <i class="fa fa-plus fa-2x" />
      <span>Добавить опрос</span>
    </button>
</template>

<script>
    export default {
        name: "AddSurvey",
      methods: {
          add_survey() {
            this.$router.push('/surveys/add_survey')
          }
      }
    }
</script>

<style scoped lang="scss">
  .add_survey {
    width: 200px;
    height: 5rem;
    border-radius: 5px;
    background-color: white;
    box-shadow: 1px 1px 5px rgba(0,0,0,.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 1rem;
    color: #9AC283;
    &:hover {
      border: 2px solid #ADC571;
    }
  }
  span {
    font-size: medium;
  }
</style>
