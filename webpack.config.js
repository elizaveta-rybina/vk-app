import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			app: path.resolve(__dirname, 'src/app'),
			entities: path.resolve(__dirname, 'src/entities'),
			features: path.resolve(__dirname, 'src/features'),
			pages: path.resolve(__dirname, 'src/pages'),
			shared: path.resolve(__dirname, 'src/shared'),
			widgets: path.resolve(__dirname, 'src/widgets'),
		},
	},
	devServer: {
		static: path.resolve(__dirname, 'public'),
		port: 3000,
		historyApiFallback: true,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: 'ts-loader',
					options: {
						transpileOnly: true,
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.module\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[name]__[local]___[hash:base64:5]',
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.scss$/,
				exclude: /\.module\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
}
