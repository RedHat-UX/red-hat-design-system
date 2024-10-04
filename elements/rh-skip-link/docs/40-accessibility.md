## Keyboard navigation

Users will interact with the skip link using a keyboard primarily.

<uxdot-example width-adjustment="870px">
  <img src="../skip-link-keyboard-navigation.png"
        alt="Screenshots of navigation with and without skip link showing and keyboard navigation text"
        width="872"
        height="651">
</uxdot-example>


<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Key"><kbd>Key</th>
        <th scope="col" data-label="Result">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Key"><kbd>Tab</kbd> </td>
        <td data-label="Result">Makes the skip link appear and shifts focus to it</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift + Tab</kbd></td>
        <td data-label="Result">Hides the skip link and moves focus to the previous control or interactive element, if any</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd> </td>
        <td data-label="Result">Activates the skip link and shifts focus to the main content</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Focus order

The skip link should be the first item on a page to receive focus. After the skip link is activated, the first interactive element in the main content area will receive focus next.

<uxdot-example width-adjustment="870px">
  <img src="../skip-link-focus-order.png"
        alt="Screenshot of navigation and hero of redhat.com with a skip link and arrows showing focus order"
        width="872"
        height="628">
</uxdot-example>


## Hiding a skip link

In order to hide the skip link until it’s called by the user, positioning it outside the viewport is recommended. Using `display: none` or the `hidden` attribute in CSS removes it from keyboard navigation and makes it unusable. Other methods, like making its size equal to 0px, can also prevent screen readers from accessing the element. 

Learn more about <a href="https://webaim.org/techniques/css/invisiblecontent/">making invisible content accessible</a> for screen readers.

{% include 'partials/accessibility/ariaguide.md' %}
{% include 'partials/accessibility/wcag.md' %}
{% include 'partials/accessibility/1.2.1-A.md' %}
{% include 'partials/accessibility/1.2.2-A.md' %}
{% include 'partials/accessibility/1.4.1-A.md' %}
{% include 'partials/accessibility/2.1.1-A.md' %}
{% include 'partials/accessibility/2.1.3-AAA.md' %}
{% include 'partials/accessibility/2.4.3-A.md' %}
{% include 'partials/accessibility/2.5.5-AAA.md' %}