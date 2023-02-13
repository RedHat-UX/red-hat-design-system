import { Logger } from '../controllers/logger.js';
/**
 * Aliases the decorated field to an existing property, and logs a warning if it is used
 * @example deprecating an attribute
 * ```ts
 * @property({ reflect: true, attribute: 'color-palette'})
 * colorPalette: ColorPalette = 'base';
 *
 * @deprecation('colorPalette') color?: ColorPalette;
 * ```
 */
export function deprecation(options) {
    return function (proto, key) {
        const { alias, ...deprecationOptions } = options;
        const klass = proto.constructor;
        const declaration = klass.getPropertyOptions(alias);
        klass.createProperty(key, { ...declaration, ...deprecationOptions });
        klass.addInitializer(instance => {
            instance.addController(new Deprecation(instance, options, key));
        });
    };
}
class Deprecation {
    constructor(host, options, deprecatedKey) {
        this.host = host;
        this.options = options;
        this.deprecatedKey = deprecatedKey;
        this.logged = false;
        this.logger = new Logger(host);
    }
    hostUpdate() {
        const { deprecatedKey, options: { alias } } = this;
        if (this.host[deprecatedKey]) {
            if (this.host[alias] !== this.host[deprecatedKey]) {
                if (!this.logged) {
                    this.logger.warn(`${deprecatedKey} is deprecated, use ${alias} instead`);
                    this.logged = true;
                }
                this.host[alias] = this.host[deprecatedKey];
            }
        }
    }
}
//# sourceMappingURL=deprecation.js.map