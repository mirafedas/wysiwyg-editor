export const state = () => ({
  texts: []
})

export const mutations = {
  saveInJSON(state, newText) {
    state.texts.push(newText)
  }
}
