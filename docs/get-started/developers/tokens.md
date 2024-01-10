---
layout: layout-with-subnav.njk
title: Tokens
heading: Developers
tags:
  - developers
permalink: /get-started/developers/tokens/index.html
order: 20
bodyClasses: element-docs
---

## How to install tokens

Run the following git command to install RHDS tokens:

<rh-code-block>
npm i @rhds/tokens
</rh-code-block>

## Usage

We use [style-dictionary](https://amzn.github.io/style-dictionary/) to transform our tokens into multiple formats and helpers.

### Import global CSS

Apply defaults to the document root by importing the global stylesheet:

<rh-code-block>
<link rel="stylesheet" href="/url/to/@rhds/tokens/css/global.css">
<style>
  :is(h1, h2, h3, h4, h5, h6) {
    font-family: var(--rh-font-family-heading);
  }
</style>
</rh-code-block>

### Reset the shadowroot

Reset a component's styles (preventing inheritance) by adding resetStyles to its static Constructible Style Sheet list:

<rh-code-block>
import { resetStyles } from '@rhds/tokens/css/reset.css.js';
import style from './rh-jazz-hands.css';

@customElement('rh-jazz-hands')
export class RhJazzHands extends LitElement {
  static readonly styles = [resetStyles, style];
}
</rh-code-block>

### Import tokens as JavaScript objects

<!-- format as alert:
Note
We strongly recommend using CSS variables (and accompanying snippets), instead of importing tokens as JavaScript objects.
 -->

Import tokens as JavaScript objects:

<rh-code-block>
import { tokens } from '@rhds/tokens';

html`<span style="color: ${tokens.get('--rh-color-blue-300')}">I'm blue</span>`;
</rh-code-block>

or for tree-shakable imports:

<rh-code-block>
import { ColorBlue300 } from '@rhds/tokens/values.js';

html`<span style="color: ${ColorBlue300}">I'm blue</span>`;
</rh-code-block>

## Plugins

### Using editor snippets

Editor snippets complete prefixes like `--rh-color-brand` to their CSS custom properties, complete with fallback.

<rh-code-block>
color: var(--rh-color-brand, #ee0000);
</rh-code-block>

They also provide reverse lookup. For example,  if you want to choose between all the tokens with the  value `#e00`, you can do so by completing the prefix `e00`.

#### Load snippets in VSCode 

Download the VSIX bundle that’s linked at the bottom of our [“Release v1.0.0”](https://github.com/RedHat-UX/red-hat-design-tokens/releases/tag/v1.0.0) page.