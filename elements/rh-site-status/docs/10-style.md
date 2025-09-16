## Styles

Website status is a combination of an icon and link within a very small card. It is designed to be understood immediately. Otherwise, a user can click on the link to learn more.

### Anatomy

<figure>
  <uxdot-example color-palette="darkest">
    <img src="../site-status-anatomy.svg"
        alt="Image of a site status element with a green checkmark and the text 'All systems operational'"
        width="1000"
        height="203">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Icon</li>
      <li>Link</li>
      <li>Container</li>
    </ol>
  </figcaption>
</figure>


## Color scheme
<a id="theme"></a>

Website status is available for both light and dark color schemes.

<div class="grid sm-two-columns">
  <uxdot-example color-palette="darkest" width-adjustment="200px">
    <img src="../site-status-theme.svg"
        alt="Image of a site status element with a green checkmark and the text 'All systems operational on a dark background'"
        width="200"
        height="53">
  </uxdot-example>

  <uxdot-example width-adjustment="200px">
    <img src="../site-status-theme.svg"
        alt="Image of a site status element with a green checkmark and the text 'All systems operational on a light background'"
        width="200"
        height="53">
  </uxdot-example>
</div>


## Configuration

Website status has a fixed height and its width changes depending on the amount of link text. The icon and link are horizontally aligned to the card as well.

<uxdot-example color-palette="darkest" width-adjustment="448px">
  <img src="../site-status-configuration.svg"
        alt="Image of a site status element with a green checkmark and the text 'All systems operational' with fixed height, width and horizontal alignment indicators."
        width="448"
        height="80">
</uxdot-example>


## Icons

Website status includes three icons that also indicate the severity of the status.

<uxdot-example color-palette="darkest" width-adjustment="707px">
  <img src="../site-status-icons.svg"
        alt="Three images of site status elements, one with a green checkmark and the text 'All systems operational', the second with a yellow exclamation point and the text 'Partial system outage', and the third with a red exclamation point and the text 'Major system outage'."
        width="707"
        height="53">
</uxdot-example>


## Space

Space values remain the same at all viewport sizes.

<uxdot-example color-palette="darkest" width-adjustment="200px">
  <img src="../site-status-space.svg"
        alt="Image of a site status element with a green checkmark and the text 'All systems operational' with space indicators."
        width="200"
        height="53">
</uxdot-example>

<uxdot-example variant="full" no-border alignment="left" width-adjustment="992px">
  <img src="../site-status-footer.svg"
        alt="Image of a site status element with a green checkmark and the text 'All systems operational' in a footer element with space indicators."
        width="992"
        height="789">
</uxdot-example>

<uxdot-example  variant="full" no-border alignment="left" width-adjustment="360px">
  <img src="../site-status-footer-mobile.svg"
        alt="Image of a site status element with a green checkmark and the text 'All systems operational' in a footer element with space indicators at a small viewport size."
        width="360"
        height="1191">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="md, lg, 2xl, 3xl"></uxdot-spacer-tokens-table>

## Interaction states

Only the link is selectable and it should be underlined in all interaction states.

<uxdot-example color-palette="darkest" width-adjustment="728px">
  <img src="../site-status-interaction-states.svg"
        alt="Three images of a site status element with a green checkmark and the text 'All systems operational' first one displaying the mouse hover state, the second the keyboard state, the third a combination of hover and focus."
        width="728"
        height="53">
</uxdot-example>
