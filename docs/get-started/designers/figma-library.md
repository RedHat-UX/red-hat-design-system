---
layout: layouts/pages/has-toc.njk
title: Figma library
heading: Designers
permalink: /get-started/designers/figma-library.html
tags:
  - designers
subnav:
  collection: sortedDesigners
  order: 20
---

<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css"
      data-helmet>

<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-example.js';
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-accordion/rh-accordion.js';
  import '@rhds/elements/rh-table/rh-table.js';
</script>

<style data-helmet>
  rh-table a {
    text-decoration: underline dashed 1px;
  }
</style>


## Accessing our Figma library

<uxdot-example color-palette="lightest" width-adjustment="60%">
  <img alt="Figma's Libraries modal showing the Red Hat Design System library is added"
       src="access-figma-libraries.avif">
</uxdot-example>

### Access for agencies

If you work for an agency, but do not have a `redhat.com` email address, 
[email us](mailto:design-system@redhat.com).

### Accessing other libraries

There are other Figma libraries available to use. The process of 
enabling them is the same as above.

<rh-table>

  | Library name             | Use case                                                                             |
  | ------------------------ | ------------------------------------------------------------------------------------ |
  | Red Hat Design System    | Use this library if you are creating digital experiences for Red Hat web properties. |
  | Red Hat brand library    | Use this library if you need access to Red Hat icons and logos.                      |
  | [PatternFly][patternfly] | Use this library if you are creating product user interfaces.                        |

</rh-table>

### Subsystems

Subsystems are small Figma libraries that include only patterns. They are 
purpose-built and tailored to support specific projects or teams.

[Contact us](/support/) if you think you need a new subsystem created.

## Detaching and library updates

Be careful about detaching components and patterns because you will 
**not** receive notifications about updates when the main library is 
published. They are technically out of date as soon as you detach them.

If you think any part of a component or pattern needs something added 
or edited, create a 
[GitHub discussion](https://github.com/orgs/RedHat-UX/discussions/new/choose).

<uxdot-feedback>
  <h2>Developers</h2>
  <p>To get started using our design system as a developer, go to the <a href="get-started/developers">Developers</a> page.</p>
</uxdot-feedback>

[patternfly]: https://www.patternfly.org/