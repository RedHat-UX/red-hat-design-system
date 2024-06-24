---
layout: layouts/pages/basic.njk
title: Usage
heading: Developers
tags:
  - developers
permalink: /get-started/developers/usage/index.html
subnav:
  collection: sortedDevelopers
  order: 20
importElements: 
  - rh-code-block
---

## Usage

Now that you've installed the Red Hat Design System, here's more information about how to use the web components.


### Using react wrappers

React wrappers make it possible to use web components within React JSX files. Follow the steps below to learn how.


#### 1. Initial setup

We'll bootstrap our React app using <a href="https://vitejs.dev/guide/#scaffolding-your-first-vite-project">Vite</a>. It's possible to use other tools for this, but that is out of the scope of this tutorial.

<rh-code-block>
  <script type="text/sample-javascript">
  npm create vite@latest
  </script>
</rh-code-block>

This command will ask you to provide the project name, framework, and variant.


#### 2. Install the `@lit/react` library

Use the following command:

<rh-code-block>
  <script type="text/sample-javascript">
  npm install @lit-labs/react
  </script>
</rh-code-block>


#### 3. Import elements and patterns

After installing the `@lit/react` library, you can import elements and patterns 
to your file. Below is an example of importing `<rh-button>` and `<rh-card>`, and
managing app state between them using react.

<rh-code-block>
  <script type="text/sample-javascript">
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
  </script>
</rh-code-block>


### Using RHDS elements with Vue

To get web components to work with Vue, it’s pretty easy and straightforward. Follow the steps below to use web components in a Vue app.


#### 1. Initial setup

Add these two lines at the top of the `main.js` file in the `/src/` directory.

<rh-code-block>
  <script type="text/sample-javascript">
  import Vue from "vue";
  import App from "./App.vue";
  </script>
</rh-code-block>


#### 2. Import elements and patterns

Add the import statements to the top of the `<script>` tag in the file in which you're using web components. Below is an example of importing `<rh-card>` to a file called `HelloWorld.vue`.

<rh-code-block>
  <script type="text/sample-javascript">
  <script type="importmap">
    import "@rhds/elements/rh-card/rh-card.js";
    export default {
  name: "HelloWorld",
  props: {
  msg: String
  }
    };
  <</script><script type="text/sample-javascript">/script>
  </script>
</rh-code-block>


## Other resources

- [Red Hat Design System Wiki](https://github.com/RedHat-UX/red-hat-design-system/wiki)
- [Red Hat Brand Standard](https://www.redhat.com/en/about/brand/standards)

<uxdot-feedback>
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a href="get-started/designers">Designers</a> page.</p>
</uxdot-feedback>
