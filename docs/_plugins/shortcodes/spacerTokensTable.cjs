const { tokens: metaTokens } = require('@rhds/tokens/meta.js');

/**
 * Reads token data from @rhds/tokens and outputs a table for specified tokens
 * @this {EleventyContext}
 */

module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('spacerTokensTable',
    function(content, {
      tokens = '',
      style,
      headline,
      headingLevel = '3',
      caption = '',
      wrapperClass,
      palette = 'light'
    } = {}) {
      const slugify = eleventyConfig.getFilter('slugify');
      const tokenList = tokens.split(',').map(token => token.trim());
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
          const klass = parseInt(size) <= 16 ? `offset size-${size}` : '';
          const { color } = prop['$extensions']['com.redhat.ux'];
          return /* html */`
            <tr>
              <td><samp class="${klass}" style="--samp-width: ${px}; --samp-color: ${color};"><span>${size}</span></samp></td>
              <td>--${prop.name}</td>
              <td>${prop['$description']}</td>
            </tr>
          `.trim();
        }).join('\n');

        table = /* html */`
          <table width="100%" class="spacer-tokens-table">
          <caption>${caption}</caption>
          <thead>
            <tr>
              <th>Example</th>
              <th>Token</th>
              <th>Description</th>
            </tr>
          </thead>
            <tbody>
              ${body}
            </tbody>
          </table>
        `.trim();
      }
      return `
        <div class="token-props-table palette-${palette} ${wrapperClass ?? ''}" ${!style ? ''
          : `style="${style}"}`.trim()}>${!headline ? ''
          : `<h${headingLevel} id="${slugify(headline)}" class="image-title">${headline}</h${headingLevel}>`.trim()}
          ${table}
          ${content}
        </div>
      `.trim();
    });
};
