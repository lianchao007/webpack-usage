const path = require('path')
const toml = require('toml')
const yaml = require('yamljs')
const json5 = require('json5')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: { // 输入路径
		index: './src/js/index.js',
		bar: './src/js/bar.js'
	},
	output: { // 输出路径及文件名字
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][chunkhash:8].js',
		clean: true // 清楚文件夹内容
	},
	module: {
		rules: [
			{// 引入css文件
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{// 引入图片
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				// use: {
				// 	loader: 'file-loader',
				// 	options: {
				// 		name: '[name].[ext]',
				// 		outputPath: 'imgs'
				// 	}
				// },
			},
			{// 引入字体
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{// 加载文件
				test: /\.(csv|tsv)$/,
				use: ['csv-loader']
			},
			{// 加载文件
				test: /\.xml$/,
				use: ['xml-loader']
			},
			{// 加载文件并转成json格式
				test: /\.toml$/i,
				type: 'json',
				parser: {
					parse: toml.parse
				}
			},
			{// 加载文件并转成json格式
				test: /\.yaml$/i,
				type: 'json',
				parser: {
					parse: yaml.parse
				}
			},
			{// 加载文件并转成json格式
				test: /\.json5$/i,
				type: 'json',
				parser: {
					parse: json5.parse
				}
			}
		]
	},
	plugins: [ 
		new HtmlWebpackPlugin({ // 输出html模板
			title: '管理输出'
		})
	]
}