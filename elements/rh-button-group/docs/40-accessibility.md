## Roles and semantics

### role="group"

`rh-button-group` exposes `role="group"` automatically via ElementInternals. The [group role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) identifies a logical collection of related controls that is not intended to be included in a page summary or table of contents by assistive technologies. Since we use [ElementInternals](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) to set `role="group"`, authors do not need to set it.

### Optional role="toolbar"

When the button group acts as a compact set of commonly used actions (a toolbar pattern), wrap it in an element with `role="toolbar"`. The [toolbar role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) is intended for three or more controls. 

Full toolbar behavior (single tab stop, arrow-key navigation between controls) may require additional focus management; this section covers markup and semantics only. See the ARIA Authoring Practices Guide's [Toolbar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) and our docs on [Focus order and roving tabindex](/accessibility/development/#focus-order-and-roving-tabindex) for further information.

## Toolbar labeling

- **When to label**: 
    - When the application has more than one toolbar, authors must supply a label on each toolbar.
    - When there is only one toolbar, a label is optional but can improve clarity for assistive technologies.
- **How**: Use `aria-label` or `aria-labelledby` on the element that has `role="toolbar"`.

## aria-orientation with toolbar

Elements with `role="toolbar"` have an implicit `aria-orientation="horizontal"`. When the toolbar is vertical, set `aria-orientation="vertical"` on the same element so assistive technologies and keyboard expectations (e.g. Up/Down for navigation) are correct. Omit it for horizontal toolbars.

## Toolbar role examples

### Single toolbar (horizontal)

Optional `aria-label` when there is only one toolbar on the page:

```html rhcodeblock
<div role="toolbar" aria-label="Text formatting">
  <rh-button-group>
    <rh-button>Bold</rh-button>
    <rh-button>Italic</rh-button>
    <rh-button>Underline</rh-button>
  </rh-button-group>
</div>
```

### Multiple toolbars (labels required)

When the page has more than one toolbar, each must have a label:

```html rhcodeblock
<div role="toolbar" aria-label="Formatting">
  <rh-button-group>
    <rh-button>Bold</rh-button>
    <rh-button>Italic</rh-button>
    <rh-button>Underline</rh-button>
  </rh-button-group>
</div>
<div role="toolbar" aria-label="Actions">
  <rh-button-group>
    <rh-button>Save</rh-button>
    <rh-button>Cancel</rh-button>
    <rh-button>Delete</rh-button>
  </rh-button-group>
</div>
```

### Vertical toolbar

Set `aria-orientation="vertical"` when the toolbar is laid out vertically:

```html rhcodeblock
<div role="toolbar" aria-label="Sidebar actions" aria-orientation="vertical">
  <rh-button-group>
    <rh-button>Edit</rh-button>
    <rh-button>Share</rh-button>
    <rh-button>Archive</rh-button>
  </rh-button-group>
</div>
```

## Implementation

To learn more about implementation, keyboard interactions, and focus order for individual buttons, go to the [Accessibility section on the Buttons page](/elements/button/accessibility/).

{% include 'partials/accessibility/ariaguide.md' %}

{% include 'partials/accessibility/wcag.md' %}

{% include 'partials/accessibility/2.1.1-A.md' %}

{% include 'partials/accessibility/2.1.3-AAA.md' %}

{% include 'partials/accessibility/2.4.3-A.md' %}

{% include 'partials/accessibility/2.5.5-AAA.md' %}
