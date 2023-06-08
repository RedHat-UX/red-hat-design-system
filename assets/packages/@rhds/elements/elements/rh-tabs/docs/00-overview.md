{% section %}
  ## Overview
  {{ tagName | getElementDescription }}

  {% example palette="light", alt="Image of open tabs, box tabs, and tabs with overflow buttons", src="./tabs-sample.png" %}

  ## Sample element
  <rh-tabs>
    <rh-tab slot="tab">Connected clouds</rh-tab>
    <rh-tab-panel>Connected clouds panel</rh-tab-panel>
    <rh-tab slot="tab">Elevated apps</rh-tab>
    <rh-tab-panel>Elevated apps panel</rh-tab-panel>
    <rh-tab slot="tab">Automated tasks</rh-tab>
    <rh-tab-panel>Automated tasks panel</rh-tab-panel>
  </rh-tabs>

  ## Demo

  {% playground tagName=tagName %}{% endplayground %} 
  {% cta href="./demo/", target="_blank" %}View the demo{% endcta %}

  ## When to use
  - When you need to group related information into different categories
  - When users need to read sections of content in the same view without leaving the page
  - When you need to group other types of content in the same view like forms, settings, dashboards, etc.

  {% repoStatus type="Element" %}

{% endsection %}
