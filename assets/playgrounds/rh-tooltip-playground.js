export const config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/rh-tooltip-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-tooltip>\n  <rh-button>Tooltip</rh-button>\n  <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n</rh-tooltip>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-tooltip-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Tooltip"
    },
    "demo/rh-tooltip-bottom-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n",
      "hidden": true
    },
    "demo/bottom/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-tooltip position=\"bottom\">\n  <rh-button>Bottom Tooltip</rh-button>\n  <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n</rh-tooltip>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-tooltip-bottom-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Bottom"
    },
    "demo/rh-tooltip-color-context-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-context-demo>\n  <rh-tooltip>\n    <rh-button>Tooltip</rh-button>\n    <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n      labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n  </rh-tooltip>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-tooltip-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Color Context"
    },
    "demo/rh-tooltip-left-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n",
      "hidden": true
    },
    "demo/left/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<p>\n  In order to demonstrate a left-positioned tooltip, we'll use a right-to-left language\n</p>\n\n<p lang=\"he\" dir=\"rtl\" style=\"text-align: right;\">\n  <rh-tooltip position=\"left\">\n    <rh-button>עם ישראל חי</rh-button>\n    <span slot=\"content\">\n  בְּאֶרֶץ-יִשְׂרָאֵל קָם הָעָם הַיְּהוּדִי, בָּהּ עֻצְּבָה דְּמוּתוֹ הָרוּחָנִית, הַדָּתִית וְהַמְּדִינִית, בָּהּ חַי חַיֵּי קוֹמְמִיּוּת מַמְלַכְתִּית, בָּהּ יָצַר נִכְסֵי תַּרְבּוּת לְאֻמִּיִּים וּכְלַל-אֱנוֹשִׁיִּים וְהוֹרִישׁ לָעוֹלָם כֻּלּוֹ אֶת סֵפֶר הַסְּפָרִים הַנִּצְחִי.\n  לְאַחַר שֶׁהֻגְלָה הָעָם מֵאַרְצוֹ בְּכֹחַ הַזְּרוֹעַ שָׁמַר לָהּ אֱמוּנִים בְּכָל אַרְצוֹת פְּזוּרָיו, וְלֹא חָדַל מִתְּפִלָּה וּמִתִּקְוָה לָשׁוּב לְאַרְצוֹ וּלְחַדֵּשׁ בְּתוֹכָהּ אֶת חֵרוּתוֹ הַמְּדִינִית. </span>\n  </rh-tooltip>\n</p>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-tooltip-left-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Left"
    },
    "demo/rh-tooltip-right-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n",
      "hidden": true
    },
    "demo/right/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-tooltip position=\"right\">\n  <rh-button>Right Tooltip</rh-button>\n  <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n</rh-tooltip>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-tooltip-right-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Right"
    },
    "demo/rh-tooltip-top-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n",
      "hidden": true
    },
    "demo/top/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-tooltip position=\"top\">\n  <rh-button>Top Tooltip</rh-button>\n  <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n</rh-tooltip>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-button/rh-button.js';\n  import '@rhds/elements/rh-tooltip/rh-tooltip.js';\n</script>\n\n<style>\n  rh-tooltip {\n    margin: 7rem 0;\n    display: inline-block;\n  }\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-tooltip-top-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Top"
    }
  }
};