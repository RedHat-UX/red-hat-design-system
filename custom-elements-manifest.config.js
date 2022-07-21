import { pfeCustomElementsManifestConfig } from '@patternfly/pfe-tools/custom-elements-manifest.js';

export default pfeCustomElementsManifestConfig({
  globs: ['elements/*/rh-*.ts', 'elements/*/Rh*.ts'],
  exclude: ['*.css.js'],
  demoURLPrefix: 'https://ux.redhat.com/',
  sourceControlURLPrefix: 'https://github.com/redhat-ux/red-hat-design-system/tree/main/',
});

