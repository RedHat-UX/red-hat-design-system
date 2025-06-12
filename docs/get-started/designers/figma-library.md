---
layout: layouts/pages/has-toc.njk
title: Figma library
heading: Designers
permalink: /get-started/designers/figma-library.html
tags:
  - designers
subnav:
  collection: sortedDesigners
  order: 10
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

{#
  the .page-figma-library rule allows for spacing of "sections" while only using
  headers which are converted to uxdot-copy-permalink
  TODO: determine if this is how we want to do this
#}

<style data-helmet>
  .page-figma-library .container {
    uxdot-copy-permalink:not(:first-of-type),
    uxdot-feedback h2 {
      margin-block-start: var(--rh-space-5xl, 80px);
    }

    uxdot-copy-permalink:not(:first-of-type) + uxdot-copy-permalink {
      margin-block-start: var(--rh-space-2xl, 32px);
    }
  }

  :is(rh-alert) {
    margin-block: var(--rh-space-2xl, 32px);
  }
</style>

## Access Figma

You need a Figma license to access our libraries. When you are granted a
license, use your Red Hat e-mail address to log in to Figma via SSO
authentication. When you are logged in, you should be able to access our
libraries and add them to all of your
[drafts](https://help.figma.com/hc/en-us/articles/360038743434-Manage-libraries-for-your-drafts)
or [individual
files](https://help.figma.com/hc/en-us/articles/1500008731201-Manage-libraries-in-design-files).

<uxdot-example color-palette="lightest" width-adjustment="60%">
  <img alt="Figma's Libraries modal showing the Red Hat Design System library is added"
       src="access-figma-libraries.avif">
</uxdot-example>

### Agency access

If you work with an agency and do not have a Red Hat e-mail address, e-mail
[design-system@redhat.com](mailto:design-system@redhat.com) and we will invite
you to view our libraries.

## Use libraries

Our libraries are built and maintained in Figma, our primary design tool. By
using our libraries, you will automatically receive notifications as we make
updates to our foundational styles, elements, and patterns (as long as you do
not detach them). This ensures that your designs are current and representative
of the latest design system release.

<rh-alert state="warning" variant="inline">
  <h3 slot="header">Warning</h3>
  <p>We no longer support Adobe XD. You need to migrate to Figma in order to access and use our most up-to-date libraries. Do not continue to use Adobe XD for any kind of design work. If you need assistance migrating XD files to Figma, e-mail <a href="mailto:design-system@redhat.com">design-system@redhat.com</a>.</p>
</rh-alert>

### Core and subsystem libraries

The RHDS library is our core library that includes our foundational styles,
elements, and patterns needed to create digital experiences. We also offer
access to subsystem libraries that include project- or team- specific patterns
that pull from the RHDS library.

<rh-table>

| Library name             | Use case                                                                               |
| ------------------------ | -------------------------------------------------------------------------------------- |
| RHDS                     | Our core library for creating Red Hat digital experiences                              |
| [PatternFly][patternfly] | A library for creating application interfaces                                          |
| Tier 1 Events            | A library for tier 1 events, like Summit and AnsibleFest                               |
| Brand media              | A library for Red Hat original media like podcasts and video series                    |
| Page builder             | A library with a boilerplate template and components specific to Drupal's page builder |

</rh-table>

## Work in Figma

### Brand assets

If your project requires brand assets, the [Brand standards][brandstandards]
website has links to assets including icons, fonts, photography, etc. Icons will
be accessible via a subsystem Figma library very soon.

### Inserting elements and patterns

To use an element or pattern in your design, select the **Assets** tab. Find
your desired asset and drag it onto the canvas or frame. You can also preview an
asset by selecting it. When you are satisfied with the preview, select the
**Insert instance** button and the asset will appear on the canvas or frame. If
you have questions about how to use an element or pattern correctly, review the
documentation or connect with us on Slack.

<uxdot-example color-palette="lightest" width-adjustment="40%">
  <img alt="Figma's asset preview dialog box for a card component with an 'Insert instance' button"
       src="figma-inserting-elements-patterns.avif">
</uxdot-example>

### Properties

Properties are changeable aspects of an element or pattern and you can see them
in the right sidebar when the asset is selected. Properties change the
appearance of an element or pattern so they can be used for different use cases.
Some examples of properties include state, theme, variant, etc.

<uxdot-example color-palette="lightest">
  <img alt="Diagram showing a blue primary button being changed to a destroy button with Figma's properties selector",
       src="figma-properties.avif">
</uxdot-example>

### Responsive resize

Most elements and patterns can be resized to fit different viewport sizes. You
can change the height or width of an asset by dragging an edge or corner.

<uxdot-example color-palette="lightest">
  <img alt="Screenshot of a progress steps element being resized by dragging the bottom right corner"
       src="figma-responsive-resize-drag.avif">
</uxdot-example>

You can also use [Constraints][constraints] to tell Figma how layers should
respond when their frames are resized.

<uxdot-example color-palette="lightest">
  <img alt="Screenshot of a selected progress steps element next to Figma's constraints settings"
       src="figma-responsive-resize-constraints.avif">
</uxdot-example>

### Instance swap

To speed up your design process, you can swap elements or patterns instead of
dragging and dropping over and over again. Use the **Instance** menu to swap one
element for another from any enabled library. Changing a property will not
replace an element, but instance swapping will.

<uxdot-example color-palette="lightest">
  <img alt="Diagram of a primary CTA being changed to a secondary CTA via the instance swap panel"
       src="figma-instance-swap.avif">
</uxdot-example>

## Best practices

### Detaching an instance

Currently, you **cannot** add new items to an element or pattern instance that
you pull from a library. You need to detach it if you want to add new assets,
more slots, etc. If you believe that an element or pattern in any library needs
more slots for new items, [create an issue][createanissue] and we will try and
prioritize building them in.

<rh-alert state="warning" variant="inline">
  <h3 slot="header">Warning</h3>
  <p>Detached instances will not receive style or other updates from any of the libraries if that element or pattern is updated.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="90%">
  <img alt="Comparison of a linked and a detached accordion with their layers panel below"
       src="best-practices-detach-instance.avif">
</uxdot-example>

<uxdot-feedback>
  <h2>Developers</h2>
  <p>To get started using our design system as a developer, go to the <a href="get-started/developers">Developers</a> page.</p>
</uxdot-feedback>

[brandstandards]: https://www.redhat.com/en/about/brand/standards
[createanissue]: https://github.com/RedHat-UX/red-hat-design-system/issues/new/choose
[constraints]: https://help.figma.com/hc/en-us/articles/360039957734-Apply-constraints-to-define-how-layers-resize
[patternfly]: https://www.patternfly.org/
