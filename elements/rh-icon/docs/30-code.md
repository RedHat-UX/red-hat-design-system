{% renderInstall lightdomcss=true %}{% endrenderInstall %}

## Usage

<rh-code-block>
<script type="text/html"><rh-icon icon="alert"></rh-icon></script>
</rh-code-block>

### Loading

Icons load lazily by default, meaning that the browser will not attempt to fetch and render the icon until it scrolls into view. You can change this with the loading attribute, which has three values:

1. `lazy` (the default): load icons when they scroll into view
2. `idle`: load each icon on the page as soon as the browser enters an idle state Or, on less-capable browsers, at the next frame
3. `eager`: each icon will begin to load and render the moment it connects to the DOM.

You might choose to enable eager rendering for "above-the-fold" content, but keep lazy loading for the rest of the page.

<rh-code-block>
<script type="text/html"><rh-icon icon="alert" loading="eager"></rh-icon></script>
</rh-code-block>

{% renderCodeDocs hideDescription=true %}{% endrenderCodeDocs %}

