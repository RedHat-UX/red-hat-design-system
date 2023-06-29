{% renderInstallation %}{% endrenderInstallation %}

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
<script type="application/javascript">
  function $init() {return true;}
</</script><script type="text/html">script>
<body>
  <p checked class="title" id="title">Title</p>
    <!-- here goes the rest of the page -->
</body>
  </script>
</rh-code-block>
```

{% alert state="warning", title="Warning" %}
When slotting HTML content into the code-block, if that HTML content contains 
a `</script>` end tag, you must escape it. One way to do that is to close the
containing `<script type="text/html">` within the sample's closing script tag,
then immediately open a new sample script tag containing the rest of the snippet.
{% endalert %}

To add javascript content, use the `sample/javascript` type.

{% renderSlots %}{% endrenderSlots %}

{% renderAttributes %}{% endrenderAttributes %}

{% renderMethods %}{% endrenderMethods %}

{% renderEvents %}{% endrenderEvents %}

{% renderCssParts for='rh-code-block', level=3 %}{% endrenderCssParts %}

{% renderCssCustomProperties for='rh-code-block', level=3 %}{% endrenderCssCustomProperties %}

{% renderInstallation %}{% endrenderInstallation %}

[mime]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript
