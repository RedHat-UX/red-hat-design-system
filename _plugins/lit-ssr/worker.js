                                                                                        
                                                
                                                                              
                                                                            
                                                                                     

import '@patternfly/pfe-core/ssr-shims.js';

import { LitElementRenderer } from '@lit-labs/ssr/lib/lit-element-renderer.js';

import { register } from 'node:module';
import { register as registerTS } from 'tsx/esm/api';

import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

import { html } from 'lit';
import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';
import { renderValue } from '@lit-labs/ssr/lib/render-value.js';

import Piscina from 'piscina';
import { transform, Features } from 'lightningcss';

;                         
                    
 

const { imports } = Piscina.workerData                  ;

registerTS();
register('./lit-css-node.ts', import.meta.url);

/* eslint-disable no-console */
for (const bareSpec of imports) {
  const conventionalTagName = bareSpec.split('/')?.pop()?.split('.').shift();
  if (!conventionalTagName) {
    throw new Error(`${bareSpec} does not appear to be an element module`);
  }
  if (!customElements.get(conventionalTagName)) {
    const spec = pathToFileURL(resolve(process.cwd(), bareSpec)).href.replace('.js', '.ts');
    try {
      await import(spec);
      if (!customElements.get(conventionalTagName)) {
        throw new Error(`${conventionalTagName} declaration loaded, but not defined!`);
      }
    } catch (e) {
      console.warn((e         )?.message?.trim() || e);
      throw new Error(`FAILED to load ${bareSpec}`);
    }
  }
}
/* eslint-enable no-console */

class RHDSSSRableRenderer extends LitElementRenderer {
  static styleCache = new Map               ();

  static isRHDSSSRController(ctrl                    )                            {
    return !!(ctrl                     ).isRHDSSSRController;
  }

  getControllers() {
    const element = (this.element                                                  );
    return Array.from(element._$EO ?? new Set())
        .filter(RHDSSSRableRenderer.isRHDSSSRController);
  }

           renderShadow(renderInfo            )                      {
    return [
      // Render styles.
      this.#renderStyles(),
      // Thunk that sets up controllers first, then renders template
      async () => {
        for (const controller of this.getControllers()) {
          if (controller.ssrSetup) {
            await controller.ssrSetup(renderInfo);
          }
        }
        return renderValue(
          // @ts-expect-error: if upstream can do it, so can we
          this.element.render(),
          renderInfo,
        );
      },
    ];
  }

  #renderStyles()        {
    const styles = (this.element.constructor                     ).elementStyles;
    if (styles !== undefined && styles.length > 0) {
      return () => [
        '<style>',
        ...this.thunkStyles(styles),
        '</style>',
      ];
    } else {
      return () => '';
    }
  }

          thunkStyles(styles                     )          {
    return styles.flatMap(style => {
      const { cssText } = style             ;
      if (!RHDSSSRableRenderer.styleCache.has(cssText)) {
        const processed = () => {
          try {
            const { code } = transform({
              filename: 'constructed-stylesheet.css',
              code: Buffer.from(cssText),
              minify: true,
              include: Features.Nesting,
            });
            // Fix lightningcss normalizing inherit to normal for color-scheme
            // https://github.com/parcel-bundler/lightningcss/issues/821#issuecomment-3719524299
            return code
                .toString()
                .replaceAll(
                  'color-scheme:normal',
                  'color-scheme:inherit',
                );
          } catch {
            return cssText;
          }
        };
        RHDSSSRableRenderer.styleCache.set(cssText, processed);
      }
      return [RHDSSSRableRenderer.styleCache.get(cssText) ];
    });
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
  slotControllerElements,
}                      )                                 {
  const start = performance.now();
  const tpl = html(new UnsafeHTMLStringsArray(content));
  const result = render(tpl, {
    elementRenderers,
    page,
    slotControllerElements,
  }                         );
  const rendered = await collectResult(result);
  const end = performance.now();
  return { page, rendered, durationMs: end - start };
}
