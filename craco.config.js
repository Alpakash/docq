const reactHotReloadPlugin = require("craco-plugin-react-hot-reload");

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
						type: "javascript/auto",
					}
				]
			});

			return webpackConfig;
		},
	},
};
