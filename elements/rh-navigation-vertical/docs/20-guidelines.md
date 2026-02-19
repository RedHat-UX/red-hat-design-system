## Usage

Use links and menus to create navigation in a vertical format. They can be stacked to create a Side navigation pattern.

### Icons

Links and menus include a slotted icon on the left, but titles do not.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>Go to the <a href="/foundations/iconography/">Iconography</a> page to see available icons.</p>
</rh-alert>

<uxdot-example color-palette="lightest">
  <img alt="A vertical navigation with several levels of nesting open with icons and labels next to the icons."
       src="../navigation-vertical-guidelines-icons.svg"
       width="1012"
       height="371">
</uxdot-example>

## Writing content

There is no character or word count, just be aware that including more content will cause line breaks, especially when there is nesting.

## Responsive design

When links and menus are stacked in a Side navigation pattern, it is usually fixed width. However, in more fluid environments like tablet or mobile, they may stretch to fit their parent container.

<uxdot-example color-palette="lightest">
  <img alt="Two vertical navigations side by side. The left one has a constrained width of about 320px. The right one is 100% of the viewport's width."
       src="../navigation-vertical-guidelines-responsive-design.svg"
       width="1012"
       height="396">
</uxdot-example>

## Best practices

### Customizing icons

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="A vertical navigation with the standard caret icons on the right."
           src="../navigation-vertical-guidelines-best-practice-1-do.svg"
           width="482"
           height="186">
    </uxdot-example>
    <p>Use the original included caret icons.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="A vertical navigation with random, customized icons in place of the standard caret icons."
           src="../navigation-vertical-guidelines-best-practice-1-dont.svg"
           width="482"
           height="186">
    </uxdot-example>
    <p>Do not move or customize the caret icons, doing so will cause confusion about which menus are expanded and which are not.</p>
  </uxdot-best-practice>
</div>