## Usage

Each icon set serves a different purpose and context.

### Standard (default) icons

The standard icons are pictograms that represent general technology concepts in marketing materials, presentations, web content, infographics, and diagrams. They are typically decorative and used to add visual interest to the text they accompany.

<uxdot-example width-adjustment="368px">
  <img src="../icon-usage-standard-icons.svg" alt="Image of a selection of icons">
</uxdot-example>

<rh-cta href="https://www.redhat.com/en/about/brand/standards/icons/standard-icons">Learn more bout standard icons</rh-cta>

### UI Icons

UI icons are utilitarian and appear in digital experiences to facilitate navigation or add visual context. They need to be immediately understood and remain clear at small sizes.

<uxdot-example width-adjustment="248px">
  <img src="../icon-usage-ui-icons.svg" alt="Image of a selection of UI icons">
</uxdot-example>

<rh-cta href="https://www.redhat.com/en/about/brand/standards/icons/ui-icons">Learn more about UI icons</rh-cta>

### Microns

Microns are UI icons that frequently are used at very small sizes. Using this set, rather than the regular UI icon set, helps to retain the legibility of the larger UI icon.

<uxdot-example width-adjustment="178px">
  <img src="../icon-usage-microns.svg" alt="Image of a selection of micron icons">
</uxdot-example>

### Social Icons

These icons are used to represent social media platforms and are often linked.

<uxdot-example width-adjustment="154px">
  <img src="../icon-usage-social.svg" alt="Image of a selection of social icons">
</uxdot-example>

## Icons as metaphors

Icons can convey abstract concepts quickly and help users navigate a new interface. For example, a folder icon helps users understand the concept of organizing and storing files in their computer because it provides a connection to file organization in real life. 

An icon’s association with a certain meaning can be strengthened by how frequently it’s used in that context. A magnifying glass, for example, is frequently used to denote a search function, so it’s easily recognized by users. This is especially helpful when an icon appears without supporting text nearby.

<uxdot-example color-palette="darkest">
  <img src="../icon-as-metaphor.svg" alt="Image of a search box with an spyglass icon adding additional meaning">
</uxdot-example>

## Best practices

### Size limits

Icons are not meant to be used at large sizes. If you need a visual element that’s larger than 100px, consider using an [illustration](https://www.redhat.com/en/about/brand/standards/illustration).

<div class="grid sm-two-columns">
  <uxdot-best-practice do>
    <uxdot-example slot="image" width-adjustment="360px">
      <img src="../icon-best-practices-size-limit-do.svg" alt="Image of icon at correct size">
    </uxdot-example>
    <p>Use icons at 100px or smaller.</p>
  </uxdot-best-practice>

  <uxdot-best-practice dont>
    <uxdot-example slot="image" width-adjustment="360px">
      <img src="../icon-best-practices-size-limit-dont.svg" alt="Image of icon at incorrect size">
    </uxdot-example>
    <p>Do not use icons at very large sizes.</p>
  </uxdot-best-practice>
</div>

### Use consistent sizes

If icons are being used in elements that are grouped together, like in a group of cards, they should appear to be the same size. The <code>&lt;rh-icon&gt;</code> element will help keep them the same dimension.

<div class="grid sm-two-columns">
  <uxdot-best-practice do>
    <uxdot-example slot="image" width-adjustment="267px">
      <img src="../icon-best-practices-consistent-sizes-do.svg" alt="Image of icon at correct consistency in sizing">
    </uxdot-example>
    <p>Use <code>&lt;rh-icon&gt;</code> to make icons occupy the same amount of space.</p>
  </uxdot-best-practice>

  <uxdot-best-practice dont>
    <uxdot-example slot="image" width-adjustment="267px">
      <img src="../icon-best-practices-consistent-sizes-dont.svg" alt="Image of icon at incorrect consistency in sizing">
    </uxdot-example>
    <p>Do not add icons without a container like <code>&lt;rh-icon&gt;</code>, especially if they’re used in grouped elements.</p>
  </uxdot-best-practice>
</div>

### Stick with familiar meanings

Use an icon that is familiar, can be commonly understood (ideally across cultures), and makes sense when paired with text that it’s meant to represent.

<div class="grid sm-two-columns">
  <uxdot-best-practice do>
    <uxdot-example slot="image" width-adjustment="101px">
      <img src="../icon-best-practices-familiar-meanings-do-1.svg" alt="Image of pencil icon representing familiar meaning on a edit avatar link">
    </uxdot-example>
    <p>A pencil icon is often used to represent the ability to edit information.</p>
  </uxdot-best-practice>

  <uxdot-best-practice dont>
    <uxdot-example slot="image" width-adjustment="109px">
      <img src="../icon-best-practices-familiar-meanings-dont-1.svg" alt="Image of utensils icon representing unfamiliar meaning on an edit avatar link">
    </uxdot-example>
    <p>A set of utensils is not associated with the idea of locking or unlocking, so pairing this icon with “password” can cause confusion.</p>
  </uxdot-best-practice>
</div>

Even if the meanings of two icons could be related, use the icon that is more typically seen. This helps users quickly recognize what interactions are possible.

<div class="grid sm-two-columns">
  <uxdot-best-practice do>
    <uxdot-example slot="image" width-adjustment="65px">
      <img src="../icon-best-practices-familiar-meanings-do-2.svg" alt="Image of x icon representing familiar meaning of a close action">
    </uxdot-example>
    <p>An X icon is very commonly used to indicate that something can be closed.</p>
  </uxdot-best-practice>

  <uxdot-best-practice dont>
    <uxdot-example slot="image" width-adjustment="65px">
      <img src="../icon-best-practices-familiar-meanings-dont-2.svg" alt="Image of trash can icon representing unfamiliar meaning of a close action">
    </uxdot-example>
    <p>A trash can icon indicates that a user wants to discard something, but it doesn’t properly substitute for an X icon in a close button.</p>
  </uxdot-best-practice>
</div>
