/** @type {import('stylelint').Config} */

/* * */

export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recess-order',
	],
	fix: true,
	rules: {
		'declaration-block-no-duplicate-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-single-line-max-declarations': 0,
		'declaration-empty-line-before': ['never'],
		'function-calc-no-unspaced-operator': true,
		'length-zero-no-unit': true,
		'no-irregular-whitespace': true,
		'rule-empty-line-before': ['always-multi-line'],
		'selector-class-pattern': null,
		'shorthand-property-no-redundant-values': true,
		'unit-allowed-list': ['px', '%', 'fr', 'ms', 'deg', 'vh', 'vw'],
	},
};
