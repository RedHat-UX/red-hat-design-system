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

<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-example.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
</script>

## How to install tokens

Run the following git command to install RHDS tokens:

```js rhcodeblock
npm i @rhds/tokens
```

## Usage

We use [style-dictionary][styledictionary] to transform our tokens into multiple 
formats and helpers.


### Import global CSS

Apply defaults to the document root by importing the global stylesheet:

```html rhcodeblock
<link rel="stylesheet" href="/url/to/@rhds/tokens/css/global.css">
<style>
  :is(h1, h2, h3, h4, h5, h6) {
    font-family: var(--rh-font-family-heading);
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
import { tokens } from '@rhds/tokens';
const template = html`
  <span style="color: ${tokens.get('--rh-color-blue-300')}">I'm blue</span>
`;
```

Or tree-shakable imports:

```js rhcodeblock
import { ColorBlue300 } from '@rhds/tokens/values.js';
const template = html`
  <span style="color: ${ColorBlue300}">I'm blue</span>
`;
```

## Plugins

### Using editor snippets

Editor snippets complete prefixes like `--rh-color-brand` to their CSS custom 
properties, complete with fallback.

```css rhcodeblock
color: var(--rh-color-brand, #ee0000);
```

They also provide reverse lookup. For example,  if you want to choose between 
all the tokens with the  value `#e00`, you can do so by completing the prefix 
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

<uxdot-feedback>
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a href="get-started/designers">Designers</a> page.</p>
</uxdot-feedback>

[styledictionary]: https://amzn.github.io/style-dictionary/
[vimhexokinase]: https://github.com/RRethy/vim-hexokinase
[stylelintpluginreadme]: https://github.com/RedHat-UX/red-hat-design-tokens/blob/main/plugins/stylelint/README.md
[releasev100]: https://github.com/RedHat-UX/red-hat-design-tokens/releases/tag/v1.0.0
