<template>
  <div>
    <main class="main">
      <h1 class="title">{{ title }}</h1>
      <hello-world/>
    </main>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  data () {
    return {
      title: 'App up.',
    }
  },

  components: {
    HelloWorld,
  },
}
</script>

<style lang="css">
.title {
  font-size: 32px;
}
</style>
