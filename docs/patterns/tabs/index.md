---
title: Tabs
layout: layouts/pages/basic.njk
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

<rh-alert state="warning">

Use this pattern sparingly. If your tabs serve only as page navigation,
use the [Subnav](/elements/subnavigation) element instead.

</rh-alert>

{% include './patterns/link-to-tab.html' %}

[element]: /elements/tabs
[css-props]: /elements/tabs/code/#css-custom-properties

