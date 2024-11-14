/**
* @param {import("../prism.js").Prism} Prism
* @param {import("../prism.js").LoaderOptions} [options]
*/
export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true && Prism.languages['bqn']) {
      return
    }
	Prism.languages.bqn = {
		'shebang': {
			pattern: /^#![ \t]*\/.*/,
			alias: 'important',
			greedy: true
		},
		'comment': {
			pattern: /#.*/,
			greedy: true
		},
		'string-literal': {
			pattern: /"(?:[^"]|"")*"/,
			greedy: true,
			alias: 'string'
		},
		'character-literal': {
			pattern: /'(?:[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])'/,
			greedy: true,
			alias: 'char'
		},
		'function': /•[\w¯.∞π]+[\w¯.∞π]*/,
		'dot-notation-on-brackets': {
			pattern: /\{(?=.*\}\.)|\}\./,
			alias: 'namespace'
		},
		'special-name': {
			pattern: /(?:𝕨|𝕩|𝕗|𝕘|𝕤|𝕣|𝕎|𝕏|𝔽|𝔾|𝕊|_𝕣_|_𝕣)/,
			alias: 'keyword'
		},
		'dot-notation-on-name': {
			pattern: /[A-Za-z_][\w¯∞π]*\./,
			alias: 'namespace'
		},
		'word-number-scientific': {
			pattern: /\d+(?:\.\d+)?[eE]¯?\d+/,
			alias: 'number'
		},
		'word-name': {
			pattern: /[A-Za-z_][\w¯∞π]*/,
			alias: 'symbol'
		},
		'word-number': {
			pattern: /[¯∞π]?(?:\d*\.?\b\d+(?:e[+¯]?\d+|E[+¯]?\d+)?|¯|∞|π)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+|E[+¯]?\d+)?|¯|∞|π))?/,
			alias: 'number'
		},
		'null-literal': {
			pattern: /@/,
			alias: 'char'
		},
		'primitive-functions': {
			pattern: /[-+×÷⋆√⌊⌈|¬∧∨<>≠=≤≥≡≢⊣⊢⥊∾≍⋈↑↓↕«»⌽⍉/⍋⍒⊏⊑⊐⊒∊⍷⊔!]/,
			alias: 'operator'
		},
		'primitive-1-operators': {
			pattern: /[`˜˘¨⁼⌜´˝˙]/,
			alias: 'operator'
		},
		'primitive-2-operators': {
			pattern: /[∘⊸⟜○⌾⎉⚇⍟⊘◶⎊]/,
			alias: 'operator'
		},
		'punctuation': /[←⇐↩(){}⟨⟩[\]‿·⋄,.;:?]/
	};
}