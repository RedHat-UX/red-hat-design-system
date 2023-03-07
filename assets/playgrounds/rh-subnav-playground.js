document.currentScript.closest('playground-project').config = {
  "files": {
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\">\n<script type=\"module\" src=\"rh-subnav.js\"></script>\n\n<div class=\"example\">\n  <h2>Default</h2>\n  <rh-subnav>\n    <a href=\"#\">Users</a>\n    <a href=\"#\">Containers</a>\n    <a href=\"#\">Databases</a>\n    <a href=\"#\" active=\"\">Servers</a>\n    <a href=\"#\">System</a>\n    <a href=\"#\">Network</a>\n    <a href=\"#\">Cloud</a>\n  </rh-subnav>\n</div>\n\n<rh-context-provider class=\"example padded\" color-palette=\"lighter\">\n  <h2>In a container with padding</h2>\n  <rh-subnav>\n    <a href=\"#\">Users</a>\n    <a href=\"#\">Containers</a>\n    <a href=\"#\">Databases</a>\n    <a href=\"#\" active=\"\">Servers</a>\n    <a href=\"#\">System</a>\n    <a href=\"#\"><pf-icon slot=\"icon\" icon=\"database\" set=\"fas\" size=\"sm\"></pf-icon> Network</a>\n    <a href=\"#\">Cloud</a>\n  </rh-subnav>\n</rh-context-provider>\n",
      "label": "Subnav"
    },
    "demo/demo.css": {
      "content": "/* Fix for demo overflow */\nmain {\n  display: flex;\n  flex-direction: column;\n}\n\nsection {\n  padding: 16px;\n}\n\n[data-demo] {\n  display: contents;\n}\n\nlabel {\n  display: block;\n}\n\nform h2 {\n  width: 100%;\n}\n\nform output {\n  text-transform: capitalize;\n}\n\ndatalist {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  writing-mode: vertical-lr;\n}\n\ndatalist,\ninput {\n  width: 200px;\n}\n\noption {\n  padding: 0;\n}\n\n.example {\n  width: 100%;\n  padding-block-start: var(--rh-space-2xl, 32px);\n}\n\n.padded {\n  padding-inline: var(--rh-space-2xl, 32px);\n}\n\n@media screen and (min-width: 576px) {\n  .padded {\n    padding: var(--rh-space-3xl, 48px) var(--rh-space-3xl, 48px) 0;\n  }\n}\n",
      "hidden": true
    },
    "demo/rh-subnav.js": {
      "content": "import '@rhds/elements/rh-subnav/rh-subnav.js';\nimport '@rhds/elements/rh-context-provider/rh-context-provider.js';\n\nimport '@patternfly/elements/pf-icon/pf-icon.js';\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "\n<link rel=\"stylesheet\" href=\"demo.css\">\n<script type=\"module\" src=\"rh-subnav.js\"></script>\n<script type=\"module\" src=\"color-context.js\"></script>\n\n<rh-context-provider id=\"context-provider\" color-palette=\"darkest\">\n  <form>\n    <h2>Color Context</h2>\n    <label for=\"context-range\">Color Palette</label>\n    <input id=\"context-range\" type=\"range\" list=\"palettes\" max=\"5\" name=\"range\" value=\"1\">\n    <datalist id=\"palettes\">\n      <option value=\"0\" label=\"darkest\"></option>\n      <option value=\"1\" label=\"darker\"></option>\n      <option value=\"2\" label=\"dark\"></option>\n      <option value=\"3\" label=\"light\"></option>\n      <option value=\"4\" label=\"lighter\"></option>\n      <option value=\"5\" label=\"lightest\"></option>\n    </datalist>\n  </form>\n  <div class=\"example\">\n    <rh-subnav>\n      <a href=\"#\">Users</a>\n      <a href=\"#\">Containers</a>\n      <a href=\"#\">Databases</a>\n      <a href=\"#\" active=\"\">Servers</a>\n      <a href=\"#\">System</a>\n      <a href=\"#\"><pf-icon slot=\"icon\" icon=\"database\" set=\"fas\" size=\"sm\"></pf-icon> Network</a>\n      <a href=\"#\">Cloud</a>\n    </rh-subnav>\n  </div>\n</rh-context-provider>\n",
      "label": "Color Context"
    },
    "demo/color-context/demo.css": {
      "content": "/* Fix for demo overflow */\nmain {\n  display: flex;\n  flex-direction: column;\n}\n\nsection {\n  padding: 16px;\n}\n\n[data-demo] {\n  display: contents;\n}\n\nlabel {\n  display: block;\n}\n\nform h2 {\n  width: 100%;\n}\n\nform output {\n  text-transform: capitalize;\n}\n\ndatalist {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  writing-mode: vertical-lr;\n}\n\ndatalist,\ninput {\n  width: 200px;\n}\n\noption {\n  padding: 0;\n}\n\n.example {\n  width: 100%;\n  padding-block-start: var(--rh-space-2xl, 32px);\n}\n\n.padded {\n  padding-inline: var(--rh-space-2xl, 32px);\n}\n\n@media screen and (min-width: 576px) {\n  .padded {\n    padding: var(--rh-space-3xl, 48px) var(--rh-space-3xl, 48px) 0;\n  }\n}\n",
      "hidden": true
    },
    "demo/color-context/rh-subnav.js": {
      "content": "import '@rhds/elements/rh-subnav/rh-subnav.js';\nimport '@rhds/elements/rh-context-provider/rh-context-provider.js';\n\nimport '@patternfly/elements/pf-icon/pf-icon.js';\n",
      "hidden": true
    },
    "demo/color-context/color-context.js": {
      "content": "const form = document.querySelector('form');\nconst provider = document.getElementById('context-provider');\n\nconst palettes = ['darkest', 'darker', 'dark', 'light', 'lighter', 'lightest'];\n\nform.addEventListener('input', sync);\n\nfunction sync() {\n  provider.setAttribute('color-palette', palettes[form.range.value]);\n}\n\nsync();\n",
      "hidden": true
    }
  }
};