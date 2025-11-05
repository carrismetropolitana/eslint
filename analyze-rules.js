import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';

// Function to analyze ESLint config
function analyzeESLintConfig(configPath, outputName) {
	if (!existsSync(configPath)) {
		console.log(`⚠️  ${configPath} not found, skipping...`);
		return null;
	}

	const config = JSON.parse(readFileSync(configPath, 'utf8'));
	const rules = config.rules;
	const sortedRules = Object.keys(rules).sort();
	
	return { config, rules, sortedRules, outputName };
}

// Function to analyze Stylelint config  
async function analyzeStylelintConfig() {
	try {
		// Check if built CSS config exists
		if (!existsSync('./dist/rules/css.js')) {
			console.log('⚠️  Built CSS config not found, skipping...');
			return null;
		}

		// Import the CSS config directly
		const cssModule = await import('./dist/rules/css.js');
		const cssConfig = cssModule.default;
		
		// Combine custom rules with extended config rules
		let allRules = { ...cssConfig.rules };
		
		// Try to get rules from extended configs as well
		if (cssConfig.extends) {
			console.log(`📦 CSS extends: ${cssConfig.extends.join(', ')}`);
			
			// Create a temp CSS file to test stylelint with our config
			writeFileSync('temp-test.css', '.test { color: red; }');
			
			try {
				const stylelintOutput = execSync('npx stylelint temp-test.css --config stylelint.config.mjs --print-config', { 
					encoding: 'utf8',
					cwd: process.cwd()
				});
				
				const effectiveConfig = JSON.parse(stylelintOutput);
				if (effectiveConfig.rules) {
					allRules = { ...effectiveConfig.rules, ...allRules };
				}
			} catch (configError) {
				console.log('⚠️  Could not get extended config, using custom rules only');
			} finally {
				// Clean up temp file
				if (existsSync('temp-test.css')) {
					execSync('rm -f temp-test.css');
				}
			}
		}
		
		if (!allRules || Object.keys(allRules).length === 0) {
			return null;
		}
		
		const sortedRules = Object.keys(allRules).sort();
		console.log(`✅ Found ${sortedRules.length} CSS rules`);
		
		return { 
			config: { rules: allRules, extends: cssConfig.extends }, 
			rules: allRules, 
			sortedRules, 
			outputName: 'CSS/Stylelint' 
		};
	} catch (error) {
		console.log('⚠️  Could not analyze stylelint config:', error.message);
		return null;
	}
}

