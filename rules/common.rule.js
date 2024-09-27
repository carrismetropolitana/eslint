// /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig} */

/* * */

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import perfectionist from 'eslint-plugin-perfectionist';
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
		},
	},

	perfectionist.configs['recommended-natural'],

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
			'**/*.js', '**/*.ts', '**/*.tsx', '**/*.jsx', '**/*.json',
		],
		rules: {
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/key-spacing': ['error', {
				afterColon: true,
				align: undefined,
				beforeColon: false,
				mode: 'strict',
			}],
			'@stylistic/multiline-ternary': 'off',
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/no-tabs': 'off',
			'@stylistic/semi': ['error', 'always', { omitLastInOneLineBlock: false }],
			'@typescript-eslint/no-unused-vars': 'warn',
			'no-unreachable': 'warn',
			'no-unused-vars': 'off',
			'no-var': 'error',
		},
	},

	...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],

	{
		files: ['**/*.json'],
		rules: {
			'jsonc/auto': 'error',
			'jsonc/sort-keys': ['error', 'asc'],
		},
	},

);
