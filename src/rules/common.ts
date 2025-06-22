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
		ignores: [
			'**/build/**',
			'**/dist/**',
			'**/node_modules/**',
			'**/.next/**',
			'**/.next/**',
			'**/public/**',
			'**/*lock.json',
		],
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

	stylistic.configs['recommended'],

	{
		languageOptions: {
			ecmaVersion: 'latest',
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
		files: ['**/*.js', '**/*.ts', '**/*.tsx', '**/*.jsx', '**/*.json'],
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
			'perfectionist/sort-imports': ['error', { groups: ['type-import', ['value-builtin', 'value-external'], ['type-internal', 'value-internal', 'type-parent', 'type-sibling', 'type-index', 'value-parent', 'value-sibling', 'value-index', 'ts-equals-import', 'unknown']], ignoreCase: true, order: 'asc', partitionByComment: true, type: 'natural' }],
			'perfectionist/sort-modules': ['off'],
			'perfectionist/sort-objects': ['error', { partitionByComment: true }],
		},
	},

	...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],

	{
		files: ['**/*.json'],
		rules: {
			'@stylistic/comma-dangle': ['error', 'never'],
			'jsonc/auto': 'error',
			'jsonc/sort-keys': ['error', 'asc'],
		},
	},

	{
		files: ['**/package.json'],
		rules: {
			'@stylistic/comma-dangle': ['error', 'never'],
			'jsonc/auto': 'error',
			'jsonc/sort-keys': [
				'error',
				{
					order: [
						'name',
						'description',
						'version',
						'author',
						'license',
						'homepage',
						'bugs',
						'repository',
						'keywords',
						'private',
						'publishConfig',
						'type',
						'files',
						'main',
						'types',
						'scripts',
						'dependencies',
						'devDependencies',
					],
					pathPattern: '^$',
				},
				{
					hasProperties: ['types', 'import'],
					order: ['types', 'import'],
					pathPattern: '.*',
				},
				{
					hasProperties: ['types', 'default'],
					order: ['types', 'default'],
					pathPattern: '.*',
				},
				{
					order: { type: 'asc' },
					pathPattern: '.*',
				},
			],
		},
	},

	{
		files: ['**/tsconfig.json'],
		rules: {
			'@stylistic/comma-dangle': ['error', 'never'],
			'jsonc/auto': 'error',
			'jsonc/sort-keys': [
				'error',
				{
					order: [
						'extends',
						'compilerOptions',
						'include',
						'exclude',
					],
					pathPattern: '^$',
				},
				{
					order: { type: 'asc' },
					pathPattern: '.*',
				},
			],
		},
	},

);
