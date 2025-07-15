---
layout: layouts/pages/has-toc.njk
title: Installation
heading: Developers
tags:
  - developers
permalink: /get-started/developers/installation/index.html
subnav:
  collection: sortedDevelopers
  order: 10
---

<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-example.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  import '@rhds/elements/rh-alert/rh-alert.js';
</script>

<rh-alert state="info">
  <h4 slot="header">Notice</h4>
  <p>Our <a href="#red-hat-cdn">new CDN server</a> will be the preferred method of installation going forward. If you are a Red Hat associate 
  and have questions or comments about the CDN or installation process please <a href="/support/#contact-us">connect with us on Slack</a>.</p>
</rh-alert>

## How to install

There are three ways you can install the Red Hat Design System's Web Components: 
CDN, NPM, or JSPM. Each element's "Code" page includes the same installation 
information with code snippets that are specific to that element.

- [Red Hat CDN](#red-hat-cdn)
- [NPM](#npm)
- [JSPM](#jspm)

## Red Hat CDN

The recommended way to load the Red Hat Design System (RHDS) on Red Hat websites and applications is through the [Red Hat Digital Experience CDN](https://www.redhatstatic.com/dssf-001) using an [import map][importmap]. 

**Note:** Due to current information security standards regarding access to the CDN, the CDN only allows requests from `*.redhat.com` domains. This means for local development an `/etc/hosts` change to forward `localhost` to something like `dev.foo.redhat.com` and navigating to that instead of `localhost` is required. If you need help setting this up for your project please reach out on [Slack](/support/#contact-us).

### Using import maps

- If you have full control over the page you are using, add an import map to the 
`<head>` pointing to the CDN or update any existing import map.
- If you are not responsible for the page's `<head>`, request that the page owner makes the 
change on your behalf.

#### Base import map

Below is the base import map for using <strong>version {{ pkg.version }}</strong> RHDS components.

```html rhcodeblock
<script type="importmap">
  {
    "imports": {
      "@rhds/elements/": "https://www.redhatstatic.com/dssf-001/v2/@rhds/elements@{{ pkg.version }}/elements/"
    },
    "scopes": {
      "https://www.redhatstatic.com/dssf-001/v2/": {
          "@floating-ui/core": "https://www.redhatstatic.com/dssf-001/v2/@floating-ui/core@{{ packageinfo.packages["node_modules/@floating-ui/core"].version }}/dist/floating-ui.core.mjs",
          "@floating-ui/dom": "https://www.redhatstatic.com/dssf-001/v2/@floating-ui/dom@{{ packageinfo.packages["node_modules/@floating-ui/dom"].version }}/dist/floating-ui.dom.mjs",
          "@floating-ui/utils": "https://www.redhatstatic.com/dssf-001/v2/@floating-ui/utils@{{ packageinfo.packages["node_modules/@floating-ui/utils"].version }}/dist/floating-ui.utils.mjs",
          "@floating-ui/utils/dom": "https://www.redhatstatic.com/dssf-001/v2/@floating-ui/utils@{{ packageinfo.packages["node_modules/@floating-ui/utils"].version }}/dist/floating-ui.utils.dom.mjs",
          "@lit/context": "https://www.redhatstatic.com/dssf-001/v2/@lit/context@{{ packageinfo.packages["node_modules/@lit/context"].version }}/development/index.js",
          "@lit/reactive-element": "https://www.redhatstatic.com/dssf-001/v2/@lit/reactive-element@{{ packageinfo.packages["node_modules/@lit/reactive-element"].version }}/reactive-element.js",
          "@lit/reactive-element/decorators/": "https://www.redhatstatic.com/dssf-001/v2/@lit/reactive-element@{{ packageinfo.packages["node_modules/@lit/reactive-element"].version }}/decorators/",
          "@patternfly/pfe-core": "https://www.redhatstatic.com/dssf-001/v2/@patternfly/pfe-core@{{ packageinfo.packages["node_modules/@patternfly/pfe-core"].version }}/core.js",
          "@patternfly/pfe-core/": "https://www.redhatstatic.com/dssf-001/v2/@patternfly/pfe-core@{{ packageinfo.packages["node_modules/@patternfly/pfe-core"].version }}/",
          "@rhds/elements/lib/": "https://www.redhatstatic.com/dssf-001/v2/@rhds/elements@{{ pkg.version }}/lib/",
          "@rhds/icons": "https://www.redhatstatic.com/dssf-001/v2/@rhds/icons@{{ packageinfo.packages["node_modules/@rhds/icons"].version }}/icons.js",
          "@rhds/icons/": "https://www.redhatstatic.com/dssf-001/v2/@rhds/icons@{{ packageinfo.packages["node_modules/@rhds/icons"].version }}/",
          "@rhds/tokens/media.js": "https://www.redhatstatic.com/dssf-001/v2/@rhds/tokens@{{ packageinfo.packages["node_modules/@rhds/tokens"].version }}/js/media.js",
          "@rhds/tokens/": "https://www.redhatstatic.com/dssf-001/v2/@rhds/tokens@{{ packageinfo.packages["node_modules/@rhds/tokens"].version }}/",
          "lit": "https://www.redhatstatic.com/dssf-001/v2/lit@{{ packageinfo.packages["node_modules/lit"].version }}/index.js",
          "lit/": "https://www.redhatstatic.com/dssf-001/v2/lit@{{ packageinfo.packages["node_modules/lit"].version }}/",
          "lit-element/lit-element.js": "https://www.redhatstatic.com/dssf-001/v2/lit-element@{{ packageinfo.packages["node_modules/lit-element"].version }}/lit-element.js",
          "lit-html": "https://www.redhatstatic.com/dssf-001/v2/lit-html@{{ packageinfo.packages["node_modules/lit-html"].version }}/lit-html.js",
          "lit-html/": "https://www.redhatstatic.com/dssf-001/v2/lit-html@{{ packageinfo.packages["node_modules/lit-html"].version }}/",
          "tslib": "https://www.redhatstatic.com/dssf-001/v2/tslib@{{ packageinfo.packages["node_modules/tslib"].version }}/tslib.es6.mjs"
      }
    }
  }
</script>
```

### Loading individual elements

Once the import map is established, you can load individual elements using a [bare module specifier][barespec].

For example, you can load `<rh-button>` using the following:

```html rhcodeblock
<rh-button>Primary</rh-button>

<script type="module">
  import "@rhds/elements/rh-button/rh-button.js";
</script>
```

Note that modules may be placed in the `<head>`. Since they are deferred by 
default, they will not block rendering. Multiple import statements on the same page to the same 
script in this manner are completely safe, and will be deduplicated, so the browser
won't make any additional calls as long as they use the same bare module specifier.

### Still need CDN v1 bundles?

If you'd like to continue to use the bundles available in v1 of our CDN, they are still available on our new server at the following URL:

```html rhcodeblock
https://www.redhatstatic.com/dssf-001/v1-alpha/
```

To migrate, change <code>/dx/v1-alpha/</code> to <code>/dssf-001/v1-alpha/</code> in your current URLs.

## NPM

Install RHDS using your team's preferred NPM package manager.

```sh rhcodeblock
npm install @rhds/elements
```

Once that's been accomplished, you will need to use a bundler to resolve the
bare module specifiers and optionally optimize the package for your site's
particular use case and needs. Comprehensive guides to bundling are beyond the
scope of this page; read more about bundlers on their websites:

- [Rollup][rollup]
- [esbuild][esbuild]
- [Parcel][parcel]
- [Webpack][webpack]


## JSPM

<rh-alert state="warning">
  <h4 slot="header">Public CDNs</h4>
  <p>JSPM and other public CDNs should not be used on corporate domains. Use 
    them for <strong>development purposes only</strong>!</p>
</rh-alert>

Add an [import map][importmap] to the `<head>`, pointing to the CDN, or update
any existing import map.

```html rhcodeblock
<script type="importmap">
  {
    "imports": {
      "@rhds/elements/": "https://jspm.dev/@rhds/elements/",
      "@patternfly/elements/": "https://jspm.dev/@patternfly/elements/"
    }
  }
</script>
```

Once the import map is established, you can load the element with the following
module, containing a [bare module specifier][barespec]. The example below shows
how you'd load in <`rh-button>`.

```html rhcodeblock
<script type="module">
  import "@rhds/elements/rh-button/rh-button.js";
</script>
```

Note that Modules may be placed in the `<head>`. Since they are deferred by
default, they will not block rendering.

## Lightdom CSS

Some elements require you to load "Lightdom CSS" stylesheets, which are necessary
for styling deeply slotted child elements. In some cases, these may also help reduce
some [Cumulative Layout Shift (CLS)][cls] experience before the element has fully
initialized, but are not intended to be used without initializing the element or by
themselves to prevent CLS.

```html rhcodeblock
<link rel="stylesheet"
      href="https://www.redhatstatic.com/dssf-001/v2/@rhds/elements@{{ pkg.version }}/rh-footer/rh-footer-lightdom.css">
```

<rh-alert>Note: a future version of RHDS will remove the requirement to manually
load these stylesheets</rh-alert>

## Lightdom CSS shims

Some elements have provided an _optional_ `-lightdom-shim.css` file to aid in limiting
[CLS][cls] as much as possible, by styling some parts of the element before it has fully
initialized (i.e., `:not(:defined)`). These "shims" are inherently different than the
required "Lightdom CSS" mentioned above, and are only a temporary stop-gap until
[Delcarative Shadow DOM][dsd] is more widely available; at which point the shims will
no longer be needed and will become deprecated.

```html rhcodeblock
<link rel="stylesheet"
      href="https://www.redhatstatic.com/dssf-001/v2/@rhds/elements@{{ pkg.version }}/rh-cta/rh-cta-lightdom-shim.css">
```

<uxdot-feedback>
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a 
    href="/get-started/designers">Designers</a> page.</p>
</uxdot-feedback>

[rollup]: https://rollupjs.org/
[esbuild]: https://esbuild.github.io/
[parcel]: https://parceljs.org/
[webpack]: https://webpack.js.org/
[importmap]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap
[barespec]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[cls]: https://web.dev/cls/
[dsd]: https://web.dev/articles/declarative-shadow-dom
