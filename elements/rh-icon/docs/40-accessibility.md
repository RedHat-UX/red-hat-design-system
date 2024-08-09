## Labeling icons

If an icon is interactive or otherwise not merely decorative, it will need to be labeled using <code>aria-label</code> or <code>aria-labelledby</code>. Any non-presentational element must have an aria-label AND role="img". Axe will throw an error if an rh-icon has an aria-label but no role.

<!-- Add example and code block-->

## Hiding icons

An <code>&lt;rh-icon&gt;</code> is hidden from assistive technology by default. If an icon is presentational, there’s no need to  change the markup to hide the icon.

<!-- Add example and code block-->

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/1.1.1-A.md' %}
{% include 'partials/accessibility/1.4.1-A.md' %}