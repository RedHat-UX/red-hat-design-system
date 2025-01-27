---
title: Overview
heading: Typography
sidenavTitle: Typography
layout: layouts/pages/has-toc.njk
permalink: /foundations/typography/index.html
tags:
  - foundations
  - typography
subnav:
  collection: sortedTypography
  order: 1
---

<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css"
      data-helmet>

<script type="module" data-helmet>
  import '@rhds/elements/rh-table/rh-table.js';
</script>

## Get started

To download the font files, go to [Google Fonts][googlefonts]. To install the 
fonts using Terminal, go to our [GitHub repo][githubrepo]. If you need further 
assistance, contact the [Brand team][brandteam] or the [Design System 
team][designsystemteam].

## Font family

The words we choose are an important part of our brand voice and so is the way 
those words look. The way our words look is established by the fonts we use and 
the way we use them, also known as typography. The Red Hat font family was 
designed by type designer Jeremy Mickel in collaboration with the Brand team. To 
learn more our fonts and typography, go to the [Brand standards][brandstandards] 
website.

<uxdot-example width-adjustment="1140px" variant="full" alignment="left" no-border>
  <img alt=" 3 examples of the Red Hat font family: Display, Text, and Mono. Each example shows a capital letter R and lowercase letter H with overlays pointing out unique design characteristics."
       src="/assets/typography/type-overview-font-family.png"
       width="1140"
       height="365">
</uxdot-example>

### Red Hat Display

Red Hat Display is used in headlines and to make big statements. Because Red Hat 
Display is intended for large sizes, it has more of our brand personality and 
voice.

### Red Hat Text

Red Hat Text takes all of the personality from Red Hat Display and optimizes it 
for more demanding applications. It is easy to read in paragraphs and very small 
sizes.

### Red Hat Mono

Red Hat Mono is our monospaced font that was created to distinguish code from 
other text. It should only be used when demonstrating code snippets in our 
communications and specifications.

## International

Designs that need to use non-Latin characters should fall back to [Noto 
Sans][notosans]. By loading language-specific fonts, the design system can 
accommodate mixed-language content. For more technical details, go to the 
[Tokens][tokens] section.

<rh-table>

| Language | Font family                  |
| -------- | ---------------------------- |
| Chinese  | Noto Sans Simplified Chinese |
| Japanese | Noto Sans Japanese           |
| Korean   | Noto Sans Korean             |

</rh-table>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>

[googlefonts]: https://fonts.google.com/?query=MCKL
[githubrepo]: https://github.com/RedHatOfficial/RedHatFont
[brandteam]: https://brand.redhat.com/
[designsystemteam]: https://ux.redhat.com/support/
[brandstandards]: https://www.redhat.com/en/about/brand/standards
[notosans]: https://fonts.google.com/noto/specimen/Noto+Sans
[tokens]: https://ux.redhat.com/tokens/font/
