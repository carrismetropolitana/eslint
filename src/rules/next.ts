/* * */

import commonRule from '@/rules/common.js';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

/* * */

export default [

	...commonRule,

	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},

	// JSX/TSX Styling Rules
	{
		name: 'JSX Styling for Next.js',
		files: ['**/*.tsx', '**/*.jsx'],
		rules: {
			// JSX Indentation and formatting
			'@stylistic/jsx-indent': ['error', 'tab', { 
				checkAttributes: true, 
				indentLogicalExpressions: true 
			}],
			'@stylistic/jsx-indent-props': ['error', 'tab'],
			'@stylistic/jsx-one-expression-per-line': 'off',
			'@stylistic/jsx-quotes': ['error', 'prefer-double'],
			'@stylistic/jsx-self-closing-comp': ['error', { 
				component: true, 
				html: true 
			}],
			
			// JSX Props organization
			'@stylistic/jsx-sort-props': ['error', { 
				ignoreCase: true, 
				multiline: 'last', 
				reservedFirst: ['key', 'ref'], 
				shorthandLast: true 
			}],
			'perfectionist/sort-jsx-props': 'off',
			
			// JSX Best practices
			'@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],
			'@stylistic/jsx-closing-tag-location': 'error',
			'@stylistic/jsx-curly-brace-presence': ['error', { 
				props: 'never', 
				children: 'never' 
			}],
			'@stylistic/jsx-equals-spacing': ['error', 'never'],
		},
	},

	// Next.js Plugin Configuration
	{
		name: 'Next.js Plugin',
		plugins: {
			'@next/next': nextPlugin,
		},
		rules: {
			// Next.js Core Rules
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
			
			// Enhanced Next.js rules
			'@next/next/no-img-element': 'error',
			'@next/next/no-html-link-for-pages': 'error',
		},
	},

	// React Plugin Configuration
	{
		name: 'React Rules for Next.js',
		plugins: {
			'react': reactPlugin,
			'react-hooks': reactHooksPlugin,
		},
		files: ['**/*.tsx', '**/*.jsx'],
		settings: {
			react: {
				version: 'detect', 
			},
		},
		rules: {
			// JSX Rules
			'react/jsx-key': 'error',
			'react/no-unescaped-entities': 'error',
			'react/no-children-prop': 'error',
			
			'react-hooks/rules-of-hooks': 'error', 
			'react-hooks/exhaustive-deps': 'warn',

			// Frontend-specific naming conventions
			'@typescript-eslint/naming-convention': [
				'error',
				// React Components: PascalCase
				{
					selector: 'function',
					filter: {
						regex: '^[A-Z]', // Functions starting with capital (React components)
						match: true,
					},
					format: ['PascalCase'],
				},
				// React hooks: camelCase starting with 'use'
				{
					selector: 'function',
					filter: {
						regex: '^use[A-Z]',
						match: true,
					},
					format: ['camelCase'],
				},
				// Props interfaces: PascalCase ending with Props
				{
					selector: 'interface',
					filter: {
						regex: 'Props$',
						match: true,
					},
					format: ['PascalCase'],
				},
			],
		},
	},

];
