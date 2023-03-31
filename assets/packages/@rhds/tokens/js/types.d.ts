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
