---
layout: layout-basic.njk
title: Q/A Testing
tags:
  - accessibility
---

{%- for assistiveTechnologies in collections['q-a-testing'] -%}

<section>
  <h2>
    {{ assistiveTechnologies.data.title }}
  </h2>

  {{ assistiveTechnologies.content | safe }}
</section>

{%- endfor -%}