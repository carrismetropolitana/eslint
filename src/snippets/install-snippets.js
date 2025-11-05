#!/usr/bin/env node

/**
 * Automatically installs VS Code snippets for React component structure
 * Part of @carrismetropolitana/eslint package
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { homedir } from 'os';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// VS Code snippets locations for different platforms
const getVSCodePaths = () => {
	const home = homedir();
	
	switch (process.platform) {
		case 'win32':
			return [
				join(home, 'AppData/Roaming/Code/User/snippets'),
				join(home, 'AppData/Roaming/Code - Insiders/User/snippets')
			];
		case 'darwin':
			return [
				join(home, 'Library/Application Support/Code/User/snippets'),
				join(home, 'Library/Application Support/Code - Insiders/User/snippets')
			];
		default: // Linux
			return [
				join(home, '.config/Code/User/snippets'),
				join(home, '.config/Code - Insiders/User/snippets')
			];
	}
};

const installSnippets = () => {
	try {
		console.log('🚀 Installing VS Code snippets for React component structure...\n');

		// Read our snippets
		const snippetsPath = join(__dirname, './vscode-snippets.json');
		
		if (!existsSync(snippetsPath)) {
			console.log('❌ Snippets file not found at:', snippetsPath);
			return false;
		}

		const snippets = JSON.parse(readFileSync(snippetsPath, 'utf8'));
		const vscodeSnippetPaths = getVSCodePaths();
		
		let installed = false;
		
		for (const snippetsDir of vscodeSnippetPaths) {
			if (existsSync(dirname(snippetsDir))) {
				console.log(`📂 Found VS Code at: ${dirname(snippetsDir)}`);
				
				// Create snippets directory if it doesn't exist
				if (!existsSync(snippetsDir)) {
					mkdirSync(snippetsDir, { recursive: true });
				}
				
				const targetFile = join(snippetsDir, 'typescriptreact.json');
				let existingSnippets = {};
				
				// Read existing snippets if file exists
				if (existsSync(targetFile)) {
					try {
						existingSnippets = JSON.parse(readFileSync(targetFile, 'utf8'));
						console.log(`📄 Found existing snippets file`);
					} catch (err) {
						console.log(`⚠️  Could not parse existing snippets file, creating new one`);
					}
				}
				
				// Merge our snippets with existing ones (our snippets take precedence if conflicts)
				const mergedSnippets = {
					...existingSnippets,
					...snippets,
					// Add a comment to identify our snippets
					"__carris_eslint_info": {
						"prefix": "__carris_info", 
						"body": "// Snippets provided by @carrismetropolitana/eslint package",
						"description": "Info about Carris Metropolitana ESLint snippets"
					}
				};
				
				const existingCount = Object.keys(existingSnippets).length;
				const newCount = Object.keys(snippets).length;
				console.log(`🔄 Merging ${newCount} new snippets with ${existingCount} existing snippets`);
				
				// Write merged snippets
				writeFileSync(targetFile, JSON.stringify(mergedSnippets, null, 2));
				console.log(`✅ Snippets installed to: ${targetFile}`);
				installed = true;
			}
		}
		
		if (installed) {
			console.log(`\n🎉 VS Code snippets installed successfully!`);
			console.log(`\n📋 Available snippets:`);
			console.log(`   • cmfc         - Carris Metropolitana Functional Component`);
			console.log(`   • cmfcexample  - CM Functional Component with full example`);
			console.log(`   • cmsep        - CM Section separator`);
			console.log(`   • cmseca       - CM Section A (Setup variables)`);
			console.log(`   • cmsecb       - CM Section B (Fetch data)`);
			console.log(`   • cmsecc       - CM Section C (Transform data)`);
			console.log(`   • cmsecd       - CM Section D (Handle actions)`);
			console.log(`   • cmsece       - CM Section E (Render components)`);
			console.log(`\n💡 Usage: In any .tsx file, type snippet prefix + Tab`);
			console.log(`\n� Your existing snippets were preserved and merged safely`);
			console.log(`�📚 Full guide: node_modules/@carrismetropolitana/eslint/docs/component-tools-guide.md`);
		} else {
			console.log(`\n❌ Could not find VS Code installation`);
			console.log(`\n📋 Manual installation:`);
			console.log(`   1. Open VS Code`);
			console.log(`   2. Cmd+Shift+P → "Configure User Snippets"`);
			console.log(`   3. Select "typescriptreact.json"`);
			console.log(`   4. Copy content from: node_modules/@carrismetropolitana/eslint/docs/vscode-snippets.json`);
		}
		
		return installed;
		
	} catch (error) {
		console.error('❌ Error installing snippets:', error.message);
		return false;
	}
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
	installSnippets();
}

export { installSnippets };