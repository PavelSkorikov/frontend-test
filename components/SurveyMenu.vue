<template>
  <ul class="survey_menu">
    <li v-for="item of menu"
        :key="item.name"
        @click="selectMenu(item.name)"
        v-bind:class="{ pressed: item.active }"
    >
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
              {label: 'Параметры', name: 'params', to: '/surveys/add_survey/params', active: false},
              {label: 'Вопросы', name: 'questions', to: '/surveys/add_survey/questions', active: false},
              {label: 'Логика', name: 'logic', to: '/surveys/add_survey/logic', active: false},
              {label: 'Условия', name: 'conditions', to: '/surveys/add_survey/conditions', active: false},
              {label: 'Респонденты', name: 'respondents', to: '/surveys/add_survey/respondents', active: true},
            ]
          }
      },
      methods: {
          selectMenu(name) {
            this.menu.forEach(function (item, i, arr) {
              if (name == item.name) {
                item['active'] = true
              } else item['active'] = false
            });
            this.$emit('menu_click', name)
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
    border-bottom: 1px solid #9AC283;
    & li {
      height: 100%;
      display: inline-block;
      color: #58A369;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .pressed {
    border-bottom: 2px solid #9AC283;
  }

</style>
