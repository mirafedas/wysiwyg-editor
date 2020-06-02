<template>
  <div class="container">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  min-height: 100vh;
}
</style>
