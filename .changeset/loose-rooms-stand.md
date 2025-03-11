---
"@rhds/elements": major
---
**🎨 Color Schemes 😎**

This release introduces built-in support for user [color 
scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme) 
preferences (a.k.a. "dark mode"). The [color 
palette](https://ux.redhat.com/theming/color-palettes/) and 
[theming](https://ux.redhat.com/theming/customizing/) systems still work, and 
integrate into color schemes.

Because elements can now render by default using your user's preferred color
scheme, pages which are not set up to style content based on user preferences
may become unreadable. For example, if a user who set their device to prefer
dark mode visits a page which does not style content based on their color-scheme 
preferences (i.e. it assumes "light mode") and that page contains RHDS elements, 
those elements may become unreadable, by rendering text for a dark background,
when that page actually shows a light background.

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
