/**
* @param {import("../prism.js").Prism} Prism
* @param {import("../prism.js").LoaderOptions} [options]
*/
export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true && Prism.languages['hpkp']) {
      return
    }
	/**
 	* Original by Scott Helme.
 	*
 	* Reference: https://scotthelme.co.uk/hpkp-cheat-sheet/
 	*/

	Prism.languages.hpkp = {
		'directive': {
			pattern: /\b(?:includeSubDomains|max-age|pin-sha256|preload|report-to|report-uri|strict)(?=[\s;=]|$)/i,
			alias: 'property'
		},
		'operator': /=/,
		'punctuation': /;/
	};
}