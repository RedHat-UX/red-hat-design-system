---
layout: layouts/pages/basic.njk
title: Tokens
heading: Developers
tags:
  - developers
permalink: /get-started/developers/tokens/index.html
subnav:
  collection: sortedDevelopers
  order: 30
importElements: 
  - rh-code-block
---

## How to install tokens

Run the following git command to install RHDS tokens:

<rh-code-block>
  <script type="text/sample-javascript">npm i @rhds/tokens</script>
</rh-code-block>


## Usage

We use [style-dictionary](https://amzn.github.io/style-dictionary/) to transform our tokens into multiple formats and helpers.


### Import global CSS

Apply defaults to the document root by importing the global stylesheet:

<rh-code-block>
  <script type="text/html"><link rel="stylesheet" href="/url/to/@rhds/tokens/css/global.css">
<style>
  :is(h1, h2, h3, h4, h5, h6) {
    font-family: var(--rh-font-family-heading);
  }
</style></script>
</rh-code-block>


### Reset the shadowroot

Reset a component's styles (preventing inheritance) by adding resetStyles to its static Constructible Style Sheet list:

<rh-code-block>
  <script type="text/sample-javascript">import { resetStyles } from '@rhds/tokens/css/reset.css.js';
import style from './rh-jazz-hands.css';
</script>
<script type="text/sample-javascript">@customElement('rh-jazz-hands')
export class RhJazzHands extends LitElement {
  static readonly styles = [...resetStyles, style];
}</script>
</rh-code-block>


### Import tokens as JavaScript objects

<rh-alert state="info">
  <h4 slot="header">Note</h4>
  <p>We strongly recommend using CSS variables (and accompanying snippets), instead of importing tokens as JavaScript objects.</p>
</rh-alert>

Import tokens as JavaScript objects:

<rh-code-block>
  <script type="text/sample-javascript">import { tokens } from '@rhds/tokens';
</script>
<script type="text/sample-javascript">html`<span style="color: ${tokens.get('--rh-color-blue-300')}">I'm blue</span>`;</script>
</rh-code-block>

Or tree-shakable imports:

<rh-code-block>
  <script type="text/sample-javascript">import { ColorBlue300 } from '@rhds/tokens/values.js';
</script>
<script type="text/sample-javascript">html`<span style="color: ${ColorBlue300}">I'm blue</span>`;</script>
</rh-code-block>


## Plugins

### Using editor snippets

Editor snippets complete prefixes like `--rh-color-brand` to their CSS custom properties, complete with fallback.

<rh-code-block>
  <script type="text/css">color: var(--rh-color-brand, #ee0000);</script>
</rh-code-block>

They also provide reverse lookup. For example,  if you want to choose between all the tokens with the  value `#e00`, you can do so by completing the prefix `e00`.


#### Load snippets in VSCode 

Download the VSIX bundle that’s linked at the bottom of our [“Release v1.0.0”](https://github.com/RedHat-UX/red-hat-design-tokens/releases/tag/v1.0.0) page.


#### Load snippets in Neovim

Use LuaSnip to load snippets in Neovim:

<rh-code-block>
  <script type="text/sample-javascript">require 'luasnip.loaders.from_vscode'.lazy_load { paths = {
  -- Path to the built project, perhaps in your `node_modules`
  '~/Developer/redhat-ux/red-hat-design-tokens/editor/vscode'
} }</script>
</rh-code-block>


### Stylelint plugin

Install the stylelint plugin to automatically correct token values in your files.

See the [Stylelint Plugin README](https://github.com/RedHat-UX/red-hat-design-tokens/blob/main/plugins/stylelint/README.md) for more info.


### 11ty plugin

The experimental 11ty plugin lets you display token values in an 11ty site.


### vim-hexokinase

Vim users can load the [vim-hexokinase](https://github.com/RRethy/vim-hexokinase) plugin to display color swatches next to their encoded values in their editor.

Use the following config (lua syntax, for Neovim users) to configure hexokinase to display color values next to color aliases like `{color.brand.red}`.

<rh-code-block>
  <script type="text/sample-javascript">vim.g.Hexokinase_optInPatterns = {
  'full_hex', 'triple_hex',
  'rgb', 'rgba',
  'hsl', 'hsla',
  'colour_names',
}
</script>
<script type="text/sample-javascript">vim.g.Hexokinase_ftOptOutPatterns = {
  json = { 'colour_names' },
  yaml = { 'colour_names' },
}
</script>
<script type="text/sample-javascript">vim.g.Hexokinase_palettes = {
  -- replace with path to the built tokens package on your drive
  vim.fn.expand'~/Developer/redhat-ux/red-hat-design-tokens/editor/neovim/hexokinase.json'
}</script>
</rh-code-block>

<uxdot-feedback>
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a href="get-started/designers">Designers</a> page.</p>
</uxdot-feedback>
