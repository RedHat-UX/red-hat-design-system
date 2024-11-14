/**
* @param {import("../prism.js").Prism} Prism
* @param {import("../prism.js").LoaderOptions} [options]
*/
export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true && Prism.languages['false']) {
      return
    }
	/**
	* Based on the manual by Wouter van Oortmerssen.
	*
	* @see {@link https://github.com/PrismJS/prism/issues/2801#issue-829717504}
	*/
	Prism.languages['false'] = {
		'comment': {
			pattern: /\{[^}]*\}/
		},
		'string': {
			pattern: /"[^"]*"/,
			greedy: true
		},
		'character-code': {
			pattern: /'(?:[^\r]|\r\n?)/,
			alias: 'number'
		},
		'assembler-code': {
			pattern: /\d+`/,
			alias: 'important'
		},
		'number': /\d+/,
		'operator': /[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,
		'punctuation': /\[|\]/,
		'variable': /[a-z]/,
		'non-standard': {
			pattern: /[()<BDO®]/,
			alias: 'bold'
		}
	};
}