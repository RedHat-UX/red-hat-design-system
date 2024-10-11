import markdownItAnchor from 'markdown-it-anchor';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItFootnote from 'markdown-it-footnote';

/* eslint-disable lit-a11y/anchor-is-valid */
/* eslint-disable lit-a11y/accessible-name */

const { makePermalink } = markdownItAnchor.permalink;

// for editor highlighting
const html = String.raw;

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
    content: html`
<uxdot-copy-permalink class="${headerOpen.tag}">
  <${headerOpen.tag} ${headerOpen.attrs.map(([key, value]) => `${key}="${value}"`).join(' ')}>
    <a href="#${id}">`.trim(),
  }),
                      inline,
                      Object.assign(new state.Token('html_block', '', 0), {
                        content: html`
<a>
  </${headerOpen.tag}>
</uxdot-copy-permalink>`.trim(),
                      })
  );
});

function rhdsCodeBlock(md) {
  const orig = md.renderer.rules.fence;
  // custom renderer for fences
  md.renderer.rules.fence = function(tokens, idx, options, env, slf) {
    const rendered = orig.call(this, tokens, idx, options, env, slf);
    const token = tokens[idx];

    const actions = ['copy'];
    if (rendered.split('\n').map(x => x.trim()).filter(Boolean).length > 1) {
      actions.push('wrap');
    }
    const [lang, block, ...rest] = token.info.split(/\s+/);
    if (block?.replaceAll('-', '') === 'rhcodeblock') {
      const redactedToken = { ...token, info: `${lang} ${rest.join(' ')}` };
      return html`
        <rh-code-block full-height
                       dedent
                       actions="${actions.join(' ')}"
                       highlighting="prerendered"
                       ${slf.renderAttrs(redactedToken)}>${rendered}</rh-code-block>`.trim();
    } else {
      return rendered;
    }
  };
}

/* @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
export default function(eleventyConfig) {
  eleventyConfig.amendLibrary('md', /** @param {import('markdown-it')} md*/md => md
      .set({ html: true, breaks: false })
      .use(markdownItAnchor, { permalink: rhdsPermalink() })
      .use(markdownItFootnote)
      .use(markdownItAttrs)
      .use(rhdsCodeBlock));
};
