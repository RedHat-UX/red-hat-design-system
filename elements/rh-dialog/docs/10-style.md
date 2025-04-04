## Style

A dialog is a floating container on top of a transparent backdrop. The container
requires a backdrop so it can separate itself from the page underneath. This
helps users focus on the dialog content.

### Anatomy

<figure>
  <uxdot-example width-adjustment="872px">
    <img src="../dialog-anatomy.svg"
         alt="Anatomy of a dialog with lots of annotations pointing to various parts"
         width="872"
         height="295">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Backdrop</li>
      <li>Container</li>
      <li>Close button</li>
      <li>Header section</li>
      <li>Body text section</li>
      <li>Footer section</li>
      <li>Container shadow</li>
    </ol>
  </figcaption>
</figure>

## Color scheme
<a id="theme"></a>

Dialog is available for both light and dark color schemes.

### Light color scheme

<uxdot-example width-adjustment="1000px"
               variant="full"
               alignment="left"
               no-border>
  <img src="../dialog-theme-light.svg"
       alt="Light theme dialog"
       width="1000"
       height="327">
</uxdot-example>

### Dark color scheme

<uxdot-example color-palette="darkest"
               width-adjustment="1000px"
               variant="full"
               alignment="left"
               no-border>
  <img alt="Dark theme badges"
       src="../dialog-dark.svg"
       width="1000"
       height="327">
</uxdot-example>

If a dialog element is a child of a dark scheme element, but the page as a whole
uses the light scheme, the dialog should match the page scheme.

<uxdot-best-practice variant="do">

  ```html rhcodeblock

  <body>
    <rh-surface color-palette="darkest"
                role="main">
      ... dark content
      <rh-card color-palette="lightest">
        ... light content
      </rh-card>
      <rh-dialog>
        This dialog inherits its color scheme from the main element.
      </rh-dialog>
    </rh-surface>
  </body>
  ```

  Place dialog elements in the root themable container to ensure they match
  the overall page color scheme.

</uxdot-best-practice>
<uxdot-best-practice variant="dont">

  ```html rhcodeblock

  <body style="color-scheme: dark only">
    <main>
      ... dark content
      <rh-card color-palette="lightest">
        ... light content
        <rh-dialog>
          Even though the whole page uses the dark color scheme,
          this dialog will always use the light color scheme,
          since it's a child of a themable container with the lightest
          color palette.
        </rh-dialog>
      </rh-card>
    </main>
  </body>
  ```

  Avoid placing dialogs in themable containers which don't match the page scheme

</uxdot-best-practice>


## Space

The amount of space in a dialog reduces as breakpoints get smaller.

### Large breakpoints

<uxdot-example width-adjustment="1000px"
               variant="full"
               alignment="left"
               no-border>
  <img src="../dialog-space-breakpoint-large.svg"
       alt="A dialog container on a large breakpoint with spacing between all elements"
       width="1000"
       height="327">
</uxdot-example>

### Small breakpoints

<uxdot-example width-adjustment="360px"
               variant="full"
               alignment="left"
               no-border>
  <img src="../dialog-space-breakpoint-small.svg"
       alt="A dialog container on a small breakpoint with spacing between all elements"
       width="360"
       height="640">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="md, lg, xl, 2xl"
                           style="margin-block-start:var(--rh-space-xl);">
</uxdot-spacer-tokens-table>

## Interaction states

Interactive elements may be added to a dialog container, but very sparingly. If
interactive elements are added, go to their element or pattern pages to view the
interaction states.

### Hover

<uxdot-example width-adjustment="1000px"
               variant="full"
               alignment="left"
               no-border>
  <img src="../dialog-interaction-state-hover.svg"
       alt="Light theme dialog hover state example"
       width="1000"
       height="327">
</uxdot-example>

### Focus

<uxdot-example width-adjustment="1000px"
               variant="full"
               alignment="left"
               no-border>
  <img src="../dialog-interaction-state-focus.svg"
       alt="Light theme dialog focus state example"
       width="1000"
       height="327">
</uxdot-example>

### Active

<uxdot-example width-adjustment="1000px"
               variant="full"
               alignment="left"
               no-border>
  <img src="../dialog-interaction-state-active.svg"
       alt="Light theme dialog active state example"
       width="1000"
       height="327">
</uxdot-example>
