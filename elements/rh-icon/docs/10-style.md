## Style

Our icons were designed to be simple, clean, and open. Four icon sets are available: standard, UI, microns, and social media.

## Color schemes
<a id="theme"></a>

Icons can be used in Red Hat’s brand red, black, and two shades of gray. In dark color scheme uses white instead of black.
Blue can also be used for interactive icons. It’s not recommended to use Red Hat red for UI icons or microns.

<div class="grid sm-two-columns">
  <uxdot-example color-palette="lightest" width-adjustment="208px">
    <img alt="Image of five icons in a light theme"
         src="../icon-theme-light.svg"
         width="208"
         height="96">
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="208px">
    <img src="../icon-theme-dark.svg"
        alt="Image of a five icons in dark theme"
        width="208"
        height="96">
  </uxdot-example>
</div>

<rh-cta href="/tokens/icon/">View our design tokens for icon sizes</rh-cta>

## Sizes

Sizes can be set using `<rh-icon>` which places icons into a transparent
square container to make each icon a standard size.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p><code>&lt;rh-icon&gt;</code> does not put icons in containers of other shapes or add background colors. Additional styling of the base container requires custom CSS.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="308px">
  <img alt="Image displaying icon standard size output."
       src="../icon-sizes.svg"
       width="310"
       height="78">
</uxdot-example>

<rh-table>

| Icon Set           | Size range        |
|--------------------|-------------------|
| Standard (default) | 24px - 100 pixels |
| UI                 | 14px - 24 pixels  |
| Micron             | 8px - 12 pixels   |
| Social media       | 14px - 24 pixels  |

</rh-table>

<rh-cta href="/tokens/icon/">View our design tokens for icon sizes</rh-cta>

