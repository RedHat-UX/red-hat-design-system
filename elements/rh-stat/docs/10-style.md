{% section %}
## Style
A statistic is a stacked combination of elements used to visualize a data point. 
By default, a statistic includes data text and body text **at a minimum**. 
Optional elements include an icon, title text, and a call to action for 
additional emphasis or context.

{% endsection %}
{% section %}

### Anatomy
{% example palette="light",
           alt="Anatomy of a statistic with annotations; number 1 is pointing to an optional icon, number 2 is pointing to optional title text, number 3 is pointing to data text, number 4 is pointing to body text, and number 5 is pointing to an optional call to action",
           src="../stat-anatomy.png" %}

1. Optional icon
2. Optional title text
3. Data text
4. Body text
5. Optional call to action
{.example-notes}

## Sizes
There are two available sizes and the only difference is the size of some 
elements.

{% example palette="light",
           alt="Default size and Large size statistics both with icons and body text; text under the default size says ‘Default size’ and text under the large size says ‘Large size’",
           src="../stat-sizes.png" %}

| Size    | Element        | Current Value |
| ------- | -------------- | ------------- |
| Default | Icon size      | 40px          |
| Default | Data text size | 36px  2.25rem |
| Large   | Icon size      | 64px          |
| Large   | Data text size | 48px  3.0rem  |

{.full-width}

## Theme

A statistic is available in both light and dark themes. The icon, title text, 
and data text for light theme are red whereas elements and text for dark theme 
(not including the call to action) are white to meet accessibility contrast 
requirements.

### Light theme

{% example
   palette="light",
   alt="Light theme statistic with a red icon, red data text, and black body text",
   src="../stat-theme-light.png" %}

### Dark theme

{% example
   palette="darkest",
   alt="Dark theme statistic with a white icon and white text styles to meet accessibility contrast requirements",
   src="../stat-theme-dark.png" %}


## Configuration
### Container

By default, all elements in a statistic, no matter how many, are all stacked and 
vertically aligned. In some situations, it is acceptable to align elements to 
the left, for example if grouped statistics are used in several rows or if 
surrounding content is all left aligned.

{% example
  palette="light",
  alt="Statistic with a dotted vertical line through it",
  src="../stat-configuration.png" %}

### Order
A statistic was designed to be read from top to bottom. If certain optional 
elements are included, the order will change.

{% example
  palette="light",
  alt="Statistic with boxes around each element slot, there are also numbers next to each box arranged 1 to 4 from top to bottom",
  src="../stat-configuration-order.png" %}

1. Icon (always ordered first if included)
2. Title text and data text (ordered first if there is no icon)
3. Body text (ordered last if there is no call to action)
4. Call to action (always ordered last if included)
{.example-notes}

## Space
Space values are the same for both Default and Large sizes and on all
breakpoints. To see space values when statistics are used in a layout,
go to the [Guidelines](../guidelines) page.

{% example 
  palette="light",
  alt="Default and Large size spacing between all elements",
  src="../stat-space.png" %}

| Spacer                                            | Current value |
| ------------------------------------------------- | ------------- |
| ![8px spacer](../stat-8px-spacer.png){width=17}   | 8px           |
| ![24px spacer](../stat-24px-spacer.png){width=24} | 24px          |

{.full-width}

## Interaction states
The optional call to action is the only interactive element. Go to the
[Call to action](../../call-to-action) page to view the interaction
states.
{% endsection %}
