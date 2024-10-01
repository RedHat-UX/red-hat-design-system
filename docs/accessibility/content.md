---
title: Content
tags:
 - accessibility
order: 10
importElements:
  - rh-code-block
  - rh-blockquote
  - rh-table
---

<link data-helmet
      rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">

<style data-helmet>
  rh-blockquote {
    display: block;
    margin-block: 2rem;
    margin-inline-start: 2.5rem;
  }

  .limit-width {
    max-width: 56rem;
  }

  #func-img {
    outline: var(--rh-border-width-sm, 1px) solid var(--rh-color-border-subtle);
    width: 50%;
  }

  @container container (min-width: 576px) {
    #func-img {
      padding: var(--rh-space-3xl, 48px);
    }
  }
</style>

## Overview

<rh-alert state="info">
  <h3 slot="header">Note</h3>
  <p>This section covers content accessibility. Content authors should also be familiar with accessibility <a href="../fundamentals">fundamentals</a>.</p>
</rh-alert>

## Alt text

Wherever meaningful images or other non-text elements are used on a page, you must also provide alternative text (aka “alt text”) to briefly describe these elements. Alt text makes this content machine-readable for assistive technologies (e.g, screen readers) and search engines. And browsers can substitute alt text on-screen when images don’t load.

### Types of alt text

Images loaded via the `<img>` element typically use the alt attribute for their alternative text:

```html rhcodeblock
<img src="imagesource.jpg" alt="Description of image"></script>
```

Inline SVGs that compose simple images commonly use a combination of the `role="img"` attribute and a `<title>` element as the first child of the `<svg>` element:

```html rhcodeblock
<svg role="img">
  <title>Description of image</title>
</svg>
```

Other non-text elements (e.g., ASCII emoticons) may use ARIA attributes, like `aria-label` or `aria-labelledby`:

```html rhcodeblock
<span role="img" aria-label="astonished face">:O</span>
```

These are not the only means of providing alt text for non-text elements, but they cover many common situations. For less-common cases, view the [WCAG 2.1 documentation](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html).

### Complex images

Complex images, like diagrams, still require alt text. But they may also warrant longer descriptions to fully explain their meaning. These text descriptions must be available to all users: visual and non-visual. The descriptive text can be adjacent to the image, in footnotes, or on separate pages. Non-adjacent descriptions can be linked via nearby link text or by linking the image itself.

### When not to use alt text

Images and other non-text media that don’t add any meaningful information to a page are considered decorative and should be hidden from assistive tech:

- While an alt attribute is required for all `<img>` elements, leaving its value empty (e.g., `alt=""` or just `alt`) for decorative images will hide them from assistive tech.
- You can hide decorative inline `<svg>` elements (and other non-`<img>` media) from assistive tech with the `aria-hidden="true"` attribute.

If an image is a page border, an abstract decoration, or if it’s used more to improve layout than to provide additional context, it can typically be considered decorative.

If a non-text element’s contents are already described by adjacent text, then it may also be considered decorative in many cases—unless both the element and the text are necessary for a full understanding of the presented information. Images accompanying how-to instructions, images used to assist in visual identification of objects, and images that complement descriptions of a physical object (e.g., a piece of clothing being sold at an online store) may warrant descriptions beyond the visible text.

Images used within interactive controls like buttons or links are always meaningful, unless one of the following conditions is met:

- The image is alongside text within the same control that is already sufficient.
- The interactive control containing the image (e.g., `<a>`, `<button>`, etc.) has an accessible text label applied to it directly (e.g., `aria-label`).

Note that background images inserted into a page via CSS are always considered decorative and automatically hidden from assistive tech. If a background image is meant to be meaningful, you will need to consider another means of presenting its information.

### Writing good alt text

When writing alternative text, it’s important to first consider the image’s context. An image’s meaning or function may be more relevant than its literal depiction. So, the same image may need very different alt text in different contexts.

<uxdot-example width-adjustment="500px" no-border class="limit-width">
  <img src="/assets/accessibility/Its_A_Wonderful_Life.jpg" alt="George Bailey hugs his wife, Mary, and holds his daughter, Zuzu, in the movie It's a Wonderful Life">
</uxdot-example>

Depending on whether a web page is about the plot of the 1946 movie It’s a Wonderful Life or about the actor Jimmy Stewart, the above image could have very different alt text. For the first case, the image’s alt text could be `“George Bailey hugs his wife, Mary, and holds his daughter, Zuzu.”` For the second, the alt text could be `“Jimmy Stewart returned to acting after the war with It’s a Wonderful Life.”`

