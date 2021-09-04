// @ts-check
const defineConfig = require("eslint-define-config").defineConfig; // eslint-disable-line @typescript-eslint/no-var-requires

const isProduction = process.env.NODE_ENV === "production";

// https://eslint.org/docs/user-guide/configuring/
const config = defineConfig({
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2021,
		extraFileExtensions: [".vue"],
		project: [
			"./tsconfig.json",
			"./client/tsconfig.json",
			"./common/tsconfig.json",
			"./scripts/tsconfig.json",
			"./server/tsconfig.json",
		],
		sourceType: "module",
		tsconfigRootDir: __dirname,
	},

	overrides: [
		{
			files: ["*.json", "*.json5"],
			parser: "jsonc-eslint-parser",
		},
		{
			files: ["*.yaml", "*.yml"],
			parser: "yaml-eslint-parser",
		},
	],

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

		// https://github.com/mysticatea/eslint-plugin-eslint-comments
		"plugin:eslint-comments/recommended",

		// https://github.com/import-js/eslint-plugin-import
		"plugin:import/recommended",
		"plugin:import/typescript",

		// https://github.com/ota-meshi/eslint-plugin-jsonc
		"plugin:jsonc/recommended-with-jsonc",

		// https://github.com/ota-meshi/eslint-plugin-json-schema-validator
		"plugin:json-schema-validator/recommended",

		// https://github.com/ota-meshi/eslint-plugin-regexp
		"plugin:regexp/recommended",

		// https://github.com/xjamundx/eslint-plugin-promise
		"plugin:promise/recommended",

		// https://github.com/sindresorhus/eslint-plugin-unicorn
		"plugin:unicorn/recommended",

		// https://github.com/nodesecurity/eslint-plugin-security
		"plugin:security/recommended",

		// https://github.com/SonarSource/eslint-plugin-sonarjs
		"plugin:sonarjs/recommended",

		// https://github.com/SonarSource/eslint-plugin-sonarjs
		"plugin:yml/recommended",

		// https://github.com/vuejs/eslint-plugin-vue
		"plugin:vue/vue3-strongly-recommended",

		// https://github.com/prettier/eslint-config-prettier
		"prettier",
	],

	plugins: [
		// https://github.com/nickdeis/eslint-plugin-no-secrets
		"no-secrets",

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
		"import/no-unresolved": ["off"], // Not supported in ESM
		// MORE: https://github.com/import-js/eslint-plugin-import/issues/1868

		"no-secrets/no-secrets": ["error", { tolerance: 4.2 }],

		"unicorn/filename-case": ["off"], // We have ls-lint instead

		"xss/no-mixed-html": ["error"],
		"xss/no-location-href-assign": ["error"],
	},

	settings: {
		"import/internal-regex": "^@terminal-nerd/",
	},
});

module.exports = config;
