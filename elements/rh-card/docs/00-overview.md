{% section %}
  ## Overview
  Cards are flexible surfaces used to group information in a small layout. 
  They give small previews of information or provide secondary content in 
  relation to the content it's near. Several cards can be used together to group 
  related information.
{% endsection %}

{% section %}
  ## Sample component
  ![A basic card]({{ './card.svg' | url 
  }}){style="--inline-img-max-width: 360px;"}
{% endsection %}

{%- componentStatus -%}{% endcomponentStatus %}

{#
{% section %}
  ## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-card>` demo in a new tab
  {% endcta %}
{% endsection %}
#}

{% set related = 'sticky-card' %}
{% include 'feedback.html' %}
