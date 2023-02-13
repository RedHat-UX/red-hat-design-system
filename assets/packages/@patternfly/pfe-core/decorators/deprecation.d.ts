import type { ReactiveElement, PropertyDeclaration } from 'lit';
export type DeprecationDeclaration<K extends PropertyKey> = PropertyDeclaration & {
    alias: string & K;
    attribute: string;
};
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
export declare function deprecation<K extends PropertyKey>(options: DeprecationDeclaration<K>): <T extends ReactiveElement, L extends PropertyKey>(proto: Partial<Record<K | L, T>>, key: string & keyof T) => void;
