## Style 
Accordion panels include title text, a chevron icon, body text, and other content. When a panel is collapsed, only the top and bottom borders are visible. When a panel is expanded, all borders are visible including a thicker left border for emphasis.

### Anatomy 
{% example palette="light",
          alt="Anatomy of an accordion with lots of annotations pointing to various parts",
          src="../accordion-anatomy.png" %}

1) Collapsed panel
2) Expanded panel
3) Title
4) Panel header region
5) Caret
6) Emphasis
7) Content
8) Panel body region
   {.example-notes}
### Sizes 
There are two available sizes and the only difference is the title text size. You can use the Small size on large breakpoints, but not the Large size on small breakpoints due to the potential of long title text wrapping to more than two lines.

{% example palette="light",
          alt="A large size accordion with text underneath saying ‘Large size’ and a small size accordion with text underneath saying ‘Small size’",
          src="../accordion-sizes.png" %}


## Theme 
An accordion is available in both light and dark themes. The light theme expanded panel includes a box shadow, but the dark theme does not.
### Light theme 
{% example palette="light",
          alt="Light theme accordion with an expanded panel",
          src="../accordion-theme-light.png" %}

### Dark theme 
{% example palette="dark",
          alt="Dark theme accordion with an expanded panel",
          src="../accordion-theme-dark.png" %}

## Configuration 
An expanded panel does not have a maximum height, but it may scroll if constrained by vertical space. The width of an accordion varies based on content and page layout. Title text and icons are horizontally aligned.

{% example palette="light",
          alt="How an accordion is constructed showing alignment, space, scrolling, and width details",
          src="../accordion-configuration.png" %}

### Nested panels 
Panels can be nested to help organize complex or granular sections of content.

{% example palette="light",
          alt="An accordion with an expanded panel and a nested expanded panel",
          src="../accordion-nested-panels.png" %}

### Stacked panels 
Multiple panels can be expanded simultaneously even when nested.

{% example palette="light",
          alt="An accordion with one collapsed panel on top and two stacked expanded panels below",
          src="../accordion-stacked-panels.png" %}

## Space 
{% example palette="light",
          alt="Accordion spacing within panels and in between elements like titles, body text, rules, and icons",
          src="../accordion-space.png" %}

| Spacer | Current value |
| ------ | ------ |
| ![16px spacer]({{ '../accordion-16px-spacer.png' | url }}){width=16} | `16px 1.0rem` |
| ![24px spacer]({{ '../accordion-24px-spacer.png' | url }}){width=24}  | `24px 1.5rem` |
| ![48px spacer]({{ '../accordion-48px-spacer.png' | url }}){width=48}  | `48px 3.0rem` |

{# 
    Uncomment when css prop table PR is merged   
    {% spacerTokensTable 
      tokens="--rh-space-lg, --rh-space-xl, --rh-space-3xl" 
    %}
  #}
  
## Interaction states 
Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover 
{% example palette="light",
          alt="Light theme accordion hover state examples",
          src="../accordion-hover-theme-light.png" %}

{% example palette="dark",
          alt="Dark theme accordion hover state example",
          src="../accordion-hover-theme-dark.png" %}

| Property | Light theme | Dark theme |
| -------- | -------- | -------- |
| Color - panel header | `#F2F2F2` | `#292929` |

### Focus 
{% example palette="light",
          alt="Light theme accordion focus state examples",
          src="../accordion-focus-theme-light.png" %}

{% example palette="dark",
          alt="Dark theme accordion focus state example",
          src="../accordion-focus-theme-dark.png" %}

| Property | Light theme | Dark theme |
| -------- | -------- | -------- |
| Color - panel header | `#F2F2F2` | `#292929` |
| Color - focus ring | `#0066CC` | `#73BCF7` |


### Active 
{% example palette="light",
          alt="Light theme accordion active state examples",
          src="../accordion-active-theme-light.png" %}

{% example palette="dark",
          alt="Dark theme accordion active state example",
          src="../accordion-active-theme-dark.png" %}

| Property | Light theme | Dark theme |
| -------- | -------- | -------- |
| Color - panel header | `#F2F2F2` | `#292929` |
| Color - focus ring | `#0066CC` | `#73BCF7` |