---
layout: layouts/pages/basic.njk
title: Usage
heading: Developers
permalink: /get-started/developers/usage/index.html
tags:
  - developers
subnav:
  collection: sortedDevelopers
  order: 20
---

<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-example.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  import '@rhds/elements/rh-tooltip/rh-tooltip.js';
</script>

## Usage

Now that you've installed the Red Hat Design System, here's more information 
about how to use the web components.

### Using react wrappers

React wrappers make it possible to use web components within React JSX files. 
Follow the steps below to learn how.

#### 1. Initial setup

We'll bootstrap our React app using [Vite][vite]. It's possible to use other 
tools for this, but that is out of the scope of this tutorial.

```sh rhcodeblock
npm create vite@latest
```

This command will ask you to provide the project name, framework, and variant.

#### 2. Install the `@lit/react` library

Use the following command:

```sh rhcodeblock
npm install @lit-labs/react
```

#### 3. Import elements and patterns

After installing the `@lit/react` library, you can import elements and patterns 
to your file. Below is an example of importing `<rh-button>` and `<rh-card>`, and
managing app state between them using react.

```js rhcodeblock
import { useState } from 'react';
import { Button } from '@rhds/elements/react/rh-button/rh-button.js';
import { Badge } from '@rhds/elements/react/rh-badge/rh-badge.js';
import { Card } from '@rhds/elements/react/rh-card/rh-card.js';
export function App() {
  const [clicks, setClicks] = useState(0);
  return (
    <Card>
      <h2 slot="header">Click Me</h2>
      <Badge slot="header" number={clicks}></Badge>
      <Button slot="footer" onClick={() => setClicks(clicks + 1)}>
        Increment!
      </Button>
    </Card>
  )
}
```

### Using RHDS elements with Vue

To get web components to work with Vue, it’s pretty easy and straightforward. 
Follow the steps below to use web components in a Vue app.

#### 1. Initial setup

Add these two lines at the top of the `main.js` file in the `/src/` directory.

```js rhcodeblock
import Vue from "vue";
import App from "./App.vue";
```

#### 2. Import elements and patterns

Add the import statements to the top of the `<script>` tag in the file in which 
you're using web components. Below is an example of importing `<rh-card>` to a 
file called `HelloWorld.vue`.

```js rhcodeblock
import "@rhds/elements/rh-card/rh-card.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
```

## Other resources

- [Red Hat Design System Wiki][redhatdesignsystemwiki]
- [Red Hat Brand Standards][redhatbrandstandards]

<uxdot-feedback>
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a href="get-started/designers">Designers</a> page.</p>
</uxdot-feedback>

[vite]: https://vitejs.dev/guide/#scaffolding-your-first-vite-project
[redhatdesignsystemwiki]: https://github.com/RedHat-UX/red-hat-design-system/wiki
[redhatbrandstandards]: https://www.redhat.com/en/about/brand/standards
