import { loader as markupLoader } from "./prism-markup.js"

/**
* @param {import("../prism.js").Prism} Prism
* @param {import("../prism.js").LoaderOptions} [options]
*/
export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true && Prism.languages['wiki']) {
      return
    }
	if (!Prism.languages.markup) {
		markupLoader(Prism)
	}
	Prism.languages.wiki = Prism.languages.extend('markup', {
		'block-comment': {
			pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
			lookbehind: true,
			alias: 'comment'
		},
		'heading': {
			pattern: /^(=+)[^=\r\n].*?\1/m,
			inside: {
				'punctuation': /^=+|=+$/,
				'important': /.+/
			}
		},
		'emphasis': {
			// TODO Multi-line
			pattern: /('{2,5}).+?\1/,
			inside: {
				'bold-italic': {
					pattern: /(''''').+?(?=\1)/,
					lookbehind: true,
					alias: ['bold', 'italic']
				},
				'bold': {
					pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
					lookbehind: true
				},
				'italic': {
					pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
					lookbehind: true
				},
				'punctuation': /^''+|''+$/
			}
		},
		'hr': {
			pattern: /^-{4,}/m,
			alias: 'punctuation'
		},
		'url': [
			/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:PMID|RFC) +\d+/i,
			/\[\[.+?\]\]|\[.+?\]/
		],
		'variable': [
			/__[A-Z]+__/,
			// FIXME Nested structures should be handled
			// {{formatnum:{{#expr:{{{3}}}}}}}
			/\{{3}.+?\}{3}/,
			/\{\{.+?\}\}/
		],
		'symbol': [
			/^#redirect/im,
			/~{3,5}/
		],
		// Handle table attrs:
		// {|
		// ! style="text-align:left;"| Item
		// |}
		'table-tag': {
			pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
			lookbehind: true,
			inside: {
				'table-bar': {
					pattern: /\|$/,
					alias: 'punctuation'
				},
				rest: Prism.languages.markup['tag'].inside
			}
		},
		'punctuation': /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
	});

	Prism.languages.insertBefore('wiki', 'tag', {
		// Prevent highlighting inside <nowiki>, <source> and <pre> tags
		'nowiki': {
			pattern: /<(nowiki|pre|source)\b[^>]*>[\s\S]*?<\/\1>/i,
			inside: {
				'tag': {
					pattern: /<(?:nowiki|pre|source)\b[^>]*>|<\/(?:nowiki|pre|source)>/i,
					inside: Prism.languages.markup['tag'].inside
				}
			}
		}
	});
}