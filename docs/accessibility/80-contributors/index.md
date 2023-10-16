---
layout: layout-basic.njk
title: Contributors
tags:
  - accessibility
---

{%- for contributors in collections.contributors -%}

<section>
  <h2>
    {{ contributors.data.title }}
  </h2>

  {{ contributors.content | safe }}
</section>

{%- endfor -%}