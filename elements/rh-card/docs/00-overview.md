## Overview
  {{ tagName | getElementDescription }}


## Sample element

{% sample %}
<rh-card>
  <h2 slot="header">Case study</h2>
  <p>Company Z enhances digital guest
     experience with Red Hat container
     and automation technology</p>
  <rh-cta slot="footer">
    <a href="#">Read more</a>
  </rh-cta>
</rh-card>
{% endsample %}


## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-card>` demo in a new tab
  {% endcta %}


  {% repoStatus type="Element" %}

