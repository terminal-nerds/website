// https://stylelint.io/user-guide/configure

/** @type { import("stylelint").Configuration } */
const config = {
	extends: ["stylelint-config-standard"],

	plugins: [],

	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	reportDescriptionlessDisables: true,

	rules: {},
};

module.exports = config;
