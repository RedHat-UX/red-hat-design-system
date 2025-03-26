---
title: Guidelines
heading: Typography
sidenavTitle: Typography
layout: layouts/pages/has-toc.njk
permalink: /foundations/typography/guidelines.html
tags:
  - typography
subnav:
  collection: sortedTypography
  order: 6
---

<script type="module" data-helmet>
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-icon/rh-icon.js';
</script>

<style>
rh-card {
    height: 100%;

    & p {
        font-family: var(--rh-font-family-heading);
        font-size: var(--rh-font-size-body-text-xl);
        font-weight: var(--rh-font-weight-heading-medium);
        margin-block: 0;
    }

    &::part(header) {
        display: block;
    }
}

rh-card.do {
    & rh-icon {
        color: var(--rh-color-icon-status-success);
        --rh-icon-size: var(--rh-size-icon-03);
    }
}

rh-card.dont {
    & rh-icon {
        color: var(--rh-color-icon-status-danger);
        --rh-icon-size: var(--rh-size-icon-03);
    }
}
</style>

## General guidelines

### Do these things

<div class="grid sm-three-columns">

  <rh-card class="do" color-palette="lighter">
    <rh-icon set="ui" icon="check-circle-fill" slot="header"></rh-icon>
    <p>Use our fonts: Red Hat Display, Text, and Mono.</p>
  </rh-card>

  <rh-card class="do" color-palette="lighter">
    <rh-icon set="ui" icon="check-circle-fill" slot="header"></rh-icon>
    <p>Use generous margins and a lot of white space.</p>
  </rh-card>

  <rh-card class="do" color-palette="lighter">
    <rh-icon set="ui" icon="check-circle-fill" slot="header"></rh-icon>
    <p>Use sentence case (yes, even for headings).</p>
  </rh-card>

  <rh-card class="do" color-palette="lighter">
    <rh-icon set="ui" icon="check-circle-fill" slot="header"></rh-icon>
    <p>Make sure text is readable and legible.</p>
  </rh-card>

  <rh-card class="do" color-palette="lighter">
    <rh-icon set="ui" icon="check-circle-fill" slot="header"></rh-icon>
    <p>Let the words speak for themselves.</p>
  </rh-card>

  <rh-card class="do" color-palette="lighter">
    <rh-icon set="ui" icon="check-circle-fill" slot="header"></rh-icon>
    <p>Grab attention by making important headings big and red.</p>
  </rh-card>

</div>

### Avoid these things

<div class="grid sm-three-columns">

  <rh-card class="dont" color-palette="lighter">
    <rh-icon set="ui" icon="close-circle-fill" slot="header"></rh-icon>
    <p>Do not use random fonts.</p>
  </rh-card>

  <rh-card class="dont" color-palette="lighter">
    <rh-icon set="ui" icon="close-circle-fill" slot="header"></rh-icon>
    <p>Do not fill an entire space with text; it can be overwhelming.</p>
  </rh-card>

  <rh-card class="dont" color-palette="lighter">
    <rh-icon set="ui" icon="close-circle-fill" slot="header"></rh-icon>
    <p>Never use all caps; it is too aggressive.</p>
  </rh-card>

  <rh-card class="dont" color-palette="lighter">
    <rh-icon set="ui" icon="close-circle-fill" slot="header"></rh-icon>
    <p>Avoid text that lacks appropriate color contrast.</p>
  </rh-card>

  <rh-card class="dont" color-palette="lighter">
    <rh-icon set="ui" icon="close-circle-fill" slot="header"></rh-icon>
    <p>Avoid unnecessary ornamentation.</p>
  </rh-card>

  <rh-card class="dont" color-palette="lighter">
    <rh-icon set="ui" icon="close-circle-fill" slot="header"></rh-icon>
    <p>Never increase or decrease text tracking.</p>
  </rh-card>

</div>

## Specific guidelines

