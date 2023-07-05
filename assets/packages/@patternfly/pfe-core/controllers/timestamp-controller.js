const defaults = {
    dateFormat: undefined,
    timeFormat: undefined,
    customFormat: undefined,
    displaySuffix: '',
    locale: undefined,
    relative: false,
    utc: false,
    hour12: false,
};
export class TimestampController {
    static #isTimestampOptionKey(prop) {
        return prop in defaults;
    }
    #date = new Date();
    #options = {};
    #host;
    get localeString() {
        return this.#date.toLocaleString(this.#options.locale);
    }
    get date() {
        return this.#date;
    }
    set date(string) {
        this.#date = new Date(string);
    }
    get isoString() {
        return this.#date.toISOString();
    }
    get time() {
        if (this.#options.relative) {
            return this.#getTimeRelative();
        }
        else {
            let { displaySuffix, locale } = this.#options;
            if (this.#options.utc) {
                displaySuffix ||= 'UTC';
            }
            const localeString = this.#date.toLocaleString(locale, this.#options.customFormat ?? {
                hour12: this.#options.hour12,
                timeStyle: this.#options.timeFormat,
                dateStyle: this.#options.dateFormat,
                ...this.#options.utc && { timeZone: 'UTC' },
            });
            return `${localeString} ${displaySuffix ?? ''}`.trim();
        }
    }
    constructor(host, options) {
        this.#host = host;
        host.addController(this);
        for (const [name, value] of Object.entries(this.#options)) {
            // @ts-expect-error: seems typescript compiler isn't up to the task here
            this.#options[name] = options?.[name] ?? value;
        }
    }
    /**
     * Based off of Github Relative Time
     * https://github.com/github/time-elements/blob/master/src/relative-time.js
     */
    #getTimeRelative() {
        const date = this.#date;
        const { locale } = this.#options;
        const rtf = new Intl.RelativeTimeFormat(locale, { localeMatcher: 'best fit', numeric: 'auto', style: 'long' });
        const ms = date.getTime() - Date.now();
        const tense = ms > 0 ? 1 : -1;
        let qty = 0;
        let units;
        const s = Math.round(Math.abs(ms) / 1000);
        const min = Math.round(s / 60);
        const h = Math.round(min / 60);
        const d = Math.round(h / 24);
        const m = Math.round(d / 30);
        const y = Math.round(m / 12);
        if (m >= 12) {
            qty = y;
            units = 'year';
        }
        else if (d >= 30) {
            qty = m;
            units = 'month';
        }
        else if (h >= 24) {
            qty = d;
            units = 'day';
        }
        else if (min >= 45) {
            qty = h;
            units = 'hour';
        }
        else if (s >= 45) {
            qty = min;
            units = 'minute';
        }
        else if (s >= 10) {
            qty = s;
            units = 'second';
        }
        return typeof (units) !== 'undefined' ? rtf.format(tense * qty, units) : 'just now';
    }
    set(prop, value) {
        if (TimestampController.#isTimestampOptionKey(prop)) {
            // @ts-expect-error: seems typescript compiler isn't up to the task here
            this.#options[prop] = value;
            this.#host.requestUpdate();
        }
    }
}
//# sourceMappingURL=timestamp-controller.js.map