---
layout: layout-basic.njk
title: Fundamentals
tags:
  - accessibility
---



{%- for fundamentals in collections.fundamentals -%}

<section>
  <h2>
    {{ fundamentals.data.title }}
  </h2>

  {{ fundamentals.content | safe }}
</section>

{%- endfor -%}