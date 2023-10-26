export const config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "rh-subnav-lightdom.css": {
      "content": "rh-subnav:not(:defined) {\n  display: flex;\n  background-color: var(--_context-background-color, var(--rh-color-surface-lighter, #f2f2f2));\n}\n\nrh-subnav:not(:defined) a {\n  display: block !important;\n  white-space: nowrap !important;\n  padding: var(--rh-space-lg, 16px) var(--rh-space-2xl, 32px) !important;\n  text-decoration: none !important;\n  color: var(--rh-color-text-secondary-on-light, #4d4d4d) !important;\n  position: relative !important;\n}\n\nrh-subnav:not(:defined) a:after {\n  content: \"\" !important;\n  position: absolute !important;\n  inset: 0 !important;\n  width: 100% !important;\n  border-block-end: var(--rh-border-width-lg, 3px) solid transparent !important;\n}\n\nrh-subnav:not(:defined) a[active]:after {\n  border-block-end-color: var(--rh-color-accent-brand-on-light, #ee0000) !important;\n}",
      "hidden": true
    },
    "demo/rh-subnav-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-subnav>\n  <a href=\"#\">Users</a>\n  <a href=\"#\">Containers</a>\n  <a href=\"#\">Databases</a>\n  <a href=\"#\" active=\"\">Servers</a>\n  <a href=\"#\">System</a>\n  <a href=\"#\">Network</a>\n  <a href=\"#\">Cloud</a>\n</rh-subnav>\n\n<link rel=\"stylesheet\" href=\"../rh-subnav-lightdom.css\">\n<script type=\"module\">\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-subnav-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Subnavigation"
    },
    "demo/rh-subnav-lightdom.css": {
      "content": "rh-subnav:not(:defined) {\n  display: flex;\n  background-color: var(--_context-background-color, var(--rh-color-surface-lighter, #f2f2f2));\n}\n\nrh-subnav:not(:defined) a {\n  display: block !important;\n  white-space: nowrap !important;\n  padding: var(--rh-space-lg, 16px) var(--rh-space-2xl, 32px) !important;\n  text-decoration: none !important;\n  color: var(--rh-color-text-secondary-on-light, #4d4d4d) !important;\n  position: relative !important;\n}\n\nrh-subnav:not(:defined) a:after {\n  content: \"\" !important;\n  position: absolute !important;\n  inset: 0 !important;\n  width: 100% !important;\n  border-block-end: var(--rh-border-width-lg, 3px) solid transparent !important;\n}\n\nrh-subnav:not(:defined) a[active]:after {\n  border-block-end-color: var(--rh-color-accent-brand-on-light, #ee0000) !important;\n}",
      "hidden": true
    },
    "demo/rh-subnav-color-context-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-context-demo>\n  <rh-subnav>\n    <a href=\"#\">Users</a>\n    <a href=\"#\">Containers</a>\n    <a href=\"#\">Databases</a>\n    <a href=\"#\" active=\"\">Servers</a>\n    <a href=\"#\">System</a>\n    <a href=\"#\"><pf-icon slot=\"icon\" icon=\"database\" set=\"fas\" size=\"sm\"></pf-icon> Network</a>\n    <a href=\"#\">Cloud</a>\n  </rh-subnav>\n</rh-context-demo>\n\n<link rel=\"stylesheet\" href=\"../rh-subnav-lightdom.css\">\n\n<script type=\"module\">\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-subnav-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Color Context"
    },
    "demo/rh-subnav-dynamic-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n\n  const demo = document.getElementById('demo');\n  demo.addEventListener('click', e => {\n    for (const link of demo.querySelectorAll('a')) {\n      if (e.target === link) { e.preventDefault(); }\n      link.toggleAttribute('active', (e.target === link));\n    }\n  });\n",
      "hidden": true
    },
    "demo/dynamic/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-subnav id=\"demo\">\n  <a href=\"#\">Users</a>\n  <a href=\"#\">Containers</a>\n  <a href=\"#\">Databases</a>\n  <a href=\"#\" active=\"\">Servers</a>\n  <a href=\"#\">System</a>\n  <a href=\"#\">Network</a>\n  <a href=\"#\">Cloud</a>\n</rh-subnav>\n\n<link rel=\"stylesheet\" href=\"../rh-subnav-lightdom.css\">\n\n<script type=\"module\">\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n\n  const demo = document.getElementById('demo');\n  demo.addEventListener('click', e => {\n    for (const link of demo.querySelectorAll('a')) {\n      if (e.target === link) { e.preventDefault(); }\n      link.toggleAttribute('active', (e.target === link));\n    }\n  });\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-subnav-dynamic-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Dynamic"
    },
    "demo/rh-subnav-padded-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n",
      "hidden": true
    },
    "demo/padded/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<h2>In a container with padding</h2>\n<div class=\"padded\">\n  <rh-subnav>\n    <a href=\"#\">Users</a>\n    <a href=\"#\">Containers</a>\n    <a href=\"#\">Databases</a>\n    <a href=\"#\" active=\"\">Servers</a>\n    <a href=\"#\">System</a>\n    <a href=\"#\"><pf-icon slot=\"icon\" icon=\"database\" set=\"fas\" size=\"sm\"></pf-icon> Network</a>\n    <a href=\"#\">Cloud</a>\n  </rh-subnav>\n</div>\n\n<link rel=\"stylesheet\" href=\"../rh-subnav-lightdom.css\">\n\n<script type=\"module\">\n  import '@rhds/elements/rh-subnav/rh-subnav.js';\n  import '@patternfly/elements/pf-icon/pf-icon.js';\n</script>\n\n<style>\n  .padded {\n    padding-inline: var(--rh-space-2xl, 32px);\n  }\n\n  @media screen and (min-width: 576px) {\n    .padded {\n      padding: var(--rh-space-3xl, 48px) var(--rh-space-3xl, 48px) 0;\n    }\n  }\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-subnav-padded-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Padded"
    }
  }
};