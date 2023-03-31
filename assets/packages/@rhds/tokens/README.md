# Red Hat Design Tokens

[Design Tokens](https://design-tokens.github.io/community-group/format/) for Red Hat's [Digital Design System](https://ux.redhat.com).

## 🚚 Installation
```sh
npm i @rhds/tokens
```

## 🎭 Usage
We use [style-dictionary](https://amzn.github.io/style-dictionary/) to transform our tokens into multiple formats and helpers.

### Global CSS
Apply defaults to the document root by importing the global stylesheet:
```html
<link rel="stylesheet" href="/url/to/@rhds/tokens/css/global.css">
<style>
  :is(h1, h2, h3, h4, h5, h6) {
    font-family: var(--rh-font-family-heading);
  }
</style>
```

### Shadow Root Reset
Reset a component's styles (preventing inheritance) by adding `resetStyles` to it's static Constructible Style Sheet list:
```ts
import { resetStyles } from '@rhds/tokens/css/reset.css.js';
import style from './rh-jazz-hands.css';

@customElement('rh-jazz-hands')
export class RhJazzHands extends LitElement {
  static readonly styles = [resetStyles, style];
}
```

### JavaScript Objects
Import tokens as JavaScript objects:
```js
import { tokens } from '@rhds/tokens';

html`<span style="color: ${tokens.get('--rh-color-blue-300')}">I'm blue</span>`;
```
or for tree-shakable imports:
```js
import { ColorBlue300 } from '@rhds/tokens/values.js';

html`<span style="color: ${ColorBlue300}">I'm blue</span>`;
```
**NOTE**: We *strongly* recommend using CSS variables (and accompanying snippets)
wherever, instead of importing tokens as JavaScript objects.

### Stylelint Plugin

Install the stylelint plugin to automatically correct token values in your files.

See the [Stylelint Plugin README](./plugins/stylelint/README.md) for more info.

### 11ty Plugin

The experimental 11ty plugin lets you display token values in an 11ty site.

### Editor Snippets
Editor snippets complete prefixes like `--rh-color-brand` to their CSS custom properties, complete with fallback, e.g.
```css
color: var(--rh-color-brand, #ee0000);
```

They also provide reverse lookup, so if you want to choose between _all_ the tokens with value `#e00`, you can do so by completing the prefix `e00`.

Load snippets in **VSCode**:
Download the VSIX bundle from [the releases page](https://github.com/redhat-ux/red-hat-design-tokens/releases).
Or, search the VSCode marketplace for [`Red Hat Design Tokens`](https://marketplace.visualstudio.com/search?term=%40category%3A%22snippets%22%20%22Red%20Hat%20Design%20Tokens%22&target=VSCode&category=All%20categories&sortBy=Relevance)

Load snippets in **neovim** via LuaSnip:
```lua
require 'luasnip.loaders.from_vscode'.lazy_load { paths = {
  -- Path to the built project, perhaps in your `node_modules`
  '~/Developer/redhat-ux/red-hat-design-tokens/editor/vscode'
} }
```

### `vim-hexokinase`
Vim users can load the [vim-hexokinase](https://github.com/RRethy/vim-hexokinase) plugin to display colour swatches
next to their encoded values in their editor. Use the following config (lua syntax, for neovim users) to configure
hexokinase to display colour values next to colour aliases like `{color.brand.red}`

```lua
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

## 🏆 Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md)

