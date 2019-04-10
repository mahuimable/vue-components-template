import Button from './button/button.vue'

const components = [
	Button
]

const install = (Vue) => {
	components.forEach((component) => {
		Vue.component(component.name, component)
	})
}

export default install