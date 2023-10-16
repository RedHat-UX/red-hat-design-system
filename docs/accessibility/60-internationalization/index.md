---
layout: layout-basic.njk
title: Internationalization
tags:
  - accessibility
---

{%- for internationalization in collections.internationalization -%}

<section>
  <h2>
    {{ internationalization.data.title }}
  </h2>

  {{ internationalization.content | safe }}
</section>

{%- endfor -%}