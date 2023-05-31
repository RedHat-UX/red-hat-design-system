{% renderInstallation %}{% endrenderInstallation %}

{% band header="Usage" %}
```html
<rh-dialog trigger="standard-trigger">
  <h2 slot="header">Leave page</h2>
  <p>If you leave the page, any unsaved information will be lost.</p>
  <rh-button slot="footer">Leave</rh-button>
  <rh-button slot="footer" variant="tertiary">Cancel</rh-button>
</rh-dialog>
<rh-button id="standard-trigger">Open modal dialog</rh-button>
```
{% endband %}

{% renderSlots %}{% endrenderSlots %}

{% renderAttributes %}{% endrenderAttributes %}

{% renderMethods %}{% endrenderMethods %}

{% renderEvents %}{% endrenderEvents %}

{% renderCssParts for='rh-dialog', level=3%}{% endrenderCssParts %}

{% renderCssCustomProperties for='rh-dialog', level=3%}{% endrenderCssCustomProperties %}