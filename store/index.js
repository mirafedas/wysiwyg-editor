export const state = () => ({
  texts: []
})

export const mutations = {
  saveText(state, newText) {
    const existingText = state.texts.find((el) => el.id === newText.id)

    if (existingText) {
      Object.assign(existingText, newText)
    } else {
      state.texts.push(newText)
    }
  }
}
