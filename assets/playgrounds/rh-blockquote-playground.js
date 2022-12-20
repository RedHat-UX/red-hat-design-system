document.currentScript.closest('playground-project').config = {
  "files": {
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\">\n<script type=\"module\" src=\"rh-blockquote.js\"></script>\n\n<rh-context-provider>\n  <hgroup>\n    <h2>Light Theme</h2>\n    <h3>Default</h3>\n  </hgroup>\n \n  <rh-blockquote>\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n\n  <h3>Default, Centered</h3>\n  <rh-blockquote align=\"center\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n\n  <h3>Default, Highlighted</h3>\n  <rh-blockquote highlight=\"inline-start\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n\n  <h3>Large</h3>\n  <rh-blockquote size=\"large\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n</rh-context-provider>\n\n<rh-context-provider color-palette=\"darkest\">\n  <hgroup>\n    <h2>Dark Theme</h2>\n    <h3>Default</h3>\n  </hgroup>\n\n  <rh-blockquote>\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n\n  <h3>Default, Centered</h3>\n  <rh-blockquote align=\"center\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n\n  <h3>Default, Highlighted</h3>\n  <rh-blockquote highlight=\"inline-start\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n\n  <h3>Large</h3>\n  <rh-blockquote size=\"large\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n</rh-context-provider>\n",
      "label": "Blockquote"
    },
    "demo/rh-blockquote.js": {
      "content": "import '@rhds/elements/rh-context-provider/rh-context-provider.js';\nimport '@rhds/elements/rh-blockquote/rh-blockquote.js';\n\n",
      "hidden": true
    },
    "demo/demo.css": {
      "content": "rh-blockquote {\n  margin: auto;\n}\n\nrh-context-provider {\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n}\n",
      "hidden": true
    }
  }
};