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

{% section headline="Demo - Default" -%}

{% demo headline="No Icon or Title - Default" %}
<rh-stat></rh-stat>
{% enddemo %}

{% demo headline="No Icon or Title - Slotted Stat & Description" %}
<rh-stat>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Icon Attribute - Default" %}
<rh-stat icon="rh-atom"></rh-stat>
{% enddemo %}

{% demo headline="Icon Attribute - Slotted Stat & Description" %}
<rh-stat icon="rh-atom">
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Icon Slot - Default" %}
<rh-stat>
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
</rh-stat>
{% enddemo %}

{% demo headline="Icon Slot - Slotted Stat & Description" %}
<rh-stat>
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Stat, Description, and CTA " %}
<rh-stat>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
     <pfe-cta slot="cta">
        <a href="https://github.com/">Call To Action</a>
    </pfe-cta>
</rh-stat>
{% enddemo %}

{% demo headline="Title Slot - Default" %}
<rh-stat>
    <span slot="title">Stat Title</span>
</rh-stat>
{% enddemo %}

{% demo headline="Title Slot - Slotted Stat & Description" %}
<rh-stat>
    <span slot="title">Stat Title</span>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Title & Icon Attribute - Default" %}
<rh-stat icon="rh-atom">
    <span slot="title">Stat Title</span>
</rh-stat>
{% enddemo %}

{% demo headline="Title & Icon Attribute - Slotted Stat & Description" %}
<rh-stat icon="rh-atom">
    <span slot="title">Stat Title</span>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Title & Icon Slot - Default" %}
<rh-stat>
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
    <span slot="title">Stat Title</span>
</rh-stat>
{% enddemo %}

{% demo headline="Title & Icon Slot - Slotted Stat & Description" %}
<rh-stat>
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
    <span slot="title">Stat Title</span>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Title & Icon Slot - Slotted Stat & Description" %}
<rh-stat>
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
    <span slot="title">Stat Title</span>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
    <pfe-cta slot="cta">
        <a href="#">Call To Action</a>
    </pfe-cta>
</rh-stat>
{% enddemo %}

{%- endsection %}

{% section headline="Demo - Large" -%}

{% demo headline="No Icon or Title - Default" %}
<rh-stat size="large"></rh-stat>
{% enddemo %}

{% demo headline="No Icon or Title - Slotted Stat & Description" %}
<rh-stat size="large">
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Icon Attribute - Default" %}
<rh-stat size="large" icon="rh-atom"></rh-stat>
{% enddemo %}

{% demo headline="Icon Attribute - Slotted Stat & Description" %}
<rh-stat size="large" icon="rh-atom">
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Icon Slot - Default" %}
<rh-stat size="large">
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
</rh-stat>
{% enddemo %}

{% demo headline="Icon Slot - Slotted Stat & Description" %}
<rh-stat size="large">
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Title Slot - Default" %}
<rh-stat size="large">
    <span slot="title">Stat Title</span>
</rh-stat>
{% enddemo %}

{% demo headline="Title Slot - Slotted Stat & Description" %}
<rh-stat size="large">
    <span slot="title">Stat Title</span>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Title & Icon Attribute - Default" %}
<rh-stat size="large" icon="rh-atom">
    <span slot="title">Stat Title</span>
</rh-stat>
{% enddemo %}

{% demo headline="Title & Icon Attribute - Slotted Stat & Description" %}
<rh-stat size="large" icon="rh-atom">
    <span slot="title">Stat Title</span>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Title & Icon Slot - Default" %}
<rh-stat size="large">
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
    <span slot="title">Stat Title</span>
</rh-stat>
{% enddemo %}

{% demo headline="Title & Icon Slot - Slotted Stat & Description" %}
<rh-stat size="large">
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
    <span slot="title">Stat Title</span>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
    <pfe-cta slot="cta">
        <a href="https://github.com/">Call To Action</a>
    </pfe-cta>
</rh-stat>
{% enddemo %}

{%- endsection %}

{% section headline="Demo - Call To Action" -%}

{% demo headline="Default - with CTA" %}
<rh-stat>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
    <pfe-cta slot="cta">
        <a href="https://github.com/">Call To Action</a>
    </pfe-cta>
</rh-stat>
{% enddemo %}

