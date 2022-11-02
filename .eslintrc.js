module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ["standard-with-typescript", "plugin:import/typescript", "plugin:prettier/recommended"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.json",
	},
	plugins: ["prettier"],
	rules: {},
};
