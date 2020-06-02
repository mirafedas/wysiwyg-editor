<template>
  <div class="wrapper">
    <nuxt-link to="/">Go back</nuxt-link>
    <pre>{{ texts }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['texts'])
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  flex-grow: 1;
  padding: 20px;
}

pre {
  margin-top: 20px;
}
</style>
