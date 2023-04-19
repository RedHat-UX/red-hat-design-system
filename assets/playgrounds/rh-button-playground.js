document.currentScript.closest('playground-project').config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\"><head><link href=\"rhds-demo-base.css\" rel=\"stylesheet\"></head></link>\n<script type=\"module\" src=\"rh-button.js\"></script>\n\n<section>\n  <h2>Variants</h2>\n  <rh-button danger=\"\">Danger</rh-button>\n  <rh-button>Primary</rh-button>\n  <rh-button variant=\"link\">Link</rh-button>\n  <rh-button variant=\"secondary\">Secondary</rh-button>\n  <rh-button variant=\"secondary\" danger=\"\">Secondary Danger</rh-button>\n  <rh-button variant=\"tertiary\">Tertiary</rh-button>\n  <rh-button variant=\"close\">Close</rh-button>\n  <rh-button variant=\"play\">Play</rh-button>\n  <rh-button disabled>Disabled</rh-button>\n</section>\n",
      "label": "Button"
    },
    "demo/demo.css": {
      "content": "section {\n  display: flex;\n  align-items: center;\n  flex-flow: row wrap;\n  gap: var(--rh-space-sm, 6px);\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n}\n\nrh-context-provider {\n  padding-block: var(--rh-space-lg, 16px);\n  padding-inline: var(--rh-space-6xl, 96px);\n  display: flex;\n  align-items: center;\n  gap: var(--rh-space-sm, 6px);\n}\n\nh2 {\n  width: 100%;\n}\n\n#checkboxes {\n  display: grid;\n  grid-template-columns: min-content 1fr;\n}\n\nlabel {\n  display: block;\n}\n\nform h2 {\n  width: 100%;\n}\n\nform output {\n  text-transform: capitalize;\n}\n\ndatalist {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  writing-mode: vertical-lr;\n}\n\ndatalist,\ninput {\n  width: 200px;\n}\n\noption {\n  padding: 0;\n}\n",
      "hidden": true
    },
    "demo/rh-button.js": {
      "content": "import '@rhds/elements/rh-context-provider/rh-context-provider.js';\nimport '@rhds/elements/rh-button/rh-button.js';\n\nimport { Logger } from '@patternfly/pfe-core/controllers/logger.js';\nLogger.debugLog(true);\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\"><head><link href=\"../rhds-demo-base.css\" rel=\"stylesheet\"></head></link>\n<script type=\"module\" src=\"rh-button.js\"></script>\n<script type=\"module\" src=\"color-context.js\"></script>\n\n<template id=\"template\">\n  <rh-button danger=\"\">Danger</rh-button>\n  <rh-button>Primary</rh-button>\n  <rh-button variant=\"link\">Link</rh-button>\n  <rh-button variant=\"secondary\">Secondary</rh-button>\n  <rh-button variant=\"secondary\" danger=\"\">Secondary Danger</rh-button>\n  <rh-button variant=\"tertiary\">Tertiary</rh-button>\n  <rh-button variant=\"close\">Close</rh-button>\n  <rh-button variant=\"play\">Play</rh-button>\n  <rh-button disabled>Disabled</rh-button>\n</template>\n\n<rh-context-provider color-palette=\"lightest\"></rh-context-provider>\n<rh-context-provider color-palette=\"lighter\"></rh-context-provider>\n<rh-context-provider color-palette=\"light\"></rh-context-provider>\n<rh-context-provider color-palette=\"dark\"></rh-context-provider>\n<rh-context-provider color-palette=\"darker\"></rh-context-provider>\n<rh-context-provider color-palette=\"darkest\"></rh-context-provider>\n",
      "label": "Color Context"
    },
    "demo/color-context/demo.css": {
      "content": "section {\n  display: flex;\n  align-items: center;\n  flex-flow: row wrap;\n  gap: var(--rh-space-sm, 6px);\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n}\n\nrh-context-provider {\n  padding-block: var(--rh-space-lg, 16px);\n  padding-inline: var(--rh-space-6xl, 96px);\n  display: flex;\n  align-items: center;\n  gap: var(--rh-space-sm, 6px);\n}\n\nh2 {\n  width: 100%;\n}\n\n#checkboxes {\n  display: grid;\n  grid-template-columns: min-content 1fr;\n}\n\nlabel {\n  display: block;\n}\n\nform h2 {\n  width: 100%;\n}\n\nform output {\n  text-transform: capitalize;\n}\n\ndatalist {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  writing-mode: vertical-lr;\n}\n\ndatalist,\ninput {\n  width: 200px;\n}\n\noption {\n  padding: 0;\n}\n",
      "hidden": true
    },
    "demo/color-context/rh-button.js": {
      "content": "import '@rhds/elements/rh-context-provider/rh-context-provider.js';\nimport '@rhds/elements/rh-button/rh-button.js';\n\nimport { Logger } from '@patternfly/pfe-core/controllers/logger.js';\nLogger.debugLog(true);\n",
      "hidden": true
    },
    "demo/color-context/color-context.js": {
      "content": "for (const provider of document.querySelectorAll('rh-context-provider')) {\n  provider.append(document.getElementById('template').content.cloneNode(true));\n}\n",
      "hidden": true
    },
    "demo/form-control/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\"><head><link href=\"../rhds-demo-base.css\" rel=\"stylesheet\"></head></link>\n<script type=\"module\" src=\"rh-button.js\"></script>\n<script type=\"module\" src=\"form-control.js\"></script>\n\n<section>\n  <h2>Form Control</h2>\n  <form id=\"form\">\n    <fieldset id=\"fieldset\">\n      <legend>\n        rh-button in a <code>&lt;fieldset&gt;</code> element;\n        clicking this button must submit the form\n      </legend>\n      <rh-button id=\"button\" type=\"submit\">Submit</rh-button>\n    </fieldset>\n\n    <fieldset id=\"checkboxes\">\n      <legend>Use these checkboxes to toggle disabled state</legend>\n      <input id=\"fst\" type=\"checkbox\" data-controls=\"fieldset\">\n      <label for=\"fst\">Disable fieldset</label>\n      <input id=\"btn\" type=\"checkbox\" data-controls=\"button\">\n      <label for=\"btn\">Disable rh-button</label>\n    </fieldset>\n\n    <fieldset id=\"outputs\">\n      <legend>Observe and reset form state</legend>\n      <rh-button type=\"reset\">Reset</rh-button>\n      <label for=\"output\">Form status:</label>\n      <output id=\"output\">Pending</output>\n    </fieldset>\n  </form>\n</section>\n",
      "label": "Form Control"
    },
    "demo/form-control/demo.css": {
      "content": "section {\n  display: flex;\n  align-items: center;\n  flex-flow: row wrap;\n  gap: var(--rh-space-sm, 6px);\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n}\n\nrh-context-provider {\n  padding-block: var(--rh-space-lg, 16px);\n  padding-inline: var(--rh-space-6xl, 96px);\n  display: flex;\n  align-items: center;\n  gap: var(--rh-space-sm, 6px);\n}\n\nh2 {\n  width: 100%;\n}\n\n#checkboxes {\n  display: grid;\n  grid-template-columns: min-content 1fr;\n}\n\nlabel {\n  display: block;\n}\n\nform h2 {\n  width: 100%;\n}\n\nform output {\n  text-transform: capitalize;\n}\n\ndatalist {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  writing-mode: vertical-lr;\n}\n\ndatalist,\ninput {\n  width: 200px;\n}\n\noption {\n  padding: 0;\n}\n",
      "hidden": true
    },
    "demo/form-control/rh-button.js": {
      "content": "import '@rhds/elements/rh-context-provider/rh-context-provider.js';\nimport '@rhds/elements/rh-button/rh-button.js';\n\nimport { Logger } from '@patternfly/pfe-core/controllers/logger.js';\nLogger.debugLog(true);\n",
      "hidden": true
    },
    "demo/form-control/form-control.js": {
      "content": "const form = document.getElementById('form');\nconst fieldset = document.getElementById('fieldset');\n\n/** @this {HTMLFormElement} */\nfunction onSubmit(event) {\n  event.preventDefault();\n  this.elements.output.textContent = 'Submitted';\n}\n\n/** @this {HTMLFormElement} */\nfunction onReset() {\n  fieldset.disabled = false;\n  this.elements.output.textContent = 'Pending';\n}\n\n/** @this{HTMLInputElement} */\nfunction onChange({ target: { checked, dataset: { controls } } }) {\n  // eslint-disable-next-line no-console\n  console.log(`${controls}.disabled =`, checked);\n  const el = document.getElementById(controls);\n  if (el) {\n    el.disabled = checked;\n  }\n}\n\nform.addEventListener('submit', onSubmit);\nform.addEventListener('reset', onReset);\nform.addEventListener('change', onChange);\n",
      "hidden": true
    }
  }
};