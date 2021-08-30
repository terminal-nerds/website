// https://commitlint.js.org/

/** @type { import("commitlint/types").UserConfig } */
const commitlintConfig = {
	// TODO: Configure when we decide on how do we generate changelogs
	// https://www.npmjs.com/package/conventional-changelog-conventionalcommits
	// parserPreset: "conventional-changelog-conventionalcommits",

	// https://github.com/conventional-changelog/commitlint/
	extends: ["@commitlint/config-conventional"],

	helpUrl:
		"https://github.com/terminal-nerds/terminal-nerd/wiki/%F0%9F%92%8C-Git-commits-convention",
};

module.exports = commitlintConfig;
