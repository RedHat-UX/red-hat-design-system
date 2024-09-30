/**
* @param {import("../prism.js").Prism} Prism
* @param {import("../prism.js").LoaderOptions} [options]
*/
export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true && Prism.languages['json']) {
      return
    }
	// https://www.json.org/json-en.html
	Prism.languages.json = {
		'property': {
			pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
			lookbehind: true,
			greedy: true
		},
		'string': {
			pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
			lookbehind: true,
			greedy: true
		},
		'comment': {
			pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
			greedy: true
		},
		'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
		'punctuation': /[{}[\],]/,
		'operator': /:/,
		'boolean': /\b(?:false|true)\b/,
		'null': {
			pattern: /\bnull\b/,
			alias: 'keyword'
		}
	};

	Prism.languages.webmanifest = Prism.languages.json;
}