var webpack = require("../../../../");
module.exports = {
	plugins: [
		new webpack.DllReferencePlugin({
			name: "function(id) { return {default: 'ok'}; }",
			scope: "dll",
			content: {
				"./module": {
					id: 1,
					buildMeta: {
						harmonyModule: true
					},
					exports: ["default"]
				}
			}
		}),
		new webpack.optimize.ModuleConcatenationPlugin()
	]
};
