import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import './plugins/axios'
require('./sass/ui/ui.scss');

import store from './store'
import router from './router'
window.moment = require('moment')

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
