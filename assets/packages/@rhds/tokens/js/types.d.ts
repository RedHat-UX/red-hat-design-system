export interface Color {
    isLight: boolean;
    hex: string;
    rgb: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    hsl: {
        h: number;
        s: number;
        l: number;
        a: number;
    };
    hsv: {
        h: number;
        s: number;
        v: number;
        a: number;
    };
}
export interface DesignToken {
    value?: any;
    $value?: any;
    type?: string;
    $type?: string;
    $description?: string;
    name?: string;
    comment?: string;
    themeable?: boolean;
    attributes?: Record<string, unknown>;
    [key: string]: any;
}
export type DesignTokensMap = Map<`--rh-${string}`, DesignToken>;
export type ValuesMap = Map<`--rh-${string}`, string | number>;
