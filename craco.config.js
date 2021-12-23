const reactHotReloadPlugin = require("craco-plugin-react-hot-reload");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	style: {
		postcss: {
			plugins: [require("tailwindcss"), require("autoprefixer")],
		},
	},
	plugin: reactHotReloadPlugin,
	webpack: {
		configure: (webpackConfig) => {
			webpackConfig.module.rules.push({
				rules: [
					{
						test: /\.mjs$/,
						include: /node_modules/,
						type: "javascript/auto",
					},
				],
			});
			return webpackConfig;
		},
	},
};
