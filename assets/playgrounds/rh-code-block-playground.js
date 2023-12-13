export const config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/rh-code-block-index-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-code-block/rh-code-block.js';\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<rh-code-block>\n  <script type=\"text/text\">Error: Error creating network Load Balancer: AccessDenied: User:\narn:aws:sts::970xxxxxxxxx:assumed-role/ManagedOpenShift-Installer-Role/163xxxxxxxxxxxxxxxx is\nnot authorized to perform: iam:CreateServiceLinkedRole on resource:\narn:aws:iam::970xxxxxxxxx:role/aws-service-role/elasticloadbalancing.amazonaws.com/\nAWSServiceRoleForElasticLoadBalancing</script>\n</rh-code-block>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-code-block/rh-code-block.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./rh-code-block-index-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Code Block"
    },
    "demo/rh-code-block-color-context-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-code-block/rh-code-block.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-context-demo>\n\n<rh-code-block>\n  <script type=\"text/text\">Error: Error creating network Load Balancer: AccessDenied: User:\narn:aws:sts::970xxxxxxxxx:assumed-role/ManagedOpenShift-Installer-Role/163xxxxxxxxxxxxxxxx is\nnot authorized to perform: iam:CreateServiceLinkedRole on resource:\narn:aws:iam::970xxxxxxxxx:role/aws-service-role/elasticloadbalancing.amazonaws.com/\nAWSServiceRoleForElasticLoadBalancing</script>\n</rh-code-block>\n\n</rh-context-demo>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-code-block/rh-code-block.js';\n  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-code-block-color-context-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Color Context"
    },
    "demo/rh-code-block-resizable-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-code-block/rh-code-block.js';\n",
      "hidden": true
    },
    "demo/resizable/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<rh-code-block resizable=\"\">\n  <script type=\"text/text\">Error: Error creating network Load Balancer: AccessDenied: User: arn:aws:sts::970xxxxxxxxx:assumed-role/ManagedOpenShift-Installer-Role/163xxxxxxxxxxxxxxxx is not authorized to perform: iam:CreateServiceLinkedRole on resource: arn:aws:iam::970xxxxxxxxx:role/aws-service-role/elasticloadbalancing.amazonaws.com/AWSServiceRoleForElasticLoadBalancing</script>\n</rh-code-block>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-code-block/rh-code-block.js';\n</script>\n\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-code-block-resizable-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Resizable"
    },
    "demo/rh-code-block-sizes-inline-script-0.js": {
      "contentType": "application/javascript",
      "content": "\n  import '@rhds/elements/rh-code-block/rh-code-block.js';\n",
      "hidden": true
    },
    "demo/sizes/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<hgroup>\n  <h2>Sizes</h2>\n  <h3>Standard</h3>\n</hgroup>\n\n<rh-code-block>\n  <script type=\"application/shell\">oc apply -f ostoy-microservice-deployment.yaml</script>\n</rh-code-block>\n\n<rh-code-block>\n  <script type=\"text/sample\">$ podman login -u flozanorht quay.io\nPassword:\nLogin Succeeded!\n$ skopeo copy docker://registry.access.redhat.com/ubi8/ubi:8.0-122 \\\ndocker://quay.io/flozanorht/ubi:8\n...\nWriting manifest to image destination\nStoring signatures</script>\n</rh-code-block>\n\n<h3>Compact</h3>\n\n<rh-code-block compact=\"\">\n  <script type=\"application/shell\">oc apply -f ostoy-microservice-deployment.yaml</script>\n</rh-code-block>\n\n<rh-code-block compact=\"\">\n  <script type=\"text/sample\">$ podman login -u flozanorht quay.io\nPassword:\nLogin Succeeded!\n$ skopeo copy docker://registry.access.redhat.com/ubi8/ubi:8.0-122 \\\ndocker://quay.io/flozanorht/ubi:8\n...\nWriting manifest to image destination\nStoring signatures</script>\n</rh-code-block>\n\n<h3>No fixed width</h3>\n\n<rh-code-block style=\"width: min-content;\">\n  <script type=\"application/shell\">oc apply -f ostoy-microservice-deployment.yaml</script>\n</rh-code-block>\n\n<rh-code-block style=\"width: min-content;\">\n  <script type=\"text/text\">$ podman login -u flozanorht quay.io\nPassword:\nLogin Succeeded!\n$ skopeo copy docker://registry.access.redhat.com/ubi8/ubi:8.0-122 \\\ndocker://quay.io/flozanorht/ubi:8\n...\nWriting manifest to image destination\nStoring signatures</script>\n</rh-code-block>\n\n<script type=\"module\">\n  import '@rhds/elements/rh-code-block/rh-code-block.js';\n</script>\n\n<style>\nrh-code-block {\n  margin-block-end: var(--rh-space-lg, 16px);\n}\n</style>\n<!--playground-fold--><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-font/4/webfonts/red-hat-font.min.css\"><link rel=\"stylesheet\" href=\"https://static.redhat.com/libs/redhat/redhat-theme/6/advanced-theme.css\"><link rel=\"stylesheet\" href=\"../rhds-demo-base.css\">\n\n<!--playground-fold-end--><!--playground-hide--><script type=\"module\" src=\"./../rh-code-block-sizes-inline-script-0.js\"></script>\n\n<!--playground-hide-end-->",
      "label": "Sizes"
    }
  }
};