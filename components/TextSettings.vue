<template>
  <form>
    <span><b>Selected:</b> {{ selectedText }}</span>
    <br />
    <label for="color">Color:</label>
    <input v-model="newColor" type="text" placeholder="color" />
    <label for="font">Font size:</label>
    <input v-model="newFontSize" type="text" placeholder="font size" />
    <label for="background">Background color:</label>
    <input v-model="bgColor" type="text" placeholder="background color" />
    <button class="default-btn" @click.prevent="save">
      Save
    </button>
  </form>
</template>

<script>
export default {
  props: {
    selectedText: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      newColor: '',
      bgColor: '',
      newFontSize: ''
    }
  },
  methods: {
    save() {
      const uniqueID = Math.floor(Math.random() * 11) + Date.now()
      const newData = {
        id: uniqueID,
        text: this.selectedText,
        color: this.newColor,
        backgroundColor: this.bgColor,
        fontSize: this.newFontSize
      }
      this.$emit('create', newData)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/vars.scss';

form {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 10px;
  background-color: $bg-color;
  border: 1px solid green;
}

input {
  padding: 10px;
  margin: 5px 0 20px 0;
}
</style>
