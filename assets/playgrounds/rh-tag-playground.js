document.currentScript.closest('playground-project').config = {
  "files": {
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\">\n<script type=\"module\" src=\"rh-tag.js\"></script>\n\n<section>\n  <h2>Filled Color</h2>\n  <rh-tag color=\"blue\">Blue</rh-tag>\n  <rh-tag color=\"green\">Green</rh-tag>\n  <rh-tag color=\"orange\">Orange</rh-tag>\n  <rh-tag color=\"red\"><span>Red <span class=\"visually-hidden-class\">Hat</span></span></rh-tag>\n  <rh-tag color=\"purple\">Purple</rh-tag>\n  <rh-tag color=\"cyan\">Cyan</rh-tag>\n  <rh-tag>Grey</rh-tag>\n</section>\n\n<section>\n  <h2>With Icon</h2>\n  <rh-tag icon=\"circle-info\" icon-set=\"fas\">Default</rh-tag>\n  <rh-tag color=\"blue\" icon=\"circle-info\" icon-set=\"fas\">Blue label</rh-tag>\n  <rh-tag color=\"green\">Green label <svg slot=\"icon\" height=\"1em\" width:=\"\" \"1em\"=\"\" fill=\"currentColor\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" role=\"img\"><path d=\"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z\" /></svg></rh-tag>\n  <rh-tag color=\"orange\" icon=\"circle-info\" icon-set=\"fas\">Orange label</rh-tag>\n  <rh-tag color=\"red\" icon=\"circle-info\" icon-set=\"fas\">Red label</rh-tag>\n  <rh-tag color=\"purple\" icon=\"circle-info\" icon-set=\"fas\">Purple label <svg slot=\"icon\" height=\"1em\" width:=\"\" \"1em\"=\"\" fill=\"currentColor\" viewBox=\"0 0 512 512\" aria-hidden=\"true\" role=\"img\"><path d=\"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z\" /></svg></rh-tag>\n  <rh-tag color=\"cyan\" icon=\"circle-info\" icon-set=\"fas\">Cyan label</rh-tag>\n</section>\n",
      "label": "Tag"
    },
    "demo/demo.css": {
      "content": ".visually-hidden-class {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n\nsection,\nrh-context-provider {\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n}\n",
      "hidden": true
    },
    "demo/rh-tag.js": {
      "content": "import '@rhds/elements/rh-tag/rh-tag.js';\n\nconst root = document.querySelector('[data-demo=\"rh-tag\"]')?.shadowRoot ?? document;\n\nroot.querySelector('rh-tag');\n",
      "hidden": true
    }
  }
};