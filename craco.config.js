const reactHotReloadPlugin = require("craco-plugin-react-hot-reload");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	style: {
		postcss: {
			plugins: [require("tailwindcss"), require("autoprefixer")],
		},
	},
	target: "node",
	plugin: reactHotReloadPlugin,
	externals: [nodeExternals()],
	webpack: {
		configure: (webpackConfig) => {
			webpackConfig.module.rules.push({
				rules: [
					{
						test: /\.mjs$/,
						type: "javascript/auto",
					},
					{
						test: /\.js$/,
						exclude: /node_modules/,
						use: {
							loader: "babel-loader",
						},
					}
				],
			});

			return webpackConfig;
		},
	},
};
