# Carris Metropolitana - Linting Configuration Analysis

Generated on: 2025-11-05

## Overview

This document contains a comprehensive analysis of all active linting rules across different configurations in this project.

Rules are organized to avoid duplication:
- **Common**: Base rules applied to all projects
- **Frontend Specific**: Additional/modified rules only for Next.js/React projects
- **Backend Specific**: Additional/modified rules only for Node.js backend projects

### Configuration Summary

| Configuration | Total Rules | Purpose |
|---------------|-------------|----------|
| Common | 268 | Base TypeScript/JavaScript rules for all projects |
| Frontend Specific (Next.js/React) | 65 | Additional rules for Next.js/React applications |
| Backend Specific (Node.js) | 27 | Additional rules for Node.js backend projects |
| CSS/Stylelint | 13 | CSS and SCSS linting and formatting rules |

## Common Configuration

**Total active rules:** 268

### Summary by Category

| Category | Rule Count | Description |
|----------|------------|-------------|
| Core ESLint | 67 | Basic JavaScript/ECMAScript rules |
| TypeScript | 89 | TypeScript-specific linting rules |
| Stylistic | 65 | Code formatting and style rules |
| Perfectionist | 20 | Code organization and sorting rules |
| JSONC | 27 | JSON with comments support rules |

### Rules by Category

#### Core ESLint (67 rules)

| Rule | Level | Configuration |
|------|-------|---------------|
| `constructor-super` | 🚨 error |  |
| `eqeqeq` | 🚨 error | ["always","[object]"] |
| `for-direction` | 🚨 error |  |
| `getter-return` | 🚨 error | "[object]" |
| `no-array-constructor` | ❌ off |  |
| `no-async-promise-executor` | 🚨 error |  |
| `no-case-declarations` | 🚨 error |  |
| `no-class-assign` | 🚨 error |  |
| `no-compare-neg-zero` | 🚨 error |  |
| `no-cond-assign` | 🚨 error | ["except-parens"] |
| `no-console` | ❌ off | "[object]" |
| `no-const-assign` | 🚨 error |  |
| `no-constant-binary-expression` | 🚨 error |  |
| `no-constant-condition` | 🚨 error | "[object]" |
| `no-control-regex` | 🚨 error |  |
| `no-debugger` | 🚨 error |  |
| `no-delete-var` | 🚨 error |  |
| `no-dupe-args` | 🚨 error |  |
| `no-dupe-class-members` | 🚨 error |  |
| `no-dupe-else-if` | 🚨 error |  |
| `no-dupe-keys` | 🚨 error |  |
| `no-duplicate-case` | 🚨 error |  |
| `no-empty` | 🚨 error | "[object]" |
| `no-empty-character-class` | 🚨 error |  |
| `no-empty-pattern` | 🚨 error | "[object]" |
| `no-empty-static-block` | 🚨 error |  |
| `no-ex-assign` | 🚨 error |  |
| `no-extra-boolean-cast` | 🚨 error | "[object]" |
| `no-fallthrough` | 🚨 error | "[object]" |
| `no-func-assign` | 🚨 error |  |
| `no-global-assign` | 🚨 error | "[object]" |
| `no-import-assign` | 🚨 error |  |
| `no-invalid-regexp` | 🚨 error | "[object]" |
| `no-irregular-whitespace` | 🚨 error | "[object]" |
| `no-loss-of-precision` | 🚨 error |  |
| `no-misleading-character-class` | 🚨 error |  |
| `no-multiple-empty-lines` | 🚨 error | "[object]" |
| `no-new-native-nonconstructor` | 🚨 error |  |
| `no-nonoctal-decimal-escape` | 🚨 error |  |
| `no-obj-calls` | 🚨 error |  |
| `no-octal` | 🚨 error |  |
| `no-prototype-builtins` | 🚨 error |  |
| `no-redeclare` | 🚨 error | "[object]" |
| `no-regex-spaces` | 🚨 error |  |
| `no-self-assign` | 🚨 error | "[object]" |
| `no-setter-return` | 🚨 error |  |
| `no-shadow-restricted-names` | 🚨 error | "[object]" |
| `no-sparse-arrays` | 🚨 error |  |
| `no-this-before-super` | 🚨 error |  |
| `no-undef` | 🚨 error | "[object]" |
| `no-unexpected-multiline` | 🚨 error |  |
| `no-unreachable` | 🚨 error |  |
| `no-unsafe-finally` | 🚨 error |  |
| `no-unsafe-negation` | 🚨 error | "[object]" |
| `no-unsafe-optional-chaining` | 🚨 error | "[object]" |
| `no-unused-expressions` | ❌ off | "[object]" |
| `no-unused-labels` | 🚨 error |  |
| `no-unused-private-class-members` | 🚨 error |  |
| `no-unused-vars` | ❌ off |  |
| `no-useless-backreference` | 🚨 error |  |
| `no-useless-catch` | 🚨 error |  |
| `no-useless-constructor` | ❌ off |  |
| `no-useless-escape` | 🚨 error | "[object]" |
| `no-with` | 🚨 error |  |
| `require-yield` | 🚨 error |  |
| `use-isnan` | 🚨 error | "[object]" |
| `valid-typeof` | 🚨 error | "[object]" |

