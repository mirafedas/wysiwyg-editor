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
      range: {},
      results: []
    }
  },
  computed: {
    ...mapState(['texts'])
  },
  mounted() {
    document.addEventListener('mouseup', (event) => {
      if (
        event.target === this.$refs.textarea ||
        event.target.classList.contains('text')
      ) {
        this.getSelectedText()
      }
    })
  },
  methods: {
    ...mapMutations(['saveInJSON']),
    getSelectedText() {
      const selectedTextWithReference = window.getSelection().toString()
      const selectedText = JSON.parse(JSON.stringify(selectedTextWithReference))

      if (selectedText) {
        console.log('selectedText', selectedText)
        const range = window.getSelection().getRangeAt(0)
        this.range = range
        this.selectedText = selectedText
        this.rangeStart = range.startOffset
        this.rangeEnd = range.endOffset
      }
    },
    createNode(newData) {
      const span = document.createElement('span')
      span.setAttribute('class', 'text')
      span.setAttribute('contenteditable', false)
      span.setAttribute(
        'style',
        `color: ${newData.color};
        font-size: ${newData.fontSize}px;
        background-color: ${newData.backgroundColor}`
      )
      span.textContent = newData.text
      this.range.deleteContents()
      this.range.insertNode(span)
      console.log('textContent', this.$refs.textarea.textContent)
      console.log('innerHTML', this.$refs.textarea.innerHTML)
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
