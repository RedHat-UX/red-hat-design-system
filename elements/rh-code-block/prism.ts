import type { RhCodeBlock } from './rh-code-block.js';
import { Prism } from 'prism-esm';
import { Plugin as LineNumbers } from 'prism-esm/plugins/line-numbers/prism-line-numbers.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const prism = new Prism({ manual: true });
LineNumbers(prism);

/**
 * Autoload a supported language
 * @param language a supported language
 */
async function autoloader(language: RhCodeBlock['language']) {
  switch (language) {
    case 'html': return import('prism-esm/components/prism-markup.js').then(m => m.loader(prism));
    case 'css': return import('prism-esm/components/prism-css.js').then(m => m.loader(prism));
    // @ts-expect-error: be liberal about what you accept
    case 'js':
    case 'javascript': return import('prism-esm/components/prism-javascript.js')
        .then(m => m.loader(prism));
    // @ts-expect-error: be liberal about what you accept
    case 'ts':
    case 'typescript': return import('prism-esm/components/prism-typescript.js')
        .then(m => m.loader(prism));
    case 'bash': return import('prism-esm/components/prism-bash.js').then(m => m.loader(prism));
    case 'ruby': return import('prism-esm/components/prism-ruby.js').then(m => m.loader(prism));
    case 'yaml': return import('prism-esm/components/prism-yaml.js').then(m => m.loader(prism));
    case 'json': return import('prism-esm/components/prism-json.js').then(m => m.loader(prism));
  }
}

/**
 * Highlight a string using prism.js
 * @param textContent source code
 * @param language a supported language
 */
export async function highlight(textContent: string, language: RhCodeBlock['language']) {
  await autoloader(language);
  const highlighted = prism.highlight(textContent, prism.languages[language!], language!);
  return unsafeHTML(highlighted);
}

export { prismStyles } from './prism.css.js';
