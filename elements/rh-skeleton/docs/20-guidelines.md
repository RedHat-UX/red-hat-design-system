## Usage

Use a skeleton to convey a page or section’s structure while it’s loading.

### Types

The five types of skeleton loaders are body text, heading, circle, square, and rectangle. The type of skeleton used should closely reflect the type or shape of the content that is loading. For example, if you’re loading a round avatar, use the circle skeleton.

<uxdot-example color-palette="lightest">
  <img alt="A circle skeleton next to a stack of two text skeletons are used to represent an avatar image with account information."
       src="../skeleton-guidelines-types.svg"
       width="602"
       height="64">
</uxdot-example>

### Body text skeleton sizes

Body text skeleton sizes match the amount of space occupied by a line of text, which is calculated by multiplying their font size token by their line height token. The widths of these skeletons are customizable. The table below shows which body text skeleton size corresponds to each font size token.

<rh-table>

| Body text skeleton size | Token names                                                                                            |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| xs                      | `--rh-font-size-body-text-xs` <br> `--rh-font-size-body-code-xs`                                       |
| sm                      | `--rh-font-size-body-text-sm` <br> `--rh-font-size-body-code-sm`                                       |
| md                      | `--rh-font-size-body-text-md` <br> `--rh-font-size-body-code-md`                                       |
| lg                      | `--rh-font-size-body-text-lg` <br> `--rh-font-size-body-code-lg`                                       |
| xl                      | `--rh-font-size-body-text-xl` <br> `--rh-font-size-body-code-xl`                                       |
| 2xl                     | `--rh-font-size-body-text-2xl` <br> `--rh-font-size-code-2xl`                                          |

</rh-table>

### Heading skeleton sizes

Heading skeleton sizes work similarly to body text skeletons, and the widths of these skeletons are also customizable. The table below shows which heading skeleton size pairs with each font size token.

<rh-table>

| Body text skeleton size | Token names                                                       |
|-------------------------|-------------------------------------------------------------------|
| xs                      | `--rh-font-size-heading-xs`                                       |
| sm                      | `--rh-font-size-heading-sm`                                       |
| md                      | `--rh-font-size-heading-md`                                       |
| lg                      | `--rh-font-size-heading-lg`                                       |
| xl                      | `--rh-font-size-heading-xl`                                       |
| 2xl                     | `--rh-font-size-heading-2xl`                                      |

</rh-table>


### Shape skeleton sizes

While the default size for a shape skeleton is `md`, most shape skeletons will need to use a custom size, and any length token or pixel value can be used to change their dimensions. Choose a size that matches the element or graphic that the skeleton represents.

## Animation

The skeleton’s gradient animation will loop until the data is retrieved and disappears when it loads. 

Each group of skeletons should have their gradients moving at the same speed to avoid the animation from being too distracting. It’s also recommended to avoid speeding up the animation for the same reason.

## Best practices

### When not to use

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Support cases table with body text skeletons in every row and column, except for the header row."
           src="../skeleton-guidelines-best-practice-1-do.svg"
           width="474"
           height="177">
    </uxdot-example>
    <p>Do use skeletons when loading content takes longer than a couple seconds.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Text that says, 'Downloading...80% complete' above a medium circle skeleton."
           src="../skeleton-guidelines-best-practice-1-dont.svg"
           width="474"
           height="205">
    </uxdot-example>
    <p>Do not use skeleton loaders for loading times under two seconds or for loading times longer than ten seconds.</p>
  </uxdot-best-practice>
</div>

### Skeleton layouts

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Site status table shows websites and statuses. Body text skeletons appear in the status column."
           src="../skeleton-guidelines-best-practice-2-do.svg"
           width="474"
           height="230">
    </uxdot-example>
    <p>Do mimic the structure of the actual content and use shapes that match the layout elements as closely as possible.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Site status table shows websites and statuses. Three square skeletons appear in the status column for each row."
           src="../skeleton-guidelines-best-practice-2-dont.svg"
           width="474"
           height="263">
    </uxdot-example>
    <p>Do not use shapes that don’t correspond with the elements used in a layout. For example, a circle skeleton should not be used for a line of text.</p>
  </uxdot-best-practice>
</div>

### Progressive loading

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Wireframe of a redhat.com page with skeletons only in three cards."
           src="../skeleton-guidelines-best-practice-3-do.svg"
           width="474"
           height="215">
    </uxdot-example>
    <p>Do use skeleton loaders for parts of a page that take more time to load.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Wireframe of a redhat.com page with only a navigation and a rectangle skeleton that spans the rest of the wireframe."
           src="../skeleton-guidelines-best-practice-3-dont.svg"
           width="474"
           height="215">
    </uxdot-example>
    <p>Do not use one skeleton loader for an entire screen. (Try a <a href="/elements/spinner/">spinner</a> or another method instead.)</p>
  </uxdot-best-practice>
</div>
