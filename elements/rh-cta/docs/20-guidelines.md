## Guidelines

Use a call to action to entice users to make a selection.

### When to use a call to action

Use a call to action to highlight a link on its own so it stands out to users. Most of the time, calls to action are arranged last in a group of elements so users can read about something first and then proceed further if they are interested.

### Call to action vs. button

Here is guidance on when to use a call to action vs. button.

<rh-table>

| Element        | Intended action                            | Frequency              |
|----------------|--------------------------------------------|-------------------------|
| Call to action | Direct users to another page when selected | Always                 |
| Button         | Perform an action when selected            | Depending on the action, users may or may not be directed to another page as the result of the action |

</rh-table>

## Using styles or variants

Some calls to action can be used more than once per page depending on their messaging and placement.

<rh-table>

| Style or variant | How to use |
|------------------|------------------------------------------------------------------|
| Primary          | Try to use only once per page for the most important link        |
| Secondary        | Use several times on the same page for important links           |
| Tertiary         | Use several times on the same page for less important links      |
| Brick            | Use to group several links together in a grid                    |
| Video            | Use to trigger a video within a [dialog](/elements/dialog/)      |
| Desaturated      | Use only in the dark scheme if other styles are duplicative or violate accessibility guidelines |

</rh-table>

### Bricks

[UI icons](/foundations/iconography/#ui-icons) can be used in the Brick variant to add visual interest to various topics.

<uxdot-example color-palette="lightest" width-adjustment="900px">
  <img src="../cta-guidelines-usage-bricks.svg"
        alt="Four brick CTAs with various accompanying UI icons"
        width="900"
        height="56">
</uxdot-example>

## Writing content

### General text

When writing text, be specific and communicate the action you want users to take by doing the following:

- Make sure text is unique and easily understood especially when screen readers announce text to users
- Always start with a verb, do not use more than 1 verb
- Use simple words and phrases
- Keep word counts as short as possible, delete words if needed
- Do not use any punctuation
- Do not add extra icons
- Be aware that text might get longer when translated to certain languages

<uxdot-example color-palette="lightest" width-adjustment="430px">
  <img src="../cta-guidelines-content-text.svg"
        alt="Incorrect vs correct usage. Incorrect: Press release: Red Hat optimizes Red Hat AI. Correct: Read the latest Red Hat AI press release"
        width="430"
        height="118">
</uxdot-example>

### Clarity of language

Generic or vague text does not help users make informed decisions.

<uxdot-example color-palette="lightest" width-adjustment="667px">
  <img src="../cta-guidelines-content-clarity.svg"
        alt="Incorrect vs correct usage. Incorrect: Learn more. Correct: Learn about Red Hat AI Enhancements"
        width="667"
        height="27">
</uxdot-example>

### Long text

Most users do not want to spend more time reading than necessary, so keep text as short as possible.

<uxdot-example color-palette="lightest" width-adjustment="831px">
  <img src="../cta-guidelines-content-long-text.svg"
        alt="Four CTA examples. Two with long text (up to 82 characters) and two with correct text (30-55 characters)"
        width="831"
        height="294">
</uxdot-example>

## Behavior

### Placement

Calls to action can be placed in just about any layout or interface. For normal environments, using any style is acceptable. For small environments, use the Tertiary style.

### Hierarchy

Calls to action follow a hierarchy with the Primary style being the most important.

<uxdot-example color-palette="lightest" width-adjustment="720px">
  <img src="../cta-guidelines-layout-hierarchy.svg"
        alt="Use Primary CTA's once or twice per page. Secondary CTA's can be used several times. Tertiary and Brick can be used many times."
        width="720"
        height="245">
</uxdot-example>

### Bricks

Brick variants are the only calls to action that can resize to fit various column arrangements. However, the width of other styles and variants is determined by what content is inside.

<uxdot-example color-palette="lightest" width-adjustment="936px">
  <img src="../cta-guidelines-layout-bricks.svg"
        alt="Various bricks with different character counts and widths in different columns"
        width="936"
        height="293">
</uxdot-example>

### Grouping

Calls to action are grouped by hierarchy with the Primary style always being first.

<uxdot-example color-palette="lightest" width-adjustment="796px">
  <img src="../cta-guidelines-layout-grouping.svg"
        alt="Four sets of CTAs. In each, the hierarchy cascades from most important to least important, left to right."
        width="796"
        height="210">
</uxdot-example>

### Space when grouped

If calls to action need to be grouped, spacing between them should use the `--rh-space-2xl` token.

Spacing between Brick variants is flexible and should be the same as [grid gutters](/foundations/grid/).

<uxdot-example color-palette="lightest" width-adjustment="483px">
  <img src="../cta-guidelines-layout-space-a.svg"
        alt="Three sets of Primary and Secondary CTAs, each with 32px of margin between them on all sides."
        width="483"
        height="264">
</uxdot-example>

<uxdot-example color-palette="lightest" width-adjustment="396px">
  <img src="../cta-guidelines-layout-space-b.svg"
        alt="Four tertiary CTAs with 32px of margin between each one."
        width="396"
        height="86">
</uxdot-example>

<uxdot-example color-palette="lightest" width-adjustment="936px">
  <img src="../cta-guidelines-layout-space-c.svg"
        alt="Many Brick CTAs showing the spacing slash gutter being controlled by the grid that contains the component."
        width="936"
        height="473">
</uxdot-example>

## Responsive design

Calls to action are arranged horizontally in 1 row by default. As viewports get smaller, they will stack.

<uxdot-example color-palette="lightest" width-adjustment="1140px">
  <img src="../cta-guidelines-layout-responsive-design.svg"
        alt="Three sets of CTAs showing desktop, tablet, and mobile viewports and how they stack as the viewport gets smaller."
        width="1140"
        height="560">
</uxdot-example>

## Best practices

### Using the primary style

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="374px" slot="image">
      <img src="../cta-guidelines-best-practice-1-do.svg"
            alt="A Primary then Secondary CTA"
            width="374"
            height="120">
    </uxdot-example>
    <p>Use the Primary style to indicate the most important action.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="374px" slot="image">
      <img src="../cta-guidelines-best-practice-1-dont.svg"
            alt="Two Primary CTAs next to each other"
            width="374"
            height="120">
    </uxdot-example>
    <p>Do not use the Primary style more than once in the same area.</p>
  </uxdot-best-practice>
</div>

### Grouping

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="374px" slot="image">
      <img src="../cta-guidelines-best-practice-2-do.svg"
            alt="A Primary then Secondary CTA"
            width="374"
            height="120">
    </uxdot-example>
    <p>Use a combination of Primary and Secondary styles.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="374px" slot="image">
      <img src="../cta-guidelines-best-practice-2-dont.svg"
            alt="Two Primary CTAs next to each other"
            width="374"
            height="120">
    </uxdot-example>
    <p>Do not mix more than 2 styles together.</p>
  </uxdot-best-practice>
</div>

### Number of actions

<uxdot-best-practice variant="do">
  <uxdot-example color-palette="lightest" width-adjustment="483px" slot="image">
    <img src="../cta-guidelines-best-practice-3-do.svg"
          alt="One primary and two Secondary CTAs"
          width="483"
          height="120">
  </uxdot-example>
  <p>Use 3 calls to action max, this helps avoid choice paralysis.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example color-palette="lightest" width-adjustment="841px" slot="image">
    <img src="../cta-guidelines-best-practice-3-dont.svg"
          alt="One primary and four Secondary CTAs"
          width="841"
          height="120">
  </uxdot-example>
  <p>Do not use more than 3 calls to action in the same area.</p>
</uxdot-best-practice>