// Main analysis function
async function main() {
	console.log('🔍 Starting comprehensive linting analysis...\n');

	// Analyze common configuration (base rules)
	const commonConfig = analyzeESLintConfig('./eslint-effective-config.json', 'Common');

	// Generate Next.js frontend config 
	let nextConfig = null;
	try {
		writeFileSync('./test-next-config.mjs', 'import nextConfig from "./dist/rules/next.js"; export default nextConfig;');
		writeFileSync('./temp-next-test.tsx', 'export function Test() { return <div>test</div>; }');
		execSync('npx eslint --config test-next-config.mjs --print-config temp-next-test.tsx > eslint-next-config.json 2>/dev/null', { stdio: 'pipe' });
		nextConfig = analyzeESLintConfig('./eslint-next-config.json', 'Frontend (Next.js/React)');
		
		// Clean up
		['temp-next-test.tsx', 'test-next-config.mjs'].forEach(file => {
			if (existsSync(file)) {
				execSync(`rm -f ${file}`);
			}
		});
	} catch (error) {
		console.log('⚠️  Could not generate Next.js config:', error.message);
	}

	// Generate Node.js backend config
	let nodeConfig = null;
	try {
		writeFileSync('./test-node-config.mjs', 'import nodeConfig from "./dist/rules/node.js"; export default nodeConfig;');
		writeFileSync('./temp-node-test.ts', 'console.log("backend test");');
		execSync('npx eslint --config test-node-config.mjs --print-config temp-node-test.ts > eslint-node-config.json 2>/dev/null', { stdio: 'pipe' });
		nodeConfig = analyzeESLintConfig('./eslint-node-config.json', 'Backend (Node.js)');
		
		// Clean up
		['temp-node-test.ts', 'test-node-config.mjs'].forEach(file => {
			if (existsSync(file)) {
				execSync(`rm -f ${file}`);
			}
		});
	} catch (error) {
		console.log('⚠️  Could not generate Node.js config:', error.message);
	}

	const stylelintConfig = await analyzeStylelintConfig();

	// Calculate rule differences to avoid duplication
	const frontendOnlyRules = nextConfig && commonConfig ? 
		getRuleDifferences(nextConfig.rules, commonConfig.rules) : {};
	
	const backendOnlyRules = nodeConfig && commonConfig ?
		getRuleDifferences(nodeConfig.rules, commonConfig.rules) : {};

	// Create filtered configs for documentation
	const frontendSpecificConfig = nextConfig ? {
		...nextConfig,
		rules: frontendOnlyRules,
		sortedRules: Object.keys(frontendOnlyRules).sort(),
		outputName: 'Frontend Specific (Next.js/React)'
	} : null;

	const backendSpecificConfig = nodeConfig ? {
		...nodeConfig,
		rules: backendOnlyRules,
		sortedRules: Object.keys(backendOnlyRules).sort(),
		outputName: 'Backend Specific (Node.js)'
	} : null;

// Function to get rule differences (rules in config1 that are different from config2)
function getRuleDifferences(config1Rules, config2Rules) {
	const differences = {};
	
	for (const [ruleName, ruleValue] of Object.entries(config1Rules)) {
		const config2Value = config2Rules[ruleName];
		
		// Include rule if it doesn't exist in config2 or has different configuration
		if (!config2Value || JSON.stringify(ruleValue) !== JSON.stringify(config2Value)) {
			differences[ruleName] = ruleValue;
		}
	}
	
	return differences;
}

// Function to categorize rules
function categorizeRules(sortedRules, configType = 'eslint') {
	if (configType === 'stylelint') {
		return {
			'Stylelint Core': sortedRules.filter(rule => !rule.includes('/')),
			'Stylelint Plugins': sortedRules.filter(rule => rule.includes('/'))
		};
	}
	
	// ESLint categorization
	const categories = {
		'Core ESLint': [],
		'TypeScript': [],
		'Stylistic': [],
		'Perfectionist': [],
		'JSONC': [],
		'React': [],
		'Next.js': [],
		'Other': []
	};

	sortedRules.forEach(rule => {
		if (rule.startsWith('@typescript-eslint/')) {
			categories['TypeScript'].push(rule);
		} else if (rule.startsWith('@stylistic/')) {
			categories['Stylistic'].push(rule);
		} else if (rule.startsWith('perfectionist/')) {
			categories['Perfectionist'].push(rule);
		} else if (rule.startsWith('jsonc/')) {
			categories['JSONC'].push(rule);
		} else if (rule.startsWith('react/') || rule.startsWith('react-hooks/')) {
			categories['React'].push(rule);
		} else if (rule.startsWith('@next/')) {
			categories['Next.js'].push(rule);
		} else if (!rule.includes('/')) {
			categories['Core ESLint'].push(rule);
		} else {
			categories['Other'].push(rule);
		}
	});
	
	return categories;
}

// Function to generate documentation for a config
function generateConfigDoc(configData, configType = 'eslint') {
	if (!configData) return '';
	
	const { rules, sortedRules, outputName } = configData;
	const categories = categorizeRules(sortedRules, configType);
	
	let output = `## ${outputName} Configuration\n\n`;
	output += `**Total active rules:** ${sortedRules.length}\n\n`;
	
	// Summary table for this config
	const categoryDescriptions = {
		'Core ESLint': 'Basic JavaScript/ECMAScript rules',
		'TypeScript': 'TypeScript-specific linting rules',  
		'Stylistic': 'Code formatting and style rules',
		'Perfectionist': 'Code organization and sorting rules',
		'JSONC': 'JSON with comments support rules',
		'React': 'React and JSX specific rules',
		'Next.js': 'Next.js framework specific rules',
		'Stylelint Core': 'Core CSS/SCSS linting rules',
		'Stylelint Plugins': 'Extended CSS linting rules',
		'Other': 'Other plugin rules'
	};
	
	// Generate summary table
	output += '### Summary by Category\n\n';
	output += '| Category | Rule Count | Description |\n';
	output += '|----------|------------|-------------|\n';
	
	Object.entries(categories).forEach(([category, ruleList]) => {
		if (ruleList.length > 0) {
			output += `| ${category} | ${ruleList.length} | ${categoryDescriptions[category] || 'Plugin specific rules'} |\n`;
		}
	});
	
	output += '\n### Rules by Category\n\n';
	
	// Helper function to convert numeric levels to readable names
	function getLevelName(level) {
		if (configType === 'stylelint') {
			return level === true ? 'error' : level === false ? 'off' : level;
		}
		switch (level) {
			case 0: return 'off';
			case 1: return 'warn';
			case 2: return 'error';
			default: return level;
		}
	}
	
	Object.entries(categories).forEach(([category, ruleList]) => {
		if (ruleList.length > 0) {
			output += `#### ${category} (${ruleList.length} rules)\n\n`;
			
			// Create a table for each category
			output += '| Rule | Level | Configuration |\n';
			output += '|------|-------|---------------|\n';
			
			ruleList.forEach(rule => {
				const ruleConfig = rules[rule];
				// Handle special problematic rules
				if (rule === 'order/properties-order') {
					// This rule has a complex configuration that doesn't display well
					output += `| \`${rule}\` | ❌ off | [CSS property ordering - recess order config] |\n`;
					return;
				}
				
				const level = Array.isArray(ruleConfig) ? ruleConfig[0] : ruleConfig;
				const levelName = getLevelName(level);
				const levelEmoji = (level === 2 || level === true) ? '🚨' : 
					(level === 1) ? '⚠️' : '❌';
				
				// Show configuration if it has options
				let configDetails = '';
				
				if (Array.isArray(ruleConfig) && ruleConfig.length > 1) {
					const config = ruleConfig.slice(1);
					try {
						// Use a custom replacer to handle objects that don't stringify well
						const jsonStr = JSON.stringify(config, (key, value) => {
							if (typeof value === 'object' && value !== null && value.toString() === '[object Object]') {
								return '[object]';
							}
							return value;
						});
						configDetails = jsonStr.length > 50 ? 
							jsonStr.substring(0, 47) + '...' : jsonStr;
					} catch (e) {
						configDetails = '[complex config]';
					}
				} else if (typeof ruleConfig === 'object' && ruleConfig !== null && !Array.isArray(ruleConfig)) {
					try {
						// Use a custom replacer for object rules too
						const jsonStr = JSON.stringify(ruleConfig, (key, value) => {
							if (typeof value === 'object' && value !== null && value.toString() === '[object Object]') {
								return '[object]';
							}
							return value;
						});
						configDetails = jsonStr.length > 50 ? 
							jsonStr.substring(0, 47) + '...' : jsonStr;
					} catch (e) {
						configDetails = '[complex config]';
					}
				}
				
				output += `| \`${rule}\` | ${levelEmoji} ${levelName} | ${configDetails} |\n`;
			});
			output += '\n';
		}
	});
	
	return output;
}

	// Generate main document
	let output = '';
	output += '# Carris Metropolitana - Linting Configuration Analysis\n\n';
	output += `Generated on: ${new Date().toISOString().split('T')[0]}\n\n`;
	output += '## Overview\n\n';
	output += 'This document contains a comprehensive analysis of all active linting rules across different configurations in this project.\n\n';
	output += 'Rules are organized to avoid duplication:\n';
	output += '- **Common**: Base rules applied to all projects\n';
	output += '- **Frontend Specific**: Additional/modified rules only for Next.js/React projects\n';  
	output += '- **Backend Specific**: Additional/modified rules only for Node.js backend projects\n\n';

	// Add overview of all configs
	const configs = [commonConfig, frontendSpecificConfig, backendSpecificConfig, stylelintConfig].filter(Boolean);
	if (configs.length > 0) {
		output += '### Configuration Summary\n\n';
		output += '| Configuration | Total Rules | Purpose |\n';
		output += '|---------------|-------------|----------|\n';
		
		configs.forEach(config => {
			const purpose = {
				'Common': 'Base TypeScript/JavaScript rules for all projects',
				'Frontend Specific (Next.js/React)': 'Additional rules for Next.js/React applications',
				'Backend Specific (Node.js)': 'Additional rules for Node.js backend projects', 
				'CSS/Stylelint': 'CSS and SCSS linting and formatting rules'
			};
			output += `| ${config.outputName} | ${config.sortedRules.length} | ${purpose[config.outputName]} |\n`;
		});
		output += '\n';
	}

	// Generate documentation for each configuration
	if (commonConfig) {
		output += generateConfigDoc(commonConfig, 'eslint');
	}

	if (frontendSpecificConfig && frontendSpecificConfig.sortedRules.length > 0) {
		output += generateConfigDoc(frontendSpecificConfig, 'eslint');
	}

	if (backendSpecificConfig && backendSpecificConfig.sortedRules.length > 0) {
		output += generateConfigDoc(backendSpecificConfig, 'eslint');
	}

	if (stylelintConfig) {
		output += generateConfigDoc(stylelintConfig, 'stylelint');
	}

	// Add footer with generation info
	output += '---\n\n';
	output += '## How to Use This Documentation\n\n';
	output += '- **🚨 error**: Rule violations will fail builds/CI\n';
	output += '- **⚠️ warn**: Rule violations will show warnings but not fail builds\n';
	output += '- **❌ off**: Rule is disabled\n\n';
	output += '### Regenerating Documentation\n\n';
	output += '```bash\n';
	output += 'npm run docs        # Regenerate all documentation\n';
	output += 'node analyze-rules.js  # Regenerate just this file\n';
	output += '```\n\n';
	output += '*This documentation was auto-generated from the linting configurations.*\n';

	// Write to file
	writeFileSync('./linting-rules-analysis.md', output);

	// Clean up temporary files
		['eslint-next-config.json', 'eslint-node-config.json', 'test-next-config.mjs', 'test-node-config.mjs', 'temp-next-test.tsx', 'temp-node-test.ts', 'temp-test.css'].forEach(file => {
		if (existsSync(file)) {
			execSync(`rm -f ${file}`);
		}
	});

	console.log('✅ Analysis complete! Results saved to: linting-rules-analysis.md');

}

// Run the main function
main().catch(error => {
	console.error('❌ Error during analysis:', error);
	process.exit(1);
});