---
title: Screen readers
sidenavTitle: Screen reader testing
permalink: /accessibility/screen-readers/index.html
tags:
  - accessibility
order: 70
importElements:
  - rh-tile
---

<script type="module" data-helmet>
  import '@rhds/elements/rh-tile/rh-tile-group.js';
  import '@rhds/elements/rh-tile/rh-tile.js';
</script>

<link rel="stylesheet"
      data-helmet
      href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">
<link rel="stylesheet"
      data-helmet
      href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-group.css">
<style>
rh-tile-group {
display: flex;
align-items: top;
flex-wrap: wrap;
column-gap: var(--rh-space-2xl, 32px);
row-gap: var(--rh-space-2xl, 32px);
margin-inline-end: var(--rh-space-md, 8px);
}

rh-tile {
width: 320px;
}
</style>

Our screen reader testing pages provide some quick guidance for starting, stopping, and changing the settings of various screen readers. They also offer screen-reader-specific bonus tips and links to third-party resources like keyboard/gesture shortcut guides.

## Why test with screen readers?

When testing with screen readers, our goal is to verify that an assistive tech user will have an experience equivalent to that of any other user. Tests may include the following:

1. Can you use and understand the purpose of all interactive elements on the page?
2. Can you accomplish all the same tasks with and without assistive tech (e.g. navigating the site, submitting forms, adding items to a cart, etc.)?
3. When page contents are read, are you presented with all the meaningful info you would expect as a visual user? (This includes status updates on dynamic pages.)

## Browser and screen reader pairings

If you can only test on one platform, it never hurts to try your screen reader with as many browsers as possible. For example, if you only have a Mac, go ahead and pair VoiceOver with Safari, Chrome, and Firefox.

But if you’re either pressed for time or have access to multiple operating systems, these are the most common browser and screen reader pairings, and thus the ones to prioritize when testing:

- macOS: Safari and VoiceOver
- Windows: Firefox and NVDA
- Windows: Chrome and JAWS or NVDA
- Windows: Edge and Narrator
- Linux: Firefox and Orca
- iOS: Safari and VoiceOver
- Android: Chrome and TalkBack

  <rh-tile-group>
    <rh-tile compact="">
      <h2 slot="headline"><a href="#top">Link1</a></h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </rh-tile>
    <rh-tile compact="">
      <h2 slot="headline"><a href="#top">Link2</a></h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </rh-tile>
    <rh-tile compact="">
      <h2 slot="headline"><a href="#top">Link3</a></h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </rh-tile>
  </rh-tile-group>
