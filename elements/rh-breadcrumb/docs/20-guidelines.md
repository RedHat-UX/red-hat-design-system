## Usage

When there are at least two levels in a page hierarchy, breadcrumb navigation helps the user understand where they are on a website or web app. It allows them to navigate to a parent page of the page they’re currently viewing, making other content more discoverable as well.

## Variant

### Default

The unlinked page titles and separators in the default variant uses the `--rh-color-text-primary-on-light` or `--rh-color-text-primary-on-dark` for the text color.

<!--NOTE: ADD IMAGES-->

### Subtle

The unlinked page titles and separators in the default variant uses the `--rh-color-text-secondary-on-light` or `--rh-color-text-secondary-on-dark` for the text color.

<!--NOTE: ADD IMAGES-->

## Responsive design

Size and spacing remain consistent for breadcrumbs at all screen sizes. The breadcrumbs will wrap to fit their container.

### Large breakpoints

<!--NOTE: ADD IMAGE-->

### Small breakpoints

<!--NOTE: ADD IMAGE-->

## Best Practices

### When not to use

Breadcrumbs should not be used as the main navigation.

<div class="best-practices-grid">
    <div>
        <img slot="header" src="../breadcrumb-when-not-to-use-do.svg" alt="breadcrumbs below the primary navigation">
        <h4 class="correct">Do</h4>
        <p>Do use breadcrumbs to supplement the primary or secondary navigation element.</p>
    </div>
    <div>
        <img slot="header" src="../breadcrumb-when-not-to-use-dont.svg" alt="breadcrumbs only with placeholder page text">
        <h4 class="wrong">Don't</h4>
        <p>Do not use breadcrumb navigation as the main way for users to navigate a website.</p>
    </div>
</div>

They should also not be used if there is only one level in the page hierarchy or if the current page is at the top of the page hierarchy.

<div class="best-practices-grid">
    <div>
        <img slot="header" src="../breadcrumb-when-not-to-use-do-2.svg" alt="one linked breadcrumb and one current page breadcrumb">
        <h4 class="correct">Do</h4>
        <p>Do use breadcrumbs if there are at least two levels in a page hierarchy.</p>
    </div>
    <div>
        <img slot="header" src="../breadcrumb-when-not-to-use-dont-2.svg" alt="one current page breadcrumb only">
        <h4 class="wrong">Don't</h4>
        <p>Do not use breadcrumbs if the current page is first in the page hierarchy.</p>
    </div>
</div>

### Use consistent placement

Breadcrumbs should be placed consistently above the page title and below the primary (and secondary nav, if it’s used). Any other location on the page is not a common spot for breadcrumbs and is thus less easily found and recognized as breadcrumbs.

<div class="best-practices-grid">
    <div>
        <img slot="header" src="../breadcrumb-consistent-placement-do.svg" alt="breadcrumbs placed below mobile navigation">
        <h4 class="correct">Do</h4>
        <p>Do place breadcrumbs in a familiar and consistent place for this type of navigation element.</p>
    </div>
    <div>
        <img slot="header" src="../breadcrumb-consistent-placement-dont.svg" alt="breadcrumbs placed above mobile navigation">
        <h4 class="wrong">Don't</h4>
        <p>Do not add breadcrumbs above a primary or secondary navigation element or anywhere else on the page.</p>
    </div>
</div>

### Avoid customizing link titles

The page titles used in breadcrumbs should be consistent with what is used in the navigation and on the individual pages. Avoid changing the page titles in order to prevent user confusion.

<div class="best-practices-grid">
    <div>
        <img slot="header" src="../breadcrumb-customizing-link-titles-do.svg" alt="breadcrumbs placed below mobile navigation">
        <h4 class="correct">Do</h4>
        <p>Do keep the same page title in the heading and in breadcrumb navigation.</p>
    </div>
    <div>
        <img slot="header" src="../breadcrumb-customizing-link-titles-do.svg" alt="breadcrumbs placed above mobile navigation">
        <h4 class="wrong">Don't</h4>
        <p>Do not change the title in the breadcrumbs only.</p>
    </div>
</div>