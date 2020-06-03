<template>
  <main>
    <div class="wrapper">
      <TextSettings :selected-text="selectedText" @create="createNode" />
      <div ref="textarea" class="main-wrapper" contenteditable="true"></div>
      <pre class="main-wrapper">{{ texts }}</pre>
    </div>
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import TextSettings from '~/components/TextSettings'

export default {
  components: {
    TextSettings
  },
  data: () => {
    return {
      selectedText: '',
      rangeStart: '',
      rangeEnd: '',
      results: []
    }
  },
  computed: {
    ...mapState(['texts'])
  },
  mounted() {
    document.addEventListener('mouseup', (event) => {
      if (event.target === this.$refs.textarea) {
        this.getSelectedText()
      }
    })
  },
  methods: {
    ...mapMutations(['saveInJSON']),
    getSelectedText() {
      const selectedTextObj = window.getSelection()
      const selectedTextWithReference = selectedTextObj.toString()
      const selectedText = JSON.parse(JSON.stringify(selectedTextWithReference))

      if (selectedText) {
        const { anchorOffset, focusOffset } = selectedTextObj
        this.selectedText = selectedText
        this.rangeStart = focusOffset
        this.rangeEnd = anchorOffset
      }
    },
    createNode(newData) {
      console.log('innerHTML', this.$refs.textarea.innerHTML)
      const newNode = `<span contenteditable="false" style="color: ${newData.color}; font-size: ${newData.fontSize}px; background-color: ${newData.backgroundColor}";>${newData.text}</span>`
      // replace the string with textContent
      this.$refs.textarea.innerHTML = newNode
      this.results.push(newData)
      this.saveInJSON(newData)
      this.selectedText = ''
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 auto;
  padding: 30px;
}

.main-wrapper {
  width: 100%;
  max-width: 700px;
  padding: 10px;
  margin: 10px;
  border: 1px solid grey;
}

.btn-wrapper {
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  max-width: 300px;
  padding: 10px 0;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
</style>
