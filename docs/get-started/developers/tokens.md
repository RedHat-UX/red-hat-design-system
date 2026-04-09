---
layout: layouts/pages/has-toc.njk
title: Tokens
heading: Developers
permalink: /get-started/developers/tokens/index.html
tags:
  - developers
subnav:
  collection: sortedDevelopers
  order: 30
---

<style data-helmet>
  .code-tabs rh-tab-panel {
    padding-block-end: 0;
    padding-inline: 0;
  }
</style>

<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-example.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  import '@rhds/elements/rh-tabs/rh-tabs.js';
</script>

Design tokens are the source of truth for our design decisions. They provide the values
needed to maintain our design system and are integral to consistently branded Red Hat digital 
experiences.

Developers are strongly encouraged to use our design [tokens](/tokens/) when writing CSS.

## How to install tokens

Add one of the following `<link>` tags to your document's `<head>`:

<rh-tabs class="code-tabs">
  <rh-tab slot="tab" active>Red Hat CDN</rh-tab>
  <rh-tab-panel>

```html rhcodeblock
<link rel="stylesheet"
      href="https://www.redhatstatic.com/dssf-001/v2/@rhds/tokens@{{ packageinfo.packages["node_modules/@rhds/tokens"].version }}/css/global.css">
```

  </rh-tab-panel>
  <rh-tab slot="tab">Third party CDN</rh-tab>
  <rh-tab-panel>

  <rh-alert state="warning">
    <h4 slot="header">Public CDNs</h4>
    <p>jsDelivr and other public CDNs should not be used on corporate domains. Use 
      them for <strong>development purposes only</strong>!</p>
  </rh-alert>

```html rhcodeblock
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@rhds/tokens@{{ packageinfo.packages["node_modules/@rhds/tokens"].version }}/css/global.min.css">
```

  </rh-tab-panel>
  <rh-tab slot="tab">NPM</rh-tab>
  <rh-tab-panel>

If your project uses a bundler, run the following command in your terminal to install RHDS tokens:

```bash rhcodeblock
npm install @rhds/tokens
```

Then reference the Tokens CSS file:

```js rhcodeblock
@import '@rhds/tokens@{{ packageinfo.packages["node_modules/@rhds/tokens"].version }}/css/global.css';
```

  </rh-tab-panel>
</rh-tabs>

## Usage

We use [style-dictionary][styledictionary] to transform our tokens into multiple
formats and helpers.

### Use tokens in CSS

Apply defaults to the document root by importing the global stylesheet as seen above, then use our
tokens in your CSS:

```html rhcodeblock
<style>
  :is(h1, h2, h3, h4, h5, h6) {
    color: var(--rh-color-text-primary);
    font-family: var(--rh-font-family-heading);
    margin-block-end: var(--rh-space-xl);
  }
</style>
```

### Reset the shadowroot

Reset a component's styles (preventing inheritance) by adding resetStyles to its
static Constructible Style Sheet list:

```js rhcodeblock
import { resetStyles } from '@rhds/tokens/css/reset.css.js';
import style from './rh-jazz-hands.css';

@customElement('rh-jazz-hands')
export class RhJazzHands extends LitElement {
  static readonly styles = [...resetStyles, style];
}
```

### Import tokens as JavaScript objects

<rh-alert state="info">
  <h4 slot="header">Note</h4>
  <p>We strongly recommend using CSS variables (and accompanying snippets), instead of importing tokens as JavaScript objects.</p>
</rh-alert>

Import tokens as JavaScript objects:

