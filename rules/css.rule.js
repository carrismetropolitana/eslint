/** @type {import('stylelint').Config} */

/* * */

export default {
	extends: [
		// 'stylelint-config-standard',
		'stylelint-config-clean-order',
	],
	fix: true,
	rules: {
		'declaration-property-unit-allowed-list': {
			'/^transition/': ['ms'],
		},
		'unit-allowed-list': ['px', '%', 'ms'],
	},
};
