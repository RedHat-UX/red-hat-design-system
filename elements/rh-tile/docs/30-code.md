{% renderInstallation %}{% endrenderInstallation %}

{% band header="Usage" %}
```html
  <rh-tile>
    <img slot="image" src="//fakeimg.pl/296x50" alt="296 X 50 placeholder image">
    <div slot="title">Title</div>
    <h2 slot="headline"><a href="#top">Link</a></h2>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <div slot="footer">Suspendisse eu turpis elementum</div>
  </rh-tile>
```'
{% endband %}

{% renderCodeDocs hideDescription=true %}{% endrenderCodeDocs %}

{% renderCodeDocs for='rh-tile-group' %}{% endrenderCodeDocs %}
