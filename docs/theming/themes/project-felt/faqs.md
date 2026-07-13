---
layout: layouts/pages/has-toc.njk
title: FAQs
heading: Project Felt
permalink: /theming/themes/project-felt/faqs/index.html
order: 30
tags:
  - projectFelt
subnav:
  collection: sortedProjectFelt
  order: 30
---
<script type="module" data-helmet>
  import '@rhds/elements/rh-accordion/rh-accordion.js';
</script>

## Frequently asked questions

<rh-accordion>
  <h3>
    <rh-accordion-header expanded>
      How can I upgrade custom experiences?
    </rh-accordion-header>
  </h3>
  <rh-accordion-panel expanded>

The Project Felt theme is implemented as an additional CSS layer that sits on top of base RHDS styles. This means that while core RHDS components will update via style sheet, any custom components or experiences built on top of the base RHDS styles may encounter styling conflicts.

Engineers and designers will be responsible for:

- **Test custom components:** Thoroughly test all customized UI elements and workflows with the Project Felt theme enabled.
- **Resolve conflicts:** Manually resolve any CSS conflicts where the theme's new styles (e.g., updated colors, border radii, glass effect, etc.) override or clash with existing custom component styling.

  </rh-accordion-panel>
</rh-accordion>

<uxdot-feedback>
  <h2>Other available themes</h2>
  <p>If the Project Felt theme does not fit your user needs right now,
     <a href="/elements/">view all RHDS elements</a> with default styles.</p>
</uxdot-feedback>
