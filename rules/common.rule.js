// /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig} */

/* * */

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import perfectionist from 'eslint-plugin-perfectionist';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/* * */

export default tseslint.config(

	{
		// config with just ignores is the replacement for `.eslintignore`
		ignores: ['**/build/**', '**/dist/**', '**/node_modules/**', '**/.next/**'],
	},

	eslint.configs.recommended,

	...tseslint.configs.strict,
	...tseslint.configs.stylistic,

	{
		plugins: {
			'@stylistic': stylistic,
			perfectionist,
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
		files: ['**/*.js', '**/*.mjs'],
	},

	{
		files: [
			'**/*.js', '**/*.ts', '**/*.tsx', '**/*.jsx',
		],
		rules: {
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/multiline-ternary': 'off',
			'@stylistic/no-tabs': 'off',
			'@stylistic/semi': ['error', 'always', { omitLastInOneLineBlock: false }],
			'@typescript-eslint/no-unused-vars': 'warn',
			'no-unreachable': 'warn',
			'no-unused-vars': 'off',
			'no-var': 'error',
		},
	},

);
