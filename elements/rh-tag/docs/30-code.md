{% renderOverview %}
  <section>
    <h2>Outline</h2>
    <rh-tag color="red">
      <span>Red <span class="visually-hidden-class">Hat</span></span></rh-tag>
    <rh-tag color="orange">Orange</rh-tag>
    <rh-tag color="green">Green</rh-tag>
    <rh-tag color="cyan">Cyan</rh-tag>
    <rh-tag color="blue">Blue</rh-tag>
    <rh-tag color="purple">Purple</rh-tag>
    <rh-tag>Gray</rh-tag>
  </section>
  <section>
    <h2>Outline</h2>
    <rh-tag variant="outline" color="red">
      <span>Red <span class="visually-hidden-class">Hat</span></span></rh-tag>
    <rh-tag variant="outline" color="orange">Orange</rh-tag>
    <rh-tag variant="outline" color="green">Green</rh-tag>
    <rh-tag variant="outline" color="cyan">Cyan</rh-tag>
    <rh-tag variant="outline" color="blue">Blue</rh-tag>
    <rh-tag variant="outline" color="purple">Purple</rh-tag>
    <rh-tag variant="outline">Gray</rh-tag>
  </section>
{% endrenderOverview %}

{% band header="Usage" %}
```html
<rh-tag color="blue">Blue</rh-tag>
```
{% endband %}

{% band header="Variants" %}
### With Icon
<rh-tag color="blue" icon="alert-danger">Blue label</rh-tag>

```html
<rh-tag color="blue" icon="alert-danger">Blue label</rh-tag>
```

### Colors
<rh-tag color="blue">Blue</rh-tag>
<rh-tag color="green">Green</rh-tag>
<rh-tag color="orange">Orange</rh-tag>
<rh-tag color="red">Red</rh-tag>
<rh-tag color="purple">Purple</rh-tag>
<rh-tag color="cyan">Cyan</rh-tag>
<rh-tag>Grey</rh-tag>

{% endband %}

{% renderSlots %}{% endrenderSlots %}

{% renderAttributes %}{% endrenderAttributes %}

{% renderMethods %}{% endrenderMethods %}

{% renderEvents %}{% endrenderEvents %}

{% renderCssCustomProperties %}{% endrenderCssCustomProperties %}

{% renderCssParts %}{% endrenderCssParts %}