## Style
A blockquote is a combination of elements used to give visual prominence 
to a quotation. By default, a blockquote includes a quote icon, quotation 
text, and citation text <strong>at a minimum</strong>. A blockquote may 
also include the following optional elements:
 - Emphasis border
 - Logo
 - Title and heading text
 - Interactive elements or layouts like a video or card


{% example palette="light",
           class="centered",
           alt="Anatomy image of a blockquote with numbered annotations",
           src="../blockquote-anatomy.png" %}{% endexample %}

1. Quote icon
2. Quotation text
3. Citation text
4. Logo or text placeholder
5. Emphasis border
  {.example-notes}

## Sizes

{% example palette="light",
           class="centered",
           alt="Image of two blockquotes, default size on the left and large size on the right",
           src="../blockquote-style-sizes.png" %}{% endexample %}

{% tokensTable %}

| Size              | Element                 | Current value  |
|-------------------|-------------------------|----------------|
| Default           | Text size - quotation   | 20px, 1.25rem  |
| Default           | Line height - quotation | 30 (1.5)       |
| Large             | Text size - quotation   | 28px, 1.75rem  |
| Large             | Line height - quotation | 36.4 (1.3)     |
| Default and Large | Text size - citation    | 14px, 0.875rem |
| Default and Large | Line height - citation  | 21 (1.5)       |

{.full-width}

{% endtokensTable %}

## Theme

A blockquote is available in both light and dark themes.

### Light theme

{% example palette="light",
           class="centered",
           alt="Image of a light theme blockquote, red quote icon, black quotation text, and dark gray citation text",
           src="../blockquote-theme-light.png" %}{% endexample %}

{% tokensTable %}

| Property               | Current value |
|------------------------|---------------|
| Color - quote icon     | #EE0000       |
| Color - quotation text | #151515       |
| Color - citation text  | #4D4D4D       |

{.full-width}

{% endtokensTable %}

### Dark theme

{% example palette="darkest",
           class="centered",
           alt=" Image of a dark theme blockquote, red quote icon, white quotation text, and light gray citation text",
           src="../blockquote-theme-dark.png" %}{% endexample %}

{% tokensTable %}

| Property               | Current value |
|------------------------|---------------|
| Color - quote icon     | #FF542E       |
| Color - quotation text | #FFFFFF       |
| Color - citation text  | #C7C7C7       |

{.full-width}

{% endtokensTable %}

### Emphasis border

{% example palette="light",
           class="centered",
           alt="Image of two blockquotes, a red emphasis border on the left and a black emphasis border on the right",
           src="../blockquote-emphasis-theme-light.png" %}{% endexample %}

{% example palette="darkest",
           class="centered",
           alt="Image of two blockquotes, a red emphasis border on the left and a black emphasis border on the right",
           src="../blockquote-emphasis-theme-dark.png" %}{% endexample %}

{% tokensTable %}

| Emphasis level | Light theme | Dark theme |
|----------------|-------------|------------|
| Primary        | #EE0000     | #FF542E    |
| Secondary      | #151515     | #FFFFFF    |

{.full-width}

{% endtokensTable %}

### Title and heading text

{% example palette="light",
           class="centered",
           alt="Image of two blockquotes, both with red title text and black header text",
           src="../blockquote-title-heading-theme-light.png" %}{% endexample %}

{% example palette="darkest",
           class="centered",
           alt="Image of two blockquotes, both with red title text and white header text",
           src="../blockquote-title-heading-theme-dark.png" %}{% endexample %}

{% tokensTable %}

| Element      | Light theme | Dark theme |
|--------------|-------------|------------|
| Title text   | #EE0000     | #FF542E    |
| Heading text | #151515     | #FFFFFF    |

{.full-width}

{% endtokensTable %}

## Configuration

The base elements in both sizes are stacked and left aligned by default, but they can be vertically centered if necessary.

{% example palette="light",
           class="centered",
           alt="Image of four blockquotes, two are left aligned and two are vertically centered, the quote icon is 20px tall",
           src="../blockquote-configuration.png" %}{% endexample %}

### Order
A blockquote was designed to be read from top to bottom. If certain optional elements are included, the order will change.

{% example palette="light",
           class="centered",
           alt="Image of a blockquote with numbers 1 - 4 on the right side going from top to bottom",
           src="../blockquote-configuration.png" %}{% endexample %}

1. Logo or text (always ordered first if included)
2. Quotate icon (always included and ordered first if there is no logo or text)
3. Quotation text (always ordered after the quote icon)
4. Citation text (always ordered last)
  {.example-notes}

### Citation text
Citation text has specific styles applied to it.

{% example palette="light",
           class="centered",
           alt="Image of three citation text examples",
           src="../blockquote-configuration-citation.png" %}{% endexample %}

{% tokensTable %}

| Property                            | Current value |
|-------------------------------------|---------------|
| Font family - all text              | Red Hat Text  |
| Font weight - name                  | Medium        |
| Font weight - job title and company | Regular       |
| Font style - company                | Italic        |

 {.full-width}

{% endtokensTable %}


## Space
Space values are the same in both sizes and on all breakpoints.

{% example palette="light",
           class="centered",
           alt="Image of four blockquotes with spacing values in between",
           src="../blockquote-space.png" %}{% endexample %}

{% spacerTokensTable 
  headline="",
  caption='',
  headingLevel="4",
  tokens="--rh-space-md, --rh-space-lg, --rh-space-2xl" %}
{% endspacerTokensTable %}

## Interaction states
A blockquote includes text only and is not interactive unless interactive elements are added like a video or other elements within a card. If interactive elements are added, go to their element or pattern pages to view the interaction states.

