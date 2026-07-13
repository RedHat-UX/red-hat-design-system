---
layout: layouts/pages/has-toc.njk
title: Usage
heading: Project Felt
permalink: /theming/themes/project-felt/usage/index.html
order: 15
tags:
  - projectFelt
subnav:
  collection: sortedProjectFelt
  order: 15
---

<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-example.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
</script>

## Designer usage

### Enablement in Figma

In the RHDS Figma library, we added a property called "Theme". It gives users the ability to toggle between base RHDS styles and Project Felt theme styles. Additionally, the semantic tokens for this new theme will be available in a separate "Semantic tokens - Project Felt theme" collection.

<uxdot-example no-border>
  <img alt="Screenshot of Figma interface, showing the selection of Project Felt as a theme on the Button component"
       src="../theming-felt-figma-enablement.png"
       width="500">
</uxdot-example>

## Developer usage

### 1. Include the stylesheet

There are a couple options for linking to the Project Felt preview theme:

- Link through the Red Hat CDN *(recommended)*
- Include in your build process

#### Link through the Red Hat CDN

For Red Hat websites and applications, we recommend linking the Project Felt theme preview stylesheet through the [Red Hat Digital Experience CDN][cdn].

```html rhcodeblock {compact=true}
<link href="https://www.redhatstatic.com/dssf-001/gh/rhds/themes/project-felt/preview/felt-theme-preview.css" rel="stylesheet">
```

#### Include in your build process

If you'd prefer to include the theme preview stylesheet in your build process, you can request the CSS from the [CDN URL][cdncss]:

```css rhcodeblock {compact=true}
https://www.redhatstatic.com/dssf-001/gh/rhds/themes/project-felt/preview/felt-theme-preview.css
```

### 2. Add theme preview class

After linking the Project Felt preview theme CSS file, you must apply the `felt-preview` class to a parent element, like the `body` or other element, where you want to scope the theme. All supported RHDS elements within that scope will inherit the theme styles.

```html rhcodeblock {compact=true}
<body class="felt-preview">
  <!-- Felt preview theme applied to child elements -->
</body>
```

[cdn]: https://www.redhatstatic.com/dssf-001
[cdncss]: https://www.redhatstatic.com/dssf-001/gh/rhds/themes/project-felt/preview/felt-theme-preview.css
