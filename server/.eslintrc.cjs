// @ts-check

/* eslint-disable @typescript-eslint/no-var-requires */

const defineConfig = require("eslint-define-config").defineConfig;

// https://eslint.org/docs/user-guide/configuring/

const config = defineConfig({
	extends: ["../.eslintrc.cjs"],

	env: {
		es2021: true,
		node: true,
	},
});

module.exports = config;
