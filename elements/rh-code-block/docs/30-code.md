{% renderInstall %}{% endrenderInstall %}

{% renderLightDom %}{% endrenderLightDom %}

## Usage

The content of code-block snippets must be contained within a non-executable 
`<script>` tag. By "non-executable", we mean that the script element must have
a `type` attribute which is not `module`, `importmap` `javascript`, or any of
the [executable javascript mimetypes][mime]. With the exception of javascript,
use the correct mime type for your content, e.g. `text/html` for HTML content.

```html
<rh-code-block>
  <script type="text/html">
<!DOCTYPE html>
<title>Title</title>
<style>body {width: 500px;}</style>
<body>
  <p checked class="title" id="title">Title</p>
    <!-- here goes the rest of the page -->
</body>
  </script>
</rh-code-block>
```

<rh-alert state="warning">
 <h3 slot="header">Warning</h3>
  <p>When slotting HTML content into the code-block, if that HTML content contains a <code>&lt;/script&gt;</code> end tag, you must escape it.</p>
</rh-alert>

One approach to escaping script tags that is to close the containing `<script 
type="text/html">` within the sample's closing script tag, then immediately open 
a new sample script tag containing the rest of the snippet. Another method is to 
insert a [zero-width-joiner][zwj] (or some other unusual unicode character) in 
the closing script tag, and use javascript to remove it before copying the 
content to the clipboard. Each method has benefits and drawbacks.

```html
<rh-code-block>
  <script type="text/html">
<p>Script tags in HTML must be escaped</p>
<script>console.log('Success!');<</script><script type="text/html">/script>
  </script>
</rh-code-block>
```

To add javascript content, use the `text/sample-javascript` type.

```html
<rh-code-block>
  <script type="text/sample-javascript">
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  </script>
</rh-code-block>
```


{% renderCodeDocs hideDescription=true %}{% endrenderCodeDocs %}

[mime]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript
[zwj]: https://www.wikiwand.com/en/Zero-width_joiner

