const path = require('path')

const resolve = (dir) => {
	return path.resolve(__dirname, dir)
}
module.exports = {
	outputDir: 'dist',
	publicPath: '/',
	pages: {
		index: {
			entry: './src/examples/main.js',
			template: './public/index.html',
			filename: 'index.html',
			title: 'index',
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		},
		doc: {
			entry: './src/examples/docs/main.js',
			template: './public/doc.html',
			filename: 'doc.html',
			title: 'doc',
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				'components': resolve('src/components'),
				'packages': resolve('src/packages')
			}
		}
	}
}