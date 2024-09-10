/** @type {import('stylelint').Config} */

/* * */

export default {
	extends: [
		// 'stylelint-config-standard',
		'stylelint-config-clean-order',
		'stylelint-config-recess-order',
	],
	fix: true,
	rules: {
		'declaration-block-no-duplicate-properties': true,
		'unit-allowed-list': ['px', '%', 'fr', 'ms', 'deg', 'vh', 'vw'],
	},
};
