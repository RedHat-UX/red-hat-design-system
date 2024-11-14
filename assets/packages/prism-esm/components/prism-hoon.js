/**
* @param {import("../prism.js").Prism} Prism
* @param {import("../prism.js").LoaderOptions} [options]
*/
export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true && Prism.languages['hoon']) {
      return
    }
	Prism.languages.hoon = {
		'comment': {
			pattern: /::.*/,
			greedy: true
		},
		'string': {
			pattern: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/,
			greedy: true
		},
		'constant': /%(?:\.[ny]|[\w-]+)/,
		'class-name': /@(?:[a-z0-9-]*[a-z0-9])?|\*/i,
		'function': /(?:\+[-+] {2})?(?:[a-z](?:[a-z0-9-]*[a-z0-9])?)/,
		'keyword': /\.[\^\+\*=\?]|![><:\.=\?!]|=[>|:,\.\-\^<+;/~\*\?]|\?[>|:\.\-\^<\+&~=@!]|\|[\$_%:\.\-\^~\*=@\?]|\+[|\$\+\*]|:[_\-\^\+~\*]|%[_:\.\-\^\+~\*=]|\^[|:\.\-\+&~\*=\?]|\$[|_%:<>\-\^&~@=\?]|;[:<\+;\/~\*=]|~[>|\$_%<\+\/&=\?!]|--|==/
	};
}