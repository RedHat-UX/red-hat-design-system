---
"@rhds/elements": minor
---

✨ Added `<rh-audio-player>`.

Audio-player creates a custom UI for audio files.

```html
<rh-audio-player>
    <p slot="series">Code Comments</p>
    <h3 slot="title">Rethinking Networks In Telecommunications</h3>
    <audio crossorigin="anonymous" slot="media" controls>
        <source type="audio/mp3" srclang="en" src="./rethinking.mp3">
    </audio>
</rh-audio-player>
```