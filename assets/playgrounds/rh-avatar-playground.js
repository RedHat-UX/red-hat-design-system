export const config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/rh-avatar-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-avatar name=\"Omar Khayyam\" subtitle=\"Mathematician, Astronomer\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/005-a-Ruby-kindles-in-the-vine-810x1146.jpg/212px-005-a-Ruby-kindles-in-the-vine-810x1146.jpg\"></rh-avatar>\n\n<style>\nrh-avatar::part(img) {\n  object-position: top;\n}\n</style>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-avatar-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Avatar"
    },
    "demo/rh-avatar-color-context-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-context-demo>\n  <rh-avatar>George Boole\n    <span slot=\"subtitle\">Professor of Mathematics, </span>\n    <a slot=\"subtitle\" href=\"https://www.wikiwand.com/en/Queen's_College,_Cork\">Queen's College, Cork</a>\n  </rh-avatar>\n  <rh-avatar name=\"John von Neumann\" subtitle=\"Mathematician\" plain=\"\"></rh-avatar>\n  <rh-avatar name=\"Grace Hopper\" subtitle=\"Rear Admiral\" src=\"https://ux.redhat.com/elements/avatar/demo/hopper.jpg\" plain=\"\"></rh-avatar>\n  <rh-avatar name=\"Haskell Curry\" subtitle=\"Computer Scientist\" pattern=\"squares\" plain=\"\"></rh-avatar>\n  <rh-avatar name=\"Edsger Dijkstra\" subtitle=\"Computer Scientist\" pattern=\"triangles\" plain=\"\"></rh-avatar>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-avatar-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Color Context"
    },
    "demo/rh-avatar-links-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n",
      "hidden": true
    },
    "demo/links/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<figure>\n  <figcaption>Links applied to Name</figcaption>\n  <rh-avatar src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Jeannette_Wing%2C_Davos_2013.jpg/330px-Jeannette_Wing%2C_Davos_2013.jpg\">\n    <a href=\"https://www.wikiwand.com/en/Jeannette_Wing\">Jeannette Wing</a>\n    <span slot=\"subtitle\">Avanessians Director of the Data Science Institute, Columbia University</span>\n  </rh-avatar>\n</figure>\n\n<figure>\n  <figcaption>Links applied to job details</figcaption>\n  <rh-avatar src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/George_Boole_color.jpg/330px-George_Boole_color.jpg\">George Boole\n    <span slot=\"subtitle\">Professor of Mathematics, </span>\n    <a slot=\"subtitle\" href=\"https://www.wikiwand.com/en/Queen's_College,_Cork\">Queen's College, Cork</a>\n  </rh-avatar>\n</figure>\n\n<style>\n  figure {\n    display: grid;\n    grid-template: min-content 1fr / repeat(5, 1fr);\n    grid-auto-flow: column;\n    gap: var(--rh-space-lg, 16px);\n  }\n  figcaption {\n    grid-column: -1/1;\n  }\n</style>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-avatar-links-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Links"
    },
    "demo/rh-avatar-pattern-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n",
      "hidden": true
    },
    "demo/pattern/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<figure>\n  <figcaption>Squares pattern</figcaption>\n  <rh-avatar name=\"Alonzo Church\" subtitle=\"Inventor of the Lambda Calculus\" pattern=\"squares\"></rh-avatar>\n</figure>\n\n<figure>\n  <figcaption>Triangles pattern</figcaption>\n  <rh-avatar name=\"Alan Turing\" subtitle=\"Cryptographer\" pattern=\"triangles\"></rh-avatar>\n</figure>\n\n<style>\n  figure {\n    display: grid;\n    grid-template: min-content 1fr / repeat(5, 1fr);\n    grid-auto-flow: column;\n    gap: var(--rh-space-lg, 16px);\n  }\n  figcaption {\n    grid-column: -1/1;\n  }\n</style>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-avatar-pattern-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Pattern"
    },
    "demo/rh-avatar-plain-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n",
      "hidden": true
    },
    "demo/plain/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-avatar name=\"John von Neumann\" subtitle=\"Mathematician\" plain=\"\"></rh-avatar>\n<rh-avatar name=\"Grace Hopper\" subtitle=\"Rear Admiral\" src=\"https://ux.redhat.com/elements/avatar/demo/hopper.jpg\" plain=\"\"></rh-avatar>\n<rh-avatar name=\"Haskell Curry\" subtitle=\"Computer Scientist\" pattern=\"squares\" plain=\"\"></rh-avatar>\n<rh-avatar name=\"Edsger Dijkstra\" subtitle=\"Computer Scientist\" pattern=\"triangles\" plain=\"\"></rh-avatar>\n\n<style>\n  [data-demo=\"rh-avatar\"] {\n    display: flex;\n    gap: var(--rh-space-md, 8px);\n  }\n</style>\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-avatar-plain-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Plain"
    },
    "demo/rh-avatar-position-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n",
      "hidden": true
    },
    "demo/position/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-avatar name=\"Ada Lovelace\" subtitle=\"Computer Programmer\" layout=\"block\"></rh-avatar>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-avatar-position-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Position"
    },
    "demo/rh-avatar-sizes-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n",
      "hidden": true
    },
    "demo/sizes/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<figure>\n  <figcaption><code>--rh-size-icon-03</code></figcaption>\n  <rh-avatar name=\"Radia Perlman\" subtitle=\"Mother of the Internet\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Radia_Perlman_2009.jpg/330px-Radia_Perlman_2009.jpg\" style=\"--rh-avatar-size:var(--rh-size-icon-03, 32px);\">\n  </rh-avatar>\n</figure>\n\n<figure>\n  <figcaption><code>--rh-size-icon-05</code></figcaption>\n  <rh-avatar src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Gordon_Moore_1978_%28cropped%29.png/330px-Gordon_Moore_1978_%28cropped%29.png\" name=\"Gordon Moore\" style=\"--rh-avatar-size:var(--rh-size-icon-05, 48px);\">\n    <span slot=\"subtitle\">Co-founder, <em>Intel</em></span>\n  </rh-avatar>\n</figure>\n\n<figure>\n  <figcaption><code>--rh-size-icon-06</code> <small>(default)</small></figcaption>\n  <rh-avatar src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/330px-Katherine_Johnson_1983.jpg\" name=\"Katherine Johnson\" subtitle=\"Recipient, National Medal of Freedom 2016\">\n  </rh-avatar>\n</figure>\n\n<figure>\n  <figcaption>\n    <code>--rh-size-icon-08</code>\n    <small>Avatars cannot be larger than <code>--rh-size-icon-06</code></small>\n  </figcaption>\n  <rh-avatar name=\"Hedy Lamarr\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hedy_Lamarr_Publicity_Photo_for_The_Heavenly_Body_1944.jpg/330px-Hedy_Lamarr_Publicity_Photo_for_The_Heavenly_Body_1944.jpg\" subtitle=\"Jewish actress and inventor\" style=\"--rh-avatar-size:var(--rh-size-icon-08, 96px);\"></rh-avatar>\n</figure>\n\n<style>\n  figure {\n    display: grid;\n    grid-template: min-content 1fr / repeat(5, 1fr);\n    grid-auto-flow: column;\n    gap: var(--rh-space-lg, 16px);\n  }\n  figcaption {\n    grid-column: -1/1;\n  }\n</style>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-avatar-sizes-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Sizes"
    },
    "demo/rh-avatar-subtitles-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n",
      "hidden": true
    },
    "demo/subtitles/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-avatar src=\"https://ux.redhat.com/elements/avatar/demo/schoenfinkel.jpg\">Moses Schoenfinkle\n  <span slot=\"subtitle\">\n    Inventor of Combinatorics,\n    often uncreditted for inventing the process of \"currying\" functions,\n    however, \"schoenfinkling\" doesn't exactly roll off the tongue, so we'll\n    let it slide\n  </span>\n</rh-avatar>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-avatar-subtitles-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Subtitles"
    }
  }
};