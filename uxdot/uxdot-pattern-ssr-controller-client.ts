import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';
import { ssrAdopt } from './ssr-adopt-directive.js';

export class UxdotPatternSSRControllerClient extends RHDSSSRController {
  allContent = ssrAdopt();
  htmlContent = ssrAdopt();
  cssContent = ssrAdopt();
  jsContent = ssrAdopt();
  hasCss = false;
  hasJs = false;
  viewportSrc?: string;

  hostConnected() {
    const root = this.host.shadowRoot;
    if (!root) {
      return;
    }
    this.hasCss = !!root.querySelector('#css-panel rh-code-block pre')?.textContent?.trim();
    this.hasJs = !!root.querySelector('#js-panel rh-code-block pre')?.textContent?.trim();
    this.viewportSrc = root.querySelector<HTMLIFrameElement>('#viewport-frame')?.src;
    this.host.requestUpdate();
  }
}
