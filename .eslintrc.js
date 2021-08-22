// @ts-check

const defineConfig = require("eslint-define-config").defineConfig;

const isProduction = process.env.NODE_ENV === "production";

// https://eslint.org/docs/user-guide/configuring/

const config = defineConfig({
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
	},

	env: {
		es2021: true,
		node: true,
	},

	ignorePatterns: [
		"node_modules/**/*",
		".git/**/*",
		".husky/**/*",
		"build/**/*",
		// Unignore files starting with dot (usually config files)
		"!.*",
	],

	extends: [
		"eslint:recommended",

<<<<<<< HEAD
		// https://github.com/prettier/eslint-config-prettier
		"prettier",
=======
		// https://github.com/ota-meshi/eslint-plugin-regexp
		"plugin:regexp/recommended",

		// https://github.com/prettier/eslint-plugin-prettier
		"plugin:prettier/recommended",
>>>>>>> 2f8056a (chore(ESLint): ➕ Add `eslint-plugin-regexp`)
	],

	rules: {
		"max-len": [
			"error",
			{
				code: 100,
				tabWidth: 4,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
			},
		],

		"no-console": isProduction ? ["error"] : ["warn"],

		"no-alert": ["error"],

		"no-debugger": ["error"],

		"prefer-named-capture-group": ["error"],

		"func-names": ["error", "as-needed"],
	},
});

module.exports = config;
