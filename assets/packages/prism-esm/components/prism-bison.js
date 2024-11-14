import { loader as cLoader } from "./prism-c.js"

/**
* @param {import("../prism.js").Prism} Prism
* @param {import("../prism.js").LoaderOptions} [options]
*/
export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true && Prism.languages['bison']) {
      return
    }
	if (!Prism.languages.c) {
		cLoader(Prism)
	}

	Prism.languages.bison = Prism.languages.extend('c', {});

	Prism.languages.insertBefore('bison', 'comment', {
		'bison': {
			// This should match all the beginning of the file
			// including the prologue(s), the bison declarations and
			// the grammar rules.
			pattern: /^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,
			inside: {
				'c': {
					// Allow for one level of nested braces
					pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
					inside: {
						'delimiter': {
							pattern: /^%?\{|%?\}$/,
							alias: 'punctuation'
						},
						'bison-variable': {
							pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
							alias: 'variable',
							inside: {
								'punctuation': /<|>/
							}
						},
						rest: Prism.languages.c
					}
				},
				'comment': Prism.languages.c.comment,
				'string': Prism.languages.c.string,
				'property': /\S+(?=:)/,
				'keyword': /%\w+/,
				'number': {
					pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
					lookbehind: true
				},
				'punctuation': /%[%?]|[|:;\[\]<>]/
			}
		}
	});
}