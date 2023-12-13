export const config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/rh-blockquote-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-blockquote/rh-blockquote.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-blockquote>\n  <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n  <span slot=\"author\">Linus Torvalds</span>\n  <span slot=\"title\">Software Engineer</span>\n</rh-blockquote>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-blockquote/rh-blockquote.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-blockquote-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Blockquote"
    },
    "demo/rh-blockquote-centered-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-blockquote/rh-blockquote.js';\n",
      "hidden": true
    },
    "demo/centered/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-blockquote align=\"center\">\n  <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n  <span slot=\"author\">Linus Torvalds</span>\n  <span slot=\"title\">Software Engineer</span>\n</rh-blockquote>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-blockquote/rh-blockquote.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-blockquote-centered-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Centered"
    },
    "demo/rh-blockquote-color-context-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-blockquote/rh-blockquote.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-context-demo>\n  <rh-blockquote>\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n\n  <rh-blockquote align=\"center\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n\n  <rh-blockquote highlight=\"inline-start\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n\n  <rh-blockquote size=\"large\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-blockquote/rh-blockquote.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-blockquote-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Color Context"
    },
    "demo/rh-blockquote-highlighted-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-blockquote/rh-blockquote.js';\n",
      "hidden": true
    },
    "demo/highlighted/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-blockquote highlight=\"inline-start\">\n  <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n  <span slot=\"author\">Linus Torvalds</span>\n  <span slot=\"title\">Software Engineer</span>\n</rh-blockquote>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-blockquote/rh-blockquote.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-blockquote-highlighted-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Highlighted"
    },
    "demo/rh-blockquote-large-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-blockquote/rh-blockquote.js';\n",
      "hidden": true
    },
    "demo/large/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-blockquote size=\"large\">\n  <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n  <span slot=\"author\">Linus Torvalds</span>\n  <span slot=\"title\">Software Engineer</span>\n</rh-blockquote>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-blockquote/rh-blockquote.js';\n</script>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-blockquote-large-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Large"
    }
  }
};