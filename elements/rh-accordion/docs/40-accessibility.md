## Keyboard interactions
Each panel is a focus stop where `Enter` or `Space` expands or collapses each panel.

<uxdot-example width-adjustment="872px">
  <img src="../accordion-keyboard-interactions.png" 
      alt="Accordion keyboard interactions; pressing Tab will focus the top panel, pressing Tab again will move focus to the next panel underneath, and pressing Enter or Space will expand the panel"
      width="872"
      height="357">
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
        <td data-label="Result">Moves focus to the next panel</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift</kbd>+<kbd>Tab</kbd></td>
        <td data-label="Result">Moves focus to the previous panel</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd>/<kbd>Space</kbd></td>
        <td data-label="Result">Expands or collapses a panel</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Focus order

{% include 'partials/accessibility/focusorder.md' %}

<uxdot-example>
  <img src="../accordion-focus-order.png" alt="Accordion showing the order how focus moves through the element when pressing Tab continuously">
</uxdot-example>

## Touch targets
Each panel is selectable instead of only title text or the chevrons.

<uxdot-example>
  <img src="../accordion-touch-targets.png" alt="Accordion showing touch target size examples for large and small sizes">
</uxdot-example>

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}

{% include 'partials/accessibility/2.1.1-A.md' %}

{% include 'partials/accessibility/2.1.3-AAA.md' %}

{% include 'partials/accessibility/2.4.3-A.md' %}

{% include 'partials/accessibility/2.5.5-AAA.md' %}