## Usage

Use a skeleton to convey a page or section’s structure while it’s loading.

### Types

The four types of skeleton loaders are: text, circle, square, and rectangle. The type of skeleton used should closely reflect the type or shape of the content that is loading. For example, if you’re loading a round avatar, use the circle skeleton.

<uxdot-example color-palette="lightest" full no-border>
  <img alt="A circle skeleton next to a stack of two text skeletons are used to represent an avatar image with account information."
       src="../skeleton-guidelines-types.svg"
       width="1140"
       height="192">
</uxdot-example>

### Text skeleton sizes

The text skeleton sizes match the amount of space occupied by a line of text. The width of these skeletons are customizable. The table below shows our font size tokens with their corresponding text skeleton sizes. 

<rh-table>

| Text Skeleton Size | Token Names                                                                                            |
|--------------------|--------------------------------------------------------------------------------------------------------|
| xs                 | `--rh-font-size-body-text-xs` <br> `--rh-font-size-body-code-xs`                                       |
| sm                 | `--rh-font-size-body-text-sm` <br> `--rh-font-size-body-code-sm`                                       |
| md                 | `--rh-font-size-body-text-md` <br> `--rh-font-size-body-code-md`                                       |
| lg                 | `--rh-font-size-body-text-lg` <br> `--rh-font-size-body-code-lg`                                       |
| xl                 | `--rh-font-size-body-heading-xs`                                                                       |
| 2xl                | `--rh-font-size-body-text-xl` <br> `--rh-font-size-body-code-xl` <br> `--rh-font-size-body-heading-sm` |
| 3xl                | `--rh-font-size-body-text-xl` <br> `--rh-font-size-body-code-xl` <br> `--rh-font-size-body-heading-md` |
| 4xl                | `--rh-font-size-body-heading-lg`                                                                       |
| 5xl                | `--rh-font-size-body-heading-xl`                                                                       |
| 6xl                | `--rh-font-size-body-heading-2xl`                                                                      |

</rh-table>

### Shape skeleton sizes

The table below outlines the size token values for the `sm`, `md`, and `lg` shape skeletons. If different sizes are needed, these can be customized.

<rh-table>

| Shape skeleton size | Token Name        |
|---------------------|-------------------|
| sm                  | `--rh-length-2xl` |
| md                  | `--rh-length-4xl` |
| lg                  | `--rh-length-7xl` |

</rh-table>

## Animation

The skeleton’s gradient animation will loop until the data is retrieved and disappears when it loads. 

Each group of skeletons should have their gradients moving at the same speed to avoid the animation from being too distracting. It’s also recommended to avoid speeding up the animation for the same reason.

## Best practices

### When not to use

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" slot="image">
      <img alt="Support cases table with text skeletons in every row and column, except for the header row."
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
      <img alt="Site status table shows websites and statuses. Text skeletons appear in the status column."
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
