import { Plugin } from 'stylelint';

import stylelint from 'stylelint';

// TODO: remove cjs plugin for 2.0
export = [
  {
    ruleName: 'rhds/token-values',

    meta: {
      url: 'https://github.com/RedHat-UX/red-hat-design-tokens/tree/main/plugins/stylelint/rules/token-values.ts',
      fixable: true,
    },

    rule: () => {
      function ruleFunction(primary, secondary, options) {
        return async (root, result) => {
          const mod = await import('./stylelint/rules/token-values.js');
          const rule = mod.default(primary, secondary, options);
          return rule(root, result);
        };
      }

      ruleFunction.messages = stylelint.utils.ruleMessages('rhds/token-values', {
        expected: 'Expected ...',
      });

      ruleFunction.meta = {
        url: 'https://github.com/RedHat-UX/red-hat-design-tokens/tree/main/plugins/stylelint/rules/token-values.ts',
        fixable: true,
      };

      return ruleFunction;
    },
  } as Plugin,
  {
    ruleName: 'rhds/no-unknown-token-name',

    rule: () => {
      function ruleFunction(primary, secondary, options) {
        return async (root, result) => {
          const mod = await import('./stylelint/rules/no-unknown-token-name.js');
          const rule = mod.default(primary, secondary, options);
          return rule(root, result);
        };
      }

      ruleFunction.messages = stylelint.utils.ruleMessages('rhds/no-unknown-token-name', {
        expected: 'Expected ...',
      });

      ruleFunction.meta = {
        url: 'https://github.com/RedHat-UX/red-hat-design-tokens/tree/main/plugins/stylelint/rules/no-unknown-token-name.ts',
        fixable: true,
      };

      return ruleFunction;
    },
  } as Plugin,
];
