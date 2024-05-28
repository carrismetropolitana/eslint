/** @type { import("eslint").Linter.FlatConfig } */

/* * */

import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/* * */

export default tseslint.config(

	{
		// config with just ignores is the replacement for `.eslintignore`
		ignores: ['**/build/**', '**/dist/**', '**/.next/**'],
	},

	eslint.configs.recommended,

	...tseslint.configs.strict,
	...tseslint.configs.stylistic,

	{
		plugins: {
			'@perfectionist': perfectionist,
			'@stylistic': stylistic,
		},
	},

	perfectionistNatural,

	stylistic.configs['recommended-flat'],

	{
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				...globals.node,
			},
			parser: tseslint.parser,
			parserOptions: {
				project: true,
			},
			sourceType: 'module',
		},
	},

	{
		extends: [tseslint.configs.disableTypeChecked],
		files: ['**/*.js'],
	},

	{
		files: [
			'**/*.js', '**/*.ts', '**/*.tsx', '**/*.jsx',
		],
		rules: {
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/jsx-indent': [2, 'tab', { checkAttributes: true, indentLogicalExpressions: true }],
			'@stylistic/jsx-indent-props': [2, 'tab'],
			'@stylistic/jsx-one-expression-per-line': 0, // ['error', { allow: 'non-jsx' }], <-- this is not working :(
			'@stylistic/jsx-quotes': ['error', 'prefer-double'],
			'@stylistic/jsx-self-closing-comp': ['error', { component: true, html: true }],
			'@stylistic/jsx-sort-props': ['error', { ignoreCase: true, locale: 'auto' | 'any valid locale', multiline: 'last', reservedFirst: ['key', 'ref'], shorthandLast: true }],
			'@stylistic/no-tabs': ['error', { allowIndentationTabs: true }],
			'no-unused-vars': 'warn',
			'no-var': 'error',
		},
	},

)
