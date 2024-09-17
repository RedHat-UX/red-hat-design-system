---
layout: layouts/pages/basic.njk
title: Installation
heading: Developers
tags:
  - developers
permalink: /get-started/developers/installation/index.html
subnav:
  collection: sortedDevelopers
  order: 10
---

## How to install

There are three ways you can install the Red Hat Design System's web components: CDN, NPM, or JSPM. Each element's "Code" page includes the same installation information with code snippets that are specific to that element.


### Red Hat CDN

<rh-alert state="warning">
  <h4 slot="header">CDN Prerelease</h4>
  <p>We are currently working on our CDN, which will be soon moving into beta. This will be the preferred method of installation in the near future. If you are a Red Hat associate and have questions or comments about the CDN or installation process please connect with us on Slack.</p>
</rh-alert>

The recommended way to load RHDS is via the Red Hat Digital Experience CDN, and using an [import map][importmap].

If you have full control over the page you are using, add an import map to the `<head>`, pointing to the CDN, or update any existing import map. If you are not responsible for the page's `<head>`, request that the page owner makes the change on your behalf. 

<rh-code-block>
  <script type="text/html"><script type="importmap">
    {
      "imports": {
        "@rhds/elements/": "https://www.redhatstatic.com/dx/v1-alpha/@rhds/elements@1.1.0/elements/",
        "@patternfly/elements/": "https://www.redhatstatic.com/dx/v1-alpha/@patternfly/elements@2.2.2/"
      }
    }
  <</script><script type="text/html">/script></script>
</rh-code-block>

Once the import map is established, you can load the element with the following module, containing a [bare module specifier][barespec]. The example below shows how you'd load in <`rh-button>`.

<rh-code-block>
  <script type="text/html"><script type="module">
    import '@rhds/elements/rh-button/rh-button.js';
  <</script><script type="text/html">/script></script>
</rh-code-block>

Note that modules may be placed in the `<head>`. Since they are deferred by default, they will not block rendering.


### NPM

Install RHDS using your team's preferred NPM package manager.

<rh-code-block>
  <script type="text/bash">npm install @rhds/elements</script>
</rh-code-block>

Once that's been accomplished, you will need to use a bundler to resolve the bare module specifiers and optionally optimize the package for your site's particular use case and needs. Comprehensive guides to bundling are beyond the scope of this page; read more about bundlers on their websites:

- [Rollup][rollup]
- [esbuild][esbuild]
- [Parcel][parcel]
- [Webpack][webpack]


### JSPM

<rh-alert state="warning">
  <h4 slot="header">Public CDNs</h4>
  <p>JSPM and other public CDNs should not be used on corporate domains. Use them for <strong>development purposes only</strong>!</p>
</rh-alert>

Add an [import map][importmap] to the `<head>`, pointing to the CDN, or update any existing import map.

<rh-code-block>
  <script type="text/html"><script type="importmap">
    {
    "imports": {
      "@rhds/elements/": "https://jspm.dev/@rhds/elements/",
      "@patternfly/elements/": "https://jspm.dev/@patternfly/elements/"
      }
    }
  <</script><script type="text/html">/script></script>
</rh-code-block>

Once the import map is established, you can load the element with the following module, containing a [bare module specifier][barespec]. The example below shows how you'd load in <`rh-button>`.

<rh-code-block>
  <script type="text/html"><script type="module">
    import '@rhds/elements/rh-button/rh-button.js';
  <</script><script type="text/html">/script>
  </script>
</rh-code-block>

Note that Modules may be placed in the `<head>`. Since they are deferred by default, they will not block rendering.

### Lightdom CSS

Some elements require you to load "Lightdom CSS" stylesheets. This can also help to reduce [Cumulative Layout Shift (CLS)][cls] experience before the element has fully initialized.

```html
<link rel="stylesheet"
      href="https://www.redhatstatic.com/dx/v1/@rhds/elements@1.4.5/rh-footer/rh-footer-lightdom.css">
```

<uxdot-feedback>
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a href="get-started/designers">Designers</a> page.</p>
</uxdot-feedback>

[rollup]: https://rollupjs.org/
[esbuild]: https://esbuild.github.io/
[parcel]: https://parceljs.org/
[webpack]: https://webpack.js.org/
[importmap]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap
[barespec]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[cls]: https://web.dev/cls/
