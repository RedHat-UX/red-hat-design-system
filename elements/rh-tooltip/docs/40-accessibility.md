## Markup Guidance

In order to create accessible tooltips, the trigger must have an `aria-describedby` attribute and the tooltip content must have a corresponding [IDREF](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id). See the [demos](/elements/tooltip/demos/) for further implementation details.

### Should implementors use `<rh-tooltip>` with `<rh-button>`?

Implementors may want to use `<rh-tooltip>` with `<rh-button>`. Unfortunately, that results in inaccessible tooltips for the following reasons:

  * In order to be accessible, the `aria-describedby` must exist on a native interactive element (eg: `<button>`, `<input>`, etc) and not a `<rh-*>` element.
  * While `<rh-button>` contains a `<button>` element, this `<button>` element exists in an encapsulated shadowdom. Any attributes (like `aria-describedby`) added into the shadowdom cannot communicate with IDREFs outside of the shadowdom—and vice versa.

For these reasons, it's recommended to use native HTML elements for `<rh-tooltip>` triggers and content—paired with the appropriate `aria-describedby` and IDREF attributes.

<rh-alert state="neutral">
  <h3 slot="header">Cross-root ARIA</h3>
  <p>An upcoming proposal called <a href="https://leobalter.github.io/cross-root-aria-delegation/">Cross-root ARIA</a> will solve this &lt;rh-button&gt; issue.</p>
</rh-alert>

## Keyboard interactions

A tooltip will appear when the trigger receives focus and disappear when moving focus away from the trigger.

<uxdot-example width-adjustment="315px">
  <img src="../tooltip-keyboard-interactions.png"
        alt="Tooltip keyboard interactions; pressing tab to focus the trigger will show the tooltip, but pressing tab again will hide the tooltip"
        width="315"
        height="153">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Key">Key</th>
        <th scope="col" data-label="Result">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Key"><kbd>Tab</kbd></td>
        <td data-label="Result">Moves focus to the trigger, tooltip appear</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Tab</kbd></td>
        <td data-label="Result">Moves focus away from the trigger, tooltip disappears</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Esc</kbd></td>
        <td data-label="Result">Removes a tooltip without moving focus away from the trigger</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Additional guidelines
 - Do not use a tooltip on static elements
 - A tooltip should persist while hovering over the trigger and tooltip
 - A tooltip should persist as long as the trigger has focus
 - Users navigating via screen reader must have tooltip text announced to them when it is triggered
 - If a tooltip is added to a disabled trigger, that trigger must be able to receive focus

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}