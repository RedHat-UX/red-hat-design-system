/**
* @param {import("../prism.js").Prism} Prism
* @param {import("../prism.js").LoaderOptions} [options]
*/
export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true && Prism.languages['editorconfig']) {
      return
    }
	Prism.languages.editorconfig = {
		// https://editorconfig-specification.readthedocs.io
		'comment': /[;#].*/,
		'section': {
			pattern: /(^[ \t]*)\[.+\]/m,
			lookbehind: true,
			alias: 'selector',
			inside: {
				'regex': /\\\\[\[\]{},!?.*]/, // Escape special characters with '\\'
				'operator': /[!?]|\.\.|\*{1,2}/,
				'punctuation': /[\[\]{},]/
			}
		},
		'key': {
			pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,
			lookbehind: true,
			alias: 'attr-name'
		},
		'value': {
			pattern: /=.*/,
			alias: 'attr-value',
			inside: {
				'punctuation': /^=/
			}
		}
	};
}