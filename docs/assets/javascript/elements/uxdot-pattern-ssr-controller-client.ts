import type { UxdotPattern } from './uxdot-pattern.js';

export class UxdotPatternSSRControllerClient {
  constructor(public host: UxdotPattern) { }
  allContent?: Node;
  htmlContent?: Node;
  jsContent?: Node;
  cssContent?: Node;
  hasCss = false;
  hasJs = false;

  hostUpdate() {
    void 0;
  }
}

