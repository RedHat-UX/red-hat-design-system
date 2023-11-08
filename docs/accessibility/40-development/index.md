---
layout: layout-basic.njk
title: Development
tags:
  - accessibility
---

{%- for development in collections.development -%}

<section>
  <h2>
    {{ development.data.title }}
  </h2>

  {{ development.content | safe }}
</section>

{%- endfor -%}