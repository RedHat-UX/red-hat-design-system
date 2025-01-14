---
title: Fundamentals
tags:
  - accessibility
order: 75
---

<script type="module" data-helmet>
  import '@rhds/elements/rh-blockquote/rh-blockquote.js';
</script>

<style>
  rh-blockquote {
    display: block;
    margin-block: 2rem;
    margin-inline-start: 2.5rem;
  }
</style>

## Overview

### Types of disabilities

The World Health Organization estimates that one-sixth of all people worldwide experience significant disabilities. Most web-related disabilities and limitations affect the eyes, ears, hands, and brain. These can be categorized several different ways: obvious, hidden, permanent, recurring, temporary, situational, etc.

Permanent and recurring disabilities like blindness or paralysis often may be readily apparent to others. But some disabilities aren’t so easily identified, such as deafness, <abbr title="attention deficit hyperactivity disorder">ADHD</abbr>, reading disorders, epilepsy, or migraines.

Some disabilities are temporary, like those stemming from injuries, illnesses, surgical recovery, and concussions. And other limitations can be situational. Maybe you’re in a room that’s too noisy for you to hear speech clearly. Perhaps it’s a sunny day, and you can’t distinguish low-contrast colors on your phone screen. Or your computer’s mouse is broken, and you need to navigate via your keyboard.

### Diverse abilities and barriers

When discussing accessibility and how it relates to individuals, it can sometimes be useful to flip our framing from “disabilities” to “diverse abilities.”

The former may imply that someone is lacking in some way, and thus they are responsible for adapting to their experiences. The latter reminds us that we, as creators of experiences, must account for the full range of abilities that people possess. This social model defines a “disability” not as something intrinsic to an individual, but rather as a barrier created by mismatches between a person and their environment.

