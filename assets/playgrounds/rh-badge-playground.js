export const config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/rh-badge-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-badge number=\"7\">7</rh-badge>\n<rh-badge number=\"24\">24</rh-badge>\n<rh-badge number=\"240\">240</rh-badge>\n<rh-badge threshold=\"900\" number=\"999\">999</rh-badge>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-badge-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Badge"
    },
    "demo/rh-badge-color-context-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-context-demo>\n  <rh-badge number=\"1\">1</rh-badge>\n  <rh-badge number=\"1\" state=\"critical\">1</rh-badge>\n  <rh-badge number=\"2\" state=\"important\">2</rh-badge>\n  <rh-badge number=\"3\" state=\"moderate\">3</rh-badge>\n  <rh-badge number=\"5\" state=\"info\">5</rh-badge>\n  <rh-badge number=\"8\" state=\"success\">8</rh-badge>\n  <rh-badge number=\"1000\" threshold=\"999\" state=\"success\">1000</rh-badge>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-badge-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Color Context"
    },
    "demo/rh-badge-critical-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n",
      "hidden": true
    },
    "demo/critical/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-badge number=\"7\" state=\"critical\">7</rh-badge>\n<rh-badge number=\"24\" state=\"critical\">24</rh-badge>\n<rh-badge number=\"240\" state=\"critical\">240</rh-badge>\n<rh-badge threshold=\"900\" number=\"999\" state=\"critical\">999</rh-badge>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-badge-critical-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Critical"
    },
    "demo/rh-badge-important-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n",
      "hidden": true
    },
    "demo/important/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-badge number=\"7\" state=\"important\">7</rh-badge>\n<rh-badge number=\"24\" state=\"important\">24</rh-badge>\n<rh-badge number=\"240\" state=\"important\">240</rh-badge>\n<rh-badge threshold=\"900\" number=\"999\" state=\"important\">999</rh-badge>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-badge-important-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Important"
    },
    "demo/rh-badge-info-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n",
      "hidden": true
    },
    "demo/info/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-badge number=\"7\" state=\"info\">7</rh-badge>\n<rh-badge number=\"24\" state=\"info\">24</rh-badge>\n<rh-badge number=\"240\" state=\"info\">240</rh-badge>\n<rh-badge threshold=\"900\" number=\"999\" state=\"info\">999</rh-badge>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-badge-info-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Info"
    },
    "demo/rh-badge-moderate-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n",
      "hidden": true
    },
    "demo/moderate/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-badge number=\"7\" state=\"moderate\">7</rh-badge>\n<rh-badge number=\"24\" state=\"moderate\">24</rh-badge>\n<rh-badge number=\"240\" state=\"moderate\">240</rh-badge>\n<rh-badge threshold=\"900\" number=\"999\" state=\"moderate\">999</rh-badge>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-badge-moderate-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Moderate"
    },
    "demo/rh-badge-success-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n",
      "hidden": true
    },
    "demo/success/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-badge number=\"7\" state=\"success\">7</rh-badge>\n<rh-badge number=\"24\" state=\"success\">24</rh-badge>\n<rh-badge number=\"240\" state=\"success\">240</rh-badge>\n<rh-badge threshold=\"900\" number=\"999\" state=\"success\">999</rh-badge>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-badge-success-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Success"
    },
    "demo/rh-badge-threshold-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-badge/rh-badge.js';\n",
      "hidden": true
    },
    "demo/threshold/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-badge number=\"900\" threshold=\"100\">900</rh-badge> (Threshold = 100)\n<p>Should add '+' sign if the value exceeds the threshold</p>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-badge/rh-badge.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-badge-threshold-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Threshold"
    }
  }
};