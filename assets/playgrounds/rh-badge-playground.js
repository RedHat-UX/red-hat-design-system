document.currentScript.closest('playground-project').config = {
  "files": {
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\">\n<script type=\"module\" src=\"rh-badge.js\"></script>\n\n<dl>\n  <dt>State: Default</dt>\n  <dd>\n    <rh-badge number=\"7\">7</rh-badge>\n    <rh-badge number=\"24\">24</rh-badge>\n    <rh-badge number=\"240\">240</rh-badge>\n    <rh-badge threshold=\"900\" number=\"999\">999</rh-badge>\n  </dd>\n\n  <dt>State: Info</dt>\n  <dd>\n    <rh-badge number=\"7\" state=\"info\">7</rh-badge>\n    <rh-badge number=\"24\" state=\"info\">24</rh-badge>\n    <rh-badge number=\"240\" state=\"info\">240</rh-badge>\n    <rh-badge threshold=\"900\" number=\"999\" state=\"info\">999</rh-badge>\n  </dd>\n\n  <dt>State: Success</dt>\n  <dd>\n    <rh-badge number=\"7\" state=\"success\">7</rh-badge>\n    <rh-badge number=\"24\" state=\"success\">24</rh-badge>\n    <rh-badge number=\"240\" state=\"success\">240</rh-badge>\n    <rh-badge threshold=\"900\" number=\"999\" state=\"success\">999</rh-badge>\n  </dd>\n\n  <dt>State: Moderate</dt>\n  <dd>\n    <rh-badge number=\"7\" state=\"moderate\">7</rh-badge>\n    <rh-badge number=\"24\" state=\"moderate\">24</rh-badge>\n    <rh-badge number=\"240\" state=\"moderate\">240</rh-badge>\n    <rh-badge threshold=\"900\" number=\"999\" state=\"moderate\">999</rh-badge>\n  </dd>\n\n  <dt>State: Important</dt>\n  <dd>\n    <rh-badge number=\"7\" state=\"important\">7</rh-badge>\n    <rh-badge number=\"24\" state=\"important\">24</rh-badge>\n    <rh-badge number=\"240\" state=\"important\">240</rh-badge>\n    <rh-badge threshold=\"900\" number=\"999\" state=\"important\">999</rh-badge>\n  </dd>\n\n  <dt>State: Critical</dt>\n  <dd>\n    <rh-badge number=\"7\" state=\"critical\">7</rh-badge>\n    <rh-badge number=\"24\" state=\"critical\">24</rh-badge>\n    <rh-badge number=\"240\" state=\"critical\">240</rh-badge>\n    <rh-badge threshold=\"900\" number=\"999\" state=\"critical\">999</rh-badge>\n  </dd>\n\n  <dt>Threshold exceeded</dt>\n  <dd>\n    <rh-badge number=\"900\" threshold=\"100\">900</rh-badge> (Threshold = 100)\n    <p>Should add '+' sign if the value exceeds the threshold</p>\n  </dd>\n\n  <dt>Threshold not exceeded</dt>\n  <dd>\n    <rh-badge number=\"900\" threshold=\"1000\">900</rh-badge>\n    (Threshold = 10000)\n    <p>Shouldn't add a '+' sign if the value doesn't exceed the threshold</p>\n  </dd>\n</dl>\n\n",
      "label": "Badge"
    },
    "demo/demo.css": {
      "content": "section,\nrh-context-provider {\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n}\n\nh2 {\n  padding-inline-start: var(--rh-space-3xl, 48px);\n}\n\ndl {\n  display: grid;\n  padding-block: var(--rh-space-2xl, 32px);\n  padding-inline: var(--rh-space-3xl, 48px);\n  grid-template-columns: max-content 1fr;\n  gap: var(--rh-space-xl, 24px);\n}\n\ndt {\n  font-size: var(--rh-font-size-heading-xs, 1.25rem);\n  font-weight: var(--rh-font-weight-heading-bold, 700);\n}\n\ndd {\n  margin: 0;\n}\n",
      "hidden": true
    },
    "demo/rh-badge.js": {
      "content": "import '@rhds/elements/rh-badge/rh-badge.js';\n\nconst root = document.querySelector('[data-demo=\"rh-badge\"]')?.shadowRoot ?? document;\n\nroot.querySelector('rh-badge');\n",
      "hidden": true
    }
  }
};