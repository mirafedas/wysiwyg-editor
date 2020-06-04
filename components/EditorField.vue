<template>
  <main>
    <div class="wrapper">
      <TextSettings
        @changeColor="changeColor"
        @changeFontSize="changeFontSize"
        @changeBgColor="changeBgColor"
      />
      <div
        ref="textarea"
        class="main-wrapper"
        contenteditable="true"
        spellcheck="false"
      ></div>
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
  computed: {
    ...mapState(['texts'])
  },
  methods: {
    ...mapMutations(['saveInJSON']),
    changeColor(color) {
      if (color) {
        document.execCommand('foreColor', false, color)
        this.getJSON()
      }
    },
    changeFontSize(fontSize) {
      if (fontSize) {
        document.execCommand('fontSize', false, fontSize)
        this.getJSON()
      }
    },
    changeBgColor(bgColor) {
      if (bgColor) {
        document.execCommand('backColor', false, bgColor)
        this.getJSON()
      }
    },
    getJSON() {
      this.saveInJSON(this.$refs.textarea.innerHTML)
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

.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

pre {
  overflow: scroll;
}
</style>
