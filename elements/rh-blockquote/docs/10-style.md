## Style
A blockquote is a combination of elements used to give visual prominence 
to a quotation. By default, a blockquote includes a quote icon, quotation 
text, and citation text <strong>at a minimum</strong>. A blockquote may 
also include the following optional elements:
 - Emphasis border
 - Logo
 - Title and heading text
 - Interactive elements or layouts like a video or card


![Anatomy image of a blockquote with numbered annotations]({{ '../blockquote-anatomy.png' | url }}) {style="margin-block:var(--rh-space-2xl);--inline-img-max-width:653px;"}
1. Quote icon
2. Quotation text
3. Citation text
4. Logo or text placeholder
5. Emphasis border

## Sizes

![Image of two blockquotes, default size on the left and large size on the right]({{ '../blockquote-style-sizes.png' | url }}) {style="margin-block:var(--rh-space-2xl);--inline-img-max-width:872px;"}

<table style="width:100%">
    <tr>
        <th>Size</th>
        <th>Element</th>
        <th>Current value</th>
    </tr>
    <tr>
        <td>Default</td>
        <td>Text size - quotation</td>
        <td>20px,<br> 1.25rem</td>
    </tr>
    <tr>
        <td>Default</td>
        <td>Line height - quotation</td>
        <td>30 (1.5)</td>
    </tr>
    <tr>
        <td>Large</td>
        <td>Text size - quotation</td>
        <td>28px,<br> 1.75rem</td>
    </tr>
    <tr>
        <td>Large</td>
        <td>Line height - quotation</td>
        <td>36.4 (1.3)</td>
    </tr>
    <tr>
        <td>Default and Large</td>
        <td>Text size - citation</td>
        <td>14px,<br> 0.875rem</td>
    </tr>
    <tr>
        <td>Default and Large</td>
        <td>Line height - citation</td>
        <td>21 (1.5)</td>
    </tr>
</table>

## Theme

A blockquote is available in both light and dark themes.

### Light theme

{% example palette="light",
           width=589,
           class="centered",
           alt="Image of a light theme blockquote, red quote icon, black quotation text, and dark gray citation text",
           src="../blockquote-theme-light.png" %}


<table style="width:100%">
    <tr>
        <th>Property</th>
        <th>Current value</th>
    </tr>
    <tr>
        <td>Color - quote icon</td>
        <td>#EE0000</td>
    </tr>
    <tr>
        <td>Color - quotation text</td>
        <td>#151515</td>
    </tr>
    <tr>
        <td>Color - citation text</td>
        <td>#4D4D4D</td>
    </tr>
</table>

### Dark theme

{% example palette="darkest",
           width=589,
           class="centered",
           alt=" Image of a dark theme blockquote, red quote icon, white quotation text, and light gray citation text",
           src="../blockquote-theme-dark.png" %}

<table style="width:100%">
    <tr>
        <th>Property</th>
        <th>Current value</th>
    </tr>
    <tr>
        <td>Color - quote icon</td>
        <td>#FF542E</td>
    </tr>
    <tr>
        <td>Color - quotation text</td>
        <td>#FFFFFF</td>
    </tr>
    <tr>
        <td>Color - citation text</td>
        <td>#C7C7C7</td>
    </tr>
</table>

### Emphasis border

{% example palette="light",
           width=872,
           class="centered",
           alt="Image of two blockquotes, a red emphasis border on the left and a black emphasis border on the right",
           src="../blockquote-emphasis-theme-light.png" %}

{% example palette="darkest",
           width=872,
           class="centered",
           alt="Image of two blockquotes, a red emphasis border on the left and a black emphasis border on the right",
           src="../blockquote-emphasis-theme-dark.png" %}

<table style="width:100%">
    <tr>
        <th>Emphasis level</th>
        <th>Light theme</th>
        <th>Dark theme</th>
    </tr>
    <tr>
        <td>Primary</td>
        <td>#EE0000</td>
        <td>#FF542E</td>
    </tr>
    <tr>
        <td>Secondary</td>
        <td>#151515</td>
        <td>#FFFFFF</td>
    </tr>
</table>

### Title and heading text

{% example palette="light",
           width=872,
           class="centered",
           alt="Image of two blockquotes, both with red title text and black header text",
           src="../blockquote-title-heading-theme-light.png" %}

{% example palette="darkest",
           width=872,
           class="centered",
           alt="Image of two blockquotes, both with red title text and white header text",
           src="../blockquote-title-heading-theme-dark.png" %}

<table style="width:100%">
    <tr>
        <th>Element</th>
        <th>Light theme</th>
        <th>Dark theme</th>
    </tr>
    <tr>
        <td>Title text</td>
        <td>#EE0000</td>
        <td>#FF542E</td>
    </tr>
    <tr>
        <td>Heading text</td>
        <td>#151515</td>
        <td>#FFFFFF</td>
    </tr>
</table>

## Configuration

The base elements in both sizes are stacked and left aligned by default, but they can be vertically centered if necessary.

{% example palette="light",
           width=872,
           class="centered",
           alt="Image of four blockquotes, two are left aligned and two are vertically centered, the quote icon is 20px tall",
           src="../blockquote-configuration.png" %}

### Order
A blockquote was designed to be read from top to bottom. If certain optional elements are included, the order will change.

{% example palette="light",
           width=693,
           class="centered",
           alt="Image of a blockquote with numbers 1 - 4 on the right side going from top to bottom",
           src="../blockquote-configuration.png" %}
1. Logo or text (always ordered first if included)
2. Quotate icon (always included and ordered first if there is no logo or text)
3. Quotation text (always ordered after the quote icon)
4. Citation text (always ordered last)

### Citation text
Citation text has specific styles applied to it.

{% example palette="light",
           width=349,
           class="centered",
           alt="Image of three citation text examples",
           src="../blockquote-configuration-citation.png" %}

<table style="width:100%">
    <tr>
        <th>Property</th>
        <th>Current value</th>
    </tr>
    <tr>
        <td>Font family - all text</td>
        <td>Red Hat Text</td>
    </tr>
    <tr>
        <td>Font weight - name</td>
        <td>Medium</td>
    </tr>
    <tr>
        <td>Font weight - job title and company</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>Font style - company</td>
        <td>Italic</td>
    </tr>
</table>

## Space
Space values are the same in both sizes and on all breakpoints.

{% example palette="light",
           width=872,
           class="centered",
           alt="Image of four blockquotes with spacing values in between",
           src="../blockquote-space.png" %}

<table style="width:100%">
    <tr>
        <th>Space</th>
        <th>Current value</th>
    </tr>
    <tr>
        <td>{% example palette="light",
           width=17,
           class="centered",
           alt="8px spacer",
           src="../blockquote-8px-spacer.png" %}
        </td>
        <td>8px<br>0.5rem</td>
    </tr>
    <tr>
        <td>{% example palette="light",
           width=16,
           class="centered",
           alt="8px spacer",
           src="../blockquote-16px-spacer.png" %}
        </td>
        <td>16px<br>1.0rem</td>
    </tr>
    <tr>
        <td>{% example palette="light",
           width=16,
           class="centered",
           alt="8px spacer",
           src="../blockquote-32px-spacer.png" %}
        </td>
        <td>32px<br>2.0rem</td>
    </tr>
</table>


## Interaction states
A blockquote includes text only and is not interactive unless interactive elements are added like a video or other elements within a card. If interactive elements are added, go to their element or pattern pages to view the interaction states.

