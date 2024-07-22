/** @type {import('stylelint').Config} */

/* * */

export default {
	extends: [
		// 'stylelint-config-standard',
		'stylelint-config-clean-order',
	],
	fix: true,
	rules: {
		'unit-allowed-list': ['px', '%', 'fr', 'ms', 'deg', 'vh', 'vw'],
	},
};
