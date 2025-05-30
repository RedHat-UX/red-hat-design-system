---
layout: layouts/pages/has-toc.njk
title: Design/code status
---

<link data-helmet rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">

<script data-helmet type="module">
  import '@rhds/elements/rh-tag/rh-tag.js';
  import '@rhds/elements/rh-table/rh-table.js';
  import '@uxdot/elements/uxdot-repo-status-table.js';
</script>

<style>
  rh-tag {
    text-transform: capitalize;
  }
</style>

<section aria-labelledby="overview">

## Overview

A detailed synopsis of our Web Components and their implementation status.

  <rh-table>

| Sample tag                                                                           | Meaning                                       |
| ------------------------------------------------------------------------------------ | --------------------------------------------- |
| <rh-tag variant="filled" color="purple" icon="notification-fill">Planned</rh-tag>    | Ready to be worked on or ready to be released |
| <rh-tag variant="outline" color="green" icon="harvey-ball-50">In progress</rh-tag>   | In the design or development process          |
| <rh-tag variant="filled" color="green" icon="check-circle-fill">Ready</rh-tag>       | Ready to use and approved by all team members |
| <rh-tag variant="filled" color="orange" icon="close-circle-fill">Deprecated</rh-tag> | No longer supported by RHDS                   |
| <rh-tag variant="outline" color="gray" icon="ban">N/A</rh-tag>                       | Not planned, not available, or does not apply |

  </rh-table>
</section>

<section aria-labelledby="web-component-status">

## Web component status

  <uxdot-repo-status-table>
  </uxdot-repo-status-table>

</section>

<uxdot-feedback>
  <h2>Release notes</h2>
  <p>To see what foundations, tokens, elements, or patterns have been released recently, visit <a href="/release-notes/">this page</a>.</p>
</uxdot-feedback>
