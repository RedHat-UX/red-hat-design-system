---
layout: layouts/pages/has-toc.njk
title: Github project
heading: Designers
permalink: /get-started/designers/github.html
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

{#
  the .page-designers rule allows for spacing of "sections" while only using
  headers which are converted to uxdot-copy-permalink
  TODO: determine if this is how we want to do this
#}

<style data-helmet>
  .page-designers .container {
    uxdot-copy-permalink:not(:first-of-type) {
      margin-block-start: var(--rh-space-5xl, 80px);
    }

    uxdot-copy-permalink:not(:first-of-type) + uxdot-copy-permalink {
      margin-block-start: var(--rh-space-2xl, 32px);
    }

    ul {
      font-size: var(--rh-font-size-body-text-lg, 1.125rem);
      margin-block-end: var(--rh-space-2xl, 32px);
    }
  }

  rh-accordion {
    display: block;
  }

  :is(rh-alert, rh-accordion) {
    margin-block: var(--rh-space-2xl, 32px);
  }

  #learn-about-grid {
    margin-block-start: var(--rh-space-2xl, 32px);
    & h3 {
      font-size: var(--rh-font-size-heading-sm, 1.5rem);
      font-weight: var(--rh-font-weight-heading-medium, 500);
    }
  }
</style>

## Get familiar with GitHub

GitHub is how we maintain the design system. We also use it to track changes,
update the documentation website, store design tokens, and more in our [GitHub
repo][githubrepo]. To contribute to the design system, you will need to
familiarize yourself with creating an [issue][issue] using one of our templates,
creating a [discussion][discussion], and reviewing work in [pull
requests][pullrequests].

The [GitHub Wiki][githubwiki] can help you get started, and you can always chat
with us for additional help.

<uxdot-example variant="full" no-border>
  <img alt="Screenshot of the red-hat-design-system GitHub repo's Code tab"
       src="/assets/get-started/designers/get-familiar-with-github.png">
</uxdot-example>

## Roadmap

You can learn about our current release or future plans by going to the
[Roadmap][roadmap] page. If you need something created sooner rather than later,
[create an issue][createanissue], or e-mail
[design-system@redhat.com][designsystemredhatcom], and we will discuss the
priority and timeline.

[createanissue]: https://github.com/RedHat-UX/red-hat-design-system/issues/new/choose
[designsystemredhatcom]: mailto:design-system@redhat.com
[discussion]: https://github.com/RedHat-UX/red-hat-design-system/discussions
[githubrepo]: https://github.com/RedHat-UX/red-hat-design-system
[githubwiki]: https://github.com/RedHat-UX/red-hat-design-system/wiki
[issue]: https://github.com/RedHat-UX/red-hat-design-system/issues
[pullrequests]: https://github.com/RedHat-UX/red-hat-design-system/pulls
[roadmap]: https://ux.redhat.com/about/roadmap/