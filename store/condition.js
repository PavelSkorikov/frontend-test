export const state = () => ({
  conditions: []
});
export const mutations = {
  addCondition(state, condition) {
    state.conditions.push(condition)
  },
  setCondition(state, condition) {
    for (let i=0; i<state.conditions.length; i++) {
      if (state.conditions[i].id == condition.id) {
        state.conditions[i] = condition
      }
    }
  }
};
export const getters = {
  conditions: state => state.conditions,
  conditionById: state => id => state.conditions.find(condition => condition.id === id)
};

