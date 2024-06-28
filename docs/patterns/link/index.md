---
title: Link
order: 70
layout: layouts/pages/basic.njk
hasToc: true
tags:
- pattern
---

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css' | url }}">
<link rel="stylesheet" href="{{ '/styles/samp.css' | url }}">


## Overview

Links are navigational elements that allow a user to move between content, pages, and websites.


## Sample pattern

<uxdot-example width-adjustment="259px">
  <img src="{{ './example-links.svg' | url }}" alt="Link component examples">
</uxdot-example>


## Demo

View a live version of the Call to action link and see how it can be customized.

<rh-cta><a href="{{ '/elements/call-to-action/' | url }}">Customize component via Elements</a></rh-cta>


## Style

<uxdot-example width-adjustment="630px">
  <img src="{{ './link-blueprint.svg' | url }}" alt="Link component blueprint">
</uxdot-example>


### Variants

There are two link variants available for use.

- **Inline** - An Inline link can be used inside of text or a paragraph and allows a user to take a less important action.
- **Call to action** - A Call to action link can be used solo or near content and allows a user to take an important action.  


### Visual elements

Each link variant has different styles depending on how they are used with or without content.

- **Inline link** - Text with or without color or an underline.
- **External link** - Text with an external link icon to the right.
- **Primary or Secondary call to action link** - Bolded text inside of a background or border container.
- **Default call to action link** - Bolded text with an arrow or icon to the right.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Visit the <a href="{{ '/elements/call-to-action/' | url }}">Call to action</a> component page to see all available styles.</p>
</rh-alert>

<uxdot-example width-adjustment="584px">
  <img src="{{ './link-visual-elements.svg' | url }}" alt="Link component visual elements">
</uxdot-example>


### Text size

An Inline link can be applied to text used on its own at any size outside of a paragraph. When applied to text inside of a paragraph, it should match the size of the existing text.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Visit the <a href="{{ '/foundations/typography/' | url }}">Typography</a> page to see available text sizes.</p>
</rh-alert>


## Theme

### Light theme

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Visit the <a href="{{ '/elements/call-to-action/' | url }}">Call to action</a> component page to see light theme examples.</p>
</rh-alert>

<uxdot-example width-adjustment="770px">
  <img src="{{ './theme-light.svg' | url }}" alt="Link component, light theme">
</uxdot-example>


### Dark theme

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Visit the <a href="{{ '/elements/call-to-action/' | url }}">Call to action</a> component page to see dark theme examples.</p>
</rh-alert>

<uxdot-example color-palette="darkest" width-adjustment="770px">
  <img src="{{ './theme-dark.svg' | url }}" alt="Link component, dark theme"> 
</uxdot-example>


## Usage

Links should be applied when a user needs to jump to content on the same page, visit a page within the same domain, or visit a page within another domain.

<uxdot-example width-adjustment="752px">
  <img src="{{ './when-to-use.svg' | url }}" alt="Link component usage">
</uxdot-example>


### Content

Links are navigational elements, so any text needs to **accurately communicate the destination**. Inconsistent experiences might lead to distrust, lessening the satisfaction of a user during their journey. When writing link content, Inline links should be **descriptive** to help a user better understand the destination whereas Call to action links should be **action-oriented** to entice a user to make a selection.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Link content needs to be written clearly in order to be understood, therefore write <strong>no more than four or five words</strong> per link.</p>
</rh-alert>

<uxdot-example width-adjustment="752px">
  <img src="{{ './usage-content.svg' | url }}" alt="Link component usage, content">
</uxdot-example>  


### Character count

There is no maximum character count for a link. The link text should be long enough to be descriptive and no longer.


### Images

Photos or images can be links as long as there is supporting content nearby explaining that a selection can be made, like a headline, content, or Call to action link. Do not hide links in photos or images otherwise a user will miss the opportunity to make a selection if they cannot see the link.


### Buttons

Do not apply a link to an action that needs to be triggered instead, like submitting a form or changing a state.

<rh-alert state="default">
  <h4 slot="header">Learn more</h4>
  <p>Visit the <a href="{{ '/elements/button/' | url }}">Button</a> or <a href="{{ './patterns/form/' | url }}">Form</a> component pages to learn more about how to use buttons and forms.</p>
</rh-alert>

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>In a form, selecting a button will trigger an action whereas selecting a link will direct a user to another page.</p>
</rh-alert>

<uxdot-example width-adjustment="492px">
  <img src="{{ './usage-buttons.svg' | url }}" alt="Link component usage, buttons">
</uxdot-example>


## Behavior

### Internal pages

