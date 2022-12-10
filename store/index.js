export const state = () => ({
  menu: []
})

export const mutations = {
  SET_MENU(state, menu){
    state.menu = menu
  }
}

export const actions = {
  nuxtServerInit({ commit }){
    return this.$axios.$get('http://localhost:8080/api/banks/')
      .then((response) => {
        commit('SET_MENU', response)
      })
  }
}
