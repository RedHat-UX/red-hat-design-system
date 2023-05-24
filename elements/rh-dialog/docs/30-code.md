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


{% renderOverview %}
  <rh-dialog trigger="standard-trigger">
    <h2 slot="header">Modal dialog with a header</h2>
    <p>Lorem ipsum dolor sit amet, <a href="#foo">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum.</p>
    <rh-cta>
      <a href="#bar">Learn more</a>
    </rh-cta>
  </rh-dialog>
  <rh-button id="standard-trigger">Open modal dialog</rh-button>

{% endrenderOverview %}

{% renderSlots %}{% endrenderSlots %}

{% renderAttributes %}{% endrenderAttributes %}

{% renderMethods %}{% endrenderMethods %}

{% renderEvents %}{% endrenderEvents %}

{% renderCssCustomProperties %}{% endrenderCssCustomProperties %}

{% renderCssParts %}{% endrenderCssParts %}

