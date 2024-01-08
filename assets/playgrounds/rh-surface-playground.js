export const config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/rh-surface-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-surface/rh-surface.js';\n  import '@rhds/elements/rh-cta/rh-cta.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-surface id=\"surface\" color-palette=\"darkest\">\n  <h2>Darkest</h2>\n  <rh-cta><a href=\"#\">Call to Action</a></rh-cta>\n</rh-surface>\n\n<rh-surface color-palette=\"darker\">\n  <h2>Darker</h2>\n  <rh-cta><a href=\"#\">Call to Action</a></rh-cta>\n</rh-surface>\n\n<rh-surface color-palette=\"dark\">\n  <h2>Dark</h2>\n  <rh-cta><a href=\"#\">Call to Action</a></rh-cta>\n</rh-surface>\n\n<rh-surface color-palette=\"light\">\n  <h2>Light</h2>\n  <rh-cta><a href=\"#\">Call to Action</a></rh-cta>\n</rh-surface>\n\n<rh-surface color-palette=\"lighter\">\n  <h2>Lighter</h2>\n  <rh-cta><a href=\"#\">Call to Action</a></rh-cta>\n</rh-surface>\n\n<rh-surface color-palette=\"lightest\">\n  <h2>Lightest</h2>\n  <rh-cta><a href=\"#\">Call to Action</a></rh-cta>\n</rh-surface>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-surface/rh-surface.js';\n  import '@rhds/elements/rh-cta/rh-cta.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-surface-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Surface"
    }
  }
};