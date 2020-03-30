<template>
  <div>
    <SurveyMenu @menu_click="openPage"/>
    <Params v-if="page.params"/>
    <Questions v-if="page.questions"/>
    <Logic v-if="page.logic"/>
    <Conditions v-if="page.conditions"/>
    <Respondents v-if="page.respondents"/>
  </div>
</template>

<script>
  import SurveyMenu from "../../../components/SurveyMenu";
  import Respondents from "../../../components/Survey/Respondents";
  import Logic from "../../../components/Survey/Logic";
  import Conditions from "../../../components/Survey/Conditions";
  import Questions from "../../../components/Survey/Questions";
  import Params from "../../../components/Survey/Params";
    export default {
      name: "add_survey",
      components: {
        SurveyMenu,
        Respondents,
        Logic,
        Conditions,
        Questions,
        Params
      },
      data () {
        return {
          page: {
            respondents: true,
            logic: false,
            conditions: false,
            questions: false,
            params: false
          }
        }
      },
      fetch({store, route}) {
        store.commit('path/setPath', route.path)
      },
      methods: {
        openPage(name) {
          for (let key in this.page) {
            if (key == name) {
              this.page[key] = true
            } else {
              this.page[key] = false
            }
          }
        }
      }
    }
</script>

<style scoped>

</style>
