## Style

An avatar is a placeholder graphic, custom photo, or generated image. It can be used by itself, but
it is often paired with text about the user like their full name, job title, company, etc.

### Anatomy

<figure>
  <uxdot-example color-palette="lightest">
    <img alt="Anatomy of an avatar group with numbered annotations. The first number points to the image, the second points to the avatar's text description."
         src="../avatar-style-anatomy.svg"
         width="447"
         height="64">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Thumbnail</li>
      <li>Job details text</li>
    </ol>
  </figcaption>
 </figure>

## Variants

The Default variant is visible when a user has not uploaded a **custom image** 
(like a photo). Once they do, what they provided replaces the gray thumbnail. 
If they choose not to, a colored pattern will be generated instead based on 
their name. A specific name is linked to the same pattern, so thumbnails can 
stay static without storing lots of generated images.

<uxdot-example color-palette="lightest">
  <img alt="Three avatars. One with a gray placeholder generic icon, one with a generated pattern, and one with a profile image of a person, each with descriptions."
       src="../avatar-style-variants.svg"
       width="916"
       height="64">
</uxdot-example>

### Plain

The avatar thumbnail can be used on its own in places like 
[accordions](/elements/accordion/), [cards](/elements/card/),
[navigations](/elements/navigation-primary/), tables, and more.

<uxdot-example color-palette="lightest">
  <img alt="A row of three avatar images without accompanying descriptions"
       src="../avatar-style-variants-plain.svg"
       width="256"
       height="64">
</uxdot-example>

### Border

An avatar may also include a border for extra visual prominence or if it is used on non-white backgrounds.

<uxdot-example color-palette="lighter">
  <img alt="A row of three avatar images with borders on a gray background without accompanying descriptions"
       src="../avatar-style-variants-border.svg"
       width="256"
       height="64">
</uxdot-example>

### Link

Links may be applied to full name or job details text.

<uxdot-example color-palette="lightest">
  <img alt="Two avatar groups; one has the full name linked and the other has the company name linked"
       src="../avatar-style-variants-link.svg"
       width="584"
       height="64">
</uxdot-example>

## Color scheme

All avatar variants are available for both light and dark color schemes.

### Light scheme

<uxdot-example color-palette="lightest">
  <img alt="A light scheme avatar group with three avatars and accompanying descriptions."
       src="../avatar-style-scheme-light.svg"
       width="916"
       height="64">
</uxdot-example>

### Dark scheme

<uxdot-example color-palette="darkest">
  <img alt="A dark scheme avatar group with three avatars and accompanying descriptions."
       src="../avatar-style-scheme-dark.svg"
       width="916"
       height="64">
</uxdot-example>

## Configuration

If you choose to include text near an avatar, there are specific styles.

<rh-table>

| Property                                 | Token or Style                       |
|------------------------------------------|--------------------------------------|
| Font weight - full name                  | `--rh-font-weight-body-text-medium`  |
| Font weight - job title                  | `--rh-font-weight-body-text-regular` |
| Font style - company name                | Italic                               |

</rh-table>

## Space
 
<uxdot-example color-palette="lightest">
  <img alt="Avatars have 16 pixels of space between the image and the description text."
       src="../avatar-style-space.svg"
       width="504"
       height="122">
</uxdot-example>

## Interaction states

Go to the [Interactions](/foundations/interactions/links/#inline-links) section to learn about
inline link interaction states.
