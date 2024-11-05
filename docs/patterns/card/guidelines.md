---
title: Guidelines
heading: Card
sidenavTitle: Card
layout: layouts/pages/pattern.njk
order: 20
tags:
  - cardPatterns
subnav:
  collection: cardPatterns
  order: 2
importElements:
  - rh-card
  - rh-cta
  - rh-surface
  - rh-avatar
  - rh-accordion
---

<script type="module" data-helmet>
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>

<link rel="stylesheet" data-helmet href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
<link rel="stylesheet" data-helmet href="/styles/samp.css">


## Usage

### Character count
The recommended maximum character count for the elements of a card are listed below and include spaces.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Title</td>
        <td data-label="Character count">20</td>
      </tr>
      <tr>
        <td data-label="Element">Headline</td>
        <td data-label="Character count">50</td>
      </tr>
      <tr>
        <td data-label="Element">Body text</td>
        <td data-label="Character count">165</td>
      </tr>
      <tr>
        <td data-label="Element">Footer</td>
        <td data-label="Character count">55</td>
      </tr>
    </tbody>
  </table>
</rh-table>



{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}