The World Wide Web Consortium’s Web Accessibility Initiative (WAI) has authored a [Diverse Abilities and Barriers](https://www.w3.org/WAI/people-use-web/abilities-barriers/) page that lists potential barriers that individuals of varying auditory, cognitive, learning, neurological, physical, speech, and visual abilities are likely to face.

### Personas and user stories

Personas are fictionalized distillations of the varying types of users who may engage with your web properties. Using them is a common UX design technique that can be helpful for developing empathy and building inclusive experiences.

When writing, designing, or developing, you can put yourself in the mind of these personas to imagine what outcomes the users they represent might want from your experience and how successfully they can accomplish these goals. Using personas shifts accessibility left in your processes, helping you avoid and catch issues before they ever get to handoffs, QA, or even launch.

WAI has designed a collection of [web user stories](https://www.w3.org/WAI/people-use-web/user-stories/) (e.g., a color-blind online shopper, a hard-of-hearing student, etc.) that you may find helpful to adapt as personas for your own web projects.

## Laws

### U.S. Laws

If you’re doing online business of any sort in the United States, it’s a pretty safe bet that your digital experiences are required to be accessible. Digital accessibility falls under one or more of the following federal laws. Additional state and local regulations may also apply.

As of 2024, the U.S. Department of Justice has not approved any formal rules on what exactly constitutes accessibility under these laws—only that standards like WCAG provide “[helpful guidance](https://www.ada.gov/resources/web-guidance/).” However, it looks like that may be changing soon. A [proposed rule](https://www.federalregister.gov/documents/2023/08/04/2023-15823/nondiscrimination-on-the-basis-of-disability-accessibility-of-web-information-and-services-of-state) for Title II of the Americans with Disabilities Act (which applies to state and local government entities) specifies WCAG 2.1 AA as its targeted standard. If put into effect, similar rules may also be drafted for the laws listed below.

#### Americans with Disabilities Act, Title III

Businesses open to the public are subject to Title III of the Americans with Disabilities Act. According to the Department of Justice’s [ADA.gov website](https://www.ada.gov/resources/web-guidance/#fn:1), this law applies to “all the goods, services, privileges, or activities offered by public accommodations, including those offered on the web.” Title III does not yet list a specific technical standard, but states that people with disabilities must be offered equal access to information.

#### Section 508

Section 508 of the Rehabilitation Act of 1973 requires that accessible electronic and information technology be provided by all federal agencies—and, by extension, by any companies doing business with the federal government or its subcontractors.

#### Section 504

Under Section 504 of the Rehabilitation Act of 1973, entities receiving federal funding must offer equal access to all facilities and communications—including online communications. This law is most commonly referenced in regard to publicly-funded educational institutions (PreK-12 and post-secondary). But it can apply to any organization that receives federal assistance and any companies doing business with such entities.

### International

Web accessibility laws and policies vary by region. Many laws align with exact standards, like WCAG 2.0 AA or 2.1 AA, while others are less specific in addressing what constitutes accessibility.

For example, the European Union’s [European Accessibility Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0882)—which dictates that electronic products and services must be accessible by June 28, 2025—does not directly name WCAG as its technical standard. However, it does state that services must align with WCAG’s guiding principles of being “perceivable, operable, understandable and robust” (aka POUR). And countries within the Union may transpose the Act to incorporate WCAG requirements.

The World Wide Web Consortium maintains a list of [international accessibility laws and policies](https://www.w3.org/WAI/policies/), which they last updated in late 2023.

## Policies

### IBM Accessibility Requirements

As a subsidiary of IBM, Red Hat and its associates must adhere to the parent company’s corporate instructions, such as CHS 162: Accessibility of information technology for people who have disabilities. This instruction mandates that we “must follow standard, defined practices that make technology either compatible with assistive technology or directly accessible.”

### Red Hat

To demonstrate our intent to meet IBM’s corporate instruction, our legal requirements, and our ethical obligations, Red Hat’s Digital Experience team has developed an internal [accessibility policy](https://url.corp.redhat.com/accessibility-policy) and posted a [digital accessibility statement](https://www.redhat.com/en/about/digital-accessibility) at our website. To put this intent into practice, we continuously remediate our existing properties, we’re building libraries of accessible Web Components and patterns, and we’ve shifted left to incorporate inclusive design in new web projects: from the earliest stages of discovery through launch.

<rh-blockquote>
    <p>“The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.”</p>
    <span slot="author">Tim Berners-Lee</span>
</rh-blockquote>

## Guidelines

### WCAG and POUR

#### WCAG

If you’ve spent any time incorporating or reading about web accessibility, you’ve likely heard mention of the World Wide Web Consortium’s (W3C) Web Content Accessibility Guidelines—or WCAG. (You may also have heard this acronym pronounced several different ways, any of them acceptable: W-C-A-G, Wuh-cag, W-cag, etc.)

The current versions of WCAG comprise up to 86 criteria against which web experiences can be measured. And each criterion can be broken down into one or more success/failure checks to verify conformance. For example, conformance with guideline 1.4.1 (Use of Color) can be tested via checks to ensure that links are discernable without relying on color alone, that information conveyed by color differences is also available via text, and so on.

WCAG has several active versions (2.0, 2.1, and 2.2), the most recent of which, 2.2, was published in September 2023. The guidelines also include three levels of conformance (A, AA, AAA), with A being the lowest and AAA the highest. Higher levels are inclusive of the lower ones, so meeting AA means you are also meeting A, and meeting AAA means you are meeting both A and AA.

At Red Hat, we currently target [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/Understanding/), as it aligns with many laws and regulations, provides a good experience for most users, and is a standard we believe is achievable given our resources.

#### POUR

It’s important to remember that the goal of web accessibility is not conformance for its own sake. Accessibility is for real people. To reflect this, W3C has organized its WCAG criteria by these four guiding principles: perceivable, operable, understandable and robust (aka POUR):

<rh-blockquote>
  <ol>
    <li><strong>Perceivable</strong> - Information and user interface components must be presentable to users in ways they can perceive.</li>
    <li><strong>Operable</strong> - User interface components and navigation must be operable.</li>
    <li><strong>Understandable</strong> - Information and the operation of user interface must be understandable.</li>
    <li><strong>Robust</strong> - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
  </ol>
  <span slot="author">Source: <a href="https://www.w3.org/WAI/WCAG21/Understanding/intro">Introduction to Understanding WCAG</a>.</span>
  <span slot="title">Accessibility Guidelines Working Group (AG WG) Participants. Copyright © 2023 W3C® (MIT, ERCIM, Keio). Status: Draft Updated 20 June 2023.</span>
</rh-blockquote>

While the WCAG criteria inform the “what” of accessibility conformance, POUR reminds us of the “why.”

Keeping your users and these four principles in mind from the start will go a long way towards conformance, well before you open up an accessibility checklist or run any browser testing extensions.

The [W3C’s Accessibility Principles](https://www.w3.org/WAI/fundamentals/accessibility-principles/) page provides more information on applying POUR.

## ATAG

As a companion to WCAG, WAI has also developed a set of Authoring Tool Accessibility Guidelines (ATAG). ATAG covers both the accessibility of authoring tool interfaces (e.g., for content management systems) and supporting the production of accessible content using these tools. In other words, where WCAG is for end users, ATAG is for content creators.

[ATAG 2.0](https://www.w3.org/TR/ATAG20/) is the current version of the standard. And, as with WCAG, there are three levels of conformance: A, AA, and AAA (from lowest to highest). We recommend using tools that meet or exceed ATAG 2.0 AA, when possible.

Keep in mind that, while an authoring tool (e.g., Drupal Core 9+) may be conformant with ATAG 2.0 AA out of the box, that’s not a guarantee that web pages generated by this tool will also be accessible. And CMS add-ons (e.g., Drupal modules) can also impact accessibility, so they should be evaluated when they are intended to be used, as well.

WAI also provides an [ATAG Report Tool](https://www.w3.org/WAI/atag/report-tool) to help walk you through the process of authoring tool evaluation to gauge conformance.
