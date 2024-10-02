## Labelling icons

If an icon is interactive or otherwise not merely decorative, it will need to be labeled using the <code>accessible-label</code> property, which will apply <code>aria-label</code> and <code>role="img"</code> automatically.

<div class="grid sm-two-columns">
  <uxdot-example width-adjustment="36px">
    <img src="../icon-accessibility-labeling-icons.svg"
        alt="Image of a download icon, an arrow pointing down with an underline beneath it"
        width="24"
        height="24">
  </uxdot-example>
  <rh-code-block wrap="true">
    <script type="text/html"><rh-icon icon="download" set="ui" accessible-label="Download"></rh-icon></script>
  </rh-code-block>
</div>

However, when an icon is accompanied by text, the icon does not need to use accessible-label. 

<div class="grid sm-two-columns">
  <uxdot-example width-adjustment="113px">
    <img src="../icon-accessibility-labeling-icons-2.svg"
        alt="Image of a download icon with text, an arrow pointing down with an underline beneath it with accompanying download text"
        width="114"
        height="28">
  </uxdot-example>
  <rh-code-block wrap="true">
    <script type="text/html"><rh-icon icon="download" set="ui"></rh-icon><span>Download</span></script>
  </rh-code-block>
</div>

<rh-cta href="https://www.w3.org/WAI/tutorials/images/functional/#example-3-icon-image-conveying-information-within-link-text">Learn more about using icons in interactive elements</rh-cta>

## Hiding icons

An <code>&lt;rh-icon&gt;</code> is hidden from assistive technology by default. If an icon is presentational, there’s no need to  change the markup to hide the icon.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <rh-code-block slot="image"
                   wrap="true">
      <script type="text/html"><rh-icon icon="butterfly"></rh-icon></script></rh-code-block>
    <p>Icons will be hidden from assistive technology by default</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <rh-code-block slot="image"
                   wrap="true">
      <script type="text/html"><rh-icon icon="butterfly" aria-hidden="true"></rh-icon></script>
    </rh-code-block>
    <p>There is no need to add the additional <code>aria-hidden="true"</code></p>
  </uxdot-best-practice>
</div>


<!-- Add example and code block-->

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/1.1.1-A.md' %}
{% include 'partials/accessibility/1.4.1-A.md' %}
{% include 'partials/accessibility/2.5.8-AA.md' %}
