{% renderInstall %}{% endrenderInstall %}

## Usage

```html
<rh-video-embed>
  <img slot="thumbnail" src="https://fakeimg.pl/900x499/282828/eae0d0" alt="Image description"/>
  <template>
    <iframe title="Title of video" width="900" height="499" src="https://www.youtube.com/embed/Hc8emNr2igU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </template>
  <p slot="caption">Video caption here</p>
</rh-video-embed>
```

{% renderCodeDocs hideDescription=true %}{% endrenderCodeDocs %}