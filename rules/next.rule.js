// /** @type {import("@typescript-eslint/utils").TSESLint.FlatESLint} */

/* * */

import nextPlugin from '@next/eslint-plugin-next';
import globals from 'globals';

import commonRule from './common.rule.js';

/* * */

export default [

	...commonRule,

	{
		files: ['**/*.ts', '**/*.tsx'],
		plugins: {
			'@next/next': nextPlugin,
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
			'@next/next/no-img-element': 'error',
		},
	},

	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},

	{
		files: [
			'**/*.js', '**/*.ts', '**/*.tsx', '**/*.jsx',
		],
		rules: {
			'@stylistic/jsx-indent': [2, 'tab', { checkAttributes: true, indentLogicalExpressions: true }],
			'@stylistic/jsx-indent-props': [2, 'tab'],
			'@stylistic/jsx-one-expression-per-line': 0, // ['error', { allow: 'non-jsx' }], <-- this is not working :(
			'@stylistic/jsx-quotes': ['error', 'prefer-double'],
			'@stylistic/jsx-self-closing-comp': ['error', { component: true, html: true }],
			'@stylistic/jsx-sort-props': ['error', { ignoreCase: true, multiline: 'last', reservedFirst: ['key', 'ref'], shorthandLast: true }],
			'perfectionist/sort-jsx-props': 'off',
		},
	},

];