### Choosing text styles

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-1-do.svg"
            alt="Form field with 'Zip code' label in small, black text"
            width="482"
            height="145">
    </uxdot-example>
    <p>Choose the correct text style and color for the correct use case.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-1-dont.svg"
            alt="Form field with 'Zip code' label in large, red text"
            width="482"
            height="145">
    </uxdot-example>
    <p>Do not display one panel only.</p>
  </uxdot-best-practice>
</div>

### Headings and body text

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-2-do.svg"
            alt="Heading using Red Hat Display with body text using Red Hat Text"
            width="482"
            height="248">
    </uxdot-example>
    <p>Choose the correct text style and color for the correct use case.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-2-dont.svg"
            alt="Heading using Red Hat Text with body text using Red Hat Display"
            width="482"
            height="248">
    </uxdot-example>
    <p>Do not use Red Hat Text for headings or Red Hat Display for body text on websites.</p>
  </uxdot-best-practice>
</div>

### Linked text in paragraphs

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-3-do.svg"
            alt="Body text with blue inline link that has a dashed underline"
            width="482"
            height="160">
    </uxdot-example>
    <p>In paragraphs, linked text must use our blue link color and an underline emphasis.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="caution">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-3-caution.svg"
            alt="Body text with inline link that's a slightly lighter shade of gray than the rest of the text"
            width="482"
            height="160">
    </uxdot-example>
    <p>Using color only without other visual affordances causes barriers to access for some readers. Learn more in the [Accessibility][coloraccessibility] section.</p>
  </uxdot-best-practice>
</div>

### Font weights

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-4-do.svg"
            alt="2xl heading using a normal weight"
            width="482"
            height="165">
    </uxdot-example>
    <p>Use font weights to create emphasis.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-4-caution.svg"
            alt="2xl heading using a bold weight"
            width="482"
            height="165">
    </uxdot-example>
    <p>The Bold weight will always have more emphasis than lighter weights even if the font size is the same.</p>
  </uxdot-best-practice>
</div>

### Size pairings

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-5-do.svg"
            alt="xl heading paired with lg body text"
            width="482"
            height="160">
    </uxdot-example>
    <p>Create balanced text size pairings for better visual harmony.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-5-dont.svg"
            alt="2xl heading with xs body text"
            width="482"
            height="160">
    </uxdot-example>
    <p>Do not pair huge and tiny text sizes; it creates tension.</p>
  </uxdot-best-practice>
</div>

### Line length

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-6-do.svg"
            alt="Paragraph that doesn't span entire container"
            width="482"
            height="218">
    </uxdot-example>
    <p>Use a comfortable line length so body text is easy to read.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-6-dont.svg"
            alt="Paragraph that spans entire container and goes past a red line"
            width="482"
            height="218">
    </uxdot-example>
    <p>Do not stretch body text beyond 120 characters per line.</p>
  </uxdot-best-practice>
</div>

### Number of text styles

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-7-do.svg"
            alt="Text using four different styles plus a call to action"
            width="482"
            height="402">
    </uxdot-example>
    <p>Use an appropriate amount of text styles in the same block so readers are not overwhelmed by too much content.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-7-dont.svg"
            alt="A title, four different heading styles, body text, and a call to action"
            width="482"
            height="402">
    </uxdot-example>
    <p>Do not use more than 3 text styles at the same time in the same block. Add padding or use components to organize text instead.</p>
  </uxdot-best-practice>
</div>

### Space between text styles

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-8-do.svg"
            alt="Large spacer between a title, heading, and body text with a 2xl spacer before a call to action"
            width="482"
            height="294">
    </uxdot-example>
    <p>Follow spacing best practices when stacking text styles.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="/assets/typography/guidelines-best-practice-8-dont.svg"
            alt="No extra space between a title, heading, body text, and a call to action"
            width="482"
            height="294">
    </uxdot-example>
    <p>Do not stack text too tightly. A user should be able to read each style independently of the others.</p>
  </uxdot-best-practice>
</div>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>

[coloraccessibility]: /accessibility/design/#contrast