---
"@rhds/elements": major
---
**🎨 Color Schemes 😎**

This release introduces built-in support for user [color scheme][colorscheme] 
preferences (a.k.a. "dark mode"). The [color palette][colorpalette] and 
[theming][theming] integrate into device color schemes, or can be overridden on
a per-element basis.

**Performance**
This change significantly improves both the loading and the runtime performance
of themable elements. We no longer need to apply the color scheming stylesheet
to each element, which reduces SSR payloads as well.

**Breaking Changes**:
In version 2, users could apply custom themes to specific sections or elements
by setting theme tokens ending in `-on-light` and `-on-dark`. In this version,
users should set theme tokens using the `light-dark()` function instead:

Before:
```css
.theme-custom {
  --rh-color-border-interactive-on-light: var(--custom-darkest);
  --rh-color-border-interactive-on-dark: var(--custom-lightest);
  --rh-color-interactive-primary-default-on-light: var(--custom-darker);
  --rh-color-interactive-primary-default-on-dark: var(--custom-lighter);
}
```

After:
```css
.theme-custom {
  --rh-color-border-interactive: light-dark(var(--custom-darkest),
                                            var(--custom-lightest));
  --rh-color-interactive-primary-default: light-dark(var(--custom-darker),
                                                     var(--custom-lighter));
}
```

**Potentially Breaking Changes**: Because elements can now render by default 
using your user's preferred color scheme, pages which are not set up to style 
content based on user preferences may become unreadable. For example, if a user 
who set their device to prefer dark mode visits a page which does not style 
content based on their color-scheme preferences (i.e. it assumes "light mode") 
and that page contains RHDS elements, those elements may become unreadable, by 
rendering text for a dark background, when that page actually shows a light 
background.

We expect that this should not affect the majority of cases, but if you find
that it does, there are two solutions you can implement to force your pages into
light mode: either use an `<rh-surface>` element with the `lightest` color
palette, or set your page's rendering mode to `only light`

```diff
- <main>
+ <rh-surface role="main" color-palette="lightest">
```

```css
:root {
  color-scheme: only light;
}
```

[colorscheme]: https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
[colorpalette]: https://ux.redhat.com/theming/color-palettes/
[theming]: https://ux.redhat.com/theming/customizing/