### Functional images

Images acting as buttons or links are functional, and thus serve different purposes than images supporting the surrounding text.

<figure>
  <a href="https://www.redhat.com/">
    <img id="func-img" src="/assets/logo-redhat.png" alt="Red Hat homepage">
  </a>
</figure>

If the above image supplements the text of an article about Red Hat or our products, the appropriate alt text could be something like `"Red Hat, Inc. logo."` But if that image is a link pointing to the corporate homepage, you might want something along the lines of `"Red Hat homepage"` for your alt text:

```html rhcodeblock
<a href="https://www.redhat.com/">
  <img src="logo-redhat.png" alt="Red Hat homepage">
</a>
```

### Grouped images

Grouped images that convey a single meaning (e.g., movie rating stars), can be grouped within an element with a single label (e.g., aria-label) that describes the meaning of the entire group.

```html rhcodeblock
<div aria-label="2 of 3 attempts left">
  <img src="pending.jpg" alt>
  <img src="pending.jpg" alt>
  <img src="failed.jpg" alt>
</div>
```

Or the first element of the group can have alt text, while the others are hidden:

```html rhcodeblock
<img src="pending.jpg" alt="2 of 3 attempts left">
<img src="pending.jpg" alt>
<img src="failed.jpg" alt>
```

### Embedded media (and other non-text) titles

Though the techniques may vary, meaningful embedded media objects require text alternatives—just like images do. This applies to `<video>`. `<audio>`, and `<canvas>` elements; objects; applets; ASCII art; and (if you still use them) multimedia embeds like Flash and Silverlight.
A common technique is labeling objects with ARIA attributes:


```html rhcodeblock
<video src="video.mp4" aria-label="Deploying applications with OpenShift">
```

## Writing microcopy

Microcopy comprises short words, phrases, or chunks of text used on the web or in user interfaces.

Best practices for all microcopy:

- Keep text short but descriptive
- Use as few words as possible
- Avoid non-informative or vague text, like “click here,” “learn more,” “read more,” etc.
- Make the first word meaningful
    - For example, avoid starting with “a”, “the”, “for”, etc
    - In many cases, this practice allows screen reader users to navigate items alphabetically
- Keep the text consistent.
    - Ensure that consistency is maintained on pages, sites, and entire user journeys.

### Creating emphasis

When writing for the web, use bold and italic formatting sparingly. Remember: if everything is emphasized, nothing is emphasized.

