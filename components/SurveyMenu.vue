<template>
  <ul class="survey_menu">
    <li v-for="item of menu" :key="item.name" @click="$emit('menu_click', item.name)">
      {{item.label}}
    </li>
  </ul>
</template>

<script>
    export default {
        name: "SurveyMenu",
      data() {
          return {
            menu: [
              {label: 'Параметры', name: 'params', to: '/surveys/add_survey/params'},
              {label: 'Вопросы', name: 'questions', to: '/surveys/add_survey/questions'},
              {label: 'Логика', name: 'logic', to: '/surveys/add_survey/logic'},
              {label: 'Условия', name: 'conditions', to: '/surveys/add_survey/conditions'},
              {label: 'Респонденты', name: 'respondents', to: '/surveys/add_survey/respondents'},
            ]
          }
      }
    }
</script>

<style scoped lang="scss">
  .survey_menu {
    max-width: 100%;
    height: 2rem;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & li {
      height: 100%;
      display: inline-block;
      color: #58A369;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        border-bottom: 2px solid #58A369;
      }
    }
  }

</style>
