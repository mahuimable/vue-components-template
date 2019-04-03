import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routeConfig from './route.config'

// Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	routes: routeConfig
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')