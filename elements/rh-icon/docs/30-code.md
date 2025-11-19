### Loading

Icons load lazily by default, meaning that the browser will not attempt to fetch and render the icon until it scrolls into view. You can change this with the loading attribute, which has three values:

1. `lazy` (the default): load icons when they scroll into view
2. `idle`: load each icon on the page as soon as the browser enters an idle state Or, on less-capable browsers, at the next frame
3. `eager`: each icon will begin to load and render the moment it connects to the DOM.

You might choose to enable eager rendering for "above-the-fold" content, but keep lazy loading for the rest of the page.

```html rh-code-block
<rh-icon icon="alert" loading="eager"></rh-icon>
```

## Custom Icon Loading

By default, `rh-icon` loads icons from the `@rhds/icons` package using ES module imports. You can customize how icons are loaded by overriding the `RhIcon.resolve` static function. This allows you to load icons from custom CDNs, prebuilt bundles, or custom server paths.

### The resolve function

The `RhIcon.resolve` function is called whenever an icon needs to be loaded. Override it to customize icon loading behavior.

```ts
type IconResolverFunction = (set: string, icon: string) =>
  Renderable | Promise<Renderable>;
```

The function receives two parameters:
- `set`: The icon set name (e.g., 'standard', 'ui', 'microns', 'social')
- `icon`: The icon name (e.g., 'alert', 'check-circle-fill')

It must return an SVG DOM node, or a Promise that resolves to an SVG DOM node.

### Loading from a custom CDN

Configure `rh-icon` to load icons from a CDN instead of the default package. This is useful when you want to serve icon assets from a content delivery network as static SVG files rather than bundling them with your JavaScript.

In this example, the CDN serves raw SVG files (e.g., `https://cdn.example.com/icons/standard/alert.svg` returns SVG text content), not JavaScript modules. The resolver fetches the SVG text, parses it into a DOM node, and returns it.

```html rh-code-block
<script type="module">
  import { RhIcon } from '@rhds/elements/rh-icon/rh-icon.js';

  RhIcon.resolve = async (set, icon) => {
    const response = await fetch(`https://cdn.example.com/icons/${set}/${icon}.svg`);
    if (!response.ok) {
      throw new Error(`Failed to load icon: ${set}/${icon}`);
    }
    const svgText = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, 'image/svg+xml');
    return doc.documentElement;
  };
</script>

<rh-icon icon="alert"></rh-icon>
```

### Loading from a prebuilt bundle

If you have icons prebuilt as DOM nodes in a JavaScript module, you can import and use them directly. This is useful for reducing network requests when you know which icons your application needs.

First, create a bundle module that exports icon DOM nodes:

```js rh-code-block
// my-icon-bundle.js
const parser = new DOMParser();

function createIcon(svgString) {
  const doc = parser.parseFromString(svgString, 'image/svg+xml');
  return doc.documentElement;
}

export const standard = {
  alert: createIcon('<svg xmlns="http://www.w3.org/2000/svg">...</svg>'),
  hat: createIcon('<svg xmlns="http://www.w3.org/2000/svg">...</svg>'),
};

export const ui = {
  'check-circle-fill': createIcon('<svg xmlns="http://www.w3.org/2000/svg">...</svg>'),
};
```

Then configure the resolver to use your bundle:

```js rh-code-block
import { RhIcon } from '@rhds/elements/rh-icon/rh-icon.js';
import * as iconBundle from './my-icon-bundle.js';

RhIcon.resolve = (set, icon) => {
  const iconNode = iconBundle[set]?.[icon];
  if (!iconNode) {
    throw new Error(`Icon not found: ${set}/${icon}`);
  }
  // Always clone to avoid reusing the same node
  return iconNode.cloneNode(true);
};
```

### Loading from an absolute server path

For server-deployed applications, you can copy the JavaScript modules from the `@rhds/icons` npm package to your server and load them using absolute paths. This is useful when you can't use npm package imports directly but have the icon modules deployed on your server.

The `@rhds/icons` package provides JavaScript modules that export DOM nodes. Copy these modules to your server and configure the resolver to import from the absolute path:

```html rh-code-block
<script type="module">
  import { RhIcon } from '@rhds/elements/rh-icon/rh-icon.js';

  RhIcon.resolve = (set, icon) =>
    import(`/assets/icons/${set}/${icon}.js`)
      .then(mod => mod.default.cloneNode(true));
</script>
```

### Error handling

Icons fire an `error` event when loading fails. Provide fallback content in the default slot, which will be displayed if the icon fails to load:

```html rh-code-block
<rh-icon icon="alert">
  <span>⚠️</span>
</rh-icon>
```

You can also listen for the `error` event on individual icon elements:

```html rh-code-block
<script type="module">
  const icon = document.getElementById('critical-icon');
  icon.addEventListener('error', (event) => {
    console.error('Failed to load icon:', event.message);
    // Handle the error, e.g., notify the user or load a different icon
  });
</script>

<rh-icon id="critical-icon" icon="alert">⚠️</rh-icon>
```

### Important notes

1. Set `RhIcon.resolve` before any `<rh-icon>` elements are rendered
2. Always use `cloneNode(true)` when returning cached or prebuilt DOM nodes
3. The resolver must return an SVG DOM element, not a string
4. Always throw errors when icons fail to load for proper error handling

