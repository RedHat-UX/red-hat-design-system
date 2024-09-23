---
"@rhds/elements": minor
---
`<rh-code-block>`: syntax highlighting via prerendered prismjs code-blocks. Use
the `highlighting="prerendered"` attribute when rendering code blocks using
server side prism, e.g. in a markdown fenced code block.

```html
<rh-code-block highlighting="prerendered">
  <pre class="language-css"><code class="language-css"><span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--rh-color-interactive-primary-default<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span></pre>
</rh-code-block>
```
