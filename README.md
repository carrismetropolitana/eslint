# ESLint Configuration for Carris Metropolitana

ESLint rules and configuration for Carris Metropolitana codebases, providing consistent code quality and formatting standards across TypeScript, JavaScript, and JSON files.

## Quick Start

```bash
# 1. Install ESLint configuration
npm install @carrismetropolitana/eslint

# 2. Get VS Code snippets (optional but recommended)
npx carris-eslint-snippets

# 3. Create eslint.config.mjs
echo "import config from '@carrismetropolitana/eslint'; export default config;" > eslint.config.mjs
```

## Features

- **TypeScript Support**: Comprehensive TypeScript rules with type-checking
- **Code Style**: Consistent formatting with @stylistic/eslint-plugin 
- **Import Organization**: Automatic import sorting with perfectionist plugin
- **JSON Linting**: Support for JSON and JSON with comments (JSONC)
- **Multiple Configurations**: Specialized configs for Node.js and Next.js projects
- **React/JSX Support**: Comprehensive React and React Hooks rules for Next.js projects
- **Naming Conventions**: Enforced naming standards for frontend/backend consistency
- **VS Code Integration**: Automatic VS Code snippets for consistent React component structure
- **Code Templates**: Ready-to-use component templates with automated generation

## Documentation

### Auto-Generated Rule Documentation

This package includes comprehensive, auto-generated documentation of all active ESLint rules:

- **`linting-rules-analysis.md`** - Human-readable analysis of all rules organized by category
- **`eslint-effective-config.json`** - Complete effective configuration in JSON format

### Updating Documentation

After making changes to the ESLint configuration, regenerate the documentation:

```bash
npm run docs
```

This command will:
1. Build the TypeScript configuration files
2. Generate the effective ESLint configuration 
3. Create updated rule analysis documentation
4. Clean up temporary files

### Available Documentation Commands

```bash
npm run docs          # Generate/update all documentation
npm run docs:generate # Generate documentation (same as docs)
npm run docs:clean    # Remove generated documentation files
```

## Installation & Usage

### Install Package

```bash
npm install @carrismetropolitana/eslint
```

### Configure ESLint

Create `eslint.config.mjs` in your project root:

```javascript
// For Node.js projects (default)
import config from '@carrismetropolitana/eslint'
export default config

// For Next.js/React projects  
import { nextConfig } from '@carrismetropolitana/eslint'
export default nextConfig
```

### VS Code Snippets (Optional)

Install VS Code snippets for consistent component structure:

```bash
# Recommended: One-command installation (works anywhere)
npx carris-eslint-snippets
```

Alternative methods:
```bash
# If you have the package installed locally
npm run install-snippets

# Manual installation
# Copy from: node_modules/@carrismetropolitana/eslint/src/snippets/vscode-snippets.json
```

#### Available Snippets

| Trigger | Description |
|---------|-------------|
| `cmfc` | Carris Metropolitana Functional Component (A-E structure) |
| `cmfcexample` | CM Functional Component with full example (SWR, handlers) |
| `cmsep` | CM Section separator (`/* * */`) |
| `cmseca` | CM Section A - Setup variables |
| `cmsecb` | CM Section B - Fetch data |
| `cmsecc` | CM Section C - Transform data |
| `cmsecd` | CM Section D - Handle actions |
| `cmsece` | CM Section E - Render components |

#### Usage
1. Create a new `.tsx` file
2. Type `cmfc` and press `Tab`
3. Fill in the placeholders using `Tab` navigation
4. Get a perfectly structured Carris Metropolitana component!