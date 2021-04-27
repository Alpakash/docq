const reactHotReloadPlugin = require("craco-plugin-react-hot-reload");

module.exports = {
	style: {
		postcss: {
			plugins: [require("tailwindcss"), require("autoprefixer")],
		},
	},
	plugin: reactHotReloadPlugin,
};
