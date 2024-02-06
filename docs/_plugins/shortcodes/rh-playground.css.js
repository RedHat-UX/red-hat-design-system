const style = new CSSStyleSheet();
style.replaceSync(/* css */`
  :host {
    position: relative;
    display: block;

    --_max-height: 785px;
  }

  ::slotted(pre) {
    max-height:  var(--_max-height);
    margin: 0 !important;
  }

  [hidden],
  div.showing {
    display: none !important;
  }

  div {
    max-height: var(--_max-height);
    overflow-y: scroll;
  }

  rh-button {
    position: absolute;
    inset-block-end: 5px;
    inset-inline-end: 5px;
    display: block;
  }

  rh-spinner {
    opacity: 0;
    transition: opacity 0.5s ease;
    position: absolute;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  .loading rh-spinner {
    opacity: 1;
  }

  .loading ::slotted(pre) {
    opacity: .3;
  }

  playground-project {
    display: block;
    border: var(--rh-border-width-md, 2px) solid var(--rh-color-border-subtle-on-light, #c7c7c7);
    border-radius: var(--rh-border-radius-default, 3px);
    overflow: hidden;
  }

  playground-preview {
    resize: vertical;
    overflow: hidden;
  }
`);
export default style;
