---
title: Tabs
layout: layouts/pages/basic.njk
tags:
  - pattern
---

<script type="module">
  import '@rhds/elements/rh-tabs/rh-tabs.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  import '@rhds/elements/rh-button/rh-button.js';
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>


## Link to tab

Use to activate a particular tab when the page's URL hash refers to an element
within the tab panel, or to the tab itself.

<rh-alert state="warning">

Use this pattern sparingly. If your tabs serve only as page navigation,
use the [Subnav](/elements/subnavigation) element instead.

</rh-alert>

<nav id="simulate-nav" aria-labelledby="simulate-nav-heading">
  <h3 id="simulate-nav-heading">Navigate to tab</h3>
  <ul>
    <li><a href="#north">North tab</a></li>
    <li><a href="#south">South tab</a></li>
    <li><a href="#east">East tab</a></li>
    <li><a href="#west">West tab</a></li>
    <li><a href="#best">Content inside the West tab</a></li>
  </ul>
</nav>

{% include './patterns/link-to-tab.html' %}

{% set codeblock %}

```html
{% include './patterns/link-to-tab.html' %}
```

{% endset %}

<rh-code-block actions="copy">{{ codeblock | safe }}</rh-code-block>

[element]: /elements/tabs
[css-props]: /elements/tabs/code/#css-custom-properties

