## Style

Jump links are a list of links located near content that act as persistent
navigation. This list can be vertical or horizontal and a title is always
included on top.

### Anatomy

<uxdot-example>{# insert anatomy svg #}</uxdot-example>

1. Title
2. Inactive section
3. Active section border
4. Active section
5. Section with nested jump links


## Color scheme

Vertical and horizontal jump links are available in both light and dark color
schemes.

### Light scheme

The light scheme disclosure includes a box shadow, but the dark scheme
disclosure does not.

<uxdot-example color-palette="lightest">{# insert light svg #}</uxdot-example>

### Dark scheme

<uxdot-example color-palette="darkest">{# insert dark svg #}</uxdot-example>

## Space

The space in between jump links and content should use the `--rh-space-2xl`
token at a minimum.

<uxdot-example>{# insert vertical space svg #}</uxdot-example>

<uxdot-example>{# insert horizontal space svg #}</uxdot-example>

<uxdot-example>{# insert vertical disclosure space svg #}</uxdot-example>

<hgroup>

## Interaction states

### Hover

</hgroup>

The active section jump link is interactive, but the styling does not change on
hover.

<uxdot-example color-palette="lightest">{# insert light hover svg #}</uxdot-example>

<uxdot-example color-palette="darkest">{# insert dark hover svg #}</uxdot-example>

<rh-table>

 | Property                                | Light scheme                 | Dark scheme               |
 | --------------------------------------- | ---------------------------- | ------------------------- |
 | Thick border color                      | `--rh-color-gray-60`         | `--rh-color-gray-30`      |
 | Jump link text color                    | `--rh-color-text-primary`    | `--rh-color-text-primary` |
 | Disclosure trigger button surface color | `--rh-color-surface-lighter` | `--rh-color-surface-dark` |

</rh-table>

### Focus and active

The active section jump link can receive focus, but the styling does not change.

<uxdot-example color-palette="lightest">{# insert light focus svg #}</uxdot-example>

<uxdot-example color-palette="darkest">{# insert dark focus svg #}</uxdot-example>

<rh-table>

 | Property                                | Light scheme                 | Dark scheme               |
 | --------------------------------------- | ---------------------------- | ------------------------- |
 | Thick border color                      | `--rh-color-gray-60`         | `--rh-color-gray-30`      |
 | Jump link text color                    | `--rh-color-text-primary`    | `--rh-color-text-primary` |
 | Disclosure trigger button surface color | `--rh-color-surface-lighter` | `--rh-color-surface-dark` |

</rh-table>
