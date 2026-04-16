Code block content must be placed inside a non-executable `<script>` tag. The 
`type` attribute is what makes it non-executable, it must not be `module`, 
`importmap`, `javascript`, or any of the [executable javascript mimetypes][mime]. 

The `type` value only prevents the browser from running the content; it does not 
affect display or syntax highlighting. Using a MIME type that matches your 
content (e.g. `text/html`, `text/css`, `text/yaml`) is a useful convention for 
editor tooling but is not required by the component. 

For JavaScript, use 
`text/sample-javascript` since `text/javascript` is executable.

```html rh-code-block
<rh-code-block>
  <script type="text/sample-javascript">
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  </script>
</rh-code-block>
```

<rh-alert state="warning">
 <h3 slot="header">Warning</h3>
  <p>When slotting HTML content into the code-block, if that HTML content
     contains a <code>&lt;/script></code> end tag, you must escape it.</p>
</rh-alert>

One approach to escaping script tags is to close the containing `<script 
type="text/html">` within the sample's closing script tag, then immediately open 
a new sample script tag containing the rest of the snippet. Another method is to 
insert a [zero-width-joiner][zwj] (or some other unusual unicode character) in 
the closing script tag, and use javascript to remove it before copying the 
content to the clipboard. Each method has benefits and drawbacks.

```html rh-code-block
<rh-code-block>
  <script type="text/html">
<p>Script tags in HTML must be escaped</p>
<script>console.log('Success!');<</script><script type="text/html">/script>
  </script>
</rh-code-block>
```

### Syntax highlighting

To enable syntax coloring, set [`highlighting`](#rh-code-block-attributes-highlighting) and [`language`](#rh-code-block-attributes-language) on the `<rh-code-block>` element:

<rh-table>

| Attribute | Purpose | Values |
|-----------|---------|--------|
| [`highlighting`](#rh-code-block-attributes-highlighting) | Enables the Prism.js engine | `client` or `prerendered` |
| [`language`](#rh-code-block-attributes-language) | Selects the Prism grammar used to colorize tokens | `html`, `css`, `javascript`, `typescript`, `bash`, `ruby`, `yaml`, `json` |

</rh-table>

Each [`language`](#rh-code-block-attributes-language) value maps directly to a bundled Prism grammar module. If we are missing the grammar module you need, please create an issue on our [Github repository](https://github.com/RedHat-UX/red-hat-design-system/issues) with your request. 

Without both attributes, the code block displays plain monospace text with no 
syntax coloring.

```html rh-code-block
<rh-code-block highlighting="client"
               language="html">
  <script type="text/html">
<p>This content is highlighted as HTML by client side highlighting.</p>
  </script>
</rh-code-block>
```

### Copy Button

Add the value `copy` to the `actions` attribute, and a helpful copy button will
appear next to the code content. You may listen for the `copy` event and modify
its `content` property to change the text copied to the clipboard. For example,
to remove a shell prompt (`$ `) from the copied text, use this listener function:

```js rh-code-block
import {RhCodeBlockCopyEvent} from '@rhds/elements/rh-code-block/rh-code-block.js';

document.body.addEventListener('copy', function(event) {
  if (event instanceof RhCodeBlockCopyEvent) {
    // remove prompt and surrounding whitespace from the start of the string
    event.content = event.content.replace(/^\s*\$|#\s*/, '');
  }
});
```

[mime]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript
[zwj]: https://www.wikiwand.com/en/Zero-width_joiner

