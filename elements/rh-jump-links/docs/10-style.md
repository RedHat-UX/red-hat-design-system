## Style

Jump links are a list of links located near content that act as persistent
navigation. This list can be vertical or horizontal and a title is always
included on top.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest">
    <img src="../jump-links-style-anatomy.svg"
        alt="Anatomy of jump links with numbered annotations pointing to various parts"
        width="394"
        height="240">
  </uxdot-example>
  <figcaption>
     <ol>
       <li>Title</li>
       <li>Inactive section</li>
       <li>Active section border</li>
       <li>Active section</li>
       <li>Section with nested jump links</li>
     </ol>
  </figcaption>
</figure>

## Color scheme

Vertical and horizontal jump links are available in both light and dark color
schemes.

### Light scheme

The light scheme disclosure includes a box shadow, but the dark scheme
disclosure does not.

Learn more about the [Disclosure](/elements/disclosure) element.

<uxdot-example color-palette="lighter">
    <img src="../jump-links-style-color-scheme-light.svg"
        alt="Four sets of jump links. Two vertical with one nested, one horizontal, and one vertical inside a disclosure."
        width="1012"
        height="464">
</uxdot-example>

### Dark scheme

<uxdot-example color-palette="darkest">
    <img src="../jump-links-style-color-scheme-dark.svg"
        alt="Four sets of jump links on a dark color scheme. Two vertical with one nested, one horizontal, and one vertical inside a disclosure."
        width="1012"
        height="464">
</uxdot-example>

## Space

The space in between jump links and content should use the `--rh-space-2xl`
token at a minimum.

<uxdot-example color-palette="lightest">
    <img src="../jump-links-style-space-A.svg"
        alt="Three sets of vertical jump links. Jump links have 16px of margin bottom between the accessible label and the list. Jump links have 16px of horizontal padding and 8px of vertical padding. Nested jump links have 32px of left padding from the border. There's also 32px of margin right between the jump links and the content."
        width="1012"
        height="244">
</uxdot-example>

<uxdot-example color-palette="lighter">
    <img src="../jump-links-style-space-B.svg"
        alt="Horizontal jump links. 16px of padding around the jump links and 16px of top and bottom padding around the accessible label."
        width="1012"
        height="112">
</uxdot-example>

<uxdot-example color-palette="lightest">
    <img src="../jump-links-style-space-C.svg"
        alt="Jump links in a disclosure. Jump links have 16px top margin from the disclosure's border when open. All other sides have 24px of padding from the disclosure's border."
        width="752"
        height="312">
</uxdot-example>

## Interaction states

### Hover

The active section jump link is interactive, but the styling does not change on
hover.

<uxdot-example color-palette="lightest">
    <img src="../jump-links-style-interaction-states-hover-color-scheme-light.svg"
        alt="Hovered jump links have the border thickness increased and the text gets darker."
        width="1012"
        height="464">
</uxdot-example>

<uxdot-example color-palette="darkest">
    <img src="../jump-links-style-interaction-states-hover-color-scheme-dark.svg"
        alt="Similar to the light scheme, hovered jump links have the border thickness increased and the text gets darker."
        width="1012"
        height="464">
</uxdot-example>

<rh-table>

 | Property                                | Light scheme                 | Dark scheme               |
 | --------------------------------------- | ---------------------------- | ------------------------- |
 | Thick border color                      | `--rh-color-gray-60`         | `--rh-color-gray-30`      |
 | Jump link text color                    | `--rh-color-text-primary`    | `--rh-color-text-primary` |
 | Disclosure trigger button surface color | `--rh-color-surface-lighter` | `--rh-color-surface-dark` |

</rh-table>

### Focus and active

The active section jump link can receive focus, but the styling does not change.

<uxdot-example color-palette="lightest">
    <img src="../jump-links-style-interaction-states-focus-active-color-scheme-light.svg"
        alt="Focused jump links receive a blue outline all the way around the link."
        width="1012"
        height="464">
</uxdot-example>

<uxdot-example color-palette="darkest">
    <img src="../jump-links-style-interaction-states-focus-active-color-scheme-dark.svg"
        alt="Similar to the light scheme, dark focused jump links have a blue outline all the way around the link."
        width="1012"
        height="464">
</uxdot-example>

<rh-table>

 | Property                                | Light scheme                 | Dark scheme               |
 | --------------------------------------- | ---------------------------- | ------------------------- |
 | Thick border color                      | `--rh-color-gray-60`         | `--rh-color-gray-30`      |
 | Jump link text color                    | `--rh-color-text-primary`    | `--rh-color-text-primary` |
 | Disclosure trigger button surface color | `--rh-color-surface-lighter` | `--rh-color-surface-dark` |

</rh-table>
