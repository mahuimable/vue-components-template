import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routeConfig from './route.config'
import demoBlock from './components/demo-block'
// 引入组件库
import UIPlugin from 'packages/index'

// Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(UIPlugin)

Vue.component('demo-block', demoBlock)

const router = new VueRouter({
	mode: 'history',
	routes: routeConfig
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')