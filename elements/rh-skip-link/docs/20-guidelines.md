## Usage

A skip link is used to make navigation easier for keyboard and screen reader users by letting them skip navigation.

## Behavior

A skip link is hidden off-screen by default. When users navigate to it, it will appear to drop down from the top of the viewport, making it visible for sighted users. 

Activating the skip link will hide it again and move the keyboard or screen reader focus to the main content area.

## Writing content

The recommended text label for a skip link is “Skip to main content” because it describes where users will go after activating the link. If it’s necessary to adjust the wording, make sure that the text label clearly describes what the skip link will do.

### Character count

The recommended maximum character count is listed below and includes spaces.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Text label</td>
        <td data-label="Character count">20</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Best practices

### Number of skip links

The vast majority of pages will need only one skip link, unless it is a very complex page with many repeated elements. The purpose of a skip link is to help users navigate a page more quickly and easily. Adding too many skip links detracts from this goal. If you’d like users to be able to jump from one section to the other, consider using <a href="/elements/jump-links/">jump links</a> instead.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="468px" slot="image">
      <img src="../skip-link-best-practice-too-many-do.svg" alt="Wireframe of a webpage with one skip link at the top">
    </uxdot-example>
    <p>Use a skip link to help users avoid tabbing through multiple navigation items.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="468px" slot="image">
      <img src="../skip-link-best-practice-too-many-dont.svg" alt="Wireframe of a webpage with skip links at the top of the page and at the top of every tile">
    </uxdot-example>
    <p>Do not use more than one skip link per page, unless it’s necessary for a very complex page with many repeated elements.</p>
  </uxdot-best-practice>
</div>

### Main content

“Main content” in a skip link’s text label refers to the content that appears immediately after the navigation. Ensure that users skip only the navigation, or adjust the element's text to give a more accurate description of what will be skipped.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="468px" slot="image">
      <img src="../skip-link-best-practice-main-content-do.svg" alt="Wireframe of a webpage with arrow pointing from skip link to the first interactive element on the page">
    </uxdot-example>
    <p>Ensure that users skip only the navigation, or adjust the text of the skip link to give a more accurate description.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="468px" slot="image">
      <img src="../skip-link-best-practice-main-content-dont.svg" alt="Wireframe of a webpage with arrow pointing from skip link to the second interactive element on the page">
    </uxdot-example>
    <p>Do not allow the skip link to skip content without mentioning it in the skip link.</p>
  </uxdot-best-practice>
</div>

### Visibility 

To prevent the skip link from being visually distracting, hide a skip link until users navigate to it. The most accessible way to hide it is to position the skip link outside of the viewport, rather than using `display: none` or the `hidden` attribute in CSS.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="468px" slot="image">
      <img src="../skip-link-best-practice-visibility-do.svg" alt="Wireframe of webpage that has a tile in focus and no visible skip link">
    </uxdot-example>
    <p>Hide the skip link by default, until the user navigates to it.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="468px" slot="image">
      <img src="../skip-link-best-practice-visibility-dont.svg" alt="Wireframe of a webpage that has a tile in focus and a visible skip link">
    </uxdot-example>
    <p>Do not keep the skip link visible if the user hasn’t navigated to it or if the user has already moved to the main content.</p>
  </uxdot-best-practice>
</div>
