# RHDS Stylelint Plugin

```yaml
# .stylelintrc.yml
extends: stylelint-config-standard

# add the plugin:
plugins:
  - ./node_modules/@rhds/tokens/plugins/stylelint.cjs

# Make sure to activate the rule:
rules:
  rhds/token-values: true
  rhds/no-unknown-token-name: true
```

Be sure to configure your editor to fix stylelint issues on save:
- [neovim lsp](https://github.com/neovim/nvim-lspconfig/pull/2089)
- [vscode](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint#editor.codeactionsonsave)

## Rules

### `token-values`
Validates that the fallback values for tokens correspond with the values 
specified in the token sources. Automatically fixed incorrect values. This rule 
has no options.

### `no-unknown-token-name`
Validates CSS Custom Property names beginning with `--rh` are legit token names. 

#### Options
This rule can take a dictionary of names to migrate, and if it finds one of the 
specified names, it will automatically replace it with the new one.

```yaml
rules:
  rhds/no-unknown-token-name:
    - true
    - migrations:
      # instances of gray-90 will be replaced with gray-95
      --rh-color-gray-90: --rh-color-gray-95
```
