export const config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/rh-menu-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-menu/rh-menu.js';\n  import '@rhds/elements/rh-button/rh-button.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-menu id=\"rh-buttons\">\n  <rh-button data-item=\"1\" variant=\"link\">Menuitem1</rh-button>\n  <rh-button data-item=\"2\" variant=\"link\">Menuitem2</rh-button>\n  <rh-button data-item=\"3\" variant=\"link\">Menuitem3</rh-button>\n  <rh-button data-item=\"4\" variant=\"link\">Menuitem4</rh-button>\n</rh-menu>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-menu/rh-menu.js';\n  import '@rhds/elements/rh-button/rh-button.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-menu-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Menu"
    },
    "demo/rh-menu-color-context-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-menu/rh-menu.js';\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-context-demo>\n  <rh-menu>\n    <a href=\"#\">Link1</a>\n    <a href=\"#\">Link2</a>\n    <a href=\"#\">Link3</a>\n    <a href=\"#\">Link4</a>\n  </rh-menu>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-menu/rh-menu.js';\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-menu-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Color Context"
    },
    "demo/rh-menu-position-left-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-menu/rh-menu.js';\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n",
      "hidden": true
    },
    "demo/position-left/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-menu position=\"left\" persistent=\"\">\n  <rh-button variant=\"link\">Menuitem1</rh-button>\n  <rh-button variant=\"link\">Menuitem2</rh-button>\n  <rh-button variant=\"link\">Menuitem3</rh-button>\n  <rh-button variant=\"link\">Menuitem4</rh-button>\n</rh-menu>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-menu/rh-menu.js';\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-menu-position-left-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Position Left"
    },
    "demo/rh-menu-position-right-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-menu/rh-menu.js';\n  import '@rhds/elements/rh-button/rh-button.js';\n",
      "hidden": true
    },
    "demo/position-right/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-menu position=\"right\">\n  <a href=\"#\">Link1</a>\n  <a href=\"#\">Link2</a>\n  <a href=\"#\">Link3</a>\n  <a href=\"#\">Link4</a>\n</rh-menu>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-menu/rh-menu.js';\n  import '@rhds/elements/rh-button/rh-button.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-menu-position-right-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Position Right"
    },
    "demo/rh-menu-position-top-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import 'element-internals-polyfill';\n  import '@rhds/elements/rh-menu/rh-menu.js';\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n",
      "hidden": true
    },
    "demo/position-top/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-menu position=\"top\">\n  <rh-button variant=\"link\">Menuitem1</rh-button>\n  <rh-button variant=\"link\">Menuitem2</rh-button>\n  <rh-button variant=\"link\">Menuitem3</rh-button>\n  <rh-button variant=\"link\">Menuitem4</rh-button>\n</rh-menu>\n\n<script type=\"module\">\n  import 'element-internals-polyfill';\n  import '@rhds/elements/rh-menu/rh-menu.js';\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-menu-position-top-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Position Top"
    }
  }
};