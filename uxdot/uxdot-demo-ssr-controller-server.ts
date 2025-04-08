import type { UxdotDemo } from './uxdot-demo.js';

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import {
  UxdotPatternSSRControllerServer,
  type RHDSRenderInfo,
} from './uxdot-pattern-ssr-controller-server.js';

export class UxdotDemoSSRControllerServer extends UxdotPatternSSRControllerServer {
  declare host: UxdotDemo;

  isRHDSSSRController = true;

  constructor(host: UxdotDemo) {
    super(host);
    console.log(host.tagName);
  }

  protected getPatternContent(_renderInfo: RHDSRenderInfo): Promise<string> {
    const basename = this.host.demo === this.host.tag ? 'index.html' : `${this.host.demo}.html`;
    const filepath = join(process.cwd(), 'elements', this.host.tag, 'demo', basename);
    console.log(_renderInfo);
    return readFile(filepath, 'utf8');
  }
}
