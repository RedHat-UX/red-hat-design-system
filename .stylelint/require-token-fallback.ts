import { readdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { basename, dirname, join } from 'node:path';

import { tokens } from '@rhds/tokens';
import stylelint from 'stylelint';
import parser from 'postcss-value-parser';

import type { TokenName, TokenValue } from '@rhds/tokens';
import type { Rule } from 'stylelint';

/**
 * Stylelint rule that requires `var()` calls using `--rh-` design tokens
 * to include a fallback value.
 *
 * Components that use the `@themable` decorator from `@rhds/elements/lib/themable.js`
 * adopt `default-theme.css` at the document level, which provides values for
 * contextual theme tokens (e.g. `--rh-color-text-primary`). For those components,
 * theme-provided tokens are exempt from the fallback requirement; all other tokens
 * still require fallbacks.
 *
 * Lightdom stylesheets (`*-lightdom.css`, `*-lightdom-shim.css`) always require
 * fallbacks for all tokens regardless of `@themable` status.
 *
 * @example
 * ```css
 * // Bad — missing fallback
 * color: var(--rh-color-text-primary);
 *
 * // Good — includes fallback
 * color: var(--rh-color-text-primary, light-dark(
 *   var(--rh-color-text-primary-on-light, #151515),
 *   var(--rh-color-text-primary-on-dark, #ffffff)
 * ));
 * ```
 */

const ruleName = 'rhds/require-token-fallback';

const messages = stylelint.utils.ruleMessages(ruleName, {
  expected(name: string, value: TokenValue) {
    return `Expected fallback value for token ${name} (e.g., var(${name}, ${value}))`;
  },
});

const meta = {
  url: 'https://github.com/RedHat-UX/red-hat-design-system',
  fixable: true,
};

let themeTokens: Set<string> | undefined;

/**
 * Lazily loads and caches the set of token names defined in
 * `@rhds/tokens/css/default-theme.css`. These are the contextual tokens
 * (primarily `light-dark()` color tokens) that `@themable` components
 * receive via document-level stylesheet adoption.
 */
function getThemeTokens(): Set<string> {
  if (themeTokens) {
    return themeTokens;
  }
  try {
    const req = createRequire(import.meta.url);
    const cssPath = req.resolve('@rhds/tokens/css/default-theme.css');
    const css = readFileSync(cssPath, 'utf8');
    themeTokens = new Set(
      [...css.matchAll(/^\s+(--rh-[a-z0-9-]+):/gm)].map(m => m[1]),
    );
  } catch {
    themeTokens = new Set();
  }
  return themeTokens;
}

const themableImport = /from\s+['"]@rhds\/elements\/lib\/themable\.js['"]/;
const themableCache = new Map<string, boolean>();

/**
 * Determines whether the component associated with a CSS file uses
 * the `@themable` decorator.
 *
 * Checks in order:
 * 1. A matching `.ts` file (e.g. `rh-button.css` → `rh-button.ts`)
 * 2. If no matching `.ts` exists, checks whether any sibling `.ts` file
 *    in the same directory both imports this CSS file and uses `@themable`.
 *    This handles shared stylesheets (e.g. `rh-audio-player-button.css`
 *    imported by `rh-audio-player.ts`).
 *
 * Lightdom stylesheets always return `false` since they operate in
 * the document scope and cannot rely on shadow-DOM-scoped theme adoption.
 *
 * @param cssFilePath - Absolute path to the CSS file being linted
 * @returns `true` if a `@themable` component owns or imports this CSS
 */
function isThemable(cssFilePath: string): boolean {
  const cssBase = basename(cssFilePath, '.css');
  if (cssBase.endsWith('-lightdom') || cssBase.endsWith('-lightdom-shim')) {
    return false;
  }
  if (themableCache.has(cssFilePath)) {
    return themableCache.get(cssFilePath)!;
  }
  const dir = dirname(cssFilePath);
  const tsPath = join(dir, `${cssBase}.ts`);
  let result = false;
  try {
    result = themableImport.test(readFileSync(tsPath, 'utf8'));
  } catch {
    // no matching .ts — check if a sibling .ts imports this CSS and is @themable
    result = isImportedByThemable(dir, `${cssBase}.css`);
  }
  themableCache.set(cssFilePath, result);
  return result;
}

/**
 * Checks whether any `.ts` file in the directory both imports the given
 * CSS filename and uses the `@themable` decorator.
 */
function isImportedByThemable(dir: string, cssFileName: string): boolean {
  try {
    for (const f of readdirSync(dir)) {
      if (!f.endsWith('.ts') || f.endsWith('.d.ts')) {
        continue;
      }
      const source = readFileSync(join(dir, f), 'utf8');
      if (source.includes(cssFileName) && themableImport.test(source)) {
        return true;
      }
    }
  } catch {
    // directory can't be read
  }
  return false;
}

/**
 * For each `var(--rh-*)` call in a declaration, reports a violation when
 * the fallback argument is missing. Auto-fixable: appends the canonical
 * token value from `@rhds/tokens` as the fallback.
 *
 * When the component is `@themable`, tokens provided by `default-theme.css`
 * are skipped since the theme sheet supplies their values at the document level.
 */
const ruleFunction: Rule = () => {
  return (root, result) => {
    const filePath = root.source?.input?.file;
    const themable = filePath ? isThemable(filePath) : false;
    const skipTokens = themable ? getThemeTokens() : undefined;

    root.walkDecls(node => {
      const parsedValue = parser(node.value);
      parsedValue.walk(parsedNode => {
        if (parsedNode.type !== 'function' || parsedNode.value !== 'var') {
          return;
        }
        const [child] = parsedNode.nodes ?? [];
        if (!child) {
          return;
        }
        const { value: name } = child;
        if (!name.startsWith('--rh-') || !tokens.has(name as TokenName)) {
          return;
        }
        if (skipTokens?.has(name)) {
          return;
        }
        const expected = tokens.get(name as TokenName);
        const hasFallback = parsedNode.nodes.length > 1;
        if (hasFallback) {
          return;
        }
        stylelint.utils.report({
          node,
          message: messages.expected(name, expected),
          ruleName,
          result,
          word: name,
          index: child.sourceIndex,
          endIndex: child.sourceEndIndex,
          fix() {
            const fallbackNodes = parser(String(expected)).nodes;
            parsedNode.nodes.push(
              { type: 'div', value: ',', before: '', after: ' ' } as parser.DivNode,
              ...fallbackNodes,
            );
            node.value = parser.stringify(parsedValue.nodes);
          },
        });
      });
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default [stylelint.createPlugin(ruleName, ruleFunction)];
