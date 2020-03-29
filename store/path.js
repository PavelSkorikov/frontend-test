export const state = () => ({
  path: null
})
export const mutations = {
  setPath(state, path) {
    state.path = path

  }
}
export const getters = {
  path: state => state.path
}
