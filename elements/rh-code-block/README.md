# Code Block

Code block is a wrapper for sample code, featuring syntax highlighting, line numbers, and copy/wrap actions. It enables developers to easily share code snippets with users in an accessible, readable format.

## Installation

If using npm/bundlers:

```bash
npm install @rhds/elements
```

Then once installed, import it to your application:

```js
import '@rhds/elements/rh-code-block/rh-code-block.js';
```

## Usage

### Basic Code Block

Use a `<script>` tag with a non-JavaScript MIME type to provide code samples:

```html
<rh-code-block>
  <script type="text/html">
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <body>
        <h1>Hello World!</h1>
      </body>
    </html>
  </script>
</rh-code-block>
```

### Client-Side Syntax Highlighting

Specify a language for client-side syntax highlighting using Prism.js:

```html
<rh-code-block highlighting="client" language="javascript">
  <script type="text/javascript-sample">
    function greet(name) {
      console.log(`Hello, ${name}!`);
    }
    greet('World');
  </script>
</rh-code-block>
```

### Prerendered Syntax Highlighting

For better performance, prerender syntax highlighting on the server:

```html
<rh-code-block highlighting="prerendered" language="typescript">
  <pre><code class="language-typescript"><span class="token keyword">const</span> greeting<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"Hello!"</span><span class="token punctuation">;</span></code></pre>
</rh-code-block>
```

### Hide Line Numbers

```html
<rh-code-block line-numbers="hidden">
  <script type="text/bash">
    npm install @rhds/elements
  </script>
</rh-code-block>
```

### Custom Actions

Disable copy or wrap buttons:

```html
<rh-code-block actions="wrap">
  <script type="text/css">
    .example {
      color: red;
    }
  </script>
</rh-code-block>
```

### Expandable Code Blocks

Large code blocks automatically collapse with a "Show more" button. Override this behavior:

```html
<!-- Always show full height -->
<rh-code-block full-height>
  <script type="text/python">
    # Your long code here...
  </script>
</rh-code-block>
```

### Lazy Loading

By default, code blocks use lazy loading for better performance. Force immediate rendering:

```html
<rh-code-block load="immediate">
  <script type="text/html">
    <p>Code loads immediately</p>
  </script>
</rh-code-block>
```

### Supported Languages

Code block supports syntax highlighting for many languages including:
- HTML, CSS, JavaScript, TypeScript
- Python, Ruby, Java, C++, Rust
- Bash, YAML, JSON
- And many more via Prism.js

## Performance

Code block uses CSS counters for line numbers and lazy loading with IntersectionObserver for optimal performance. Large collections of code blocks (like documentation pages) will load efficiently with minimal impact on page speed.

## Questions and Feedback

Questions? Comments? Feedback? Need help installing or implementing?
Please [open a discussion thread][qa] here on GitHub. The Design Systems team will help.

[qa]: https://github.com/orgs/RedHat-UX/discussions/categories/q-a

