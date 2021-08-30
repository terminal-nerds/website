// https://github.com/vivaxy/gacp

const config = {
	// You don't want it, trust us. Saves you the embarassment when you commit
	// node_modules by accident and then push it to the remote :)
	add: false,
	// You may need to amend something to newly created commit, you are never
	// sure, hence why, not good idea either.
	push: false,
	emoji: "emoji",
	// We encourage you to write more descriptive information in the commit
	// message body
	editor: true,
	hooks: {
		postpush: "",
	},
};

module.exports = config;
