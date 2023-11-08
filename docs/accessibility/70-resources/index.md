---
layout: layout-basic.njk
title: Resources
tags:
  - accessibility
---

{%- for resources in collections.resources -%}

<section>
  <h2>
    {{ resources.data.title }}
  </h2>

  {{ resources.content | safe }}
</section>

{%- endfor -%}