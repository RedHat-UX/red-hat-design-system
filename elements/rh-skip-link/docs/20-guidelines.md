## Usage

A skip link is used to make navigation easier for keyboard and screen reader users by letting them skip navigation.

## Behavior

A skip link is hidden off-screen by default. When users navigate to it, it will appear to drop down from the top of the viewport, making it visible for sighted users. 

Activating the skip link will hide it again and move the keyboard or screen reader focus to the main content area.

## Writing content

The recommended text label for a skip link is “Skip to main content” because it describes where users will go after activating the link. If it’s necessary to adjust the wording, make sure that the text label clearly describes what the skip link will do.

### Character count

The recommended maximum character count is listed below and includes spaces.

| Element {style="width: 50%" } | Character count |
| ----------------------------- | --------------- |
| Text label                    | 20              |

## Best practices

### Too many skip links

The purpose of a skip link is to help users navigate a page more quickly and easily. Adding too many skip links detracts from this goal, and the vast majority of pages will need only one skip link. If you’d like users to be able to jump from one section to the other, consider using <a href="/elements/jump-links/">jump links</a> instead.

<!--NOTE: ADD IMAGES-->
<div class="best-practices-grid">
    <div>
        <img slot="header" src="" alt="">
        <h4 class="correct">Do</h4>
        <p>Use a skip link to help users avoid tabbing through multiple navigation items.</p>
    </div>
    <div>
        <img slot="header" src="" alt="">
        <h4 class="wrong">Don't</h4>
        <p>Do not use more than one skip link per page, unless it’s necessary for a very complex page with many repeated elements.</p>
    </div>
</div>

### Main content

“Main content” in a skip link’s text label refers to the content that appears immediately after the navigation. A skip link should not send users past additional content without any indication.

<!-- Note: Add images-->
<div class="best-practices-grid">
    <div>
        <img slot="header" src="" alt="">
        <h4 class="correct">Do</h4>
        <p>Ensure that users skip only the navigation, or adjust the text of the skip link to give a more accurate description.</p>
    </div>
    <div>
        <img slot="header" src="" alt="">
        <h4 class="wrong">Don't</h4>
        <p>Do not allow the skip link to skip content without mentioning it in the skip link.</p>
    </div>
</div>

### Visibility 

To prevent the skip link from being visually distracting, hide a skip link until users navigate to it. The most accessible way to hide it is to position the skip link outside of the viewport, rather than using `display: none` or the `hidden` attribute in CSS.
<!-- Note: Add images-->
<div class="best-practices-grid">
    <div>
        <img slot="header" src="" alt="Example of a site that does not show a skip link">
        <h4 class="correct">Do</h4>
        <p>Hide the skip link by default, until the user navigates to it.</p>
    </div>
    <div>
        <img slot="header" src="" alt="Example of a site that is showing a skip link">
        <h4 class="wrong">Don't</h4>
        <p>Do not keep the skip link visible if the user hasn’t navigated to it or if the user has already moved to the main content.</p>
    </div>
</div>

{% repoStatus type="Element" %}