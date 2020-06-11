import { htmlToJson } from '../utils/html2json'

export const state = () => ({
  texts: {}
})

export const mutations = {
  saveInJSON(state, newText) {
    state.texts = htmlToJson(newText)
  }
}
