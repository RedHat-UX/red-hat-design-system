A Statistic showcases a data point or quick fact in a way that visually 
stands out. It consists of a number/percentage and body text in its simplest 
form. It can also include an icon, title, and a call to action.

{% section %}
  ## Sample component
  <rh-stat>
    <span slot="statistic">80%</span>
    of Fortune Global 500 telecom companies<sup>1</sup>
  </rh-stat>
{% endsection %}

<!-- {% componentStatus %} -->

<hr style="margin-block:var(--rh-space-xl) var(--rh-space-5xl);">

{% section %}
## Anatomy
Each stat is composed of a number or percentage and body text. A title, icon, or 
call to action are optional elements that can provide additional information.

![A stat's anatomy consists of an icon, title, number, body text, and call to 
action, in that order.]({{ './stat-anatomy.svg' | url }}) 
{style="--inline-img-max-width:590px;margin-block-end:var(--rh-space-3xl);text-align:center;"}

<div class="multi-column--min-400-wide">
<div>

## Title
If there's supporting text for the number, the words can be added as a 
title. For example, in the phrase “more than 90%,” the words "more than” 
are added as a title.

</div><div>

## Number
This slot should include only digits, a percentage symbol, periods, or 
commas.

</div><div>

## Body text
Every stat should have body text that explains the context around the 
number.

</div><div>

## Additional elements
A stat can contain a relevant icon and/or call to action.

</div>
</div>
{% endsection %}

