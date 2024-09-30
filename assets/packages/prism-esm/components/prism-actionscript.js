import { loader as javascriptLoader } from "./prism-javascript.js"

/**
* @param {import("../prism.js").Prism} Prism
* @param {import("../prism.js").LoaderOptions} [options]
*/
export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true && Prism.languages['actionscript']) {
      return
    }
	if (!Prism.languages.javascript) {
		javascriptLoader(Prism)
	}
	Prism.languages.actionscript = Prism.languages.extend('javascript', {
		'keyword': /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
		'operator': /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
	});
	Prism.languages.actionscript['class-name'].alias = 'function';

	// doesn't work with AS because AS is too complex
	delete Prism.languages.actionscript['parameter'];
	delete Prism.languages.actionscript['literal-property'];

	if (Prism.languages.markup) {
		Prism.languages.insertBefore('actionscript', 'string', {
			'xml': {
				pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
				lookbehind: true,
				inside: Prism.languages.markup
			}
		});
	}
}