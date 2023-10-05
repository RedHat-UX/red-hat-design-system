{% renderInstallation %}{% endrenderInstallation %}

{% band header="Usage" %}

### Tile as link

```html
  <rh-tile>
    <img slot="image" src="//fakeimg.pl/296x50" alt="296 X 50 placeholder image">
    <div slot="title">Title</div>
    <h2 slot="headline"><a href="#top">Link</a></h2>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <div slot="footer">Suspendisse eu turpis elementum</div>
  </rh-tile>
```

### Group of selectable tiles

```html
  <rh-tile-group>
    <rh-tile checked>
      <div slot="title">Title</div>
      <h2 slot="headline">Headline</h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <div slot="footer">Suspendisse eu turpis elementum</div>
    </rh-tile>

    <rh-tile>
      <div slot="title">Title</div>
      <h2 slot="headline">Headline</h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <div slot="footer">Suspendisse eu turpis elementum</div>
    </rh-tile>

    <rh-tile>
      <div slot="title">Title</div>
      <h2 slot="headline">Headline</h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <div slot="footer">Suspendisse eu turpis elementum</div>
    </rh-tile>
  </rh-tile-group>
```

{% endband %}

{% renderCodeDocs hideDescription=true %}{% endrenderCodeDocs %}

{% renderCodeDocs for='rh-tile-group' %}{% endrenderCodeDocs %}
