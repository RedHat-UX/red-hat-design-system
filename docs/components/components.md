---
layout: layout-basic.njk
tags: 
  - api
permalink: /components/{{ element.slug }}/api/index.html
package: {{ element.package }}
description: {{ element.description }}
pagination:
  data: elements
  size: 1
  alias: element
---
{% if element.docsTemplatePath %}
{%- renderFile element.docsTemplatePath, element -%}
{% endif %}

