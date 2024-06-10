export const config = {
  "files": {
    "demo/reset.css": {
      "contentType": "text/css",
      "content": "\n  /* Box sizing rules */\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  /* Remove default margin */\n  :where(body,\n  h1,\n  h2,\n  h3,\n  h4,\n  p,\n  li,\n  figure,\n  figcaption,\n  blockquote,\n  dl,\n  dd) {\n    margin: 0;\n  }\n\n  /* Default scroll behavior */\n  html:focus-within {\n    scroll-behavior: smooth;\n  }\n\n  /* Inherit fonts for inputs and buttons */\n  :where(input,\n  button,\n  textarea,\n  select) {\n    font: inherit;\n  }\n\n  /* Remove all animations and transitions for people that prefer not to see them */\n  @media (prefers-reduced-motion: reduce) {\n    html:focus-within {\n      scroll-behavior: auto;\n    }\n\n    *,\n    *:before,\n    *:after {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n      scroll-behavior: auto !important;\n    }\n  }\n}\n",
      "hidden": true
    },
    "demo/fonts.css": {
      "contentType": "text/css",
      "content": "@font-face {\n  font-family: RedHatDisplay;\n  src: url(\"../assets/fonts/RedHatDisplay/RedHatDisplay-Regular.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 300;\n  text-rendering: optimizelegibility;\n}\n\n@font-face {\n  font-family: RedHatDisplay;\n  src: url(\"../assets/fonts/RedHatDisplay/RedHatDisplay-Medium.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 400;\n  text-rendering: optimizelegibility;\n}\n\n@font-face {\n  font-family: RedHatDisplay;\n  src: url(\"../assets/fonts/RedHatDisplay/RedHatDisplay-Bold.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 700;\n  text-rendering: optimizelegibility;\n}\n\n@font-face {\n  font-family: RedHatText;\n  src: url(\"../assets/fonts/RedHatText/RedHatText-Regular.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 400;\n  text-rendering: optimizelegibility;\n}\n\n@font-face {\n  font-family: RedHatText;\n  src: url(\"../assets/fonts/RedHatText/RedHatText-Medium.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 700;\n  text-rendering: optimizelegibility;\n}\n",
      "hidden": true
    },
    "demo/typography.css": {
      "contentType": "text/css",
      "content": "body {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif);\n  font-size: 1rem;\n  line-height: var(--rh-line-height-body-text, 1.5);\n}\n\n:where(h1, h2, h3, h4, h5, h6) {\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-heading, 1.3);\n}\n\n:where(code) {\n  font-family: var(--rh-font-family-code, RedHatMono, \"Red Hat Mono\", \"Courier New\", Courier, monospace);\n  line-height: var(--rh-line-height-code, 1.5);\n}\n\n:where(kbd) {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif);\n  font-size: 1rem;\n  line-height: var(--rh-line-height-body-text, 1.5);\n}\n\n:where(h1) {\n  font-size: var(--rh-font-size-heading-2xl, 3rem);\n}\n\n:where(h2) {\n  font-size: var(--rh-font-size-heading-xl, 2.5rem);\n}\n\n:where(h3) {\n  font-size: var(--rh-font-size-heading-lg, 2.25rem);\n}\n\n:where(h4) {\n  font-size: var(--rh-font-size-heading-md, 1.75rem);\n}\n\n:where(h5) {\n  font-size: var(--rh-font-size-heading-sm, 1.5rem);\n}\n\n:where(h6) {\n  font-size: var(--rh-font-size-heading-xs, 1.25rem);\n}\n\n:where(p) {\n  font-size: var(--rh-font-size-body-text-md, 1rem);\n}\n\n:where(p, h1, h2, h3, h4, h5, h6, li) {\n  max-width: 56rem;\n}\n",
      "hidden": true
    },
    "demo/rh-button-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-button>Primary</rh-button>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"reset.css\"><link rel=\"stylesheet\" href=\"fonts.css\"><link rel=\"stylesheet\" href=\"typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-button-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Button"
    },
    "demo/rh-button-color-context-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-context-demo>\n  <rh-button danger=\"\">Danger</rh-button>\n  <rh-button>Primary</rh-button>\n  <rh-button variant=\"link\">Link</rh-button>\n  <rh-button variant=\"secondary\">Secondary</rh-button>\n  <rh-button variant=\"secondary\" danger=\"\">Secondary Danger</rh-button>\n  <rh-button variant=\"tertiary\">Tertiary</rh-button>\n  <rh-button variant=\"close\">Close</rh-button>\n  <rh-button variant=\"play\">Play</rh-button>\n  <rh-button disabled=\"\">Disabled</rh-button>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n\n\n<style>\n  rh-context-demo::part(demo) {\n    display: flex;\n    align-items: start;\n    flex-wrap: wrap;\n    gap: var(--rh-space-lg, 16px);\n  }\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-button-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Color Context"
    },
    "demo/rh-button-form-control-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n  const form = document.getElementById('form');\n  const fieldset = document.getElementById('fieldset');\n\n  /** @this {HTMLFormElement} */\n  function onSubmit(event) {\n    event.preventDefault();\n    this.elements.output.textContent = 'Submitted';\n  }\n\n  /** @this {HTMLFormElement} */\n  function onReset() {\n    fieldset.disabled = false;\n    this.elements.output.textContent = 'Pending';\n  }\n\n  /** @this{HTMLInputElement} */\n  function onChange({ target: { checked, dataset: { controls } } }) {\n    // eslint-disable-next-line no-console\n    console.log(`${controls}.disabled =`, checked);\n    const el = document.getElementById(controls);\n    if (el) {\n      el.disabled = checked;\n    }\n  }\n\n  form.addEventListener('submit', onSubmit);\n  form.addEventListener('reset', onReset);\n  form.addEventListener('change', onChange);\n",
      "hidden": true
    },
    "demo/form-control/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<form id=\"form\">\n  <fieldset id=\"fieldset\">\n    <legend>\n      rh-button in a <code>&lt;fieldset&gt;</code> element;\n      clicking this button must submit the form\n    </legend>\n    <rh-button id=\"button\" type=\"submit\">Submit</rh-button>\n  </fieldset>\n\n  <fieldset id=\"checkboxes\">\n    <legend>Use these checkboxes to toggle disabled state</legend>\n    <input id=\"fst\" type=\"checkbox\" data-controls=\"fieldset\">\n    <label for=\"fst\">Disable fieldset</label>\n    <input id=\"btn\" type=\"checkbox\" data-controls=\"button\">\n    <label for=\"btn\">Disable rh-button</label>\n  </fieldset>\n\n  <fieldset id=\"outputs\">\n    <legend>Observe and reset form state</legend>\n    <rh-button type=\"reset\">Reset</rh-button>\n    <label for=\"output\">Form status:</label>\n    <output id=\"output\" name=\"output\">Pending</output>\n  </fieldset>\n</form>\n\n<style>\n  #checkboxes {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n  }\n\n  label { display: block; }\n\n  form h2 {\n    width: 100%;\n  }\n\n  form output {\n    text-transform: capitalize;\n  }\n</style>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  const form = document.getElementById('form');\n  const fieldset = document.getElementById('fieldset');\n\n  /** @this {HTMLFormElement} */\n  function onSubmit(event) {\n    event.preventDefault();\n    this.elements.output.textContent = 'Submitted';\n  }\n\n  /** @this {HTMLFormElement} */\n  function onReset() {\n    fieldset.disabled = false;\n    this.elements.output.textContent = 'Pending';\n  }\n\n  /** @this{HTMLInputElement} */\n  function onChange({ target: { checked, dataset: { controls } } }) {\n    // eslint-disable-next-line no-console\n    console.log(`${controls}.disabled =`, checked);\n    const el = document.getElementById(controls);\n    if (el) {\n      el.disabled = checked;\n    }\n  }\n\n  form.addEventListener('submit', onSubmit);\n  form.addEventListener('reset', onReset);\n  form.addEventListener('change', onChange);\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-button-form-control-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Form Control"
    },
    "demo/rh-button-variants-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n",
      "hidden": true
    },
    "demo/variants/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-button danger=\"\">Danger</rh-button>\n<rh-button>Primary</rh-button>\n<rh-button variant=\"link\">Link</rh-button>\n<rh-button variant=\"secondary\">Secondary</rh-button>\n<rh-button variant=\"secondary\" danger=\"\">Secondary Danger</rh-button>\n<rh-button variant=\"tertiary\">Tertiary</rh-button>\n<rh-button variant=\"close\">Close</rh-button>\n<rh-button variant=\"play\">Play</rh-button>\n<rh-button disabled=\"\">Disabled</rh-button>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n</script>\n\n<style>\n  [data-demo=\"rh-button\"] {\n    display: flex;\n    align-items: start;\n    flex-wrap: wrap;\n    gap: var(--rh-space-lg, 16px);\n  }\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-button-variants-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Variants"
    }
  }
};