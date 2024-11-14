                                                          
                                                              
                                                                              
                                                                            

import { LitElementRenderer } from '@lit-labs/ssr/lib/lit-element-renderer.js';

import { register } from 'node:module';
import { register as registerTS } from 'tsx/esm/api';

import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

import { html } from 'lit';
import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';
import Piscina from 'piscina';

;                         
                    
                   
 

const { imports, tsconfig } = Piscina.workerData                  ;

registerTS({ tsconfig });
register('./lit-css-node.ts', import.meta.url);

async function importModule(bareSpec        ) {
  const spec = pathToFileURL(resolve(process.cwd(), bareSpec)).href.replace('.js', '.ts');
  await import(spec);
}

await Promise
    .allSettled(imports.map(importModule))
    // eslint-disable-next-line no-console
    .catch(console.error);

class RHDSSSRableRenderer extends LitElementRenderer {
  static isRHDSSSRController(ctrl                    )                            {
    return !!(ctrl                     ).isRHDSSSRController;
  }

  getControllers() {
    const element = (this.element                                                  );
    return Array.from(element._$EO ?? new Set())
        .filter(RHDSSSRableRenderer.isRHDSSSRController);
  }

  async setupController(controller                   , renderInfo            ) {
    if (controller.ssrSetup) {
      await controller.ssrSetup(renderInfo);
    }
    return '';
  }

          * renderShadow(renderInfo            )               {
    for (const controller of this.getControllers()) {
      yield this.setupController(controller, renderInfo);
    }
    yield* super.renderShadow(renderInfo);
  }
}

const elementRenderers = [
  RHDSSSRableRenderer,
];

class UnsafeHTMLStringsArray extends Array {
         raw                   ;
  constructor(string        ) {
    super();
    this.push(string);
    this.raw = [string];
  }
}

/**
 * Render a page using lit-ssr
 *
 * @param opts
 * @param opts.page
 * @param opts.content
 */
export default async function renderPage({
  page,
  content,
}                      )                                 {
  const start = performance.now();
  const tpl = html(new UnsafeHTMLStringsArray(content));
  const result = render(tpl, { elementRenderers, page }                         );
  const rendered = await collectResult(result);
  const end = performance.now();
  return { page, rendered, durationMs: end - start };
}

