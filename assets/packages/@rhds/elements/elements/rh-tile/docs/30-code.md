{% renderInstallation %}{% endrenderInstallation %}

{% band header="Usage" %}
  {% alert state="warning", title="Warning" %}
    Tiles require light DOM CSS to be included on the page in order to style links properly.
  {% endalert %}
  {% playground tagName=tile %}{% endplayground %}
  {% cta href="../demo/", target="_blank" %}
View the demo in a new tab
  {% endcta %}
{% endband %}

{% renderCodeDocs hideDescription=true %}{% endrenderCodeDocs %}

{% renderCodeDocs for='rh-tile-group' %}{% endrenderCodeDocs %}
