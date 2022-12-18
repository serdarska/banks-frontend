// export const state = () => ({
//   banks: []
// })
//
// export const mutations = {
//   SET_BANKS(state, banks){
//     state.banks = banks
//   }
// }
//
// export const actions = {
//   nuxtServerInit({ commit }){
//     return this.$axios.$get('http://localhost:8080/api/banks/')
//       .then((response) => {
//         commit('SET_BANKS', response)
//       })
//   },
//
// }
