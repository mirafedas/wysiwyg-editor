<template>
  <main>
    <div class="btn-wrapper">
      <button class="default-btn" type="submit" @click="add">
        Add text
      </button>
      <nuxt-link :to="{ name: 'result' }" class="link">
        View JSON
      </nuxt-link>
    </div>
    <div class="main-wrapper">
      <span
        v-for="item in texts"
        :key="item.id"
        :style="{
          color: item.color,
          fontSize: item.fontSize,
          backgroundColor: item.backgroundColor
        }"
        @click="select(item.id)"
      >
        {{ item.text }}
        <br v-if="item.linebreak" />
      </span>
      <TextSettings
        v-if="showInput"
        :selected="selected"
        @hide="hideSettings"
      />
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
      selected: {},
      showInput: false
    }
  },
  computed: {
    ...mapState(['texts'])
  },
  methods: {
    ...mapMutations(['saveText']),
    select(selectedID) {
      this.selected = this.texts.find((el) => el.id === selectedID)
      this.showInput = true
    },
    add() {
      const uniqueID = Math.floor(Math.random() * 11) + Date.now()
      const newEmptyText = {
        id: uniqueID,
        text: 'click me to edit',
        color: 'black',
        backgroundColor: 'white',
        fontSize: '16px'
      }
      this.saveText(newEmptyText)
    },
    hideSettings() {
      this.showInput = false
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
</style>
