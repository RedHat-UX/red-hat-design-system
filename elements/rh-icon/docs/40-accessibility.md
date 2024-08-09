<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--rh-space-2xl, 32px);
  }

  @container (min-width: 567px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

## Labeling icons

If an icon is interactive or otherwise not merely decorative, it will need to be labeled using the <code>accessible-label</code> property, which will apply <code>aria-label</code> and <code>role="img"</code> automatically.

<div class="grid">
  <uxdot-example width-adjustment="24px">
    <img src="../accessibility-labeling-icons-1.svg" alt="Image of a download icon">
  </uxdot-example>

  <rh-code-block wrap="true">
    <script type="text/sample-javascript"><rh-icon set="ui" icon="download" accessible-label="Download"></rh-icon></script>
  </rh-code-block>
</div>

However, when an icon is accompanied by text, the icon does not need to use accessible-label. The icon will need <code>aria-labelledby</code> and <code>role="img"</code> added manually.

<div class="grid">
  <uxdot-example width-adjustment="113px">
    <img src="../accessibility-labeling-icons-2.svg" alt="Image of a download icon with 'Download' label">
  </uxdot-example>

  <rh-code-block wrap="true">
    <script type="text/sample-javascript"><rh-icon set="ui" icon="download" aria-labelledby="download" role="img"></rh-icon><span>Download</span></script>
  </rh-code-block>
</div>

<rh-cta href="https://www.w3.org/WAI/tutorials/images/functional/#example-3-icon-image-conveying-information-within-link-text">Learn more about using icons in interactive elements</rh-cta>

## Hiding icons

An <code>&lt;rh-icon&gt;</code> is hidden from assistive technology by default. If an icon is presentational, there’s no need to  change the markup to hide the icon.

<div class="grid sm-two-columns">
  <uxdot-best-practice do>
    <rh-code-block wrap="true">
      <script type="text/sample-javascript"><rh-icon icon="butterfly"></rh-icon></script>
    </rh-code-block>
    <p>A pencil icon is often used to represent the ability to edit something.</p>
  </uxdot-best-practice>

  <uxdot-best-practice dont>
    <rh-code-block wrap="true">
      <script type="text/sample-javascript"><rh-icon icon="butterfly" aria-hidden="true"></rh-icon></script>
    </rh-code-block>
    <p>A set of utensils is not associated with editing.</p>
  </uxdot-best-practice>
</div>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/1.1.1-A.md' %}
{% include 'partials/accessibility/1.4.1-A.md' %}
{% include 'partials/accessibility/2.5.8-AA.md' %}