[Red Hat design guidelines](https://www.redhat.com/en/about/brand/standards/typography) mandate users employ either bold or italics—never both together.

#### Bold

The most effective way to highlight key points in text is by **using bold**. Bold text naturally draws the eye and makes specific parts stand out.

However, the golden rule for bolding is moderation. Overusing bold can backfire—if everything is bold, nothing feels important. Instead, choose a few key words or a single, short sentence that encapsulates your main message.

#### Italics

Italics offer another useful option for formatting, though they’re not a substitute for bold. They can help distinguish a section of text from the rest, adding emphasis in a subtler way. 

However, italics can be harder to read, especially for individuals with dyslexia. As with bolding, it’s best to use italics sparingly.

#### Underlines

On the web, avoid using underlines for any text that isn't a link, since it can be confusing to users. Instead of underlining text, consider bolding or italicizing it.

Also, be cautious about using your site’s link color elsewhere—especially for text. Users may think blue text is a link even if it is not. Catch up on how to use [color accessibly](/accessibility/design/#color) on our [Design](/accessibility/design/) page.

#### All caps

Only use all caps for acronyms and abbreviations (like <abbr title="Red Hat Design System">RHDS</abbr> and <abbr title="Consumer Financial Protection Bureau">CFPB</abbr>). Do not use all caps for emphasis. Use bold or italics instead. For users with dyslexia, the variation in letter height between uppercase and lowercase is actually easier to read—especially when the copy is longer than two to three words.

### Link text

In addition to the best practices for all microcopy, adhere to the following best practices for links, when possible.

```html rhcodeblock
<a href="signup.html">Sign-up form</a>
```

#### Best practices for links

- Use clear and informative link text to indicate link destinations.
- Use the same link text for links that go to the same place.
- Use different link text for links that go to different places.
- If you absolutely must use URLs as link text, try to choose short and easy-to-read URLs (e.g., “redhat.com” instead of "https://www.redhat.com/").
- Links that point to external sites, open new windows/tabs, or launch other media should indicate this behavior to all visitors (both users and non-users of assistive tech alike)

#### Avoid the following when creating links

- Non-informative or vague phrases, like “click here” or “learn more.” (If in doubt about link text clarity, ensure that the surrounding context makes the destination clear.)
- Unnecessarily long link text.
- Long or unreadable URLs as link text, since long URLs are not easy to read visually and can be annoying when presented via assistive technologies.

### Button text

In addition to the best practices for all microcopy, adhere to the following best practices for buttons, when possible.


```html rhcodeblock
<button>Save draft</button>
```

#### Best practices for buttons

- Use informative, succinct button text that provides clear explanations of button actions.
- If two buttons have the same text but perform different actions, ensure there is a clear way to distinguish them both visually and for assistive technology.
- If two buttons do the exact same thing, use the exact same text.

### Label text

In addition to the best practices for all microcopy, adhere to the following best practices for form labels, when possible.

```html rhcodeblock
<label>First name</label></script>
```

#### Best practices for labels

- Associate a label with every form control.
- Write precise and informative labels.
- Make labels within each form section unique (e.g., “Home phone” and “Mobile phone” instead of “Phone” and “Phone”).
- Avoid using labels as a heading of grouped inputs, like checkboxes or radios. Each individual input (e.g. checkbox or radio) should have its own label, and the heading of the group should be a heading element or fieldset with a legend.

### Headings

#### Writing good heading text

Use clear language in headings to describe the content that follows them:


```html rhcodeblock
<h1>Red Hat Enterprise Linux</h1>
```

At Red Hat, we use sentence case for our headings:


```html rhcodeblock
<h2>How companies are using RHEL</h2>
```

#### Heading levels

Ensure that heading levels increment and decrement to match the page outline. At the top level of each page’s outline is its `<h1>` heading. This heading reflects the main topic of the page, and is often similar to content within the page’s `<title>` tag. After the `<h1>`, the next level down is `<h2>`, then `<h3>`, and so on.
Always increment by only one heading at a time. Don’t skip levels when incrementing, like going from an `<h3>` straight to an `<h5>`. And only decrement headings (by one or more levels) when starting a new, higher-level section in your page’s outline.

Here’s an example of a page outline:

- Midwestern Recipes
  - Sides
    - Cheese
      - Fried cheese curds
      - Beer cheese dip
- Desserts
  - Bars
    - Scotch-a-roos
    - Dream bars
  - Pastries
    - Kringle
    - Dutch letters

And here’s how that outline would be reflected in a page’s heading structure:

```html rhcodeblock
<h1>Midwestern Recipes</h1>
  <h2>Sides</h2>
    <h3>Cheese</h3>
      <h4>Fried cheese curds</h4>
      <h4>Beer cheese dip</h4>
  <h2>Desserts</h2>
    <h3>Bars</h3>
      <h4>Scotch-a-roos</h4>
      <h4>Dream bars</h4>
    <h3>Pastries</h3>
      <h4>Kringle</h4>
      <h4>Dutch letters</h4>
```

Note that an `<h1>` is often the first heading on a page:


```html rhcodeblock
<h1>Midwestern Recipes</h1>
<h2>Navigation</h2>
```

But it doesn’t have to be the first heading on a page. This is also acceptable:


```html rhcodeblock
<h2>Navigation</h2>
<h1>Midwestern Recipes</h1>
```

### Page titles

Each web page is required to have a page `<title>` element within its `<head>` that contains meaningful text describing the page’s context and purpose.

```html rhcodeblock
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Red Hat Ansible Automation Platform</title>
  </head>
  <body>...</body>
</html>
```

Titles should be specific to each URL and not duplicated across a site. Otherwise, users (particularly assistive tech users) may not be aware when they’ve landed on a new or updated page. When users move to new pages or change contexts of the current page, the page title should change to reflect this.

Text at the beginning of the title is what people will see in their browser tabs and hear first in screen readers. So, unique information in the title should come first, if possible. (i.e., Don’t put your site’s name first, if you’re including it in the title!)

As mentioned in the Headings section, page titles and `<h1>` elements often relate to one another, though they needn’t be verbatim copies. Page titles often include information about both the page and the site itself, whereas an `<h1>` is more likely to include only information about its specific page.

### iframe titles

Non-hidden, non-empty `<iframe>` elements are required to have titles describing their meaning or purpose, similar to alternative text for images.


```html rhcodeblock
<iframe src="video.html" title="Video: Network automation with Ansible"></iframe>
```

Note that, as opposed to a page’s `<title>` element, `<iframe>` tags include title attributes to label them. (Yes, it can be confusing, especially when you consider that there are still more `<title>` elements and title attributes used in other contexts!)

Each iframe embedded within a page should have a unique name, so users can differentiate between them. In other words, it would be bad practice to have multiple iframes with the exact same `title="Video player"` attribute.

Pages contained within iframes are subject to the same accessibility requirements as other pages. For example, this means that they must each have their own `<title>` element, which will typically align with the title attribute for the parent `<iframe>`.

## Accessible tables

### When to use tables

Strictly speaking, tabular data is information that requires a row and column structure to decipher. This definition compels you to ask yourself the following questions every time you feel like using a table for markup:

- Does the information share a common attribute across a row and/or column?
- Can the order of the information be rearranged and still make sense?
- Is a table the best way to express the meaning of your data?

### When not to use tables

Tables are intended for tabular data, and shouldn’t be used for layout purposes, unless you're designing for visitors in the 1990s. For browsing on anything more recent than the original iMac, use CSS for layout.

Avoid using tables when a simple list (whether [ordered](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol), [unordered](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul), or [description](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)) will do.

For example, the following doesn’t need to be a table:

```html rhcodeblock
<table>
  <caption>Groceries</caption>
  <tbody>
    <tr>
      <th scope="row">Apples</th>
      <td>5</td>
    </tr>
    <tr>
      <th scope="row">Oranges</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Lemons</th>
      <td>6</td>
    </tr>
  </tbody>
</table>
```

Instead, a list would be simpler, easier to understand, and easier to code:

```html rhcodeblock
<h3 id="groceries">Groceries</h3>
<ul aria-labelledby="groceries">
  <li>5 Apples</li>
  <li>3 Oranges</li>
  <li>6 Lemons</li>
</ul>
```

In other words, if it doesn’t _need_ to be a table, then it probably shouldn’t be a table.

For more information on developing accessible tables, please read our [Table element accessibility guidance](/elements/table/accessibility/).

### Captions and headings

The purpose of, and data relationships within, tables should be made apparent to all users: visual and non-visual, and both with and without assistive tech. To ensure tables are understandable by all, we need to pay special attention to their captions and row/column headings.

When a table is placed on a page, users need to know its purpose. You can give your table a meaningful caption, accompany it by descriptive text, and/or place it under appropriate headers to put it in context.

To categorize data successfully, row and column headings should be distinct within a table. Keep them brief but accurate and descriptive regarding their associated cells.

### Simplify

Users and technologies scanning a table are already doing a lot of work to interpret the meaning of the data contained within. So, tables should be made as simple as possible—to reduce cognitive load and to make them easier for assistive tech to communicate.

If a table is too complex for simple row and column headings (e.g., if cells within a table may require their own sub-columns/rows/tables), then consider splitting this data out into separate tables.

If your table design includes split/merged headings or cells, consider whether it can be restructured. Interpreting such complicated structures puts extra work on users and may be difficult to convey via assistive tech.

When creating tables, assume the burden of simplifying and clarifying, so it doesn’t fall on your users. But if the tables in a particular project do require more complexity, the W3C’s Web Accessibility Initiative provides a [Tables Tutorial](https://www.w3.org/WAI/tutorials/tables/) that you may find useful.

## Error messages and guidance

Best practices for error messages:

- Ensure the user knows the location of the error. Preferably this is indicated both visually and for assistive technology. Otherwise, additional text may be required explaining the label or section where the error occurred.
- Tell the user what they did wrong.
- Recommend how they can fix it.

## Logical reading order

Because people and assistive technologies read linearly, your content must also be written with a clear logical order that follows the same linear flow of HTML code. That’s not to say people can’t and won’t jump around. But each section should have a logical start and end, and the logical ordering of these sections themselves should be considered.

Your content order can impact not only how a page is read, but also how it’s operated. Users navigating via keyboard move sequentially (both forward and backward) among interactive elements on a page via the <kbd>tab</kbd> and arrow keys. Consider how the order in which you arrange your content could make such navigation easier or more difficult for both visual and non-visual keyboard users.

## Audio/video

### Avoiding autoplay

<rh-blockquote>
  <p>If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.</p>
  <a slot="author" href="https://www.w3.org/WAI/WCAG21/Understanding/audio-control">WCAG 2.1 Success Criterion 1.4.2: Audio Control (Level A)</a>
</rh-blockquote>

Enabling autoplay on audio or video can create several accessibility barriers:

- Distracting users with cognitive disabilities.
- Causing seizures or triggering motion sickness.
- Preventing users from hearing screen readers.
- Interfering with text-to-speech.

Use one or more of the following techniques to help ensure accessibility:

- Avoid autoplay altogether. (Honestly, just do this, and you don’t have to worry about anything else!)
- Ensure that audio-only or video-with-audio media autoplays for less than three seconds.
- Ensure that video-only media (including any animated, blinking, or scrolling content) autoplays for less than five seconds.
- Ensure that the media has no audio.
- Mute audio or set its volume to zero by default.
- Provide a control near the top of the page to mute sounds.
- Provide controls to pause the media itself.

### Media solutions

To be accessible, each media type must include _**all** of the following_, unless otherwise noted as recommended or optional.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col">
          Media
        </th>
        <th scope="col">
          Live
        </th>
        <th scope="col">
          Prerecorded
        </th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">
        Video-only
      </th>
      <td>
        <ul>
          <li>Live text or audio descriptions (optional)</li>
        </ul>
        </td>
        <td>
          <ul>
            <li>Transcript or audio descriptions</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th scope="row">
          Audio-only
        </th>
        <td>
          <ul>
            <li>Captions (recommended for dialog or narration)</li>
            <li>Sign language (optional)</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Captions</li>
            <li>Transcript</li>
            <li>Sign language (optional)</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th scope="row">
          Multimedia (video + audio)
        </th>
        <td>
          <ul>
            <li>Captions</li>
            <li>Audio descriptions (optional)</li>
            <li>Sign language (optional)</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Captions</li>
            <li>Audio descriptions</li>
            <li>Transcript (recommended)</li>
            <li>Sign language (optional)</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

#### Captions

Captions are text synchronized with media. Captions should include all scripted content, plus relevant background sounds and music. If more than one speaker exists, each should be identified. Captioners may make edits to the material if these edits assist with reading comprehension.

Captions benefit people who have difficulty hearing or processing audio clearly, including cases where they are deaf, are hard of hearing, have auditory processing issues, are non-native speakers, are in noisy environments, or do not have audio playback capabilities.

#### Transcripts

Transcripts are used as a media replacement, and as such, are not synchronized with the media. They include full text of the media, plus any visual descriptions, relevant background sounds, and music. If more than one speaker exists, each should be identified. Transcript authors may make edits to the material if these edits assist with reading comprehension.

Transcripts benefit people who have difficulty seeing, hearing, processing, or playing content.

#### Audio descriptions

Descriptive audio is a track of relevant visual information described by a narrator. It can be added to media files to benefit people who have difficulty seeing or processing visual information.

#### Sign Language

Include synchronized video of sign language interpreters to your videos, for people who have difficulty hearing or processing the spoken language in media.

## Internationalization

### Language attribute: `lang`

All HTML content must be contained within an element that has a `lang` attribute. On monolingual pages, it’s enough to add a `lang="en"` attribute (or whatever the page’s language is) to the `<html>` element.

For pages with multilingual content, each element containing a different language from the one indicated in the `<html>` element should have an appropriate `lang` attribute. For example:

```html rhcodeblock
<!DOCTYPE html>
<html lang="en">
  <head>...</head>
  <body>
      <p>Colombian author Gabriel García Márquez wrote that
      we each live three lives: one public, one private, and
      one secret. (Full original quote: <span lang="es">“Todos
      los seres humanos tenemos tres vidas: pública, privada y
      secreta.”</span>)</p>
  </body>
</html>
```

The W3C has an [article on language tags](https://www.w3.org/International/articles/language-tags/), which covers both how to use them and where to find a full list of them.

### Direction attribute: `dir`

Languages such as Hebrew and Farsi run from right-to-left (RTL) instead of left-to-right (LTR). For content in such languages, apply the `dir="rtl"` attribute to the containing element. RTL elements may have unique layout considerations, especially when mixed with LTR content.

Avoid mixing bi-directional (BIDI) content within the same block-level elements (e.g., a paragraph) whenever possible.

For more help, read the W3C’s [article on bidirectional text in HTML](https://www.w3.org/International/articles/inline-bidi-markup/index.en.html).
