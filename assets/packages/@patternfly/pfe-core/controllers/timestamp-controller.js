var _TimestampController_instances, _a, _TimestampController_isTimestampOptionKey, _TimestampController_date, _TimestampController_options, _TimestampController_host, _TimestampController_getTimeRelative;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
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
    get localeString() {
        return __classPrivateFieldGet(this, _TimestampController_date, "f").toLocaleString(__classPrivateFieldGet(this, _TimestampController_options, "f").locale);
    }
    get date() {
        return __classPrivateFieldGet(this, _TimestampController_date, "f");
    }
    set date(string) {
        __classPrivateFieldSet(this, _TimestampController_date, new Date(string), "f");
    }
    get isoString() {
        return __classPrivateFieldGet(this, _TimestampController_date, "f").toISOString();
    }
    get time() {
        if (__classPrivateFieldGet(this, _TimestampController_options, "f").relative) {
            return __classPrivateFieldGet(this, _TimestampController_instances, "m", _TimestampController_getTimeRelative).call(this);
        }
        else {
            let { displaySuffix } = __classPrivateFieldGet(this, _TimestampController_options, "f");
            const { locale } = __classPrivateFieldGet(this, _TimestampController_options, "f");
            if (__classPrivateFieldGet(this, _TimestampController_options, "f").utc) {
                displaySuffix || (displaySuffix = 'UTC');
            }
            const localeString = __classPrivateFieldGet(this, _TimestampController_date, "f").toLocaleString(locale, __classPrivateFieldGet(this, _TimestampController_options, "f").customFormat ?? {
                hour12: __classPrivateFieldGet(this, _TimestampController_options, "f").hour12,
                timeStyle: __classPrivateFieldGet(this, _TimestampController_options, "f").timeFormat,
                dateStyle: __classPrivateFieldGet(this, _TimestampController_options, "f").dateFormat,
                ...__classPrivateFieldGet(this, _TimestampController_options, "f").utc && { timeZone: 'UTC' },
            });
            return `${localeString} ${displaySuffix ?? ''}`.trim();
        }
    }
    constructor(host, options) {
        _TimestampController_instances.add(this);
        _TimestampController_date.set(this, new Date());
        _TimestampController_options.set(this, {});
        _TimestampController_host.set(this, void 0);
        __classPrivateFieldSet(this, _TimestampController_host, host, "f");
        host.addController(this);
        for (const [name, value] of Object.entries(__classPrivateFieldGet(this, _TimestampController_options, "f"))) {
            // @ts-expect-error: seems typescript compiler isn't up to the task here
            __classPrivateFieldGet(this, _TimestampController_options, "f")[name] = options?.[name] ?? value;
        }
    }
    set(prop, value) {
        if (__classPrivateFieldGet(_a, _a, "m", _TimestampController_isTimestampOptionKey).call(_a, prop)) {
            // @ts-expect-error: seems typescript compiler isn't up to the task here
            __classPrivateFieldGet(this, _TimestampController_options, "f")[prop] = value;
            __classPrivateFieldGet(this, _TimestampController_host, "f").requestUpdate();
        }
    }
}
_a = TimestampController, _TimestampController_date = new WeakMap(), _TimestampController_options = new WeakMap(), _TimestampController_host = new WeakMap(), _TimestampController_instances = new WeakSet(), _TimestampController_isTimestampOptionKey = function _TimestampController_isTimestampOptionKey(prop) {
    return prop in defaults;
}, _TimestampController_getTimeRelative = function _TimestampController_getTimeRelative() {
    const date = __classPrivateFieldGet(this, _TimestampController_date, "f");
    const { locale } = __classPrivateFieldGet(this, _TimestampController_options, "f");
    const rtf = new Intl.RelativeTimeFormat(locale, {
        localeMatcher: 'best fit',
        numeric: 'auto',
        style: 'long',
    });
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
};
//# sourceMappingURL=timestamp-controller.js.map