## Usage

Back to top helps users get back to the top of the page quickly.

### When to add

Back to top should be added to pages where a user would need to scroll through multiple screens worth of content. If a page is very short and does not require scrolling, back to top does not have to be added.

## Layout

### Placement

Users expect to see back to top in the bottom right corner, but it will overlap content in that area or when users scroll. This placement keeps it out of the way of important content, but still discoverable.

<uxdot-example variant="full" no-border>
  <img src="../back-to-top-guidelines-layout-desktop.svg" 
      alt="Back to top button in the bottom right corner of a desktop-sized screen, 48px from the edges of the viewport." 
      width="1140"
      height="730">
</uxdot-example>

<uxdot-example variant="full" no-border alignment="left">
  <img src="../back-to-top-guidelines-layout-mobile.svg" 
      alt="Back to top buttons in the bottom right corner of a phone-sized screen, 24px from the edges of the viewport."
      width="320"
      height="284">  
</uxdot-example>

## Behavior

When a user scrolls down the page, back to top appears in the bottom right corner. As the user continues to scroll, back to top should remain fixed until the user has reached the very bottom of the page. From here, when a user selects back to top, they will quickly be taken to the top of the page.

## Best practices

### Usage per page

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" variant="full" no-border alignment="left">
      <img src="../back-to-top-guidelines-best-pratices-do-1.svg" 
          alt="Image of wireframe with one back to top button"
          width="468"
          height="247">
    </uxdot-example>
    <p>Use only one back to top in the bottom right corner of a page.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" variant="full" no-border alignment="left">
      <img src="../back-to-top-guidelines-best-pratices-dont-1.svg" 
          alt="Image of wireframe with back to top buttons below each content section"
          width="468"
          height="247">
    </uxdot-example>
    <p>Do not use multiple back to top buttons.</p>
  </uxdot-best-practice>
</div>
