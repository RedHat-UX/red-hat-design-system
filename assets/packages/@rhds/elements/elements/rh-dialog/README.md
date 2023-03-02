# Dialog
Red Hat Modal Dialog

## Usage

```html
<rh-dialog>
  Some dialog content
</rh-dialog>
```

### Video Dialog

Video dialogs have the `type=video` attribute, and take a single `<video>` element or a single YouTube embed iFrame.

```html
<rh-button id="video-modal-trigger"><button>Open</button></rh-button>
<rh-dialog id="video-modal" type="video" trigger="video-modal-trigger">
  <video controls
         src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video>
</rh-dialog>
```

### Youtube Embed Dialog

You may embed a youtube video iframe in a dialog with `type=video`, just
*be sure to add the `enablejsapi=1` URL query param*, or it will not be possible to pause the video via JavaScript.

```html
<rh-button id="youtube-modal-trigger">
  <button>Open</button>
</rh-button>
<rh-dialog id="youtube-modal" type="video" trigger="youtube-modal-trigger">
  <iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ?enablejsapi=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
</rh-dialog>
```

Video dialogs will automatically attempt to pause the video when closed. If you have embedded a non-youtube iframe,
or some other video player, listen for the `cancel` or `close` events and pause the video manually

```js
function pause(event) {
  myVideoApi.pauseIframe(event.target.querySelector('iframe'));
}

dialog.addEventListener('close', pause);
dialog.addEventListener('cancel', pause);
```
