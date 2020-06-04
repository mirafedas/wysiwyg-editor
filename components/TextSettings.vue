<template>
  <form>
    <fieldset>
      <label for="color">Color:</label>
      <select id="color" v-model="color" @change="$emit('changeColor', color)">
        <option>black</option>
        <option>white</option>
        <option>yellow</option>
        <option>orange</option>
        <option>red</option>
        <option>blue</option>
        <option>green</option>
        <option>violet</option>
      </select>
      <label for="fontSize">Font size:</label>
      <select
        id="fontSize"
        v-model="fontSize"
        @change="$emit('changeFontSize', fontSize)"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
      </select>
      <label for="bgColor">Background color:</label>
      <select
        id="bgColor"
        v-model="bgColor"
        @change="$emit('changeBgColor', bgColor)"
      >
        <option>white</option>
        <option>black</option>
        <option>yellow</option>
        <option>orange</option>
        <option>red</option>
        <option>blue</option>
        <option>green</option>
        <option>violet</option>
      </select>
    </fieldset>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      color: 'black',
      fontSize: 4,
      bgColor: 'white'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/vars.scss';
fieldset {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 10px;
  background-color: $bg-color;
  border: 2px solid green;
}

select {
  width: 100%;
  padding: 10px;
  margin: 5px 0 20px 0;
  background-color: $main-color;
  border-color: black;
  color: white;
}
</style>
