                                                                     
                                                              
                                                                              
                                                                            

import { LitElementRenderer } from '@lit-labs/ssr/lib/lit-element-renderer.js';

import { register } from 'node:module';
import { register as registerTS } from 'tsx/esm/api';

import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

import { html } from 'lit';
import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';
import Piscina from 'piscina';
import { renderValue } from '@lit-labs/ssr/lib/render-value.js';

import cssnano from 'cssnano';
import Postcss from 'postcss';

const postcss = Postcss([cssnano]);

;                         
                    
                   
 

const { imports, tsconfig } = Piscina.workerData                  ;

registerTS({ tsconfig });
register('./lit-css-node.ts', import.meta.url);

/* eslint-disable no-console */
try {
  await Promise
      .allSettled(imports.map(async function importModule(bareSpec        ) {
        const spec = pathToFileURL(resolve(process.cwd(), bareSpec)).href.replace('.js', '.ts');
        try {
          await import(spec);
        } catch (e) {
          console.log(`Failed to load ${bareSpec} from ${spec.replace(process.cwd(), '').replace('file://', '')}!`);
          console.warn((e         )?.message?.trim() || e);
        }
      }));
} catch (e) {
  console.error(e);
};
/* eslint-enable no-console */

class RHDSSSRableRenderer extends LitElementRenderer {
  static styleCache = new Map                         ();

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
    // Render styles.
    const styles = (this.element.constructor                     ).elementStyles;
    if (styles !== undefined && styles.length > 0) {
      yield '<style>';
      for (const style of styles) {
        const { cssText } = style             ;
        if (!RHDSSSRableRenderer.styleCache.has(cssText)) {
          RHDSSSRableRenderer.styleCache.set(cssText, postcss
              .process(cssText, { from: undefined })
              .then(r => r.css));
        }
        yield RHDSSSRableRenderer.styleCache.get(cssText) ;
      }
      yield '</style>';
    }
    // Render template

    yield* renderValue(
      // @ts-expect-error: if upstream can do it, so can we
      this.element.render(),
      renderInfo,
    );
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
