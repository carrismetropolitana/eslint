# ESLint Configuration for Carris Metropolitana

ESLint rules and configuration for Carris Metropolitana codebases, providing consistent code quality and formatting standards across TypeScript, JavaScript, and JSON files.

## Quick Start

```bash
# 1. Install ESLint configuration
npm install @carrismetropolitana/eslint

# 2. Create eslint.config.mjs
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