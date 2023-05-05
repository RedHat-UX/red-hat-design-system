export const configure = project => project.config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\"><head><link href=\"rhds-demo-base.css\" rel=\"stylesheet\"></head></link>\n<link rel=\"stylesheet\" href=\"../rh-subnav-lightdom.css\">\n<script type=\"module\" src=\"rh-subnav.js\"></script>\n\n<div class=\"example\">\n  <h2>Default</h2>\n  <rh-subnav>\n    <a href=\"#\">Users</a>\n    <a href=\"#\">Containers</a>\n    <a href=\"#\">Databases</a>\n    <a href=\"#\" active=\"\">Servers</a>\n    <a href=\"#\">System</a>\n    <a href=\"#\">Network</a>\n    <a href=\"#\">Cloud</a>\n  </rh-subnav>\n</div>\n\n<div class=\"example\">\n  <rh-context-provider class=\"padded\" color-palette=\"lighter\">\n    <h2>In a container with padding</h2>\n    <rh-subnav>\n      <a href=\"#\">Users</a>\n      <a href=\"#\">Containers</a>\n      <a href=\"#\">Databases</a>\n      <a href=\"#\" active=\"\">Servers</a>\n      <a href=\"#\">System</a>\n      <a href=\"#\"><pf-icon slot=\"icon\" icon=\"database\" set=\"fas\" size=\"sm\"></pf-icon> Network</a>\n      <a href=\"#\">Cloud</a>\n    </rh-subnav>\n  </rh-context-provider>\n</div>\n\n<div class=\"example\">\n  <h2>Dynamic activation</h2>\n  <rh-subnav id=\"demo\">\n    <a href=\"#\">Users</a>\n    <a href=\"#\">Containers</a>\n    <a href=\"#\">Databases</a>\n    <a href=\"#\" active=\"\">Servers</a>\n    <a href=\"#\">System</a>\n    <a href=\"#\">Network</a>\n    <a href=\"#\">Cloud</a>\n  </rh-subnav>\n</div>\n",
      "label": "Subnav"
    },
    "demo/demo.css": {
      "content": "/* Fix for demo overflow */\nmain {\n  display: flex;\n  flex-direction: column;\n}\n\nsection {\n  padding: 16px;\n}\n\n[data-demo] {\n  display: contents;\n}\n\nlabel {\n  display: block;\n}\n\nform h2 {\n  width: 100%;\n}\n\nform output {\n  text-transform: capitalize;\n}\n\ndatalist {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  writing-mode: vertical-lr;\n}\n\ndatalist,\ninput {\n  width: 200px;\n}\n\noption {\n  padding: 0;\n}\n\n.example {\n  width: 100%;\n  padding-block-start: var(--rh-space-2xl, 32px);\n}\n\n.padded {\n  padding-inline: var(--rh-space-2xl, 32px);\n}\n\n@media screen and (min-width: 576px) {\n  .padded {\n    padding: var(--rh-space-3xl, 48px) var(--rh-space-3xl, 48px) 0;\n  }\n}\n",
      "hidden": true
    },
    "rh-subnav-lightdom.css": {
      "content": "rh-subnav:not(:defined) {\n  display: flex;\n  background-color: var(--_context-background-color, #f5f5f5);\n}\n\nrh-subnav:not(:defined) a {\n  display: block !important;\n  white-space: nowrap !important;\n  padding: var(--rh-space-lg, 16px) var(--rh-space-2xl, 32px) !important;\n  text-decoration: none !important;\n  color: var(--rh-color-text-secondary-on-light, #4d4d4d) !important;\n  position: relative !important;\n}\n\nrh-subnav:not(:defined) a:after {\n  content: \"\" !important;\n  position: absolute !important;\n  inset: 0 !important;\n  width: 100% !important;\n  border-block-end: var(--rh-border-width-lg, 3px) solid transparent !important;\n}\n\nrh-subnav:not(:defined) a[active]:after {\n  border-block-end-color: var(--rh-color-accent-brand-on-light, #ee0000) !important;\n}",
      "hidden": true
    },
    "demo/rh-subnav.js": {
      "content": "import '@rhds/elements/rh-subnav/rh-subnav.js';\nimport '@rhds/elements/rh-context-provider/rh-context-provider.js';\n\nimport '@patternfly/elements/pf-icon/pf-icon.js';\n\nconst demo = document.getElementById('demo');\ndemo.addEventListener('click', e => {\n  for (const link of demo.querySelectorAll('a')) {\n    if (e.target === link) { e.preventDefault(); }\n    link.toggleAttribute('active', (e.target === link));\n  }\n});\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "\n<link rel=\"stylesheet\" href=\"demo.css\"><head><link href=\"../rhds-demo-base.css\" rel=\"stylesheet\"></head></link>\n<link rel=\"stylesheet\" href=\"../rh-subnav-lightdom.css\">\n<script type=\"module\" src=\"rh-subnav.js\"></script>\n<script type=\"module\" src=\"color-context.js\"></script>\n\n<rh-context-provider id=\"context-provider\" color-palette=\"darkest\">\n  <form>\n    <h2>Color Context</h2>\n    <label for=\"context-range\">Color Palette</label>\n    <input id=\"context-range\" type=\"range\" list=\"palettes\" max=\"5\" name=\"range\" value=\"1\">\n    <datalist id=\"palettes\">\n      <option value=\"0\" label=\"darkest\"></option>\n      <option value=\"1\" label=\"darker\"></option>\n      <option value=\"2\" label=\"dark\"></option>\n      <option value=\"3\" label=\"light\"></option>\n      <option value=\"4\" label=\"lighter\"></option>\n      <option value=\"5\" label=\"lightest\"></option>\n    </datalist>\n  </form>\n  <div class=\"example\">\n    <rh-subnav>\n      <a href=\"#\">Users</a>\n      <a href=\"#\">Containers</a>\n      <a href=\"#\">Databases</a>\n      <a href=\"#\" active=\"\">Servers</a>\n      <a href=\"#\">System</a>\n      <a href=\"#\"><pf-icon slot=\"icon\" icon=\"database\" set=\"fas\" size=\"sm\"></pf-icon> Network</a>\n      <a href=\"#\">Cloud</a>\n    </rh-subnav>\n  </div>\n</rh-context-provider>\n",
      "label": "Color Context"
    },
    "demo/color-context/demo.css": {
      "content": "/* Fix for demo overflow */\nmain {\n  display: flex;\n  flex-direction: column;\n}\n\nsection {\n  padding: 16px;\n}\n\n[data-demo] {\n  display: contents;\n}\n\nlabel {\n  display: block;\n}\n\nform h2 {\n  width: 100%;\n}\n\nform output {\n  text-transform: capitalize;\n}\n\ndatalist {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  writing-mode: vertical-lr;\n}\n\ndatalist,\ninput {\n  width: 200px;\n}\n\noption {\n  padding: 0;\n}\n\n.example {\n  width: 100%;\n  padding-block-start: var(--rh-space-2xl, 32px);\n}\n\n.padded {\n  padding-inline: var(--rh-space-2xl, 32px);\n}\n\n@media screen and (min-width: 576px) {\n  .padded {\n    padding: var(--rh-space-3xl, 48px) var(--rh-space-3xl, 48px) 0;\n  }\n}\n",
      "hidden": true
    },
    "demo/rh-subnav-lightdom.css": {
      "content": "rh-subnav:not(:defined) {\n  display: flex;\n  background-color: var(--_context-background-color, #f5f5f5);\n}\n\nrh-subnav:not(:defined) a {\n  display: block !important;\n  white-space: nowrap !important;\n  padding: var(--rh-space-lg, 16px) var(--rh-space-2xl, 32px) !important;\n  text-decoration: none !important;\n  color: var(--rh-color-text-secondary-on-light, #4d4d4d) !important;\n  position: relative !important;\n}\n\nrh-subnav:not(:defined) a:after {\n  content: \"\" !important;\n  position: absolute !important;\n  inset: 0 !important;\n  width: 100% !important;\n  border-block-end: var(--rh-border-width-lg, 3px) solid transparent !important;\n}\n\nrh-subnav:not(:defined) a[active]:after {\n  border-block-end-color: var(--rh-color-accent-brand-on-light, #ee0000) !important;\n}",
      "hidden": true
    },
    "demo/color-context/rh-subnav.js": {
      "content": "import '@rhds/elements/rh-subnav/rh-subnav.js';\nimport '@rhds/elements/rh-context-provider/rh-context-provider.js';\n\nimport '@patternfly/elements/pf-icon/pf-icon.js';\n\nconst demo = document.getElementById('demo');\ndemo.addEventListener('click', e => {\n  for (const link of demo.querySelectorAll('a')) {\n    if (e.target === link) { e.preventDefault(); }\n    link.toggleAttribute('active', (e.target === link));\n  }\n});\n",
      "hidden": true
    },
    "demo/color-context/color-context.js": {
      "content": "const form = document.querySelector('form');\nconst provider = document.getElementById('context-provider');\n\nconst palettes = ['darkest', 'darker', 'dark', 'light', 'lighter', 'lightest'];\n\nform.addEventListener('input', sync);\n\nfunction sync() {\n  provider.setAttribute('color-palette', palettes[form.range.value]);\n}\n\nsync();\n",
      "hidden": true
    }
  }
};