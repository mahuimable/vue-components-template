import App from './App.vue'

const routeTable = ((r) => {
	// console.log(r.keys())
	return r.keys().map(key => {
		// console.log(key)
		// console.log(r(key))
		return {
				path: key.match(/\.(\/.+)\.md/)[1],
				name: key.match(/\.\/(.+)\.md/)[1],
				component: r(key).default
			}
	})
})(require.context('./docs', true, /\.md$/))

const routes = [
	{
		path: '/',
		name: 'index',
		component: App
	}, ...routeTable
]
export default routes