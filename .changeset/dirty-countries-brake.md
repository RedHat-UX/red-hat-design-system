---
"@rhds/elements": minor
---

✨ Added `<rh-video>`

A Video is a graphical preview of a video overlayed with a play button. When clicked, the video will begin playing.

```html
<rh-video>
  <img slot="thumbnail" src="https://fakeimg.pl//300x150/282828/eae0d0" alt="Image description"/>
  <template>
    <iframe title="Title of video" width="300" height="150" frameborder="0" allowfullscreen src="https://www.youtube.com/embed/9gYLKxJ9NbY"></iframe>
  </template>
  <p slot="caption"><a class="rh-video-embed-caption-link" href="//www.redhat.com">View the infographic</a></p>
</rh-video>
```
