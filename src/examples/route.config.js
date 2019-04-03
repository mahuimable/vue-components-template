import App from './App.vue'
import Backtop from 'packages/backtop'

const routes = [
	{
		path: '/',
		name: 'index',
		component: App
	}, {
		path: '/backtop',
		name: 'backtop',
		component: Backtop
	}
]
export default routes