```js rhcodeblock
import { tokens } from "@rhds/tokens";
const template = html` <span style="color: ${tokens.get("--rh-color-blue-300")}">I'm blue</span> `;
```

Or tree-shakable imports:

```js rhcodeblock
import { ColorBlue300 } from "@rhds/tokens/values.js";
const template = html` <span style="color: ${ColorBlue300}">I'm blue</span> `;
```

## Plugins

### Using editor snippets

Editor snippets complete prefixes like `--rh-color-brand` to their CSS custom
properties, complete with fallback.

```css rhcodeblock
color: var(--rh-color-brand, #ee0000);
```

They also provide reverse lookup. For example, if you want to choose between
all the tokens with the value `#e00`, you can do so by completing the prefix
`e00`.

#### Load snippets in VSCode

Download the VSIX bundle that’s linked at the bottom of our [“Release
v1.0.0”][releasev100] page.

#### Load snippets in Neovim

Use LuaSnip to load snippets in Neovim:

```lua rhcodeblock
require 'luasnip.loaders.from_vscode'.lazy_load { paths = {
  -- Path to the built project, perhaps in your `node_modules`
  '~/Developer/redhat-ux/red-hat-design-tokens/editor/vscode'
} }
```

### Stylelint plugin

Install the stylelint plugin to automatically correct token values in your
files.

See the [Stylelint Plugin README][stylelintpluginreadme] for more info.

### 11ty plugin

The experimental 11ty plugin lets you display token values in an 11ty site.

### vim-hexokinase

Vim users can load the [vim-hexokinase][vimhexokinase] plugin to display color
swatches next to their encoded values in their editor.

Use the following config (lua syntax, for Neovim users) to configure hexokinase
to display color values next to color aliases like `{color.brand.red}`.

```lua rhcodeblock
vim.g.Hexokinase_optInPatterns = {
  'full_hex', 'triple_hex',
  'rgb', 'rgba',
  'hsl', 'hsla',
  'colour_names',
}

vim.g.Hexokinase_ftOptOutPatterns = {
  json = { 'colour_names' },
  yaml = { 'colour_names' },
}

vim.g.Hexokinase_palettes = {
  -- replace with path to the built tokens package on your drive
  vim.fn.expand'~/Developer/redhat-ux/red-hat-design-tokens/editor/neovim/hexokinase.json'
}
```

## AI Tooling

[Asimonim][asimonim] is a design tokens multitool that provides
AI-powered editor features for RHDS tokens. It gives your editor and AI
assistant structured knowledge of design tokens, including their names,
values, types, and descriptions.

Asimonim offers two integration modes:

- **LSP** (Language Server Protocol) adds autocomplete, hover
  documentation, diagnostics, and code actions for design tokens in CSS,
  HTML, JavaScript, and TypeScript files
- **MCP** (Model Context Protocol) gives AI assistants direct access to
  token definitions for searching, validating, and converting tokens

### Install Asimonim

Install using npm:

```shell rhcodeblock
npm install -g @pwrs/asimonim
```

Or using Go:

```shell rhcodeblock
go install bennypowers.dev/asimonim@latest
```

Verify the installation:

```shell rhcodeblock
asimonim version
```

### Claude Code

The Asimonim plugin for [Claude Code][claudecode] provides both LSP and
MCP support. Install the plugin with two commands:

```text rhcodeblock
/plugin marketplace add bennypowers/asimonim
/plugin install asimonim
```

Once installed, Claude Code gains:

- **Editor intelligence** for CSS, HTML, and JavaScript files, with
  autocomplete and diagnostics for RHDS tokens
- **AI-native token understanding**, so Claude can search, validate, and
  convert design tokens directly

No additional configuration is needed. The plugin discovers token files
in your project and in `node_modules` automatically.

### Cursor

[Cursor][cursor] supports MCP servers for AI-assisted development. Add
Asimonim to your Cursor MCP configuration:

```json rhcodeblock
{
  "mcpServers": {
    "asimonim": {
      "command": "asimonim",
      "args": ["mcp"]
    }
  }
}
```

See the [Cursor MCP docs][cursormcp] for the configuration file location
on your platform.

### VS Code

Install the [Design Tokens Language Server][vscodeext-dt] extension from
the VS Code marketplace. The extension bundles the language server and
works out of the box.

For MCP support, add Asimonim to your MCP configuration the same way as
Cursor (above).

### Neovim

For Neovim 0.11+ with native LSP support, create
`~/.config/nvim/lsp/asimonim.lua`:

```lua rhcodeblock
return {
  cmd = { 'asimonim', 'lsp' },
  root_markers = { '.git', 'package.json' },
  filetypes = { 'css', 'html', 'twig', 'php',
                'javascript', 'javascriptreact',
                'typescript', 'typescriptreact',
                'json', 'yaml' },
}
```

### Learn more

- [Asimonim documentation][asimonimdocs]
- [LSP reference][asimonim-lsp]
- [MCP reference][asimonim-mcp]

<uxdot-feedback>
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a href="/get-started/designers">Designers</a> page.</p>
</uxdot-feedback>

[styledictionary]: https://amzn.github.io/style-dictionary/
[vimhexokinase]: https://github.com/RRethy/vim-hexokinase
[stylelintpluginreadme]: https://github.com/RedHat-UX/red-hat-design-tokens/blob/main/plugins/stylelint/README.md
[releasev100]: https://github.com/RedHat-UX/red-hat-design-tokens/releases/tag/v1.0.0
[asimonim]: https://github.com/bennypowers/asimonim
[asimonimdocs]: https://bennypowers.dev/asimonim/
[asimonim-lsp]: https://bennypowers.dev/asimonim/docs/lsp/
[asimonim-mcp]: https://bennypowers.dev/asimonim/docs/reference/commands/mcp/
[claudecode]: https://claude.ai/claude-code
[cursor]: https://cursor.com
[cursormcp]: https://docs.cursor.com/mcp
[vscodeext-dt]: https://marketplace.visualstudio.com/items?itemName=pwrs.design-tokens-language-server-vscode
