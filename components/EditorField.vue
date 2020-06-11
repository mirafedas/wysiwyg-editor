<template>
  <main>
    <div class="wrapper">
      <TextSettings @change="change" />
      <div
        ref="textarea"
        class="main-wrapper"
        contenteditable="true"
        spellcheck="false"
        @blur="saveText"
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
  mounted() {
    this.$refs.textarea.innerHTML = localStorage.getItem('text')
  },
  methods: {
    ...mapMutations(['saveInJSON']),
    saveText() {
      localStorage.setItem('text', this.$refs.textarea.innerHTML)
    },
    change(newProp) {
      document.execCommand(newProp.type, false, newProp.val)
      this.getJSON()
    },
    getJSON() {
      const html = this.$refs.textarea
      this.saveInJSON(html)
      event.preventDefault()
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

pre {
  overflow: scroll;
}
</style>
