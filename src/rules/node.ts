/* * */

import commonRule from '@/rules/common.js';
import globals from 'globals';

/* * */

export default [
	...commonRule,
	
	// Backend-specific configurations
	{
		name: 'Node.js Backend Rules',
		files: ['**/*.{js,ts}'],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		rules: {
			// Backend-specific naming conventions
			'@typescript-eslint/naming-convention': [
				'error',
				// API route functions: camelCase
				{
					selector: 'function',
					format: ['camelCase'],
				},
				// Database models/schemas: PascalCase  
				{
					selector: 'class',
					format: ['PascalCase'],
				},
				// Database field types (when using snake_case in DB)
				{
					selector: 'objectLiteralProperty',
					filter: {
						regex: '^(id|created_at|updated_at|user_id|route_id)$', // Common DB fields
						match: true,
					},
					format: null, // Allow snake_case for DB fields
				},
				// Environment variables: SCREAMING_SNAKE_CASE
				{
					selector: 'variable',
					filter: {
						regex: '^(NODE_ENV|DATABASE_URL|API_KEY|JWT_SECRET)$',
						match: true,
					},
					format: ['UPPER_CASE'],
				},
				// Constants: SCREAMING_SNAKE_CASE or camelCase
				{
					selector: 'variable',
					modifiers: ['const', 'exported'],
					format: ['UPPER_CASE', 'camelCase'],
				},
			],

			// Backend-specific rules
			'no-console': 'off', // Allow console in backend for logging
			'@typescript-eslint/no-explicit-any': 'warn', // More lenient for API responses
		},
	},
];
