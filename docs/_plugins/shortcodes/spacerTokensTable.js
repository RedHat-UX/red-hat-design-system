import { tokens as metaTokens } from '@rhds/tokens/meta.js';

/**
 * Reads token data from @rhds/tokens and outputs a table for specified tokens
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig  computed config
 */
export default function(eleventyConfig) {
  eleventyConfig.addPairedShortcode(
    'spacerTokensTable',
    function(content, {
      tokens = '',
      style,
      headline = '',
      headingLevel = '3',
      caption = '',
      wrapperClass,
      palette = 'light',
    } = {}) {
      const slugify = eleventyConfig.getFilter('slugify');
      const tokenList = (Array.isArray(tokens) ? tokens : tokens.split(','))
          .map(token => token.trim()).filter(Boolean);
      const metaData = [];

      if (tokenList.length === 0) {
        return ``;
      }

      tokenList.forEach(token => {
        metaData.push(metaTokens.get(token));
      });

      let table = ``;
      if (metaData.length) {
        const body = metaData.map(prop => {
          const px = prop['$value'];
          const size = px.substring(0, px.length - 2);
          const offset = parseInt(size) < 16;
          const sampClass = offset ? `size-${size}` : '';
          const offsetClass = offset ? 'offset' : '';
          const { color } = prop['$extensions']['com.redhat.ux'];
          return /* html */`
            <tr>
              <td data-label="Example">
                <samp class="space ${sampClass}" style="--samp-space-size: ${px}; --samp-space-color: ${color};">
                  <span class="${offsetClass}">${size}</span>
                </samp>
              </td>
              <td data-label="Token">--${prop.name}</td>
              <td data-label="Description">${prop['$description']}</td>
            </tr>
          `.trim();
        }).join('\n');

        table = /* html */`
          <table>
          <caption>${caption}</caption>
          <thead>
            <tr>
              <th scope="col" data-label="Example">Example</th>
              <th scope="col" data-label="Token">Token</th>
              <th scope="col" data-label="Description">Description</th>
            </tr>
          </thead>
            <tbody>
              ${body}
            </tbody>
          </table>
        `.trim();
      }
      return `
        ${table}
        <div class="token-props-table palette-${palette} ${wrapperClass ?? ''}" ${!style ? ''
        : `style="${style}"}`.trim()}>${!headline ? ''
        : `<h${headingLevel} id="${slugify(headline)}" class="image-title">${headline}</h${headingLevel}>`.trim()}
          ${content}
        </div>
      `.trim();
    });
};
