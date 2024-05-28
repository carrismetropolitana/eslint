/** @type { import("eslint").Linter.FlatConfig } */

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
			'array-bracket-newline': [
				'error', 'consistent',
			],
			'array-bracket-spacing': [
				'error', 'never',
			],
			'array-element-newline': [
				'error', 'consistent',
			],
			'arrow-parens': [
				'error', 'always',
			],
			'arrow-spacing': 'error',
			'block-spacing': [
				'error', 'always',
			],
			'brace-style': [
				'error', '1tbs', { allowSingleLine: true },
			],
			'comma-dangle': [
				'error', 'always-multiline',
			],
			'comma-spacing': [
				'error', { after: true, before: false },
			],
			'comma-style': [
				'error', 'last',
			],
			'computed-property-spacing': [
				'error', 'never',
			],
			'dot-location': [
				'error', 'property',
			],
			'func-call-spacing': [
				'error', 'never',
			],
			'function-call-argument-newline': [
				'error', 'consistent',
			],
			'function-paren-newline': [
				'error', 'consistent',
			],
			'generator-star-spacing': [
				'error', { after: true, before: false },
			],
			'jsx-quotes': [
				'error', 'prefer-double',
			],
			'key-spacing': [
				'error', { afterColon: true, beforeColon: false },
			],
			'keyword-spacing': [
				'error', { after: true, before: true },
			],
			'linebreak-style': [
				'error', 'unix',
			],
			'lines-between-class-members': [
				'error', 'always',
			],
			'new-parens': [
				'error', 'never',
			],
			'no-extra-parens': [
				'error', 'all', { nestedBinaryExpressions: false },
			],
			'no-mixed-spaces-and-tabs': 'error',
			'no-multi-spaces': 'error',
			'no-multiple-empty-lines': [
				'error', { max: 1, maxBOF: 0 },
			],
			'no-trailing-spaces': 'error',
			'no-var': 'error',
			'no-whitespace-before-property': 'error',
			'nonblock-statement-body-position': [
				'error', 'beside',
			],
			'object-curly-newline': [
				'error', { consistent: true, multiline: true },
			],
			'object-curly-spacing': [
				'error', 'always',
			],
			'object-property-newline': [
				'error', { allowAllPropertiesOnSameLine: true },
			],
			'operator-linebreak': [
				'error', 'after',
			],
			'padded-blocks': [
				'error', 'never',
			],
			'quotes': [
				'error', 'single', { allowTemplateLiterals: true, avoidEscape: true },
			],
			'rest-spread-spacing': [
				'error', 'never',
			],
			'semi': [
				'error', 'always',
			],
			'semi-spacing': [
				'error', { after: true, before: false },
			],
			'semi-style': [
				'error', 'last',
			],
			'space-before-blocks': [
				'error', 'always',
			],
			'space-before-function-paren': [
				'error', { anonymous: 'always', asyncArrow: 'always', named: 'never' },
			],
			'space-in-parens': [
				'error', 'never',
			],
			'space-infix-ops': 'error',
			'space-unary-ops': [
				'error', { nonwords: false, words: true },
			],
			'switch-colon-spacing': [
				'error', { after: true, before: false },
			],
			'template-curly-spacing': [
				'error', 'never',
			],
			'template-tag-spacing': [
				'error', 'never',
			],
			'wrap-iife': [
				'error', 'inside',
			],
			'yield-star-spacing': [
				'error', { after: true, before: false },
			],
		},
	},
)
