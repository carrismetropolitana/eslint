/** @type { import("eslint").Linter.FlatConfig } */

/* * */

import stylistic from '@stylistic/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

/* * */

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.strict,
	...tseslint.configs.stylistic,

	{
		languageOptions: {
			parser: parserTs,
			sourceType: 'module',
			ecmaVersion: 2020,
      global: {
        ...globals.node
      }
		},
	},

	{
		files: [
			'**/*.js', '**/*.ts', '**/*.tsx', '**/*.jsx', '**/*.mjs', '**/*.cjs', '**/*.yml', '**/*.yaml',
		],

		plugins: {
			'@stylistic': stylistic,
			'@tsplugin': tsPlugin,
		},
		rules: {
			'no-var': 'error',
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
				'error', { before: false, after: true },
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
			'eol-last': [
				'error', 'never',
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
				'error', { before: false, after: true },
			],

			'indent': [
				'error', 'tab',
			],
			'jsx-quotes': [
				'error', 'prefer-double',
			],
			'key-spacing': [
				'error', { beforeColon: false, afterColon: true },
			],
			'keyword-spacing': [
				'error', { before: true, after: true },
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
				'error', { max: 1, maxEOF: 0, maxBOF: 0 },
			],
			'no-trailing-spaces': 'error',
			'no-whitespace-before-property': 'error',
			'nonblock-statement-body-position': [
				'error', 'beside',
			],
			'object-curly-newline': [
				'error', { multiline: true, consistent: true },
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
				'error', 'single', { avoidEscape: true, allowTemplateLiterals: true },
			],
			'rest-spread-spacing': [
				'error', 'never',
			],
			'semi': [
				'error', 'always',
			],
			'semi-spacing': [
				'error', { 'before': false, 'after': true },
			],
			'semi-style': [
				'error', 'last',
			],
			'space-before-blocks': [
				'error', 'always',
			],
			'space-before-function-paren': [
				'error', { anonymous: 'always', named: 'never', asyncArrow: 'always' },
			],
			'space-in-parens': [
				'error', 'never',
			],
			'space-infix-ops': 'error',
			'space-unary-ops': [
				'error', { words: true, nonwords: false },
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
				'error', { before: false, after: true },
			],
			'@typescript-eslint/no-unused-vars': [
				'warn', { argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@stylistic/implicit-arrow-linebreak': [
				'error', 'beside',
			],
			'@stylistic/array-bracket-newline': [
				'error', 'always',
			],
			'@stylistic/no-multi-spaces': [
				'error', { 'includeTabs': true },
			],
		},
	},
);
