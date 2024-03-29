import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Bootstrap
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
