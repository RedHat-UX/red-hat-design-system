## Usage

A back to top button helps users get back to the top of the page quickly. It should be used on pages where a user would have to scroll through two screens worth of content on medium and large screens and four screens worth of content on small screens. If a page is very short and doesn’t require scrolling, a back to top button doesn’t have to be added.

## Layout

### Placement

Users expect to see the back to top button in the bottom right corner. It will overlap any page content in that small area. This placement keeps it out of the way of page content but still discoverable.

On mobile, the element should be positioned 24px from the bottom and from the right of the screen. On screens wider than 768px, it should appear 48px from the bottom and from the right.

<uxdot-example variant="full" width-adjustment="1000px" no-border alignment="left">
  <img src="../back-to-top-placement-desktop.jpg" 
      alt="Back to top buttons in the bottom right corner of a desktop-sized screen" 
      width="1000"
      height="385">
</uxdot-example>

<uxdot-example variant="full" width-adjustment="320px" no-border alignment="left">
  <img src="../back-to-top-placement-phone.jpg" 
      alt="Back to top buttons in the bottom right corner of a phone-sized screen"
      width="320"
      height="284">  
</uxdot-example>

## Behavior

When a user scrolls down the page, the back to top element appears in the bottom right corner. As the user continues to scroll, the element should remain stationary, unless the user has scrolled to the top of the page.

Once the user clicks the back to top button, they will be taken to the top of the page.

## Best practices

### One back to top element per page

Having only one persistent back to top button ensures that users are able to scroll up to the top easily. Having “Back to top” buttons at the bottom of multiple sections adds to visual clutter and may lead to users ignoring the button.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" variant="full" no-border alignment="left" width-adjustment="468px">
      <img src="../one-back-to-top-do.svg" 
          alt="Image of wireframe with one back to top button"
          width="468"
          height="247">
    </uxdot-example>
    <p>Have one back to top button in the bottom right corner of the page.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" variant="full" no-border alignment="left" width-adjustment="468px">
      <img src="../one-back-to-top-dont.svg" 
          alt="Image of wireframe with back to top buttons below each content section"
          width="468"
          height="247">
    </uxdot-example>
    <p>Do not use multiple back to top buttons.</p>
  </uxdot-best-practice>
</div>

### “Back to top” text

We recommend retaining the “Back to top” text to ensure that users understand the button’s purpose.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" variant="full" width-adjustment="90px" no-border alignment="left">
      <img src="../back-to-top.svg" 
          alt="Image of back to top button with “back to top” text and icon"
          width="90"
          height="26">
    </uxdot-example>
    <p>Keep the descriptive “Back to top” text in the button.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" variant="full" width-adjustment="24px" no-border alignment="left">
      <img src="../back-to-top-icon-only.svg" 
          alt="Image of back to top button with icon only"
          width="26"
          height="16">
    </uxdot-example>
    <p>Do  not use only an up arrow icon.</p>
  </uxdot-best-practice>
</div>

### Spacing

Ensure that there is enough space between the button and the edges of the page for users to click it easily at any screen size. In addition to making it easier for users to click, this will also prevent the scrollbars from overlapping the button.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" variant="full" no-border alignment="left" width-adjustment="356px">
      <img src="../back-to-top-spacing-do.svg" 
        alt="Image of back to top button enough spacing from scroll bars"
        width="356"
        height="253">
    </uxdot-example>
    <p>Add ample space between the right and bottom edges.</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" variant="full" no-border alignment="left" width-adjustment="356px">
      <img src="../back-to-top-spacing-dont.svg" 
        alt="Image of back to top button with very little spacing next to scrollbars"
        width="356"
        height="253">
    </uxdot-example>
    <p>Do not place the button too close to the edges of the screen.</p>
  </uxdot-best-practice>
</div>
