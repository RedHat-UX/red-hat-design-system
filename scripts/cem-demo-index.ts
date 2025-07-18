#!/usr/bin/env node
import { writeFile } from 'node:fs/promises';
import type * as M from 'custom-elements-manifest/schema';

import manifest from '../custom-elements.json' with { type: 'json' };

function isCustomElementDeclaration(decl: M.Declaration): decl is M.CustomElementDeclaration {
  return !!(decl as M.CustomElementDeclaration).customElement;
}

const RE = /^https:\/\/ux\.redhat\.com\/elements\/(?<slug>[\w-]+)\//;

// replace all canonical demos with /
// e.g.
// from: https://ux.redhat.com/elements/call-to-action/demo/call-to-action/
//   to: https://ux.redhat.com/elements/call-to-action/demo/
// This is a stopgap. the ideal would be to either generate the canonical demo from the cem, aka knobs
// or to include it in the jsdoc in an @example tag
// or to rearrange the elements/*/demo/*.html file structure
for (const module of (manifest as M.Package).modules) {
  for (const decl of module.declarations ?? []) {
    if (isCustomElementDeclaration(decl) && decl.demos?.length) {
      for (const demo of decl.demos) {
        const { slug = '' } = demo.url.match(RE)?.groups ?? {};
        if (demo.url.endsWith(`${slug}/`)) {
          const newUrl = demo.url.replace(new RegExp(`${slug}\\/`), '');
          demo.url = newUrl;
        }
      }
    }
  }
}

await writeFile('../custom-elements.json', JSON.stringify(manifest, null, 2), 'utf-8');
