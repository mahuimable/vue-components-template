import App from './App.vue'
// import Backtop from 'packages/backtop'
// import Backtop from './backtop.vue'
// import Backtop from './docs/backtop.md'
const routes = [
	{
		path: '/',
		name: 'index',
		component: App
	}, {
		path: '/button',
		name: 'button',
		component: r => require.ensure([], () => r(require('./docs/button.md')))
	}
]
export default routes