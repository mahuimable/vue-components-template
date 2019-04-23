if (!process.argv[2]) {
	console.log('*************请输入组件名称**************')
	return
}

const componentName = process.argv[2]

const fs = require('fs')

// 创建组件文件夹
if (fs.existsSync(`src/packages/${componentName}`)) {
	console.log('*****************已经存在同名组件，请更换组件名称******************')
	return
}

fs.mkdirSync(`src/packages/${componentName}`, {recursive: true}, (err) => {
	if (err) throw err
})

// fs.readdir('./scripts/templates', (err, files) => {
// 	if (err) {
// 		throw err
// 		return
// 	}
// 	if (files && files.length) {
// 		files.forEach((simple) => {
// 			let destFile = simple.match(/.md/) ? `src/examples/docs/${componentName}.md` : `src/packages/${componentName}/${simple}`
// 			fs.copyFile(`./scripts/templates/${simple}`, destFile, (err) => {
// 				if (err) throw err
// 			})
// 		})
// 	}
// })

// 生成首字母大写的驼峰式组件名称
const ComponentName = componentName
	.replace(/[a-z]/, match => match.toUpperCase())
	.replace(/\-([a-z])/g, (match, p1) => p1.toUpperCase())
console.log(ComponentName)

const templateFile = (srcFile, destFile) => {
	fs.readFile(srcFile, 'utf8', (err, data) => {
	if (err) return
		data = data.replace(/\$componentName/g, componentName).replace(/\$ComponentName/g, ComponentName)
		fs.writeFile(destFile, data, (err) => {
			if (err) throw err
		})
	})
}

templateFile('./scripts/templates/simple.md', `src/examples/docs/${componentName}.md`)
templateFile('./scripts/templates/simple.vue', `src/packages/${componentName}/${componentName}.vue`)
templateFile('./scripts/templates/simple.js', `src/packages/${componentName}/index.js`)
