import type MarkdownIt from 'markdown-it';
import type State from 'markdown-it/lib/rules_core/state_core.mjs';
import type { UserConfig } from '@11ty/eleventy';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItFootnote from 'markdown-it-footnote';

/* eslint-disable lit-a11y/anchor-is-valid */
/* eslint-disable lit-a11y/accessible-name */

const { makePermalink } = markdownItAnchor.permalink as unknown as {
  makePermalink(callback: (
    slug: string,
    opts: markdownItAnchor.PermalinkOptions,
    anchorOptions: markdownItAnchor.AnchorOptions,
    state: State,
    idx: number,
  ) => void): () => markdownItAnchor.PermalinkGenerator;
};

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
const rhdsPermalink = makePermalink((_slug, _opts, _anchorOpts, state, idx) => {
  const headerOpen = state.tokens[idx] as { tag: string; attrs: [string, string][] };
  const inline = state.tokens[idx + 1];
  const id = headerOpen.attrs.find(([k]) => k === 'id')?.at(1);

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

function rhdsCodeBlock(md: MarkdownIt) {
  const orig = md.renderer.rules.fence;
  // custom renderer for fences
  md.renderer.rules.fence = function(tokens, idx, options, env, slf) {
    const rendered: string = orig?.call(this, tokens, idx, options, env, slf) ?? '';
    const token = tokens[idx];
    const hasMoreThan1Line = rendered.split('\n').map(x => x.trim()).filter(Boolean).length > 1;
    const actions = ['copy', hasMoreThan1Line && 'wrap'].filter(x => !!x);
    const [lang, block, ...rest] = token.info.split(/\s+/);
    const info = `${lang} ${rest.join(' ')}`;
    if (block?.replaceAll('-', '') === 'rhcodeblock') {
      const redactedToken = Object.assign(token, { info });
      return html`
        <rh-code-block full-height
                       dedent
                       actions="${actions.join(' ')}"
                       highlighting="prerendered"
                       ${slf.renderAttrs(redactedToken)}>
          <span slot="action-label-copy">Copy to Clipboard</span>
          <span slot="action-label-copy" hidden="" data-code-block-state="active">Copied!</span>
          ${!hasMoreThan1Line ? '' : html`
            <span slot="action-label-wrap">Toggle word wrap</span>
            <span slot="action-label-wrap" hidden="" data-code-block-state="active">Toggle overflow</span>
          `}
          ${rendered}
        </rh-code-block>`.trim();
    } else {
      return rendered;
    }
  };
}

export default function(eleventyConfig: UserConfig) {
  eleventyConfig.amendLibrary('md', md => md
      .set({ html: true, breaks: false })
      .use(markdownItAnchor, { permalink: rhdsPermalink() })
      .use(markdownItFootnote)
      .use(markdownItAttrs)
      .use(rhdsCodeBlock));
};
