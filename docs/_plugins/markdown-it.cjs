const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');

const { makePermalink } = markdownItAnchor.permalink;

/**
 * @see https://github.com/valeriangalliat/markdown-it-anchor/blob/69cbf727367c6b10a553a8549790a6d6df917342/permalink.js#L111-L129
 * input: ## Installation
 * output:
 * <uxdot-copy-permalink>
 *   <h2 id="installation">
 *     <a class="heading-anchor" href="#installation">Installation</a>
 *   </h2>
 * </uxdot-copy-permalink>
 */
const rhdsPermalink = makePermalink((slug, opts, anchorOpts, state, idx) => {
  const headerOpen = state.tokens[idx];
  const inline = state.tokens[idx + 1];
  const id = headerOpen.attrs.find(([k]) => k === 'id').at(1);

  state.tokens.splice(idx, 2, Object.assign(new state.Token('html_block', '', 0), {
    content: /* html */`
<uxdot-copy-permalink class="${headerOpen.tag}">
  <${headerOpen.tag} ${headerOpen.attrs.map(([key, value]) => `${key}="${value}"`).join(' ')}>
    <a href="#${id}">`.trim(),
  }),
                      inline,
                      Object.assign(new state.Token('html_block', '', 0), { content: /* html */`
    </a>
      </${headerOpen.tag}>
    </uxdot-copy-permalink>`.trim(),
                      })
  );
});

/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
module.exports = function(eleventyConfig) {
  eleventyConfig.amendLibrary('md', /** @param {import('markdown-it')} md*/md => md
      .set({ html: true, breaks: false })
      .use(markdownItAnchor, { permalink: rhdsPermalink() })
      .use(markdownItAttrs));
};
