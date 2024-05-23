{% renderInstall %}{% endrenderInstall %}

## Usage

```html
<rh-dialog trigger="standard-trigger">
  <h2 slot="header">Leave page</h2>
  <p>If you leave the page, any unsaved information will be lost.</p>
  <rh-button slot="footer">Leave</rh-button>
  <rh-button slot="footer" variant="tertiary">Cancel</rh-button>
</rh-dialog>
<rh-button id="standard-trigger">Open modal dialog</rh-button>
```

{% renderCodeDocs hideDescription=true %}{% endrenderCodeDocs %}
