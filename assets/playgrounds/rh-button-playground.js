export const config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
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
      "content": "<rh-button>Primary</rh-button>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-button-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<rh-context-demo>\n  <rh-button danger=\"\">Danger</rh-button>\n  <rh-button>Primary</rh-button>\n  <rh-button variant=\"link\">Link</rh-button>\n  <rh-button variant=\"secondary\">Secondary</rh-button>\n  <rh-button variant=\"secondary\" danger=\"\">Secondary Danger</rh-button>\n  <rh-button variant=\"tertiary\">Tertiary</rh-button>\n  <rh-button variant=\"close\">Close</rh-button>\n  <rh-button variant=\"play\">Play</rh-button>\n  <rh-button disabled=\"\">Disabled</rh-button>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n\n\n<style>\n  rh-context-demo::part(demo) {\n    display: flex;\n    align-items: start;\n    flex-wrap: wrap;\n    gap: var(--rh-space-lg, 16px);\n  }\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-button-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<form id=\"form\">\n  <fieldset id=\"fieldset\">\n    <legend>\n      rh-button in a <code>&lt;fieldset&gt;</code> element;\n      clicking this button must submit the form\n    </legend>\n    <rh-button id=\"button\" type=\"submit\">Submit</rh-button>\n  </fieldset>\n\n  <fieldset id=\"checkboxes\">\n    <legend>Use these checkboxes to toggle disabled state</legend>\n    <input id=\"fst\" type=\"checkbox\" data-controls=\"fieldset\">\n    <label for=\"fst\">Disable fieldset</label>\n    <input id=\"btn\" type=\"checkbox\" data-controls=\"button\">\n    <label for=\"btn\">Disable rh-button</label>\n  </fieldset>\n\n  <fieldset id=\"outputs\">\n    <legend>Observe and reset form state</legend>\n    <rh-button type=\"reset\">Reset</rh-button>\n    <label for=\"output\">Form status:</label>\n    <output id=\"output\" name=\"output\">Pending</output>\n  </fieldset>\n</form>\n\n<style>\n  #checkboxes {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n  }\n\n  label { display: block; }\n\n  form h2 {\n    width: 100%;\n  }\n\n  form output {\n    text-transform: capitalize;\n  }\n</style>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  const form = document.getElementById('form');\n  const fieldset = document.getElementById('fieldset');\n\n  /** @this {HTMLFormElement} */\n  function onSubmit(event) {\n    event.preventDefault();\n    this.elements.output.textContent = 'Submitted';\n  }\n\n  /** @this {HTMLFormElement} */\n  function onReset() {\n    fieldset.disabled = false;\n    this.elements.output.textContent = 'Pending';\n  }\n\n  /** @this{HTMLInputElement} */\n  function onChange({ target: { checked, dataset: { controls } } }) {\n    // eslint-disable-next-line no-console\n    console.log(`${controls}.disabled =`, checked);\n    const el = document.getElementById(controls);\n    if (el) {\n      el.disabled = checked;\n    }\n  }\n\n  form.addEventListener('submit', onSubmit);\n  form.addEventListener('reset', onReset);\n  form.addEventListener('change', onChange);\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-button-form-control-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<rh-button danger=\"\">Danger</rh-button>\n<rh-button>Primary</rh-button>\n<rh-button variant=\"link\">Link</rh-button>\n<rh-button variant=\"secondary\">Secondary</rh-button>\n<rh-button variant=\"secondary\" danger=\"\">Secondary Danger</rh-button>\n<rh-button variant=\"tertiary\">Tertiary</rh-button>\n<rh-button variant=\"close\">Close</rh-button>\n<rh-button variant=\"play\">Play</rh-button>\n<rh-button disabled=\"\">Disabled</rh-button>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n</script>\n\n<style>\n  [data-demo=\"rh-button\"] {\n    display: flex;\n    align-items: start;\n    flex-wrap: wrap;\n    gap: var(--rh-space-lg, 16px);\n  }\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-button-variants-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Variants"
    }
  }
};