// https://github.com/okonet/lint-staged

const config = {
	"*": ["pretty-quick --check --staged"],

	"*.{css,scss,vue}": ["stylelint"],

	"*.{json,yml,yaml}": ["eslint"],

	"*.md": ["markdownlint"],

	"./client/**/*.ts": () => [
		"tsc --project ./client/tsconfig.json --noEmit",
		"eslint",
	],

	"./common/**/*.ts": () => [
		"tsc --project ./common/tsconfig.json --noEmit",
		"eslint",
	],

	"./scripts/**/*.ts": () => [
		"tsc --project ./scripts/tsconfig.json --noEmit",
		"eslint",
	],

	"./server/**/*.ts": () => [
		"tsc --project ./server/tsconfig.json --noEmit",
		"eslint",
	],
};

module.exports = config;
