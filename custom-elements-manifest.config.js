import { writeFile } from 'node:fs/promises';
import { pfeCustomElementsManifestConfig } from '@patternfly/pfe-tools/custom-elements-manifest/config.js';

export default pfeCustomElementsManifestConfig({
  globs: ['elements/*/rh-*.ts'],
  exclude: [
    '*.css.js',
    'elements/rh-icon/ssr.ts',
    'elements/rh-icon/ssr.js',
  ],
  plugins: [{
    // because analyzer tooling does not support export paths,
    // we here need to 'manually resolve' those paths in the manifest
    // practically, this means removing the 'elements/' prefix
    name: 'rhds-fix-module-exports-paths',
    packageLinkPhase({ customElementsManifest }) {
      const fix = path => path.replace(/^elements\//, '');
      for (const mod of customElementsManifest.modules) {
        mod.path &&= fix(mod.path);
        for (const declaration of mod.declarations ?? []) {
          if (declaration?.superClass?.module) {
            declaration.superClass.module &&= fix(declaration.superClass.module);
          }
        }
        for (const exportDecl of mod.exports ?? []) {
          if (exportDecl?.declaration?.module) {
            exportDecl.declaration.module &&= fix(exportDecl.declaration.module);
          }
        }
      }
    },
  }, {
    name: 'rhds-tokens',
    async packageLinkPhase({ customElementsManifest }) {
      const { analyze: cemTokens } = await import('./scripts/cem-tokens.ts');
      const { analyze: systemTokens } = await import('./scripts/system-tokens.ts');
      cemTokens(customElementsManifest);
      await systemTokens(customElementsManifest);
      // Shouldn't need to do this, but practically speaking, the new manifest is not being written
      await writeFile(
        new URL('custom-elements.json', import.meta.url),
        JSON.stringify(customElementsManifest, null, 2),
      );
    },
  }],
});
