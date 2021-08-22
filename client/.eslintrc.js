// @ts-check

const defineConfig = require("eslint-define-config").defineConfig;

// https://eslint.org/docs/user-guide/configuring/

const config = defineConfig({
	extends: ["../.eslintrc"],

	env: {
		es2021: true,
		browser: true,
	},
});

module.exports = config;
