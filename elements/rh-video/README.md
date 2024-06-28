# Video

A Video is a graphical preview of a video overlayed with a play button. When clicked, the video will begin playing.

## Usage

Use this component if you want to embed a YouTube video on a page. This component only loads the required YouTube embed code when a user clicks on the play button.

```html
<rh-video>
  <img slot="thumbnail" src="https://fakeimg.pl/900x499/282828/eae0d0" alt="Image description"/>
  <template>
    <iframe title="Title of video" width="900" height="499" src="https://www.youtube.com/embed/Hc8emNr2igU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </template>
  <p slot="caption"><a class="rh-video-embed-caption-link" href="https://www.redhat.com/">View the infographic</a></p>
</rh-video>
```
