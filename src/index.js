import Vue from 'vue'
import App from './app'

const vm = new Vue({
  render: h => h(App),
  el: '#app',
  components: {
    App,
  },
})
