<template>
  <form>
    <label for="text">Text:</label>
    <input v-model="newText" type="text" placeholder="text" />
    <div>
      <input v-model="linebreak" type="checkbox" />
      <label for="linebreak">Add a line break in the end</label>
    </div>
    <label for="color">Color:</label>
    <input v-model="newColor" type="text" placeholder="color" />
    <label for="font">Font size:</label>
    <input v-model="newFontSize" type="text" placeholder="font size" />
    <label for="background">Background color:</label>
    <input v-model="bgColor" type="text" placeholder="background color" />
    <div class="btn-wrapper">
      <button class="cancel-btn" @click.prevent="$emit('hide')">
        Cancel
      </button>
      <button class="default-btn" @click.prevent="save">
        Save
      </button>
    </div>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    selected: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
      newText: '',
      newColor: '',
      bgColor: '',
      newFontSize: '',
      linebreak: false
    }
  },
  mounted() {
    this.newText = this.selected.text
    this.newColor = this.selected.color
    this.bgColor = this.selected.backgroundColor
    this.newFontSize = this.selected.fontSize
    this.linebreak = this.selected.linebreak
  },
  methods: {
    ...mapMutations(['saveText']),
    save() {
      const newData = {
        id: this.selected.id,
        text: this.newText,
        color: this.newColor,
        backgroundColor: this.bgColor,
        fontSize: this.newFontSize,
        linebreak: this.linebreak
      }
      this.saveText(newData)
      this.$emit('hide')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/vars.scss';

form {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 10px;
  background-color: $bg-color;
  border: 1px solid green;
}

input {
  padding: 10px;
  margin: 5px 0 20px 0;
}
</style>
