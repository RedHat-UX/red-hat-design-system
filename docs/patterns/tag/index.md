---
title: Overview
heading: Tag
sidenavTitle: Tag
layout: layouts/pages/pattern.njk
order: 119
tags:
  - pattern
  - tagPatterns
subnav:
  collection: tagPatterns
  order: 1
---

<script type="module" data-helmet>
  import '@rhds/elements/rh-tag/rh-tag.js';
  import '@rhds/elements/rh-alert/rh-alert.js';
</script>

## Overview

Tags can be used with other elements to label or categorize content.

<rh-alert state="info">These tag patterns document different design-approved
  uses of the `<rh-tag>` element. Consult the [`<rh-tag>` element documentation][element]
  for more information on how to use the tag element.</rh-alert>

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}

[element]: /elements/tag