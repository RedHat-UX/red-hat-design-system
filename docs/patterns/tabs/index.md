---
title: Tabs
layout: layout-basic.njk
tags:
  - pattern
---

<script type="module">
  import '@rhds/elements/rh-tabs/rh-tabs.js';
  import '@rhds/elements/rh-button/rh-button.js';
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>


## Link to tab

Use to activate a particular tab when the page's URL hash refers to an element
within the tab panel, or to the tab itself.

{% alert state="warning" %}
Use this pattern sparingly. If your tabs serve only as page navigation,
use the [Subnav](/elements/subnavigation) element instead.
{% endalert %}

{% include './patterns/link-to-tab.html' %}

<nav id="simulate-nav">
  <ul>
    <a href="#north">North tab</a>
    <a href="#south">South tab</a>
    <a href="#east">East tab</a>
    <a href="#west">West tab</a>
    <a href="#best">West tab content element</a>
  </ul>
</nav>

[element]: /elements/tabs
[css-props]: /elements/tabs/code/#css-custom-properties

