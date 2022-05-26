---
layout: layout-basic.njk
title: Statistic
tags:
  - component
includeComponent:
  - rh-stat
  - pfe-band
---
{% section headline="Overview" -%}

Stat display information in a format that will allow the user to include an icon, title, statistic, and description.

{%- endsection %}

{% section headline="Sample component" -%}

Sample Not Available

{%- endsection %}

{% section headline="Demo" -%}

{% demo headline="Standard Stat" %}
<rh-stat></rh-stat>
{% enddemo %}

{% demo headline="Large Stat" %}
<rh-stat size="large"></rh-stat>
{% enddemo %}

{% demo headline="Icon Change Stat" %}
<rh-stat icon="rh-code"></rh-stat>
{% enddemo %}

{% demo headline="Overwriting all slots in Stat" %}
<rh-stat titlePlacement="below">
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
    <span slot="title">Sample Title</span>
    <span slot="description">Stat body that includes two lines and a footnote.</span>
    <span slot="statistic">77%</span>
</rh-stat>
{% enddemo %}

{%- endsection %}

{% section headline="Demo Dark Mode" -%}

{% demo headline="Standard Stat" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat></rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Large Stat" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat size="large"></rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Icon Change Stat" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat icon="rh-code"></rh-stat>
</pfe-band> 
{% enddemo %}

{% demo headline="Overwriting all slots in Stat" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat titlePlacement="below">
        <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
        <span slot="title">Sample Title</span>
        <span slot="description">Stat body that includes two lines and a footnote.</span>
        <span slot="statistic">77%</span>
    </rh-stat>
</pfe-band>
{% enddemo %}


{%- endsection %}
<div class="multi-column--min-300-wide">

{% section headline="Feedback" -%}

To give feedback about anything on this page, [contact us](mailto:digital-design-system@redhat.com).

{%- endsection %}

{% section headline="Foundations" -%}

To learn how to use our other components in your designs, visit the [Components](/components/) section.

{%- endsection %}

</div>