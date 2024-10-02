## Usage

Each icon set serves a different purpose and context.

### Standard (default) icons

Standard icons are pictograms that represent general technology concepts in marketing materials, presentations, web content, infographics, and diagrams. They are typically decorative and used to add visual interest to text.

<uxdot-example width-adjustment="496px">
  <img src="../icon-usage-standard-icons.svg"
        alt="Image of a selection of icons"
        width="496"
        height="48">
</uxdot-example>

<rh-cta href="https://www.redhat.com/en/about/brand/standards/icons/standard-icons">Learn more bout standard icons</rh-cta>

### UI Icons

UI icons are utilitarian and appear in digital experiences to facilitate navigation or add visual context. They need to be immediately understood and remain clear at small sizes.

<uxdot-example width-adjustment="208px">
  <img src="../icon-usage-ui-icons.svg"
        alt="Image of a selection of UI icons"
        width="208"
        height="16">
</uxdot-example>

<rh-cta href="https://www.redhat.com/en/about/brand/standards/icons/ui-icons">Learn more about UI icons</rh-cta>

### Microns

Microns are UI icons that frequently are used at very small sizes. Using this set, rather than the regular UI icon set, helps to retain the legibility of the larger UI icon.

<uxdot-example width-adjustment="178px">
  <img src="../icon-usage-microns.svg"
        alt="Image of a selection of micron icons"
        width="178"
        height="10">
</uxdot-example>

### Social Icons

These icons are used to represent social media platforms and are often linked.

<uxdot-example width-adjustment="218px">
  <img src="../icon-usage-social.svg"
        alt="Image of a selection of social icons"
        width="218"
        height="30">
</uxdot-example>

## Icons as metaphors

Icons can convey abstract concepts quickly and help users navigate a new interface. For example, a folder icon helps users understand the concept of organizing and storing files in their computer because it provides a connection to file organization in real life. 

The association between an icon and a certain meaning can be strengthened by how frequently it is used in that context. A magnifying glass, for example, is frequently used to denote <strong>Search</strong>, so it is easily recognized by users. This is especially helpful when an icon appears without supporting text nearby.

<uxdot-example color-palette="darkest">
  <img src="../icon-as-metaphor.png"
        alt="Image of a search box with an spyglass icon adding additional meaning"
        width="1000"
        height="178">
</uxdot-example>

## Best practices

### Use small sizes

Icons are pictograms and are not meant to be used at large sizes. If you need a visual element that is larger than 100px, use an [illustration](https://www.redhat.com/en/about/brand/standards/illustration) instead.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" width-adjustment="360px">
      <img src="../icon-best-practices-size-limit-do.svg"
        alt="Image of icon at correct size"
        width="360"
        height="388">
    </uxdot-example>
    <p>Use icons at 100px or smaller.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" width-adjustment="360px">
      <img src="../icon-best-practices-size-limit-dont.svg"
        alt="Image of icon at incorrect size"
        width="360"
        height="388">
    </uxdot-example>
    <p>Do not use icons at very large sizes.</p>
  </uxdot-best-practice>
</div>

### Ensure consistency

If icons are being used within elements that are grouped together like in a vertical list of links, they should appear to have the same size.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" width-adjustment="267px">
      <img src="../icon-best-practices-consistent-sizes-do.svg"
        alt="Image of icon at correct consistency in sizing"
        width="268"
        height="129">
    </uxdot-example>
    <p>Use <code>&lt;rh-icon&gt;</code> to ensure consistency and alignment.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" width-adjustment="267px">
      <img src="../icon-best-practices-consistent-sizes-dont.svg"
        alt="Image of icon at incorrect consistency in sizing"
        width="268"
        height="129">
    </uxdot-example>
    <p>Do not use icons without a container, especially if grouped.</p>
  </uxdot-best-practice>
</div>

### Maintain familiarity

Use an icon that is familiar, can be commonly understood (ideally across cultures), and makes sense when paired with text.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" width-adjustment="101px">
      <img src="../icon-best-practices-familiar-meanings-do-1.svg"
        alt="Image of pencil icon representing familiar meaning on a edit avatar link"
        width="102"
        height="25">
    </uxdot-example>
    <p>A pencil icon is often used to represent the ability to edit something.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" width-adjustment="109px">
      <img src="../icon-best-practices-familiar-meanings-dont-1.svg"
        alt="Image of utensils icon representing unfamiliar meaning on an edit avatar link"
        width="110"
        height="25">
    </uxdot-example>
    <p>A set of utensils is not associated with editing.</p>
  </uxdot-best-practice>
</div>

### Stick with familiar meanings

If the meaning of two icons might be related, use the icon that could typically be seen more often. This helps users quickly recognize what interactions are possible.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" width-adjustment="65px">
      <img src="../icon-best-practices-familiar-meanings-do-2.svg"
        alt="Image of x icon representing familiar meaning of a close action"
        width="66"
        height="24">
    </uxdot-example>
    <p>An X icon is very commonly used to indicate that something can be closed.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" width-adjustment="65px">
      <img src="../icon-best-practices-familiar-meanings-dont-2.svg"
        alt="Image of trash can icon representing unfamiliar meaning of a close action"
        width="66"
        height="24">
    </uxdot-example>
    <p>A trash can icon indicates that a user can delete something, but it is not a proper substitute for an X (close) icon.</p>
  </uxdot-best-practice>
</div>
