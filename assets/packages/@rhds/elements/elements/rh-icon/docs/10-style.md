## Style

Our icons were designed to be simple, clean, and open. Four icon sets are available: standard, UI, microns, and social media.

## Theme

Icons can be used in Red Hat’s brand red, black, and two shades of gray. Dark theme uses white instead of black. Blue can also be used for interactive icons. It’s not recommended to use Red Hat red for UI icons or microns.

<div class="grid sm-two-columns">
  <uxdot-example width-adjustment="208px">
    <img src="../icon-theme-light.svg"
        alt="Image of five icons in a light theme"
        width="208"
        height="96">
  </uxdot-example>

  <uxdot-example width-adjustment="208px" color-palette="darkest">
    <img src="../icon-theme-dark.svg"
        alt="Image of a five icons in dark theme"
        width="208"
        height="96">
  </uxdot-example>
</div>

<rh-cta href="../../../../tokens/icon/">View our design tokens for icon sizes</rh-cta>

## Sizes

Sizes can be set using <code>&lt;rh-icon&gt;</code> which places icons into a transparent square container to make each icon a standard size.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p><code>&lt;rh-icon&gt;</code> does not put icons in containers of other shapes or add background colors. Additional styling of the base container requires custom CSS.</p>
</rh-alert>

<uxdot-example width-adjustment="308px">
  <img src="../icon-sizes.svg"
        alt="Image displaying icon standard size output."
        width="310"
        height="78">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Icon Set">Icon Set</th>
        <th scope="col" data-label="Size range">Size range</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Icon Set">Standard (default)</td>
        <td data-label="Size range">24px - 100 pixels</td>
      </tr>
      <tr>
        <td data-label="Icon Set">UI</td>
        <td data-label="Size range">14px - 24 pixels</td>
      </tr>
      <tr>
        <td data-label="Icon Set">Micron</td>
        <td data-label="Size range">8px - 12 pixels</td>
      </tr>
      <tr>
        <td data-label="Icon Set">Social media</td>
        <td data-label="Size range">14px - 24 pixels</td>
      </tr>
    </tbody>
  </table>
</rh-table>

<rh-cta href="../../../../tokens/icon/">View our design tokens for icon sizes</rh-cta>

