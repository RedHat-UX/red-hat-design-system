---
layout: layout-basic.njk
title: Content
tags:
  - accessibility
---

{%- for content in collections.content -%}

<section>
  <h2>
    {{ content.data.title }}
  </h2>

  {{ content.content | safe }}
</section>

{%- endfor -%}