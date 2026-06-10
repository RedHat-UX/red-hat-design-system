import type MarkdownIt from 'markdown-it';
import type State from 'markdown-it/lib/rules_core/state_core.mjs';
import type { UserConfig } from '@11ty/eleventy';
import anchor from 'markdown-it-anchor';
import attrs from 'markdown-it-attrs';
import footnote from 'markdown-it-footnote';
import deflist from 'markdown-it-deflist';
import captions from 'markdown-it-table-captions';

/* eslint-disable lit-a11y/anchor-is-valid */
/* eslint-disable lit-a11y/accessible-name */

const { makePermalink } = anchor.permalink as unknown as {
  makePermalink(callback: (
    slug: string,
    opts: anchor.PermalinkOptions,
    anchorOptions: anchor.AnchorOptions,
    state: State,
    idx: number,
  ) => void): () => anchor.PermalinkGenerator;
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

const ALERT_TYPE_MAP: Record<string, string> = {
  NOTE: 'info',
  TIP: 'success',
  WARNING: 'warning',
  CAUTION: 'caution',
  IMPORTANT: 'danger',
};

const ALERT_RE = /^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\n?/;

function rhdsGitHubAlerts(md: MarkdownIt) {
  const orig = md.renderer.rules.blockquote_open;
  const origClose = md.renderer.rules.blockquote_close;

  md.core.ruler.after('block', 'github_alerts', (state: State) => {
    const { tokens } = state;
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type !== 'blockquote_open') {
        continue;
      }
      const inner = tokens[i + 1];
      if (inner?.type !== 'paragraph_open') {
        continue;
      }
      const inline = tokens[i + 2];
      if (inline?.type !== 'inline' || !inline.content) {
        continue;
      }
      const match = inline.content.match(ALERT_RE);
      if (!match) {
        continue;
      }
      const [, alertType] = match;
      const state_ = ALERT_TYPE_MAP[alertType] ?? 'info';
      const body = inline.content.slice(match[0].length).trim();

      let closeIdx = -1;
      for (const [j, t] of tokens.slice(i + 1).entries()) {
        if (t.type === 'blockquote_close') {
          closeIdx = i + 1 + j;
          break;
        }
      }
      if (closeIdx === -1) {
        continue;
      }

      tokens[i] = Object.assign(new state.Token('html_block', '', 0), {
        content: `<rh-alert state="${state_}">\n  <h4 slot="header">${alertType.charAt(0) + alertType.slice(1).toLowerCase()}</h4>\n`,
      });

      if (body) {
        inline.content = body;
      } else {
        tokens.splice(i + 1, 2);
        closeIdx -= 2;
      }

      tokens[closeIdx] = Object.assign(new state.Token('html_block', '', 0), {
        content: '</rh-alert>\n',
      });
    }
  });
}

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
    const normalized = block?.replaceAll('-', '');
    if (normalized?.endsWith('codeblock')) {
      const redactedToken = Object.assign(token, { info });
      return html`
        <rh-code-block ${normalized.startsWith('rh' ) ? 'full-height' : ''}
                       dedent
                       actions="${actions.join(' ')}"
                       highlighting="prerendered"
                       ${slf.renderAttrs(redactedToken)}>${rendered}</rh-code-block>`.trim();
    } else {
      return rendered;
    }
  };
}

export default function(eleventyConfig: UserConfig) {
  eleventyConfig.amendLibrary('md', md => md
      .set({ html: true, breaks: false })
      .use(anchor, { permalink: rhdsPermalink() })
      .use(footnote)
      .use(deflist)
      .use(captions)
      .use(attrs)
      .use(rhdsGitHubAlerts)
      .use(rhdsCodeBlock));
};
