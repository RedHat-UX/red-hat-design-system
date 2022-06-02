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

{% demo headline="Default Stat" %}
<rh-stat></rh-stat>
{% enddemo %}

{% demo headline="Large Stat" %}
<rh-stat size="large"></rh-stat>
{% enddemo %}

{% demo headline="Large Stat with Icon" %}
<rh-stat size="large" icon="rh-atom"></rh-stat>
{% enddemo %}

{% demo headline="Stat with title (no icon)" %}
<rh-stat>
    <span slot="title">Sample Title</span>
</rh-stat>
{% enddemo %}

{% demo headline="Stat with icon (no title)" %}
<rh-stat icon="rh-code">
</rh-stat>
{% enddemo %}

{% demo headline="Stat with all slots used" %}
<rh-stat titlePlacement="below">
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
    <span slot="title">Sample Title</span>
    <span slot="description">Stat body that includes two lines and a footnote.</span>
    <span slot="statistic">77%</span>
</rh-stat>
{% enddemo %}

{%- endsection %}

{% section headline="Demo Dark Mode" -%}

{% demo headline="Default Stat" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat></rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Large Stat" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat size="large"></rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Large Stat with Icon" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat size="large" icon="rh-atom"></rh-stat>
</pfe-band> 
{% enddemo %}

{% demo headline="Stat with title (no icon)" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat>
        <span slot="title">Sample Title</span>
    </rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Stat with icon (no title)" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat icon="rh-code">
    </rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Stat with all slots used" %}
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