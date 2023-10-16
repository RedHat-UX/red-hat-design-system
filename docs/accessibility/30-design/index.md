---
layout: layout-basic.njk
title: Design
tags:
  - accessibility
---

{%- for design in collections.design -%}

<section>
  <h2>
    {{ design.data.title }}
  </h2>

  {{ design.content | safe }}
</section>

{%- endfor -%}