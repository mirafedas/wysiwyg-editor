<template>
  <form>
    <div>
      <button @click="$emit('change', { type: 'bold', val: null })">
        <b>B</b>
      </button>
      <button @click="$emit('change', { type: 'italic', val: null })">
        <i>I</i>
      </button>
      <button @click="$emit('change', { type: 'underline', val: null })">
        <u>U</u>
      </button>
    </div>
    <div>
      <label for="color">Color:</label>
      <input
        id="color"
        v-model="color"
        type="color"
        @change="$emit('change', { type: 'foreColor', val: color })"
      />
    </div>
    <div>
      <label for="fontSize">Font size:</label>
      <select
        id="fontSize"
        v-model="fontSize"
        @change="$emit('change', { type: 'fontSize', val: fontSize })"
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
    </div>
    <div>
      <label for="bgColor">Background color:</label>
      <input
        id="bgColor"
        v-model="bgColor"
        type="color"
        @change="$emit('change', { type: 'backColor', val: bgColor })"
      />
    </div>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      color: '#000000',
      fontSize: 4,
      bgColor: '#ffffff'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/vars.scss';
form {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  max-width: 700px;
  margin: 10px 0;
  padding: 10px;
  background-color: $bg-color;
  border: 2px solid green;

  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    & > button {
      margin: 0 5px;
    }
  }
}

input,
select {
  height: 30px;
  margin: 0 10px;
}

label {
  font-size: 12px;
}

select {
  padding: 5px;
  background-color: $main-color;
  border-color: black;
  color: white;
}
</style>
