import { loader as clikeLoader } from "./prism-clike.js"

/**
* @param {import("../prism.js").Prism} Prism
* @param {import("../prism.js").LoaderOptions} [options]
*/
export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true && Prism.languages['processing']) {
      return
    }
	if (!Prism.languages.clike) {
		clikeLoader(Prism)
	}
	Prism.languages.processing = Prism.languages.extend('clike', {
		'keyword': /\b(?:break|case|catch|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
		// Spaces are allowed between function name and parenthesis
		'function': /\b\w+(?=\s*\()/,
		'operator': /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
	});

	Prism.languages.insertBefore('processing', 'number', {
		// Special case: XML is a type
		'constant': /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
		'type': {
			pattern: /\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,
			alias: 'class-name'
		}
	});
}