#### TypeScript (89 rules)

| Rule | Level | Configuration |
|------|-------|---------------|
| `@typescript-eslint/await-thenable` | ❌ off |  |
| `@typescript-eslint/ban-ts-comment` | 🚨 error | "[object]" |
| `@typescript-eslint/consistent-return` | ❌ off | "[object]" |
| `@typescript-eslint/consistent-type-definitions` | 🚨 error | ["interface"] |
| `@typescript-eslint/consistent-type-exports` | ❌ off |  |
| `@typescript-eslint/dot-notation` | ❌ off | "[object]" |
| `@typescript-eslint/explicit-function-return-type` | ❌ off |  |
| `@typescript-eslint/naming-convention` | 🚨 error | ["[object]","[object]","[object]","[object]","[... |
| `@typescript-eslint/no-array-constructor` | 🚨 error |  |
| `@typescript-eslint/no-array-delete` | ❌ off |  |
| `@typescript-eslint/no-base-to-string` | ❌ off |  |
| `@typescript-eslint/no-confusing-void-expression` | ❌ off |  |
| `@typescript-eslint/no-deprecated` | ❌ off |  |
| `@typescript-eslint/no-duplicate-enum-values` | 🚨 error |  |
| `@typescript-eslint/no-duplicate-type-constituents` | ❌ off |  |
| `@typescript-eslint/no-dynamic-delete` | 🚨 error |  |
| `@typescript-eslint/no-empty-object-type` | 🚨 error |  |
| `@typescript-eslint/no-explicit-any` | ⚠️ warn |  |
| `@typescript-eslint/no-extra-non-null-assertion` | 🚨 error |  |
| `@typescript-eslint/no-extraneous-class` | ❌ off |  |
| `@typescript-eslint/no-floating-promises` | ❌ off |  |
| `@typescript-eslint/no-for-in-array` | ❌ off |  |
| `@typescript-eslint/no-implied-eval` | ❌ off |  |
| `@typescript-eslint/no-invalid-void-type` | 🚨 error |  |
| `@typescript-eslint/no-meaningless-void-operator` | ❌ off |  |
| `@typescript-eslint/no-misused-new` | 🚨 error |  |
| `@typescript-eslint/no-misused-promises` | ❌ off |  |
| `@typescript-eslint/no-misused-spread` | ❌ off |  |
| `@typescript-eslint/no-mixed-enums` | ❌ off |  |
| `@typescript-eslint/no-namespace` | 🚨 error |  |
| `@typescript-eslint/no-non-null-asserted-nullish-coalescing` | 🚨 error |  |
| `@typescript-eslint/no-non-null-asserted-optional-chain` | 🚨 error |  |
| `@typescript-eslint/no-non-null-assertion` | ⚠️ warn |  |
| `@typescript-eslint/no-redundant-type-constituents` | ❌ off |  |
| `@typescript-eslint/no-require-imports` | 🚨 error |  |
| `@typescript-eslint/no-this-alias` | 🚨 error |  |
| `@typescript-eslint/no-unnecessary-boolean-literal-compare` | ❌ off |  |
| `@typescript-eslint/no-unnecessary-condition` | ❌ off |  |
| `@typescript-eslint/no-unnecessary-qualifier` | ❌ off |  |
| `@typescript-eslint/no-unnecessary-template-expression` | ❌ off |  |
| `@typescript-eslint/no-unnecessary-type-arguments` | ❌ off |  |
| `@typescript-eslint/no-unnecessary-type-assertion` | ❌ off |  |
| `@typescript-eslint/no-unnecessary-type-constraint` | 🚨 error |  |
| `@typescript-eslint/no-unnecessary-type-conversion` | ❌ off |  |
| `@typescript-eslint/no-unnecessary-type-parameters` | ❌ off |  |
| `@typescript-eslint/no-unsafe-argument` | ❌ off |  |
| `@typescript-eslint/no-unsafe-assignment` | ❌ off |  |
| `@typescript-eslint/no-unsafe-call` | ❌ off |  |
| `@typescript-eslint/no-unsafe-declaration-merging` | 🚨 error |  |
| `@typescript-eslint/no-unsafe-enum-comparison` | ❌ off |  |
| `@typescript-eslint/no-unsafe-function-type` | 🚨 error |  |
| `@typescript-eslint/no-unsafe-member-access` | ❌ off |  |
| `@typescript-eslint/no-unsafe-return` | ❌ off |  |
| `@typescript-eslint/no-unsafe-type-assertion` | ❌ off |  |
| `@typescript-eslint/no-unsafe-unary-minus` | ❌ off |  |
| `@typescript-eslint/no-unused-expressions` | 🚨 error | "[object]" |
| `@typescript-eslint/no-unused-vars` | ⚠️ warn |  |
| `@typescript-eslint/no-useless-constructor` | 🚨 error |  |
| `@typescript-eslint/no-wrapper-object-types` | 🚨 error |  |
| `@typescript-eslint/non-nullable-type-assertion-style` | ❌ off |  |
| `@typescript-eslint/only-throw-error` | ❌ off |  |
| `@typescript-eslint/prefer-as-const` | 🚨 error |  |
| `@typescript-eslint/prefer-destructuring` | ❌ off |  |
| `@typescript-eslint/prefer-find` | ❌ off |  |
| `@typescript-eslint/prefer-includes` | ❌ off |  |
| `@typescript-eslint/prefer-literal-enum-member` | 🚨 error |  |
| `@typescript-eslint/prefer-namespace-keyword` | 🚨 error |  |
| `@typescript-eslint/prefer-nullish-coalescing` | 🚨 error |  |
| `@typescript-eslint/prefer-optional-chain` | 🚨 error |  |
| `@typescript-eslint/prefer-promise-reject-errors` | ❌ off |  |
| `@typescript-eslint/prefer-readonly` | ❌ off |  |
| `@typescript-eslint/prefer-readonly-parameter-types` | ❌ off |  |
| `@typescript-eslint/prefer-reduce-type-parameter` | ❌ off |  |
| `@typescript-eslint/prefer-regexp-exec` | ❌ off |  |
| `@typescript-eslint/prefer-return-this-type` | ❌ off |  |
| `@typescript-eslint/prefer-string-starts-ends-with` | ❌ off |  |
| `@typescript-eslint/promise-function-async` | ❌ off |  |
| `@typescript-eslint/related-getter-setter-pairs` | ❌ off |  |
| `@typescript-eslint/require-array-sort-compare` | ❌ off |  |
| `@typescript-eslint/require-await` | ❌ off |  |
| `@typescript-eslint/restrict-plus-operands` | ❌ off |  |
| `@typescript-eslint/restrict-template-expressions` | ❌ off |  |
| `@typescript-eslint/return-await` | ❌ off |  |
| `@typescript-eslint/strict-boolean-expressions` | ❌ off |  |
| `@typescript-eslint/switch-exhaustiveness-check` | ❌ off |  |
| `@typescript-eslint/triple-slash-reference` | 🚨 error |  |
| `@typescript-eslint/unbound-method` | ❌ off |  |
| `@typescript-eslint/unified-signatures` | 🚨 error |  |
| `@typescript-eslint/use-unknown-in-catch-callback-variable` | ❌ off |  |

#### Stylistic (65 rules)

| Rule | Level | Configuration |
|------|-------|---------------|
| `@stylistic/array-bracket-spacing` | 🚨 error | ["never"] |
| `@stylistic/arrow-parens` | 🚨 error | ["as-needed","[object]"] |
| `@stylistic/arrow-spacing` | 🚨 error | "[object]" |
| `@stylistic/block-spacing` | 🚨 error | ["always"] |
| `@stylistic/brace-style` | 🚨 error | ["1tbs","[object]"] |
| `@stylistic/comma-dangle` | 🚨 error | ["always-multiline"] |
| `@stylistic/comma-spacing` | 🚨 error | "[object]" |
| `@stylistic/comma-style` | 🚨 error | ["last"] |
| `@stylistic/computed-property-spacing` | 🚨 error | ["never","[object]"] |
| `@stylistic/dot-location` | 🚨 error | ["property"] |
| `@stylistic/eol-last` | 🚨 error |  |
| `@stylistic/generator-star-spacing` | 🚨 error | "[object]" |
| `@stylistic/indent` | 🚨 error | ["tab"] |
| `@stylistic/indent-binary-ops` | 🚨 error | [2] |
| `@stylistic/jsx-closing-bracket-location` | 🚨 error |  |
| `@stylistic/jsx-closing-tag-location` | 🚨 error |  |
| `@stylistic/jsx-curly-brace-presence` | 🚨 error | "[object]" |
| `@stylistic/jsx-curly-newline` | 🚨 error |  |
| `@stylistic/jsx-curly-spacing` | 🚨 error | ["never"] |
| `@stylistic/jsx-equals-spacing` | 🚨 error |  |
| `@stylistic/jsx-first-prop-new-line` | 🚨 error |  |
| `@stylistic/jsx-function-call-newline` | 🚨 error | ["multiline"] |
| `@stylistic/jsx-indent-props` | 🚨 error | [2] |
| `@stylistic/jsx-max-props-per-line` | 🚨 error | "[object]" |
| `@stylistic/jsx-one-expression-per-line` | 🚨 error | "[object]" |
| `@stylistic/jsx-quotes` | 🚨 error |  |
| `@stylistic/jsx-tag-spacing` | 🚨 error | "[object]" |
| `@stylistic/jsx-wrap-multilines` | 🚨 error | "[object]" |
| `@stylistic/key-spacing` | 🚨 error | "[object]" |
| `@stylistic/keyword-spacing` | 🚨 error | "[object]" |
| `@stylistic/lines-between-class-members` | 🚨 error | ["always","[object]"] |
| `@stylistic/max-statements-per-line` | 🚨 error | "[object]" |
| `@stylistic/member-delimiter-style` | 🚨 error | "[object]" |
| `@stylistic/multiline-ternary` | ❌ off | ["always-multiline"] |
| `@stylistic/new-parens` | 🚨 error |  |
| `@stylistic/no-extra-parens` | 🚨 error | ["functions"] |
| `@stylistic/no-floating-decimal` | 🚨 error |  |
| `@stylistic/no-mixed-operators` | 🚨 error | "[object]" |
| `@stylistic/no-mixed-spaces-and-tabs` | 🚨 error |  |
| `@stylistic/no-multi-spaces` | 🚨 error |  |
| `@stylistic/no-multiple-empty-lines` | 🚨 error | "[object]" |
| `@stylistic/no-tabs` | ❌ off |  |
| `@stylistic/no-trailing-spaces` | 🚨 error |  |
| `@stylistic/no-whitespace-before-property` | 🚨 error |  |
| `@stylistic/object-curly-spacing` | 🚨 error | ["always"] |
| `@stylistic/operator-linebreak` | 🚨 error | ["before"] |
| `@stylistic/padded-blocks` | 🚨 error | "[object]" |
| `@stylistic/quote-props` | 🚨 error | ["consistent-as-needed"] |
| `@stylistic/quotes` | 🚨 error | ["single","[object]"] |
| `@stylistic/rest-spread-spacing` | 🚨 error | ["never"] |
| `@stylistic/semi` | 🚨 error | ["always","[object]"] |
| `@stylistic/semi-spacing` | 🚨 error | "[object]" |
| `@stylistic/space-before-blocks` | 🚨 error | ["always"] |
| `@stylistic/space-before-function-paren` | 🚨 error | "[object]" |
| `@stylistic/space-in-parens` | 🚨 error | ["never"] |
| `@stylistic/space-infix-ops` | 🚨 error |  |
| `@stylistic/space-unary-ops` | 🚨 error | "[object]" |
| `@stylistic/spaced-comment` | 🚨 error | ["always","[object]"] |
| `@stylistic/template-curly-spacing` | 🚨 error |  |
| `@stylistic/template-tag-spacing` | 🚨 error | ["never"] |
| `@stylistic/type-annotation-spacing` | 🚨 error | "[object]" |
| `@stylistic/type-generic-spacing` | 🚨 error |  |
| `@stylistic/type-named-tuple-spacing` | 🚨 error |  |
| `@stylistic/wrap-iife` | 🚨 error | ["any","[object]"] |
| `@stylistic/yield-star-spacing` | 🚨 error | "[object]" |

#### Perfectionist (20 rules)

| Rule | Level | Configuration |
|------|-------|---------------|
| `perfectionist/sort-array-includes` | 🚨 error | "[object]" |
| `perfectionist/sort-classes` | 🚨 error | "[object]" |
| `perfectionist/sort-decorators` | 🚨 error | "[object]" |
| `perfectionist/sort-enums` | 🚨 error | "[object]" |
| `perfectionist/sort-exports` | 🚨 error | "[object]" |
| `perfectionist/sort-heritage-clauses` | 🚨 error | "[object]" |
| `perfectionist/sort-imports` | 🚨 error | "[object]" |
| `perfectionist/sort-interfaces` | 🚨 error | "[object]" |
| `perfectionist/sort-intersection-types` | 🚨 error | "[object]" |
| `perfectionist/sort-jsx-props` | 🚨 error | "[object]" |
| `perfectionist/sort-maps` | 🚨 error | "[object]" |
| `perfectionist/sort-modules` | ❌ off | "[object]" |
| `perfectionist/sort-named-exports` | 🚨 error | "[object]" |
| `perfectionist/sort-named-imports` | 🚨 error | "[object]" |
| `perfectionist/sort-object-types` | 🚨 error | "[object]" |
| `perfectionist/sort-objects` | 🚨 error | "[object]" |
| `perfectionist/sort-sets` | 🚨 error | "[object]" |
| `perfectionist/sort-switch-case` | 🚨 error | "[object]" |
| `perfectionist/sort-union-types` | 🚨 error | "[object]" |
| `perfectionist/sort-variable-declarations` | 🚨 error | "[object]" |

#### JSONC (27 rules)

| Rule | Level | Configuration |
|------|-------|---------------|
| `jsonc/no-bigint-literals` | 🚨 error |  |
| `jsonc/no-binary-expression` | 🚨 error |  |
| `jsonc/no-binary-numeric-literals` | 🚨 error |  |
| `jsonc/no-dupe-keys` | 🚨 error |  |
| `jsonc/no-escape-sequence-in-identifier` | 🚨 error |  |
| `jsonc/no-floating-decimal` | 🚨 error |  |
| `jsonc/no-hexadecimal-numeric-literals` | 🚨 error |  |
| `jsonc/no-infinity` | 🚨 error |  |
| `jsonc/no-multi-str` | 🚨 error |  |
| `jsonc/no-nan` | 🚨 error |  |
| `jsonc/no-number-props` | 🚨 error |  |
| `jsonc/no-numeric-separators` | 🚨 error |  |
| `jsonc/no-octal` | 🚨 error |  |
| `jsonc/no-octal-numeric-literals` | 🚨 error |  |
| `jsonc/no-parenthesized` | 🚨 error |  |
| `jsonc/no-plus-sign` | 🚨 error |  |
| `jsonc/no-regexp-literals` | 🚨 error |  |
| `jsonc/no-sparse-arrays` | 🚨 error |  |
| `jsonc/no-template-literals` | 🚨 error |  |
| `jsonc/no-undefined-value` | 🚨 error |  |
| `jsonc/no-unicode-codepoint-escapes` | 🚨 error |  |
| `jsonc/no-useless-escape` | 🚨 error | "[object]" |
| `jsonc/quote-props` | 🚨 error |  |
| `jsonc/quotes` | 🚨 error |  |
| `jsonc/space-unary-ops` | 🚨 error |  |
| `jsonc/valid-json-number` | 🚨 error |  |
| `jsonc/vue-custom-block/no-parsing-error` | 🚨 error |  |

## Frontend Specific (Next.js/React) Configuration

**Total active rules:** 65

### Summary by Category

| Category | Rule Count | Description |
|----------|------------|-------------|
| Core ESLint | 24 | Basic JavaScript/ECMAScript rules |
| TypeScript | 5 | TypeScript-specific linting rules |
| Stylistic | 9 | Code formatting and style rules |
| Perfectionist | 1 | Code organization and sorting rules |
| React | 5 | React and JSX specific rules |
| Next.js | 21 | Next.js framework specific rules |

### Rules by Category

#### Core ESLint (24 rules)

| Rule | Level | Configuration |
|------|-------|---------------|
| `constructor-super` | ❌ off |  |
| `getter-return` | ❌ off | "[object]" |
| `no-class-assign` | ❌ off |  |
| `no-console` | ⚠️ warn | "[object]" |
| `no-const-assign` | ❌ off |  |
| `no-dupe-args` | ❌ off |  |
| `no-dupe-class-members` | ❌ off |  |
| `no-dupe-keys` | ❌ off |  |
| `no-func-assign` | ❌ off |  |
| `no-import-assign` | ❌ off |  |
| `no-new-native-nonconstructor` | ❌ off |  |
| `no-new-symbol` | ❌ off |  |
| `no-obj-calls` | ❌ off |  |
| `no-redeclare` | ❌ off | "[object]" |
| `no-setter-return` | ❌ off |  |
| `no-this-before-super` | ❌ off |  |
| `no-undef` | ❌ off | "[object]" |
| `no-unreachable` | ❌ off |  |
| `no-unsafe-negation` | ❌ off | "[object]" |
| `no-var` | 🚨 error |  |
| `no-with` | ❌ off |  |
| `prefer-const` | 🚨 error | "[object]" |
| `prefer-rest-params` | 🚨 error |  |
| `prefer-spread` | 🚨 error |  |

#### TypeScript (5 rules)

| Rule | Level | Configuration |
|------|-------|---------------|
| `@typescript-eslint/await-thenable` | 🚨 error |  |
| `@typescript-eslint/naming-convention` | 🚨 error | ["[object]","[object]","[object]"] |
| `@typescript-eslint/no-floating-promises` | 🚨 error |  |
| `@typescript-eslint/no-misused-promises` | 🚨 error |  |
| `@typescript-eslint/switch-exhaustiveness-check` | 🚨 error |  |

#### Stylistic (9 rules)

| Rule | Level | Configuration |
|------|-------|---------------|
| `@stylistic/jsx-closing-bracket-location` | 🚨 error | ["tag-aligned"] |
| `@stylistic/jsx-curly-brace-presence` | 🚨 error | "[object]" |
| `@stylistic/jsx-equals-spacing` | 🚨 error | ["never"] |
| `@stylistic/jsx-indent` | 🚨 error | ["tab","[object]"] |
| `@stylistic/jsx-indent-props` | 🚨 error | ["tab"] |
| `@stylistic/jsx-one-expression-per-line` | ❌ off | "[object]" |
| `@stylistic/jsx-quotes` | 🚨 error | ["prefer-double"] |
| `@stylistic/jsx-self-closing-comp` | 🚨 error | "[object]" |
| `@stylistic/jsx-sort-props` | 🚨 error | "[object]" |

#### Perfectionist (1 rules)

| Rule | Level | Configuration |
|------|-------|---------------|
| `perfectionist/sort-jsx-props` | ❌ off | "[object]" |

#### React (5 rules)

| Rule | Level | Configuration |
|------|-------|---------------|
| `react-hooks/exhaustive-deps` | ⚠️ warn |  |
| `react-hooks/rules-of-hooks` | 🚨 error |  |
| `react/jsx-key` | 🚨 error |  |
| `react/no-children-prop` | 🚨 error |  |
| `react/no-unescaped-entities` | 🚨 error |  |

#### Next.js (21 rules)

| Rule | Level | Configuration |
|------|-------|---------------|
| `@next/next/google-font-display` | ⚠️ warn |  |
| `@next/next/google-font-preconnect` | ⚠️ warn |  |
| `@next/next/inline-script-id` | 🚨 error |  |
| `@next/next/next-script-for-ga` | ⚠️ warn |  |
| `@next/next/no-assign-module-variable` | 🚨 error |  |
| `@next/next/no-async-client-component` | ⚠️ warn |  |
| `@next/next/no-before-interactive-script-outside-document` | ⚠️ warn |  |
| `@next/next/no-css-tags` | ⚠️ warn |  |
| `@next/next/no-document-import-in-page` | 🚨 error |  |
| `@next/next/no-duplicate-head` | 🚨 error |  |
| `@next/next/no-head-element` | ⚠️ warn |  |
| `@next/next/no-head-import-in-document` | 🚨 error |  |
| `@next/next/no-html-link-for-pages` | 🚨 error |  |
| `@next/next/no-img-element` | 🚨 error |  |
| `@next/next/no-page-custom-font` | ⚠️ warn |  |
| `@next/next/no-script-component-in-head` | 🚨 error |  |
| `@next/next/no-styled-jsx-in-document` | ⚠️ warn |  |
| `@next/next/no-sync-scripts` | 🚨 error |  |
| `@next/next/no-title-in-document-head` | ⚠️ warn |  |
| `@next/next/no-typos` | ⚠️ warn |  |
| `@next/next/no-unwanted-polyfillio` | ⚠️ warn |  |

## Backend Specific (Node.js) Configuration

**Total active rules:** 27

### Summary by Category

| Category | Rule Count | Description |
|----------|------------|-------------|
| Core ESLint | 23 | Basic JavaScript/ECMAScript rules |
| TypeScript | 4 | TypeScript-specific linting rules |

### Rules by Category

#### Core ESLint (23 rules)

| Rule | Level | Configuration |
|------|-------|---------------|
| `constructor-super` | ❌ off |  |
| `getter-return` | ❌ off | "[object]" |
| `no-class-assign` | ❌ off |  |
| `no-const-assign` | ❌ off |  |
| `no-dupe-args` | ❌ off |  |
| `no-dupe-class-members` | ❌ off |  |
| `no-dupe-keys` | ❌ off |  |
| `no-func-assign` | ❌ off |  |
| `no-import-assign` | ❌ off |  |
| `no-new-native-nonconstructor` | ❌ off |  |
| `no-new-symbol` | ❌ off |  |
| `no-obj-calls` | ❌ off |  |
| `no-redeclare` | ❌ off | "[object]" |
| `no-setter-return` | ❌ off |  |
| `no-this-before-super` | ❌ off |  |
| `no-undef` | ❌ off | "[object]" |
| `no-unreachable` | ❌ off |  |
| `no-unsafe-negation` | ❌ off | "[object]" |
| `no-var` | 🚨 error |  |
| `no-with` | ❌ off |  |
| `prefer-const` | 🚨 error | "[object]" |
| `prefer-rest-params` | 🚨 error |  |
| `prefer-spread` | 🚨 error |  |

#### TypeScript (4 rules)

| Rule | Level | Configuration |
|------|-------|---------------|
| `@typescript-eslint/await-thenable` | 🚨 error |  |
| `@typescript-eslint/no-floating-promises` | 🚨 error |  |
| `@typescript-eslint/no-misused-promises` | 🚨 error |  |
| `@typescript-eslint/switch-exhaustiveness-check` | 🚨 error |  |

## CSS/Stylelint Configuration

**Total active rules:** 13

### Summary by Category

| Category | Rule Count | Description |
|----------|------------|-------------|
| Stylelint Core | 13 | Core CSS/SCSS linting rules |

### Rules by Category

#### Stylelint Core (13 rules)

| Rule | Level | Configuration |
|------|-------|---------------|
| `comment-empty-line-before` | ❌ always | "[object]" |
| `declaration-block-no-duplicate-properties` | 🚨 error |  |
| `declaration-block-no-shorthand-property-overrides` | 🚨 error |  |
| `declaration-block-single-line-max-declarations` | ❌ 0 |  |
| `declaration-empty-line-before` | ❌ never |  |
| `function-calc-no-unspaced-operator` | 🚨 error |  |
| `length-zero-no-unit` | 🚨 error |  |
| `no-irregular-whitespace` | 🚨 error |  |
| `rule-empty-line-before` | ❌ always-multi-line | "[object]" |
| `selector-class-pattern` | ❌ /^[a-z]+([A-Z][a-z0-9]*)*$/ | "[object]" |
| `selector-id-pattern` | ❌ /^[a-z]+([A-Z][a-z0-9]*)*$/ | "[object]" |
| `shorthand-property-no-redundant-values` | 🚨 error |  |
| `unit-allowed-list` | ❌ px | ["%","fr","ms","deg","vh","vw"] |

---

## How to Use This Documentation

- **🚨 error**: Rule violations will fail builds/CI
- **⚠️ warn**: Rule violations will show warnings but not fail builds
- **❌ off**: Rule is disabled

### Regenerating Documentation

```bash
npm run docs        # Regenerate all documentation
node analyze-rules.js  # Regenerate just this file
```

*This documentation was auto-generated from the linting configurations.*
