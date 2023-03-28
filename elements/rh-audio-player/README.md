# Audio Player
A user interface for playing audio files.

## Usage
Within the player and its panel sections, make sure to use proper heading hierarchy.

```html
<rh-audio-player>
    <p slot="series">Series Name</p>
    <h2 slot="title">Episode Title</h3>
    <audio crossorigin="anonymous" slot="media">
        <source type="audio/mp3" srclang="en" src="./audio.mp3">
    </audio>
    <rh-audio-player-about slot="about">
        <h3 slot="heading">About the episode</h3>
        <p>Show notes here.</p>
        <rh-audio-player-profile slot="profile" src="./profile-picture.png">
          <span slot="fullname">Name</span><br>
          <span slot="role">Product Manager</span>, <span slot="company">Company Name</span>
        </rh-audio-player-profile>
    </rh-audio-player-about>
    <rh-audio-player-subscribe slot="subscribe">
        <h4 slot="heading">Subscribe</h4>
        <p>Subscribe here:</p>
        <a slot="link" href="./subscribe.link" target="_blank" title="Listen on Apple Podcasts">
            <img src="./podcast-logo.png" alt="Listen on Apple Podcasts">
        </a>
    </rh-audio-player-subscribe>
    <rh-audio-player-transcript slot="transcript">
        <rh-audio-player-cue start="00:02" voice="Burr Sutter"></rh-audio-player-cue>
        <rh-audio-player-cue start="00:02">
            I'm Burr Sutter.
        </rh-audio-player-cue>
        <rh-audio-player-cue start="00:04">
            I'm a Red Hatter who spends a lot of time talking to technologists about technologies.
        </rh-audio-player-cue>
    </rh-audio-player-transcript>
</rh-audio-player>
```
