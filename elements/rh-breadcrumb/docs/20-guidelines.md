## Usage

When there are at least two levels in a page hierarchy, breadcrumb navigation helps the user understand where they are on a website or web app. It allows them to navigate to a parent page of the page they’re currently viewing, making other content more discoverable as well.

## Variants

### Default

The unlinked page titles and separators in the default variant uses the `--rh-color-text-primary-on-light` or `--rh-color-text-primary-on-dark` for the text color.

<div class="grid xs-two-columns">
  <uxdot-example width-adjustment="295px">
    <img src="../breadcrumb-variant-default-light.svg" alt="Light theme breadcrumb with blue links and black text and separators">
  </uxdot-example>

  <uxdot-example width-adjustment="295px" color-palette="darkest">
    <img src="../breadcrumb-variant-default-dark.svg" alt="Dark theme breadcrumb with light blue links and white text and separators">
  </uxdot-example>
</div>

### Subtle

The unlinked page titles and separators in the default variant uses the `--rh-color-text-secondary-on-light` or `--rh-color-text-secondary-on-dark` for the text color.

<div class="grid xs-two-columns">
  <uxdot-example width-adjustment="295px">
    <img src="../breadcrumb-variant-subtle-light.svg" alt="Light theme breadcrumb with blue links and dark gray text and separators">
  </uxdot-example>

  <uxdot-example width-adjustment="295px" color-palette="darkest">
    <img src="../breadcrumb-variant-subtle-dark.svg" alt="Dark theme breadcrumb with light blue links and light gray text and separators">
  </uxdot-example>
</div>

## Responsive design

Size and spacing remain consistent for breadcrumbs at all screen sizes. The breadcrumbs will wrap to fit their container.

### Large breakpoints

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
    <img src="../breadcrumb-responsive-large-breakpoint.svg" alt="partial view of an article page with breadcrumbs at a screen width of 1000px">
  </uxdot-example>

### Small breakpoints

<uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
    <img src="../breadcrumb-responsive-small-breakpoint.svg" alt="partial view of an article page with breadcrumbs at a mobile screen width of 360px">
  </uxdot-example>

## Best Practices

### When not to use

Breadcrumbs should not be used as the main navigation.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" no-border variant="full" alignment="left">
      <img src="../breadcrumb-when-not-to-use-do.svg" alt="breadcrumbs below the primary navigation">
    </uxdot-example>
    <p>Do use breadcrumbs to supplement the primary or secondary navigation element.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" no-border variant="full" alignment="left">
      <img src="../breadcrumb-when-not-to-use-dont.svg" alt="breadcrumbs only with placeholder page text">
    </uxdot-example>
    <p>Do not use breadcrumb navigation as the main way for users to navigate a website.</p>
  </uxdot-best-practice>
</div>

They should also not be used if there is only one level in the page hierarchy or if the current page is at the top of the page hierarchy.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" no-border variant="full" alignment="left">
      <img src="../breadcrumb-when-not-to-use-do-2.svg" alt="one linked breadcrumb and one current page breadcrumb">
    </uxdot-example>
    <p>Do use breadcrumbs if there are at least two levels in a page hierarchy.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" no-border variant="full" alignment="left">
      <img src="../breadcrumb-when-not-to-use-dont-2.svg" alt="one current page breadcrumb only">
    </uxdot-example>
    <p>Do not use breadcrumbs if the current page is first in the page hierarchy.</p>
  </uxdot-best-practice>
</div>

### Use consistent placement

Breadcrumbs should be placed consistently above the page title and below the primary (and secondary nav, if it’s used). Any other location on the page is not a common spot for breadcrumbs and is thus less easily found and recognized as breadcrumbs.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" no-border variant="full" alignment="left">
      <img src="../breadcrumb-consistent-placement-do.svg" alt="breadcrumbs placed below mobile navigation">
    </uxdot-example>
    <p>Do place breadcrumbs in a familiar and consistent place for this type of navigation element.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" no-border variant="full" alignment="left">
      <img src="../breadcrumb-consistent-placement-dont.svg" alt="breadcrumbs placed above mobile navigation">
    </uxdot-example>
    <p>Do not add breadcrumbs above a primary or secondary navigation element or anywhere else on the page.</p>
  </uxdot-best-practice>
</div>

### Avoid customizing link titles

The page titles used in breadcrumbs should be consistent with what is used in the navigation and on the individual pages. Avoid changing the page titles in order to prevent user confusion.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" no-border variant="full" alignment="left">
      <img src="../breadcrumb-customizing-link-titles-do.svg" alt="Page with the title 'What are cloud services?' and current page breadcrumb that says 'What are cloud services?'">
    </uxdot-example>
    <p>Do keep the same page title in the heading and in breadcrumb navigation.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" no-border variant="full" alignment="left">
      <img src="../breadcrumb-customizing-link-titles-dont.svg" alt="Page with the title 'What are cloud services?' and current page breadcrumb that says 'Cloud services'">
    </uxdot-example>
    <p>Do not change the title in the breadcrumbs only.</p>
  </uxdot-best-practice>
</div>