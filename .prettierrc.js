// https://prettier.io/docs/en/index.html

/** @type import("prettier").Options */
const config = {
	printWidth: 80,

	tabWidth: 4,
	useTabs: true,

	singleQuote: false,
	quoteProps: "consistent",

	semi: true,
	trailingComma: "all",

	bracketSpacing: true,
	arrowParens: "always",

	rangeStart: 0,
	rangeEnd: Number.POSITIVE_INFINITY,

	endOfLine: "lf",
};

module.exports = config;
