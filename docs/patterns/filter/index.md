---
title: Filter
tags:
  - pattern
---

## Overview

A Filter gives users the ability to sort a results listing by turning on and off predetermined tags. They feature a list of checkboxes and text that are wrapped in an accordion or a disclosure.

## Sample pattern

<div class="multi-column--300-wide"><div>
    {% example palette="none",
          alt="Example of a filter using an accordion",
          src="./filter-sample-1.svg" %}
  </div><div>
    {% example palette="none",
          alt="Example of a filter using a disclosure",
          src="./filter-sample-2.svg" %}
</div></div>

{% repoStatus %}

## Style
    
A filter can be used in the light theme only. It features a list of checkboxes and text that are wrapped in an [Accordion](../accordion) or a [Disclosure](../disclosure). Content categories can be represented by accordion panels that users can expand to view the checkboxes inside. When one or more checkboxes are selected, a button will appear that gives users the option to reset their selections.


{% example palette="light",
      alt="Filter component with different parts labeled",
      src="./filter-style-1.svg" %}


## Usage

  
A filter helps users narrow down pages of data into customized results. Accordions are used to organize content into categories and checkboxes are used to display specific content tags.

### Selection methods
  
A filter has several selection methods that enable users to narrow down what they’re looking for. This improves usability and efficiency by reducing the amount of time that users spend searching for something.


<div class="multi-column--min-300-wide"><div>
    {% example palette="light",
      alt="Expanded disclosure panel with one checkbox",
      src="./filter-usage-1.svg" %}

    A user can select one or multiple tags to sort by in one category
    {.example-notes}

  </div><div>
    {% example palette="light",
      alt="Expanded accordion panels with multiple checkboxes selected",
      src="./filter-usage-2.svg" %}

    A user can select multiple tags to sort by in multiple categories
    {.example-notes}

</div></div>

### Content area
  
When a category panel is expanded, only the tags that are available are displayed.

### Layout
  
On large screens, a filter is placed in the left aside region of a page whereas on small screens, it’s placed under the search field. A filter is aligned to the top edge of the content set on large screens which makes it easy for users to search for something and filter the results simultaneously.

## Best practices

  
Even when used in a filter, accordions still require at least two panels. If only one panel is needed, use a disclosure instead.

{% example palette="wrong",
          alt="A filter using an accordion instead of a disclosure even though it has only one panel",
          src="./filter-best-practices-1.svg" %}

  
Don’t change the width of a filter on large screens because the aside region is already a fixed width.

{% example palette="wrong",
        alt="A filter that is abnormally wide on desktop",
        src="./filter-best-practices-2.svg" %}

## Behavior

### States
  
By default, a filter loads with all category panels collapsed, enabling users to get a high-level overview of the available content, but this can be customized. Category panels have collapsed and expanded states that hide or reveal tags when toggled.

{% example palette="light",
        alt="Two filters showing collapsed and expanded states of the enclosed accordions",
        src="./filter-behavior-1.svg" %}

### Multiple panels
  
Multiple category panels can be expanded simultaneously or stack. Expanding one panel doesn’t collapse another which makes it easy for users to search for and filter content in the same view.

{% example palette="light",
        alt="Two filters, one showing an expanded accordion panel and one showing two expanded accordion panels",
        src="./filter-behavior-2.svg" %}

### Selecting checkboxes
  
A filter is also required to load with all checkboxes unselected which means that a result set is displayed all at once. The amount of content narrows down as more checkboxes are selected. When a user selects one or more checkboxes, the list and the content set will refresh to display any content with the corresponding tags. The bar above the accordion will also display the number of checkboxes that are currently selected.

{% example palette="light",
        alt="Two accordions, one showing an expanded accordion with unselected checkboxes, and one showing selected checkboxes.",
        src="./filter-behavior-3.svg" %}

### Progressive disclosure
  
If there are more than 10 checkboxes in one category panel, not all of them should be displayed. An Expand to see more tags label can be added at the bottom of the list of checkboxes that acts a progressive disclosure. When selected, it reveals an additional five checkboxes until all checkboxes are displayed.

{% example palette="light",
        alt="A filter showing 10 checkboxes and an link to see more",
        src="./filter-behavior-4.svg" %}

### Clear all button
  
When one or more checkboxes are selected, a button appears above the accordion that allows a user to reset the filter. Pressing this button will deselect every checkbox, collapse every category panel, and revert the content set back to displaying everything.

### Responsive design
  
When a filter is used on screens that are smaller than 768px wide, it stretches to fit the entire grid column and the top bar turns into a disclosure which hides or reveals the filter.

## Responsive design
### Breakpoints
  
A filter can work well in a variety of layouts. On small screens, it stretches to fit the entire grid column. Otherwise, it’s placed in the same layout as the content set.

{% example palette="light",
      alt="A filter that stretches across the entire grid",
      src="./filter-responsive-1.svg" %}

### Desktop
  {% example palette="none",
           alt="A filter on desktop taking up almost 4 columns",
           src="./filter-responsive-2.svg" %}

### Tablet
  {% example palette="none",
           alt="A filter on a tablet taking up the full width",
           src="./filter-responsive-3.svg" %}

### Mobile
  {% example palette="none",
           alt="A filter on a mobile device taking up the full width",
           src="./filter-responsive-4.svg" %}

## Interaction states

A filter is a collection of components and the interaction states remain the same for each, like accordion, disclosure, button, and [Data inputs](../form).

### Default
{% example palette="none",
      alt="Example of expanded accordions with filter checkboxes",
      src="./filter-interaction-1.svg" %}

### Focus
{% example palette="none",
      alt="Example of focus states for filters",
      src="./filter-interaction-2.svg" %}

### Hover
{% example palette="none",
      alt="Example of hover states for filters",
      src="./filter-interaction-3.svg" %}

### Tab order
  
When the Tab key is pressed repeatedly, the focus indicator moves from top to bottom. When a category panel is expanded, checkboxes and text are added to the tab order before the focus indicator reaches the next panel.

{% example palette="light",
    alt="Example of interaction states for a filter",
    src="./filter-interaction-4.svg" %}

## Spacing

A filter uses [space tokens](/tokens/space/) to define spacing 
values between elements.

{% spacerTokensTable 
  headline="",
  caption='',
  headingLevel="4",
  tokens="--rh-space-xs, --rh-space-sm,--rh-space-lg, --rh-space-xl" %}
{% endspacerTokensTable %}

{% example palette="light",
            alt="A filter with spacers",
            src="./filter-spacing-1.svg" %}

{% include 'layouts/snippets/feedback.html' %}