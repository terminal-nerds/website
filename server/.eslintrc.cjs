// @ts-check
const defineConfig = require("eslint-define-config").defineConfig; // eslint-disable-line @typescript-eslint/no-var-requires

// https://eslint.org/docs/user-guide/configuring/
const config = defineConfig({
	extends: ["../.eslintrc.cjs"],

	env: {
		es2021: true,
		node: true,
	},
});

module.exports = config;
