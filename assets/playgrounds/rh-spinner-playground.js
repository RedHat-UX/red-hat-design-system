export const config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/rh-spinner-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-spinner/rh-spinner.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-spinner></rh-spinner>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-spinner/rh-spinner.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-spinner-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Spinner"
    },
    "demo/rh-spinner-color-context-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-spinner/rh-spinner.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-context-demo>\n  <rh-spinner>\n    <p>Loading...</p>\n  </rh-spinner>\n\n  <rh-spinner size=\"md\">\n    <p>Loading...</p>\n  </rh-spinner>\n\n  <rh-spinner size=\"sm\">\n    <p>Loading...</p>\n  </rh-spinner>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-spinner/rh-spinner.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-spinner-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Color Context"
    },
    "demo/rh-spinner-size-medium-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-spinner/rh-spinner.js';\n",
      "hidden": true
    },
    "demo/size-medium/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-spinner size=\"md\"></rh-spinner>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-spinner/rh-spinner.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-spinner-size-medium-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Size Medium"
    },
    "demo/rh-spinner-size-small-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-spinner/rh-spinner.js';\n",
      "hidden": true
    },
    "demo/size-small/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-spinner size=\"sm\"></rh-spinner>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-spinner/rh-spinner.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-spinner-size-small-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Size Small"
    },
    "demo/rh-spinner-with-text-label-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-spinner/rh-spinner.js';\n",
      "hidden": true
    },
    "demo/with-text-label/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-spinner>\n  <p>Loading...</p>\n</rh-spinner>\n\n<rh-spinner size=\"md\">\n  <p>Loading...</p>\n</rh-spinner>\n\n<rh-spinner size=\"sm\">\n  <p>Loading...</p>\n</rh-spinner>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-spinner/rh-spinner.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-spinner-with-text-label-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "With Text Label"
    }
  }
};