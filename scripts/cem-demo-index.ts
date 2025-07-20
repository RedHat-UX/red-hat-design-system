#!/usr/bin/env node
import { writeFile } from 'node:fs/promises';
import type * as M from 'custom-elements-manifest/schema';

import manifest from '../custom-elements.json' with { type: 'json' };

function isCustomElementDeclaration(decl: M.Declaration): decl is M.CustomElementDeclaration {
  return !!(decl as M.CustomElementDeclaration).customElement;
}

const RE = /^https:\/\/ux\.redhat\.com\/elements\/(?<slug>[\w-]+)\//;

const copy = structuredClone(manifest) as M.Package;

const getSlug = (demo: M.Demo) =>
  demo.url.match(RE)?.groups?.slug ?? '';

const isMainDemo = (demo: M.Demo): boolean =>
  demo.url.endsWith(`${getSlug(demo)}/`)
|| demo.url.endsWith('demo/');

// replace all canonical demos with /
// e.g.
// from: https://ux.redhat.com/elements/call-to-action/demo/call-to-action/
//   to: https://ux.redhat.com/elements/call-to-action/demo/
// This is a stopgap. the ideal would be to either generate the canonical demo from the cem, aka knobs
// or to include it in the jsdoc in an @example tag
// or to rearrange the elements/*/demo/*.html file structure
await writeFile('custom-elements.json', JSON.stringify({
  ...manifest,
  modules: copy.modules.map(module => ({
    ...module,
    declarations: module.declarations?.map(decl => ({
      ...decl,
      demos: isCustomElementDeclaration(decl) ? decl.demos?.map(demo => {
        if (isMainDemo(demo)) {
          demo.url = `https://ux.redhat.com/elements/${getSlug(demo)}/demo/`;
        }
        return demo;
      }).sort((a, b) => isMainDemo(a) ? -1 : isMainDemo(b) ? 1 : 0) : decl,
    })),
  })),
}, null, 2), 'utf-8');
