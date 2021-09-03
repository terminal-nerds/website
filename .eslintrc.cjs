// @ts-check
const defineConfig = require("eslint-define-config").defineConfig;

const isProduction = process.env.NODE_ENV === "production";

// https://eslint.org/docs/user-guide/configuring/
const config = defineConfig({
	parser: "@typescript-eslint/parser",

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
		"!.*", // Unignore files starting with dot (usually config files)
	],

	extends: [
		"eslint:recommended",

		// https://github.com/typescript-eslint/typescript-eslint
		"plugin:@typescript-eslint/recommended",

		// https://github.com/ota-meshi/eslint-plugin-regexp
		"plugin:regexp/recommended",

		// https://github.com/xjamundx/eslint-plugin-promise
		"plugin:promise/recommended",

		// https://github.com/sindresorhus/eslint-plugin-unicorn
		"plugin:unicorn/recommended",

		// https://github.com/prettier/eslint-config-prettier
		"prettier",
	],

	plugins: [
		// https://github.com/Rantanen/eslint-plugin-xss
		"xss",
	],

	rules: {
		// ---- ESLint built-in rules
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

		// ---- Plugins rules
		"unicorn/filename-case": ["off"], // We have ls-lint instead
		"xss/no-mixed-html": ["error"],
		"xss/no-location-href-assign": ["error"],
	},
});

module.exports = config;
