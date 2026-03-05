## Overview

Read time displays an estimated reading time for a body of content. It helps
readers gauge how long an article or page will take to read, improving content
discoverability and time management.

The component supports two modes of operation:

- **Container mode**: Automatically counts words (and optionally images) from a
  target DOM element.
- **Property mode**: Accepts a `word-count` and optional `image-count` directly
  via attributes.

## Example

### Container mode

```html
<rh-readtime selector="#my-article">%t min read</rh-readtime>

<article id="my-article">
  <p>Your article content here...</p>
</article>
```

### Property mode

```html
<rh-readtime word-count="1200" image-count="3">%t min read</rh-readtime>
```
