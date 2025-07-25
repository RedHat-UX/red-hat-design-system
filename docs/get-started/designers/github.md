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
  the .page-github-project rule allows for spacing of "sections" while only using
  headers which are converted to uxdot-copy-permalink
  TODO: determine if this is how we want to do this
#}

<style data-helmet>
  .page-github-project .container {
    uxdot-copy-permalink:not(:first-of-type),
    uxdot-feedback h2 {
      margin-block-start: var(--rh-space-5xl, 80px);
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
       src="get-familiar-with-github.avif">
</uxdot-example>

## Roadmap

You can learn about our current release or future plans by going to the
[Roadmap][roadmap] page. If you need something created sooner rather than later,
[create an issue][createanissue], or e-mail
[design-system@redhat.com][designsystemredhatcom], and we will discuss the
priority and timeline.

<uxdot-feedback>
  <h2>Developers</h2>
  <p>To get started using our design system as a developer, go to the <a href="get-started/developers">Developers</a> page.</p>
</uxdot-feedback>

[createanissue]: https://github.com/RedHat-UX/red-hat-design-system/issues/new/choose
[designsystemredhatcom]: mailto:design-system@redhat.com
[discussion]: https://github.com/RedHat-UX/red-hat-design-system/discussions
[githubrepo]: https://github.com/RedHat-UX/red-hat-design-system
[githubwiki]: https://github.com/RedHat-UX/red-hat-design-system/wiki
[issue]: https://github.com/RedHat-UX/red-hat-design-system/issues
[pullrequests]: https://github.com/RedHat-UX/red-hat-design-system/pulls
[roadmap]: https://ux.redhat.com/about/roadmap/
