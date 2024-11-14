/**
* @param {import("../prism.js").Prism} Prism
* @param {import("../prism.js").LoaderOptions} [options]
*/
export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true && Prism.languages['go-module']) {
      return
    }
	// https://go.dev/ref/mod#go-mod-file-module

	Prism.languages['go-mod'] = Prism.languages['go-module'] = {
		'comment': {
			pattern: /\/\/.*/,
			greedy: true
		},
		'version': {
			pattern: /(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,
			lookbehind: true,
			alias: 'number'
		},
		'go-version': {
			pattern: /((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,
			lookbehind: true,
			alias: 'number'
		},
		'keyword': {
			pattern: /^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,
			lookbehind: true
		},
		'operator': /=>/,
		'punctuation': /[()[\],]/
	};
}