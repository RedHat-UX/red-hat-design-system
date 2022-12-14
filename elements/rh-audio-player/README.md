# Audio Player
Add a description of the component here.

## Usage
Describe how best to use this web component along with best practices.

```html
<rh-audio-player 
    title="Bringing Deep Learning to Enterprise Applications" 
    description="Code Comments" 
    poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
    <audio seekable crossorigin="anonymous">
        <source 
            type="audio/mp3" 
            srclang="en" 
            src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3">
        <track 
            type="text/vtt" 
            kind="captions" 
            srclang="en" 
            src="./sample.vtt">
    </audio>
</rh-audio-player>
```
