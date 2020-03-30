export const state = () => ({
  path: []
})
export const mutations = {
  setPath(state, path) {
    const path_arr = path.substring(1).split('/');
    const translate = {
      'users': 'Пользователи',
      'blacklist': 'Черные списки',
      'Contacts': 'Колл - центр',
      'surveys': 'Опросы',
      'questions': 'Помощь',
      'add_survey': 'Добавить опрос'
    };
    let result = path_arr.map(item => translate[item]);
    state.path = result
  }
};
export const getters = {
  path: state => state.path
}
