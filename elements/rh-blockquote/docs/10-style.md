## Style

A blockquote is a combination of elements used to give visual prominence 
to a quotation. By default, a blockquote includes a quote icon, quotation 
text, and citation text <strong>at a minimum</strong>. A blockquote may 
also include the following optional elements:

 - Emphasis border
 - Logo
 - Title and heading text
 - Interactive elements or layouts like a video or card

<figure>
  <uxdot-example width-adjustment="653px">
    <img alt="Anatomy image of a blockquote with numbered annotations"
         src="../blockquote-anatomy.png"
         width="653"
         height="530">
  </uxdot-example>
  <figcaption>

1.  Quote icon
2.  Quotation text
3.  Citation text
4.  Logo or text placeholder
5.  Emphasis border

  </figcaption>
</figure>

## Sizes

<uxdot-example width-adjustment="872px">
  <img alt="Image of two blockquotes, default size on the left and large size on the right"
       src="../blockquote-style-sizes.png"
       width="872"
       height="350">
</uxdot-example>

<rh-table>

| Size              | Element               | Current value |
|-------------------|-----------------------|---------------|
| Default           | Text size - quotation | 20px, 1.25rem |
| Default           | 30 (1.5)              |               |
| Large             | 28px, 1.75rem         |               |
| Large             | 36.4 (1.3)            |               |
| Default and Large | 14px, 0.875rem        |               |
| Default and Large | 21 (1.5)              |               |

</rh-table>

## Theme

A blockquote is available on both light and dark backgrounds, and uses [themable
tokens][/theming/color-palettes] to respond to it's color context.

<rh-table>

| Element                | Current value                              |
| ---------------------- | ------------------------------------------ |
| Color - quote icon     | `--rh-color-icon-primary`                  |
| Color - quotation text | `--rh-color-text-primary`                  |
| Color - citation text  | `--rh-color-interactive-secondary-default` |

</rh-table>

### Light theme

<uxdot-example width-adjustment="589px">
  <img alt="Image of a light theme blockquote, red quote icon, black quotation text, and dark gray citation text"
       src="../blockquote-theme-light.png"
       width="589"
       height="177">
</uxdot-example>

### Dark theme

<uxdot-example color-palette="darkest" width-adjustment="589px">
  <img alt="Image of a dark theme blockquote, red quote icon, white quotation text, and light gray citation text"
       src="../blockquote-theme-dark.png"
       width="589"
       height="177">
</uxdot-example>

### Emphasis border

<uxdot-example width-adjustment="872px">
  <img alt="Image of two blockquotes, a red emphasis border on the left and a black emphasis border on the right"
       src="../blockquote-emphasis-theme-light.png"
       width="872"
       height="260">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Image of two blockquotes, a red emphasis border on the left and a black emphasis border on the right"
       src="../blockquote-emphasis-theme-dark.png"
       width="872"
       height="260">
</uxdot-example>

<rh-table>

| Emphasis level | Token                        |
| -------------- | ---------------------------- |
| Primary        | `--rh-color-accent-brand`    |
| Secondary      | `--rh-color-surface-darkest` |

</rh-table>

### Title and heading text

<uxdot-example width-adjustment="872px">
  <img alt="Image of two blockquotes, both with red title text and black header text"
       src="../blockquote-title-heading-theme-light.png"
       width="872"
       height="356">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img alt="Image of two blockquotes, both with red title text and white header text"
       src="../blockquote-title-heading-theme-dark.png"
       width="872"
       height="356">
</uxdot-example>

<rh-table>

| Element      | Light theme               |
| ------------ | ------------------------- |
| Title text   | `--rh-color-accent-brand` |
| Heading text | `--rh-color-text-primary` |

</rh-table>

## Configuration

The base elements in both sizes are stacked and left aligned by default, but they can be vertically centered if necessary.

<uxdot-example width-adjustment="872px">
  <img alt="Image of four blockquotes, two are left aligned and two are vertically centered, the quote icon is 20px tall"
       src="../blockquote-configuration.png"
       width="872"
       height="615">
</uxdot-example>

### Order

A blockquote was designed to be read from top to bottom. If certain optional elements are included, the order will change.

<figure>
  <uxdot-example width-adjustment="872px">
    <img alt="Image of a blockquote with numbers 1 - 4 on the right side going from top to bottom"
         src="../blockquote-configuration.png" 
         width="872"
         height="615">
  </uxdot-example>
  <figcaption>

1.  Logo or text (always ordered first if included)
2.  Quotate icon (always included and ordered first if there is no logo
    or text)
3.  Quotation text (always ordered after the quote icon)
4.  Citation text (always ordered last)

  </figcaption>
</figure>

### Citation text

Citation text has specific styles applied to it.

<uxdot-example width-adjustment="349px">
  <img src="../blockquote-configuration-citation.png"
       alt="Image of three citation text examples"
       width="349"
       height="181">
</uxdot-example>

<rh-table>

| Property                            | Token or value                       |
| ----------------------------------- | ------------------------------------ |
| Font family - all text              | `--rh-font-family-body-text`         |
| Font weight - name                  | `--rh-font-weight-body-text-medium`  |
| Font weight - job title and company | `--rh-font-weight-body-text-regular` |
| Font style - company                | Italic                               |

</rh-table>

## Space

Space values are the same in both sizes and on all breakpoints.

<uxdot-example width-adjustment="872px">
  <img src="../blockquote-space.png"
       alt="Image of four blockquotes with spacing values in between"
       width="872"
       height="642">
</uxdot-example>

<rh-table>
{% spacerTokensTable 
  headline="",
  caption='',
  headingLevel="4",
  tokens="--rh-space-md, --rh-space-lg, --rh-space-2xl" %}
{% endspacerTokensTable %}
</rh-table>

## Interaction states

A blockquote includes text only and is not interactive unless interactive elements are added like a video or other elements within a card. If interactive elements are added, go to their element or pattern pages to view the interaction states.

