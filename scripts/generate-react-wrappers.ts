import { generateReactWrappers } from '@patternfly/pfe-tools/react/generate-wrappers.js';

const inURL = new URL('../custom-elements.json', import.meta.url);
const outURL = new URL('../react/', import.meta.url);

await generateReactWrappers(inURL,
                            outURL,
                            '@rhds/elements',
                            'rh',
                            'Rh');

