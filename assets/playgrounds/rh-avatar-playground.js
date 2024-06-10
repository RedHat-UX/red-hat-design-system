export const config = {
  "files": {
    "demo/reset.css": {
      "contentType": "text/css",
      "content": "\n  /* Box sizing rules */\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  /* Remove default margin */\n  :where(body,\n  h1,\n  h2,\n  h3,\n  h4,\n  p,\n  li,\n  figure,\n  figcaption,\n  blockquote,\n  dl,\n  dd) {\n    margin: 0;\n  }\n\n  /* Default scroll behavior */\n  html:focus-within {\n    scroll-behavior: smooth;\n  }\n\n  /* Inherit fonts for inputs and buttons */\n  :where(input,\n  button,\n  textarea,\n  select) {\n    font: inherit;\n  }\n\n  /* Remove all animations and transitions for people that prefer not to see them */\n  @media (prefers-reduced-motion: reduce) {\n    html:focus-within {\n      scroll-behavior: auto;\n    }\n\n    *,\n    *:before,\n    *:after {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n      scroll-behavior: auto !important;\n    }\n  }\n}\n",
      "hidden": true
    },
    "demo/fonts.css": {
      "contentType": "text/css",
      "content": "@font-face {\n  font-family: RedHatDisplay;\n  src: url(\"../assets/fonts/RedHatDisplay/RedHatDisplay-Regular.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 300;\n  text-rendering: optimizelegibility;\n}\n\n@font-face {\n  font-family: RedHatDisplay;\n  src: url(\"../assets/fonts/RedHatDisplay/RedHatDisplay-Medium.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 400;\n  text-rendering: optimizelegibility;\n}\n\n@font-face {\n  font-family: RedHatDisplay;\n  src: url(\"../assets/fonts/RedHatDisplay/RedHatDisplay-Bold.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 700;\n  text-rendering: optimizelegibility;\n}\n\n@font-face {\n  font-family: RedHatText;\n  src: url(\"../assets/fonts/RedHatText/RedHatText-Regular.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 400;\n  text-rendering: optimizelegibility;\n}\n\n@font-face {\n  font-family: RedHatText;\n  src: url(\"../assets/fonts/RedHatText/RedHatText-Medium.woff\");\n\n  /* Modern Browsers */\n  font-style: normal;\n  font-weight: 700;\n  text-rendering: optimizelegibility;\n}\n",
      "hidden": true
    },
    "demo/typography.css": {
      "contentType": "text/css",
      "content": "body {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif);\n  font-size: 1rem;\n  line-height: var(--rh-line-height-body-text, 1.5);\n}\n\n:where(h1, h2, h3, h4, h5, h6) {\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-heading, 1.3);\n}\n\n:where(code) {\n  font-family: var(--rh-font-family-code, RedHatMono, \"Red Hat Mono\", \"Courier New\", Courier, monospace);\n  line-height: var(--rh-line-height-code, 1.5);\n}\n\n:where(kbd) {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif);\n  font-size: 1rem;\n  line-height: var(--rh-line-height-body-text, 1.5);\n}\n\n:where(h1) {\n  font-size: var(--rh-font-size-heading-2xl, 3rem);\n}\n\n:where(h2) {\n  font-size: var(--rh-font-size-heading-xl, 2.5rem);\n}\n\n:where(h3) {\n  font-size: var(--rh-font-size-heading-lg, 2.25rem);\n}\n\n:where(h4) {\n  font-size: var(--rh-font-size-heading-md, 1.75rem);\n}\n\n:where(h5) {\n  font-size: var(--rh-font-size-heading-sm, 1.5rem);\n}\n\n:where(h6) {\n  font-size: var(--rh-font-size-heading-xs, 1.25rem);\n}\n\n:where(p) {\n  font-size: var(--rh-font-size-body-text-md, 1rem);\n}\n\n:where(p, h1, h2, h3, h4, h5, h6, li) {\n  max-width: 56rem;\n}\n",
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
      "content": "<rh-avatar name=\"Omar Khayyam\" subtitle=\"Mathematician, Astronomer\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/005-a-Ruby-kindles-in-the-vine-810x1146.jpg/212px-005-a-Ruby-kindles-in-the-vine-810x1146.jpg\"></rh-avatar>\n\n<style>\nrh-avatar::part(img) {\n  object-position: top;\n}\n</style>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"reset.css\"><link rel=\"stylesheet\" href=\"fonts.css\"><link rel=\"stylesheet\" href=\"typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-avatar-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<rh-context-demo>\n  <rh-avatar>George Boole\n    <span slot=\"subtitle\">Professor of Mathematics, </span>\n    <a slot=\"subtitle\" href=\"https://www.wikiwand.com/en/Queen's_College,_Cork\">Queen's College, Cork</a>\n  </rh-avatar>\n  <rh-avatar name=\"John von Neumann\" subtitle=\"Mathematician\" plain=\"\"></rh-avatar>\n  <rh-avatar name=\"Grace Hopper\" subtitle=\"Rear Admiral\" src=\"https://ux.redhat.com/elements/avatar/demo/hopper.jpg\" plain=\"\"></rh-avatar>\n  <rh-avatar name=\"Haskell Curry\" subtitle=\"Computer Scientist\" pattern=\"squares\" plain=\"\"></rh-avatar>\n  <rh-avatar name=\"Edsger Dijkstra\" subtitle=\"Computer Scientist\" pattern=\"triangles\" plain=\"\"></rh-avatar>\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-avatar-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<figure>\n  <figcaption>Links applied to Name</figcaption>\n  <rh-avatar src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Jeannette_Wing%2C_Davos_2013.jpg/330px-Jeannette_Wing%2C_Davos_2013.jpg\">\n    <a href=\"https://www.wikiwand.com/en/Jeannette_Wing\">Jeannette Wing</a>\n    <span slot=\"subtitle\">Avanessians Director of the Data Science Institute, Columbia University</span>\n  </rh-avatar>\n</figure>\n\n<figure>\n  <figcaption>Links applied to job details</figcaption>\n  <rh-avatar src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/George_Boole_color.jpg/330px-George_Boole_color.jpg\">George Boole\n    <span slot=\"subtitle\">Professor of Mathematics, </span>\n    <a slot=\"subtitle\" href=\"https://www.wikiwand.com/en/Queen's_College,_Cork\">Queen's College, Cork</a>\n  </rh-avatar>\n</figure>\n\n<style>\n  figure {\n    display: grid;\n    grid-template: min-content 1fr / repeat(5, 1fr);\n    grid-auto-flow: column;\n    gap: var(--rh-space-lg, 16px);\n  }\n  figcaption {\n    grid-column: -1/1;\n  }\n</style>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-avatar-links-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<figure>\n  <figcaption>Squares pattern</figcaption>\n  <rh-avatar name=\"Alonzo Church\" subtitle=\"Inventor of the Lambda Calculus\" pattern=\"squares\"></rh-avatar>\n</figure>\n\n<figure>\n  <figcaption>Triangles pattern</figcaption>\n  <rh-avatar name=\"Alan Turing\" subtitle=\"Cryptographer\" pattern=\"triangles\"></rh-avatar>\n</figure>\n\n<style>\n  figure {\n    display: grid;\n    grid-template: min-content 1fr / repeat(5, 1fr);\n    grid-auto-flow: column;\n    gap: var(--rh-space-lg, 16px);\n  }\n  figcaption {\n    grid-column: -1/1;\n  }\n</style>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-avatar-pattern-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<rh-avatar name=\"John von Neumann\" subtitle=\"Mathematician\" plain=\"\"></rh-avatar>\n<rh-avatar name=\"Grace Hopper\" subtitle=\"Rear Admiral\" src=\"https://ux.redhat.com/elements/avatar/demo/hopper.jpg\" plain=\"\"></rh-avatar>\n<rh-avatar name=\"Haskell Curry\" subtitle=\"Computer Scientist\" pattern=\"squares\" plain=\"\"></rh-avatar>\n<rh-avatar name=\"Edsger Dijkstra\" subtitle=\"Computer Scientist\" pattern=\"triangles\" plain=\"\"></rh-avatar>\n\n<style>\n  [data-demo=\"rh-avatar\"] {\n    display: flex;\n    gap: var(--rh-space-md, 8px);\n  }\n</style>\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-avatar-plain-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<rh-avatar name=\"Ada Lovelace\" subtitle=\"Computer Programmer\" layout=\"block\"></rh-avatar>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-avatar-position-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<figure>\n  <figcaption><code>--rh-size-icon-03</code></figcaption>\n  <rh-avatar name=\"Radia Perlman\" subtitle=\"Mother of the Internet\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Radia_Perlman_2009.jpg/330px-Radia_Perlman_2009.jpg\" style=\"--rh-avatar-size:var(--rh-size-icon-03, 32px);\">\n  </rh-avatar>\n</figure>\n\n<figure>\n  <figcaption><code>--rh-size-icon-05</code></figcaption>\n  <rh-avatar src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Gordon_Moore_1978_%28cropped%29.png/330px-Gordon_Moore_1978_%28cropped%29.png\" name=\"Gordon Moore\" style=\"--rh-avatar-size:var(--rh-size-icon-05, 48px);\">\n    <span slot=\"subtitle\">Co-founder, <em>Intel</em></span>\n  </rh-avatar>\n</figure>\n\n<figure>\n  <figcaption><code>--rh-size-icon-06</code> <small>(default)</small></figcaption>\n  <rh-avatar src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/330px-Katherine_Johnson_1983.jpg\" name=\"Katherine Johnson\" subtitle=\"Recipient, National Medal of Freedom 2016\">\n  </rh-avatar>\n</figure>\n\n<figure>\n  <figcaption>\n    <code>--rh-size-icon-08</code>\n    <small>Avatars cannot be larger than <code>--rh-size-icon-06</code></small>\n  </figcaption>\n  <rh-avatar name=\"Hedy Lamarr\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hedy_Lamarr_Publicity_Photo_for_The_Heavenly_Body_1944.jpg/330px-Hedy_Lamarr_Publicity_Photo_for_The_Heavenly_Body_1944.jpg\" subtitle=\"Jewish actress and inventor\" style=\"--rh-avatar-size:var(--rh-size-icon-08, 96px);\"></rh-avatar>\n</figure>\n\n<style>\n  figure {\n    display: grid;\n    grid-template: min-content 1fr / repeat(5, 1fr);\n    grid-auto-flow: column;\n    gap: var(--rh-space-lg, 16px);\n  }\n  figcaption {\n    grid-column: -1/1;\n  }\n</style>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-avatar-sizes-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
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
      "content": "<rh-avatar src=\"https://ux.redhat.com/elements/avatar/demo/schoenfinkel.jpg\">Moses Schoenfinkle\n  <span slot=\"subtitle\">\n    Inventor of Combinatorics,\n    often uncreditted for inventing the process of \"currying\" functions,\n    however, \"schoenfinkling\" doesn't exactly roll off the tongue, so we'll\n    let it slide\n  </span>\n</rh-avatar>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-avatar/rh-avatar.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"../reset.css\"><link rel=\"stylesheet\" href=\"../fonts.css\"><link rel=\"stylesheet\" href=\"../typography.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-avatar-subtitles-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Subtitles"
    }
  }
};