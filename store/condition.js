export const state = () => ({
  conditions: []
});
export const mutations = {
  setCondition(state, condition) {
    state.conditions.push(condition)
  }
};
export const getters = {
  conditions: state => state.conditions
}