If a user selects a link within [redhat.com](https://www.redhat.com/en), they should be directed to content within the redhat.com domain. In this situation, a new tab or window is **not opened.**


### External pages

A user will be directed to another domain if they select an Inline link with an <b>external link icon</b>. For example, if a user needs to be directed to another website with different content or to complete a separate task, a new tab or window (depending on how their browser is configured) is opened so they may complete that task and then return to their original task.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Only Inline links can display an external link icon.</p>
</rh-alert>

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>If navigating to a new page in the same tab is very disruptive to the experience or workflow, have the page open in a new tab or window instead.</p>
</rh-alert>

<uxdot-example width-adjustment="508px">
  <img src="{{ './external-pages.svg' | url }}" alt="Link component, internal vs. external pages">
</uxdot-example>


## Interaction states

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Visit the <a href="{{ '/elements/call-to-action/' | url }}">Call to action</a> component page to see available interaction states.</p>
</rh-alert>


### Link

<uxdot-example width-adjustment="772px">
  <img src="{{ './interaction-state-link-light.svg' | url }}" alt="Link component interaction state, link (light theme)">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="772px">
  <img src="{{ './interaction-state-link-dark.svg' | url }}" alt="Link component interaction state, link (dark theme)">
</uxdot-example>


### Hover

<uxdot-example width-adjustment="772px">
  <img src="{{ './interaction-state-hover-light.svg' | url }}" alt="Link component interaction state, hover (light theme)">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="772px">
  <img src="{{ './interaction-state-hover-dark.svg' | url }}" alt="Link component interaction state, hover (dark theme)">
</uxdot-example>


### Focus

<uxdot-example width-adjustment="772px">
  <img src="{{ './interaction-state-focus-light.svg' | url }}" alt="Link component interaction state, focus (light theme)">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="772px">
  <img src="{{ './interaction-state-focus-dark.svg' | url }}" alt="Link component interaction state, focus (dark theme)">
</uxdot-example>


### Active

<uxdot-example width-adjustment="772px">
  <img src="{{ './interaction-state-active-light.svg' | url }}" alt="Link component interaction state, active (light theme)">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="772px">
  <img src="{{ './interaction-state-active-dark.svg' | url }}" alt="Link component interaction state, active (dark theme)">
</uxdot-example>


### Visited

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>A popover trigger can be a linked text, or it can be an icon. For example, when a popover is needed near a form field, using the question mark icon as a trigger is common, but utilizing it is not always a requirement.</p>
</rh-alert>

<uxdot-example width-adjustment="531px">
  <img src="{{ './interaction-state-visited-light.svg' | url }}" alt="Link component interaction state, visited (light theme)">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="531px">
  <img src="{{ './interaction-state-visited-dark.svg' | url }}" alt="Link component interaction state, visited (dark theme)">
</uxdot-example>


### Tab order

When the Tab key is pressed repeatedly, the focus highlights each Inline and Call to action link in order, from left to right and top to bottom.

<uxdot-example width-adjustment="666px">
  <img src="{{ './tab-order.svg' | url }}" alt="Link component tab order">
</uxdot-example>


### Accessibility

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Key">Key</th>
        <th scope="col" data-label="Action">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Key"><kbd>Tab</kbd></td>
        <td data-label="Action">Moves the focus to the next link.</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Shift + Tab</kbd></td>
        <td data-label="Action">Moves the focus to the previous link.</td>
      </tr>
      <tr>
        <td data-label="Key"><kbd>Enter</kbd></td>
        <td data-label="Action">Selects the link with focus.</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Responsive design

Both link variants mostly remain the same on large and small screens. Inline links will break to two lines if there is a lot of text in the paragraph.

### Desktop

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ './responsive-design-desktop.svg' | url }}" alt="Link component responsive design, desktop">
</uxdot-example>

### Tablet
    
<uxdot-example width-adjustment="768px" variant="full" alignment="left" no-border>
  <img src="{{ './responsive-design-tablet.svg' | url }}" alt="Link component responsive design, tablet">
</uxdot-example>
  
### Mobile

<uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
  <img src="{{ './responsive-design-mobile.svg' | url }}" alt="Link component responsive design, mobile">
</uxdot-example>

 
## Best practices

### Too many links

Do not apply lots of links to paragraph text otherwise a user will have trouble reading the content in its entirety before making a selection.

<uxdot-example width-adjustment="561px" danger>
  <img src="{{ './link-best-practice-1.svg' | url }}" alt="Link component best practice 1">
</uxdot-example>


### Different link variants

Do not use different link variants to direct a user to the same page.

<uxdot-example width-adjustment="561px" danger>
  <img src="{{ './link-best-practice-2.svg' | url }}" alt="Link component best practice 2">
</uxdot-example>


### Ambiguity

When writing link content, avoid ambiguous phrases or a full website URL. A user should have a clear idea of where they are being directed to before they make a selection.

<uxdot-example width-adjustment="455px" danger>
  <img src="{{ './link-best-practice-3.svg' | url }}" alt="Link component best practice 3">
</uxdot-example>


### Long links

Do not apply links to long strings of text.
    
<uxdot-example width-adjustment="561px" danger>
  <img src="{{ './link-best-practice-4.svg' | url }}" alt="Link component best practice 4">
</uxdot-example>


### Buttons

Buttons have different use cases and should not be used to promote offers or other content.

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>Visit the <a href="{{ '/elements/button/' | url }}">Button</a> component page to learn more about how to use buttons.</p>
</rh-alert>

<uxdot-example width-adjustment="309px" danger>
  <img src="{{ './link-best-practice-5.svg' | url }}" alt="Link component best practice 5">
</uxdot-example>    


### External link icon

Do not apply the external link icon to Call to action links.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Visit the <a href="{{ '/elements/call-to-action/' | url }}">Call to action</a> component page to learn more about how to use calls to action.</p>
</rh-alert>

<uxdot-example width-adjustment="398px" danger>
  <img src="{{ './link-best-practice-6.svg' | url }}" alt="Link component best practice 6">
</uxdot-example>


### Widows

The Default call to action link arrow and the external link icon should not appear by themselves, they should always be connected to at least one word on the same line.

<uxdot-example width-adjustment="360px" danger>
  <img src="{{ './link-best-practice-7.svg' | url }}" alt="Link component best practice 7">
</uxdot-example>


## Spacing

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Visit the <a href="{{ '/foundations/spacing/' | url }}">Spacing</a> page to see spacing values between link variants and other elements.</p>
</rh-alert>


{% include 'partials/component/feedback.html' %}
