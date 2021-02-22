module.exports = {
	root: true,
	env: {
		browser: true,
	},
	extends: [
		'bluedrop',
		'bluedrop/config/node',
		'bluedrop/config/react',
	],
	globals: {
		NODE_ENV: true,
	},
	settings: {
		react: {
			version: '16.4',
		},
	},
};
