## Usage 

Use an announcement to display an important message across pages.

<div class="grid xs-two-columns">
  <uxdot-best-practice variant="do">
    <ul>
      <li>To display a message to a specific audience or group</li>
      <li>For an important message or announcement</li>
      <li>To support events or new initiatives</li>
    </ul>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <ul>
      <li>If content is very long</li>
      <li>If there are multiple messages or announcements</li>
      <li>To advertise secondary or less important content</li>
      <li>If the message does not have a call to action</li>
      <li>As alert feedback as the result of user action</li>
    </ul>
  </uxdot-best-practice>
</div>

## Experience types

An announcement displays content to audiences depending on a set of qualifications.

  - **Experience A** - users who have not registered for the event will see this announcement
  - **Experience B** - users who have registered for the event will see this announcement on the day of the event or after the event

<uxdot-example variant="full" no-border>
  <img alt="Two announcements, one showing what it looks like for users who have registered and one showing what it looks like for users that have not registered"
       src="../announcement-guidelines-experience-types.svg">
</uxdot-example>

## Layout 

### Minimum elements

Body text, a call to action, and a close button **are required at a minimum**. From here, you may customize an announcement to your preference.

<uxdot-example variant="full" no-border>
  <img alt="Two announcements, one light and one dark, showing the minimum elements required for each color palette."
       src="../announcement-guidelines-minimum-elements.svg">
</uxdot-example>

### Positioning

An announcement is usually placed at the top of a page above the navigation. In rare cases, it can be placed below the hero, but this should be avoided when possible.

<uxdot-example variant="full" no-border>
  <img alt="An example announcement placed below a page's hero."
       src="../announcement-guidelines-layout-positioning.svg">
</uxdot-example>

## Customizing

The following is a list of things you can do to customize an announcement.

  - Add an inline or background image
  - Change text or call to action content
  - Remove the close button

### Inline image

An announcement may include an icon, logo, or something else that adds context or visual interest.

<uxdot-example width-adjustment="1012px">
  <img alt="Two annoucements, one without an image, one with a customized image."
       src="../announcement-guidelines-customizing-inline-image-1.svg">
</uxdot-example>

On small viewport sizes, an inline image can be positioned to the left or on top of body text.

<uxdot-example width-adjustment="576px">
  <img alt="Two annoucements, one with an image on the left, the other with an image on the top."
       src="../announcement-guidelines-customizing-inline-image-2.svg">
</uxdot-example>

### Background image

An announcement includes a background color and may include a background image. A background image can be positioned on the left or right. Do not position a background image on the right if there is a close button. Images should not fill the entire background because that might render some text unreadable.

<uxdot-example width-adjustment="1012px">
  <img alt="An annoucement with a blue background and background image on the left."
       src="../announcement-guidelines-customizing-bg-image.svg">
</uxdot-example>

### Close Button

An announcement includes a close button, but you may remove it only if absolutely necessary.

<uxdot-example width-adjustment="1012px">
  <img alt="Two announcements with blue backgrounds, one with and one without a close button."
       src="../announcement-guidelines-customizing-close-button.svg">
</uxdot-example>

## Character counts

Use these guidelines to write content that is short and to the point.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>Character counts are estimates, they could end up being shorter or longer when text is translated to other languages.</p>
</rh-alert>

<rh-table>
  <table>
    <caption class="visually-hidden">Announcement character counts</caption>
    <thead>
      <tr>
        <th scope="col">Element</th>
        <th scope="col">Max characters</th>
        <th scope="col">Max lines</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row">Body text</td>
        <td>65</td>
        <td>1 (2 lines on small viewports)</td>
      </tr>
      <tr>
        <td scope="row">Call to action</td>
        <td>25</td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Responsive Design

Background images will shift or disappear as viewport sizes get smaller.

<uxdot-example width-adjustment="1012px">
  <img alt="Four annoucements at different widths showing its responsiveness"
       src="../announcement-guidelines-responsive-design.svg">
</uxdot-example>

## Best Practices

### Background images

<uxdot-best-practice variant="do">
  <uxdot-example width-adjustment="1012px" slot="image">
    <img alt="An rh-announcement with the background image positioned on the left"
         src="../announcement-guidelines-best-practice-do-1.svg">
  </uxdot-example>
  <p>Position a background image away from text that needs to be readable.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example width-adjustment="1012px" slot="image">
    <img alt="An rh-announcement with a repeating background image that decreases text contrast"
         src="../announcement-guidelines-best-practice-dont-1.svg">
  </uxdot-example>
  <p>Do not use a background image that risks text readability.</p>
</uxdot-best-practice>

### Dark theme

<uxdot-best-practice variant="do">
  <uxdot-example width-adjustment="1012px" slot="image">
    <img alt="An announcement with a dark background on top of a main navigation"
         src="../announcement-guidelines-best-practice-do-2.svg">
  </uxdot-example>
  <p>Use a dark theme announcement if it has a different background color than the navigation.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example width-adjustment="1012px" slot="image">
    <img alt="An announcement with a dark background that matches the main navigation its on top of"
         src="../announcement-guidelines-best-practice-dont-2.svg">
  </uxdot-example>
  <p>Do not use a dark theme announcement if it has the same background color as the navigation.</p>
</uxdot-best-practice>

### Alert

<uxdot-best-practice variant="do">
  <uxdot-example width-adjustment="408px" slot="image">
    <img alt="An rh-alert component"
         src="../announcement-guidelines-best-practice-do-3.svg">
  </uxdot-example>
  <p>Use an alert for alert use cases.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example width-adjustment="1012px" slot="image">
    <img alt="An announcement with a purple background and top border which looks very similar to an rh-alert"
         src="../announcement-guidelines-best-practice-dont-3.svg">
  </uxdot-example>
  <p>Do not apply alert styling to an announcement.</p>
</uxdot-best-practice>
