/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const path = require('node:path');
const { pathToFileURL } = require('node:url');
// eslint-disable-next-line no-redeclare
const { Worker } = require('node:worker_threads');

module.exports = {
  /**
   * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
   * @param {{componentModules: string[]}} resolvedComponentModules
   */
  configFunction(
    eleventyConfig,
    { componentModules } = {}
  ) {
    if (componentModules === undefined || componentModules.length === 0) {
      // If there are no component modules, we could never have anything to
      // render.
      return;
    }

    const resolvedComponentModules = componentModules.map(
      module => pathToFileURL(path.resolve(process.cwd(), module)).href
    );

    let worker;

    const requestIdResolveMap = new Map();
    let requestId = 0;

    eleventyConfig.on('eleventy.before', async () => {
      worker = new Worker(path.resolve(__dirname, './worker/worker.js'));

      worker.on('error', err => {
        // eslint-disable-next-line no-console
        console.error(
          'Unexpected error while rendering lit component in worker thread',
          err
        );
        throw err;
      });

      let requestResolve;
      const requestPromise = new Promise(resolve => {
        requestResolve = resolve;
      });

      worker.on('message', message => {
        switch (message.type) {
          case 'initialize-response': {
            requestResolve();
            break;
          }

          case 'render-response': {
            const { id, rendered } = message;
            const resolve = requestIdResolveMap.get(id);
            if (resolve === undefined) {
              throw new Error(
                '@lit-labs/eleventy-plugin-lit received invalid render-response message'
              );
            }
            resolve(rendered);
            requestIdResolveMap.delete(id);
            break;
          }
        }
      });

      const message = {
        type: 'initialize-request',
        imports: resolvedComponentModules,
      };

      worker.postMessage(message);
      await requestPromise;
    });

    eleventyConfig.on('eleventy.after', async () => {
      await worker.terminate();
    });

    eleventyConfig.addTransform('render-lit', async function(content) {
      if (!this.page.outputPath.endsWith('.html')) {
        return content;
      }

      const renderedContent = await new Promise(resolve => {
        requestIdResolveMap.set(requestId, resolve);
        const message = {
          type: 'render-request',
          id: requestId++,
          content,
          page: JSON.parse(JSON.stringify(this.page)),
        };
        worker.postMessage(message);
      });

      const outerMarkersTrimmed = trimOuterMarkers(renderedContent);
      return outerMarkersTrimmed;
    }
    );
  },
};

// Lit SSR includes comment markers to track the outer template from
// the template we've generated here, but it's not possible for this
// outer template to be hydrated, so they serve no purpose.

// TODO(aomarks) Maybe we should provide an option to SSR option to skip
// outer markers (though note there are 2 layers of markers due to the
// use of the unsafeHTML directive).
function trimOuterMarkers(renderedContent) {
  return renderedContent
      .replace(/^((<!--[^<>]*-->)|(<\?>)|\s)+/, '')
      .replace(/((<!--[^<>]*-->)|(<\?>)|\s)+$/, '');
}

