Dialogs display information in a window or help a user focus on a task without 
navigating them away from the page. A user cannot perform other actions until 
the dialog is dismissed.

{% section %}
  ## Sample component
  ![Dialog]({{ './dialog.svg' | url }}) {style="margin-block:var(--rh-space-2xl);"}

  ## Standard modal dialog

  A standard modal dialog contains text, and optionally some controls like links 
  or buttons

  <rh-dialog trigger="standard-trigger">
    <h2 slot="header">Leave page</h2>
    <p>If you leave the page, any unsaved information will be lost.</p>
    <rh-button slot="footer">Leave</rh-button>
    <rh-button slot="footer" variant="tertiary">Cancel</rh-button>
  </rh-dialog>
  <rh-button id="standard-trigger">Open modal dialog</rh-button>

  ## Video modal dialog

  <rh-dialog id="video-modal" type="video" trigger="video-trigger">
    <iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ?enablejsapi=1" title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </rh-dialog>
  <rh-button id="video-trigger">Open video modal dialog</rh-button>

{% endsection %}

{% componentStatus type="Element" %}

{% section %}
  ## Demos
  View a live version of this component and see how it can be customized.
  {% playground tagName=tagName %}{% endplayground %}
  {% cta href="./demo/", target="_blank" %}
    View the `<rh-dialog>` demo in a new tab
  {% endcta %}
{% endsection %}

