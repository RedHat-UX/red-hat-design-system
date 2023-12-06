---
title: Link
layout: layout-basic.njk
tags:
- pattern
---

## Overview

Links are navigational elements that allow a user to move between content, pages, and websites.

## Sample pattern

{% example palette="none",
           alt="Link component examples",
           src="./example-links.svg" %}

{% repoStatus %}

## Demo

View a live version of the Call to action link and see how it can be customized.

{% cta href="/elements/call-to-action/", target="_blank" %}
  Customize component via Elements
{% endcta %}

## Style

{% example palette="lightest",
           alt="Link component blueprint",
           src="./link-blueprint.svg" %}

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

{% alert title="See more", state="default" %}
Visit the [Call to action](https://ux.redhat.com/elements/call-to-action/) component page to see all available styles.
{% endalert %}

{% example palette="lightest",
           alt="Link component visual elements",
           src="./link-visual-elements.svg" %}

### Text size

An Inline link can be applied to text used on its own at any size outside of a paragraph. When applied to text inside of a paragraph, it should match the size of the existing text.

{% alert title="See more", state="default" %}
Visit the [Typography](https://ux.redhat.com/foundations/typography/) page to see available text sizes.
{% endalert %}

## Theme

### Light theme

{% alert title="See more", state="default" %}
Visit the [Call to action](https://ux.redhat.com/elements/call-to-action/) component page to see light theme examples.
{% endalert %}

{% example palette="lightest",
           alt="Link component, light theme",
           src="./theme-light.svg" %}

### Dark theme

{% alert title="See more", state="default" %}
Visit the [Call to action](https://ux.redhat.com/elements/call-to-action/) component page to see dark theme examples.
{% endalert %}

{% example palette="darkest",
           alt="Link component, light theme",
           src="./theme-dark.svg" %}

## Usage

Links should be applied when a user needs to jump to content on the same page, visit a page within the same domain, or visit a page within another domain.

{% example palette="lightest",
           alt="Link component usage",
           src="./when-to-use.svg" %}

### Content

Links are navigational elements, so any text needs to **accurately communicate the destination**. Inconsistent experiences might lead to distrust, lessening the satisfaction of a user during their journey. When writing link content, Inline links should be **descriptive** to help a user better understand the destination whereas Call to action links should be **action-oriented** to entice a user to make a selection.

{% alert title="Warning", state="warning" %}
Link content needs to be written clearly in order to be understood, therefore write **no more than four or five words** per link.
{% endalert %}
  
{% example palette="lightest",
           alt="Link component usage, content",
           src="./usage-content.svg" %}

### Character count

There is no maximum character count for a link. The link text should be long enough to be descriptive and no longer.

### Images

Photos or images can be links as long as there is supporting content nearby explaining that a selection can be made, like a headline, content, or Call to action link. Do not hide links in photos or images otherwise a user will miss the opportunity to make a selection if they cannot see the link.

### Buttons

Do not apply a link to an action that needs to be triggered instead, like submitting a form or changing a state.

{% alert title="Learn more", state="default" %}
Visit the [Button](https://ux.redhat.com/elements/button/) or [Form](https://ux.redhat.com/patterns/form/) component pages to learn more about how to use buttons and forms.
{% endalert %}

{% alert title="Helpful tip" %}
In a form, selecting a button will trigger an action whereas selecting a link will direct a user to another page.
{% endalert %}

{% example palette="lightest",
           alt="Link component usage, buttons",
           src="./usage-buttons.svg" %}

## Behavior

### Internal pages

If a user selects a link within [redhat.com](https://www.redhat.com/en), they should be directed to content within the redhat.com domain. In this situation, a new tab or window is **not opened.**

### External pages

A user will be directed to another domain if they select an Inline link with an <b>external link icon</b>. For example, if a user needs to be directed to another website with different content or to complete a separate task, a new tab or window (depending on how their browser is configured) is opened so they may complete that task and then return to their original task.

{% alert title="Helpful tip" %}
Only Inline links can display an external link icon.
{% endalert %}

{% alert title="See more", state="warning" %}
If navigating to a new page in the same tab is very disruptive to the experience or workflow, have the page open in a new tab or window instead.
{% endalert %}

{% example palette="lightest",
           alt="Link component, internal vs. external pages",
           src="./external-pages.svg" %}

## Interaction states

{% alert title="See more", state="default" %}
Visit the [Call to action](https://ux.redhat.com/elements/call-to-action/) component page to see available interaction states.
{% endalert %}

### Link

{% example palette="lightest",
           alt="Link component interaction state, link (light theme)",
           src="./interaction-state-link-light.svg" %}

{% example palette="darkest",
           alt="Link component interaction state, link (dark theme)",
           src="./interaction-state-link-dark.svg" %}

### Hover

{% example palette="lightest",
           alt="Link component interaction state, hover (light theme)",
           src="./interaction-state-hover-light.svg" %}

{% example palette="darkest",
           alt="Link component interaction state, hover (dark theme)",
           src="./interaction-state-hover-dark.svg" %}

### Focus

{% example palette="lightest",
           alt="Link component interaction state, focus (light theme)",
           src="./interaction-state-focus-light.svg" %}

{% example palette="darkest",
           alt="Link component interaction state, focus (dark theme)",
           src="./interaction-state-focus-dark.svg" %}

### Active

{% example palette="lightest",
           alt="Link component interaction state, active (light theme)",
           src="./interaction-state-active-light.svg" %}

{% example palette="darkest",
           alt="Link component interaction state, active (dark theme)",
           src="./interaction-state-active-dark.svg" %}

### Visited

{% alert title="Helpful tip" %}
A popover trigger can be a linked text, or it can be an icon. For example, when a popover is needed near a form field, using the question mark icon as a trigger is common, but utilizing it is not always a requirement.
{% endalert %}

{% example palette="lightest",
           alt="Link component interaction state, visited (light theme)",
           src="./interaction-state-visited-light.svg" %}

{% example palette="darkest",
           alt="Link component interaction state, visited (dark theme)",
           src="./interaction-state-visited-dark.svg" %}

### Tab order

When the Tab key is pressed repeatedly, the focus highlights each Inline and Call to action link in order, from left to right and top to bottom.

{% example palette="lightest",
           alt="Link component tab order",
           src="./tab-order.svg" %}

### Accessibility

| Key         | Action                                |
| ----------- | ------------------------------------- |
| Tab         | Moves the focus to the next link.     |
| Shift + Tab | Moves the focus to the previous link. |
| Enter       | Selects the link with focus.          |

## Responsive design

Both link variants mostly remain the same on large and small screens. Inline links will break to two lines if there is a lot of text in the paragraph.

### Desktop

{% example palette="none",
           alt="Link component responsive design, desktop",
           src="./responsive-design-desktop.svg" %}

### Tablet
    
{% example palette="none",
           alt="Link component responsive design, tablet",
           src="./responsive-design-tablet.svg" %}
  
### Mobile

{% example palette="none",
           alt="Link component responsive design, mobile",
           src="./responsive-design-mobile.svg" %}
 
## Best practices

### Too many links

Do not apply lots of links to paragraph text otherwise a user will have trouble reading the content in its entirety before making a selection.

{% example palette="wrong",
           alt="Link component best practice 1",
           src="./link-best-practice-1.svg" %}

### Different link variants

Do not use different link variants to direct a user to the same page.
    
{% example palette="wrong",
           alt="Link component best practice 2",
           src="./link-best-practice-2.svg" %}

### Ambiguity

When writing link content, avoid ambiguous phrases or a full website URL. A user should have a clear idea of where they are being directed to before they make a selection.

{% example palette="wrong",
           alt="Link component best practice 3",
           src="./link-best-practice-3.svg" %}

### Long links

Do not apply links to long strings of text.
    
{% example palette="wrong",
           alt="Link component best practice 4",
           src="./link-best-practice-4.svg" %}

### Buttons

Buttons have different use cases and should not be used to promote offers or other content.

{% alert title="Learn more", state="default" %}
Visit the [Button](https://ux.redhat.com/elements/button/) component page to learn more about how to use buttons.
{% endalert %}
    
{% example palette="wrong",
           alt="Link component best practice 5",
           src="./link-best-practice-5.svg" %}

### External link icon

Do not apply the external link icon to Call to action links.

{% alert title="Learn more", state="default" %}
Visit the [Call to action](https://ux.redhat.com/elements/call-to-action/) component page to learn more about how to use calls to action.
{% endalert %}
    
{% example palette="wrong",
           alt="Link component best practice 6",
           src="./link-best-practice-6.svg" %}

### Widows

The Default call to action link arrow and the external link icon should not appear by themselves, they should always be connected to at least one word on the same line.

{% example palette="wrong",
        alt="Link component best practice 7",
        src="./link-best-practice-7.svg" %}

## Spacing

{% alert title="See more", state="default" %}
Visit the [Spacing](https://ux.redhat.com/foundations/spacing/) page to see spacing values between link variants and other elements.
{% endalert %}

{% include 'feedback.html' %}
