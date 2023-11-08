---
layout: layout-basic.njk
title: Assistive Technologies
tags:
  - accessibility
---

{%- for assistiveTechnologies in collections['assistive-technologies'] -%}

<section>
  <h2>
    {{ assistiveTechnologies.data.title }}
  </h2>

  {{ assistiveTechnologies.content | safe }}
</section>

{%- endfor -%}