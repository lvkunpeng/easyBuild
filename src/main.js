import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import vuex from './store'
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'

// import { Row, Col, Icon, Card } from 'iview'
// Vue.component('Row', Row)
// Vue.component('Col', Col)
// Vue.component('Icon', Icon)
// Vue.component('Card', Card)

const isDebug_mode = process.env.NODE_ENV !== 'production'
Vue.config.debug = isDebug_mode
Vue.config.devtools = isDebug_mode
Vue.config.productionTip = isDebug_mode

// Vue.use(iView)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuex,
  render: h => h(App)
})