{% demo headline="Default - icon with CTA" %}
<rh-stat>
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
    <pfe-cta slot="cta">
        <a href="https://github.com/">Call To Action</a>
    </pfe-cta>
</rh-stat>
{% enddemo %}

{% demo headline="Default - title with CTA" %}
<rh-stat>
    <span slot="title">Stat Title</span>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
    <pfe-cta slot="cta">
        <a href="https://github.com/">Call To Action</a>
    </pfe-cta>
</rh-stat>
{% enddemo %}

{%- endsection %}

{% section headline="Demo - Dark" -%}

{% demo headline="No Icon or Title - Default" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat></rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="No Icon or Title - Slotted Stat & Description" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat>
        <span slot="statistic">Stat</span>
        <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
    </rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Icon Attribute - Default" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat icon="rh-atom"></rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Icon Attribute - Slotted Stat & Description" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat icon="rh-atom">
        <span slot="statistic">Stat</span>
        <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
    </rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Icon Slot - Default" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat>
        <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
    </rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Icon Slot - Slotted Stat & Description" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat>
        <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
        <span slot="statistic">Stat</span>
        <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
    </rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Title Slot - Default" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat>
        <span slot="title">Stat Title</span>
    </rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Title Slot - Slotted Stat & Description" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat>
        <span slot="title">Stat Title</span>
        <span slot="statistic">Stat</span>
        <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
    </rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Title Slot And Icon Attribute - Default" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat icon="rh-atom">
        <span slot="title">Stat Title</span>
    </rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Title Slot And Icon Attribute - Slotted Stat & Description" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat icon="rh-atom">
        <span slot="title">Stat Title</span>
        <span slot="statistic">Stat</span>
        <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
    </rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Title Slot And Icon Slot - Default" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat>
        <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
        <span slot="title">Stat Title</span>
    </rh-stat>
</pfe-band>
{% enddemo %}

{% demo headline="Title Slot And Icon Slot - Slotted Stat & Description" %}
<pfe-band size="smallest" color-palette="darkest">
    <rh-stat>
        <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
        <span slot="title">Stat Title</span>
        <span slot="statistic">Stat</span>
        <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
        <pfe-cta slot="cta">
            <a href="https://github.com/">Call To Action</a>
        </pfe-cta>
    </rh-stat>
</pfe-band>
{% enddemo %}

{%- endsection %}

{% section headline="Demo - Statistic Above Title" -%}

{% demo headline="No Icon Or Title - Default" %}
<rh-stat top="statistic"></rh-stat>
{% enddemo %}

{% demo headline="No Icon Or Title - Slotted Stat & Description" %}
<rh-stat top="statistic">
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Icon Attribute - Default" %}
<rh-stat top="statistic" icon="rh-atom"></rh-stat>
{% enddemo %}

{% demo headline="Icon Attribute - Slotted Stat & Description" %}
<rh-stat top="statistic" icon="rh-atom">
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Icon Slot - Default" %}
<rh-stat top="statistic">
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
</rh-stat>
{% enddemo %}

{% demo headline="Icon Slot - Slotted Stat & Description" %}
<rh-stat top="statistic">
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Title Slot - Default" %}
<rh-stat top="statistic">
    <span slot="title">Stat Title</span>
</rh-stat>
{% enddemo %}

{% demo headline="Title Slot - Slotted Stat & Description" %}
<rh-stat top="statistic">
    <span slot="title">Stat Title</span>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Title Slot And Icon Attribute - Default" %}
<rh-stat top="statistic" icon="rh-atom">
    <span slot="title">Stat Title</span>
</rh-stat>
{% enddemo %}

{% demo headline="Title Slot And Icon Attribute - Slotted Stat & Description" %}
<rh-stat top="statistic" icon="rh-atom">
    <span slot="title">Stat Title</span>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
{% enddemo %}

{% demo headline="Title Slot And Icon Slot - Default" %}
<rh-stat top="statistic">
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
    <span slot="title">Stat Title</span>
</rh-stat>
{% enddemo %}

{% demo headline="Title Slot And Icon Slot - Slotted Stat & Description" %}
<rh-stat top="statistic">
    <pfe-icon slot="icon" icon="rh-atom"></pfe-icon>
    <span slot="title">Stat Title</span>
    <span slot="statistic">Stat</span>
    <span slot="description">Stat body text that includes two lines and a footnote<sup>2</sup></span>
</rh-stat>
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