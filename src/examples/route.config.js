import App from './App.vue'

const routeTable = ((r) => {
	return r.keys().map(key => ({
		path: key.match(/\.(\/.*)\.md/)[1],
		component: r(key).default
	}))
})(require.context('./docs', true, /\.md$/))

const routes = [
	{
		path: '/',
		name: 'index',
		component: App
	}, ...routeTable
]
export default routes