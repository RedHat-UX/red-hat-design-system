/**
 * Do not edit directly, this file was auto-generated.
 *
 * @license Copyright (c) 2022 Red Hat UX MIT License
 */
import { css } from 'lit';
export default css `
:host {
  --rh-animation-speed: 0.3s;
  --rh-animation-timing: cubic-bezier(0.465, 0.183, 0.153, 0.946);
  /* 1px border width; Example: Secondary CTA or Button */
  --rh-border-width-sm: 1px;
  /* 2px border width: Example: Alert */
  --rh-border-width-md: 2px;
  /* 3px border width: Example: Expanded Accordion panel */
  --rh-border-width-lg: 3px;
  /* Border radius reset */
  --rh-border-radius-sharp: 0.0px;
  /* 3px border radius; Example: Card */
  --rh-border-radius-default: 3px;
  /* Pill border radius; Example: Label */
  --rh-border-radius-pill: 64px;
  /* Mobile portrait (max-width) */
  --rh-breakpoint-2xs-max: 575px;
  /* Mobile portrait */
  --rh-breakpoint-xs: 576px;
  /* Mobile landscape (max-width) */
  --rh-breakpoint-xs-max: 767px;
  /* Mobile landscape */
  --rh-breakpoint-sm: 768px;
  /* Mobile landscape (max-width) */
  --rh-breakpoint-sm-max: 991px;
  /* Tablet portrait */
  --rh-breakpoint-md: 992px;
  /* Tablet portrait (max-width) */
  --rh-breakpoint-md-max: 1199px;
  /* Tablet landscape */
  --rh-breakpoint-lg: 1200px;
  /* Tablet landscape (max-width) */
  --rh-breakpoint-lg-max: 1439px;
  /* Desktop small */
  --rh-breakpoint-xl: 1440px;
  /* Desktop small (max-width) */
  --rh-breakpoint-xl-max: 1679px;
  /* Desktop large */
  --rh-breakpoint-2xl: 1680px;
  /* Inline link (light theme) */
  --rh-color-accent-base-on-light: #0066cc;
  /* Inline link (dark theme) */
  --rh-color-accent-base-on-dark: #92c5f9;
  /* Brand red (light theme) */
  --rh-color-accent-brand-on-light: #ee0000;
  /* Brand red (dark theme) */
  --rh-color-accent-brand-on-dark: #ee0000;
  /* Strong border color (light theme) */
  --rh-color-border-strong-on-light: #151515;
  /* Strong border color (dark theme) */
  --rh-color-border-strong-on-dark: #ffffff;
  /* Subtle border color (light theme) */
  --rh-color-border-subtle-on-light: #c7c7c7;
  /* Subtle border color (dark theme) */
  --rh-color-border-subtle-on-dark: #707070;
  /* Interactive border color (light theme) */
  --rh-color-border-interactive-on-light: #0066cc;
  /* Interactive border color (dark theme) */
  --rh-color-border-interactive-on-dark: #92c5f9;
  /* Destructive border color (light theme) */
  --rh-color-border-destructive-on-light: #b1380b;
  /* Destructive border color (dark theme) */
  --rh-color-border-destructive-on-dark: #f0561d;
  /* Danger border color (light theme) */
  --rh-color-border-status-danger-on-light: #b1380b;
  /* Danger border color (dark theme) */
  --rh-color-border-status-danger-on-dark: #f0561d;
  /* Caution border color (light theme) */
  --rh-color-border-status-caution-on-light: #ca6c0f;
  /* Caution border color (dark theme) */
  --rh-color-border-status-caution-on-dark: #f5921b;
  /* Warning border color (light theme) */
  --rh-color-border-status-warning-on-light: #dca614;
  /* Warning border color (dark theme) */
  --rh-color-border-status-warning-on-dark: #ffcc17;
  /* Neutral border color (light theme) */
  --rh-color-border-status-neutral-on-light: #4d4d4d;
  /* Neutral border color (dark theme) */
  --rh-color-border-status-neutral-on-dark: #c7c7c7;
  /* Info border color (light theme) */
  --rh-color-border-status-info-on-light: #5e40be;
  /* Info border color (dark theme) */
  --rh-color-border-status-info-on-dark: #b6a6e9;
  /* Success border color (light theme) */
  --rh-color-border-status-success-on-light: #3d7317;
  /* Success border color (dark theme) */
  --rh-color-border-status-success-on-dark: #87bb62;
  /* Brand red on light background */
  --rh-color-brand-red-on-light: #ee0000;
  /* Brand red on dark background */
  --rh-color-brand-red-on-dark: #ee0000;
  /* Lightest brand red */
  --rh-color-brand-red-lightest: #fbc5c5;
  /* lighter brand red */
  --rh-color-brand-red-lighter: #f9a8a8;
  /* Light brand red */
  --rh-color-brand-red-light: #f56e6e;
  /* Dark brand red/Brand red hover */
  --rh-color-brand-red-dark: #a60000;
  /* Darker brand red */
  --rh-color-brand-red-darker: #5f0000;
  /* Darkest brand red */
  --rh-color-brand-red-darkest: #5f0000;
  /* Alert - success background */
  --rh-color-green-10: #e9f7df;
  /* Label - Filled (Green) border color */
  --rh-color-green-20: #d1f1bb;
  --rh-color-green-30: #afdc8f;
  --rh-color-green-40: #87bb62;
  --rh-color-green-50: #63993d;
  /* Alert - Success accent */
  --rh-color-green-60: #3d7317;
  /* Alert - Success title text */
  --rh-color-green-70: #204d00;
  --rh-color-green-10-hsl: 95.00000000000003 60.00000000000004% 92.15686274509804%;
  --rh-color-green-10-rgb: 233 247 223;
  --rh-color-green-20-hsl: 95.55555555555556 65.85365853658536% 83.92156862745097%;
  --rh-color-green-20-rgb: 209 241 187;
  --rh-color-green-30-hsl: 95.06493506493506 52.380952380952394% 71.17647058823529%;
  --rh-color-green-30-rgb: 175 220 143;
  --rh-color-green-40-hsl: 95.05617977528091 39.55555555555555% 55.88235294117647%;
  --rh-color-green-40-rgb: 135 187 98;
  --rh-color-green-50-hsl: 95.21739130434783 42.99065420560747% 41.96078431372549%;
  --rh-color-green-50-rgb: 99 153 61;
  --rh-color-green-60-hsl: 95.21739130434783 66.66666666666667% 27.058823529411764%;
  --rh-color-green-60-rgb: 61 115 23;
  --rh-color-green-70-hsl: 95.06493506493506 100% 15.098039215686274%;
  --rh-color-green-70-rgb: 32 77 0;
  /* Label - Filled (Orange) background color */
  --rh-color-orange-10: #ffe8cc;
  --rh-color-orange-20: #fccb8f;
  /* Label - Filled (Orange) border color */
  --rh-color-orange-30: #f8ae54;
  /* Label - Filled (Orange) accent color */
  --rh-color-orange-40: #f5921b;
  /* Label - Filled (Orange) accent color */
  --rh-color-orange-50: #ca6c0f;
  --rh-color-orange-60: #9e4a06;
  /* Label - Filled (Orange) text color */
  --rh-color-orange-70: #732e00;
  --rh-color-orange-10-hsl: 32.941176470588225 100% 90%;
  --rh-color-orange-10-rgb: 255 232 204;
  --rh-color-orange-20-hsl: 33.02752293577981 94.78260869565219% 77.45098039215686%;
  --rh-color-orange-20-rgb: 252 203 143;
  --rh-color-orange-30-hsl: 32.926829268292686 92.13483146067415% 65.09803921568627%;
  --rh-color-orange-30-rgb: 248 174 84;
  --rh-color-orange-40-hsl: 32.752293577981646 91.5966386554622% 53.333333333333336%;
  --rh-color-orange-40-rgb: 245 146 27;
  --rh-color-orange-50-hsl: 29.83957219251337 86.17511520737327% 42.549019607843135%;
  --rh-color-orange-50-rgb: 202 108 15;
  --rh-color-orange-60-hsl: 26.842105263157904 92.68292682926828% 32.15686274509804%;
  --rh-color-orange-60-rgb: 158 74 6;
  --rh-color-orange-70-hsl: 24 100% 22.54901960784314%;
  --rh-color-orange-70-rgb: 115 46 0;
  --rh-color-icon-primary-on-light: #ee0000;
  --rh-color-icon-primary-on-dark: #ee0000;
  --rh-color-icon-secondary-on-light: #151515;
  --rh-color-icon-secondary-on-dark: #ffffff;
  --rh-color-icon-subtle: #707070;
  --rh-color-icon-subtle-hover: #a3a3a3;
  /* Danger status icon color (light theme) */
  --rh-color-icon-status-danger-on-light: #b1380b;
  /* Danger status icon color (dark theme) */
  --rh-color-icon-status-danger-on-dark: #f0561d;
  /* Caution status icon color (light theme) */
  --rh-color-icon-status-caution-on-light: #ca6c0f;
  /* Caution status icon color (dark theme) */
  --rh-color-icon-status-caution-on-dark: #f5921b;
  /* Warning status icon color (light theme) */
  --rh-color-icon-status-warning-on-light: #dca614;
  /* Warning status icon color (dark theme) */
  --rh-color-icon-status-warning-on-dark: #ffcc17;
  /* Default status icon color (light theme) */
  --rh-color-icon-status-default-on-light: #4d4d4d;
  /* Default status icon color (dark theme) */
  --rh-color-icon-status-default-on-dark: #4d4d4d;
  /* Neutral status icon color (light theme) */
  --rh-color-icon-status-neutral-on-light: #4d4d4d;
  /* Neutral status icon color (dark theme) */
  --rh-color-icon-status-neutral-on-dark: #c7c7c7;
  /* Info status icon color (light theme) */
  --rh-color-icon-status-info-on-light: #5e40be;
  /* Info status icon color (dark theme) */
  --rh-color-icon-status-info-on-dark: #b6a6e9;
  /* Success status icon color (light theme) */
  --rh-color-icon-status-success-on-light: #3d7317;
  /* Success status icon color (dark theme) */
  --rh-color-icon-status-success-on-dark: #87bb62;
  /* Primary canvas (light theme) */
  --rh-color-canvas-white: #ffffff;
  /* Primary canvas (dark theme) */
  --rh-color-canvas-black: #151515;
  --rh-color-canvas-white-hsl: 0 0% 100%;
  --rh-color-canvas-white-rgb: 255 255 255;
  --rh-color-canvas-black-hsl: 0 0% 0%;
  --rh-color-canvas-black-rgb: 0 0 0;
  /* Alert - Info background */
  --rh-color-blue-10: #e0f0ff;
  /* Label - Filled (Blue) border color */
  --rh-color-blue-20: #b9dafc;
  /* Inline link (dark theme) */
  --rh-color-blue-30: #92c5f9;
  /* Alert - Info accent */
  --rh-color-blue-40: #4394e5;
  /* Label - Filled (Blue) accent color */
  --rh-color-blue-50: #0066cc;
  /* Inline link hover (light theme) */
  --rh-color-blue-60: #004d99;
  /* Alert - Info title text */
  --rh-color-blue-70: #003366;
  --rh-color-blue-10-hsl: 209.03225806451616 100% 93.92156862745098%;
  --rh-color-blue-10-rgb: 224 240 255;
  --rh-color-blue-20-hsl: 210.44776119402988 91.78082191780825% 85.68627450980392%;
  --rh-color-blue-20-rgb: 185 218 252;
  --rh-color-blue-30-hsl: 210.29126213592232 89.56521739130436% 77.45098039215685%;
  --rh-color-blue-30-rgb: 146 197 249;
  --rh-color-blue-40-hsl: 210 75.70093457943923% 58.03921568627452%;
  --rh-color-blue-40-rgb: 67 148 229;
  --rh-color-blue-50-hsl: 210 100% 40%;
  --rh-color-blue-50-rgb: 0 102 204;
  --rh-color-blue-60-hsl: 209.80392156862746 100% 30%;
  --rh-color-blue-60-rgb: 0 77 153;
  --rh-color-blue-70-hsl: 210 100% 20%;
  --rh-color-blue-70-rgb: 0 51 102;
  /* Lightest surface (light theme) or primary text (dark theme) */
  --rh-color-white: #ffffff;
  /* Tertiary surface (light theme) */
  --rh-color-gray-10: #f2f2f2;
  /* Secondary surface (light theme) */
  --rh-color-gray-20: #e0e0e0;
  /* Subtle borders (light theme) */
  --rh-color-gray-30: #c7c7c7;
  /* Subtle icon (hover state) */
  --rh-color-gray-40: #a3a3a3;
  /* Subtle icon */
  --rh-color-gray-50: #707070;
  /* Secondary text (light theme) */
  --rh-color-gray-60: #4d4d4d;
  /* Tertiary surface (dark theme) */
  --rh-color-gray-70: #383838;
  /* Alternative tertiary surface (not available for use with context provider) */
  --rh-color-gray-80: #292929;
  /* Secondary surface (dark theme) */
  --rh-color-gray-90: #1f1f1f;
  /* Primary surface (dark theme) or primary text (light theme) */
  --rh-color-gray-95: #151515;
  --rh-color-gray-10-hsl: 0 0% 94.90196078431372%;
  --rh-color-gray-10-rgb: 242 242 242;
  --rh-color-gray-20-hsl: 0 0% 87.84313725490196%;
  --rh-color-gray-20-rgb: 224 224 224;
  --rh-color-gray-30-hsl: 0 0% 78.03921568627452%;
  --rh-color-gray-30-rgb: 199 199 199;
  --rh-color-gray-40-hsl: 0 0% 63.921568627450974%;
  --rh-color-gray-40-rgb: 163 163 163;
  --rh-color-gray-50-hsl: 0 0% 43.92156862745098%;
  --rh-color-gray-50-rgb: 112 112 112;
  --rh-color-gray-60-hsl: 0 0% 30.19607843137255%;
  --rh-color-gray-60-rgb: 77 77 77;
  --rh-color-gray-70-hsl: 0 0% 21.96078431372549%;
  --rh-color-gray-70-rgb: 56 56 56;
  --rh-color-gray-80-hsl: 0 0% 16.07843137254902%;
  --rh-color-gray-80-rgb: 41 41 41;
  --rh-color-gray-90-hsl: 0 0% 12.156862745098039%;
  --rh-color-gray-90-rgb: 31 31 31;
  --rh-color-gray-95-hsl: 0 0% 8.235294117647058%;
  --rh-color-gray-95-rgb: 21 21 21;
  /* Brand black (avoid using) */
  --rh-color-black: #000000;
  /* Label - Filled (Purple) background color */
  --rh-color-purple-10: #ece6ff;
  /* Inline link visited hover (dark theme) */
  --rh-color-purple-20: #d0c5f4;
  --rh-color-purple-30: #b6a6e9;
  /* Inline link visited (dark theme) */
  --rh-color-purple-40: #876fd4;
  --rh-color-purple-50: #5e40be;
  /* Inline link visited (light theme) */
  --rh-color-purple-60: #3d2785;
  /* Inline link visited hover (light theme) */
  --rh-color-purple-70: #21134d;
  --rh-color-purple-10-hsl: 254.4 100% 95.09803921568627%;
  --rh-color-purple-10-rgb: 236 230 255;
  --rh-color-purple-20-hsl: 254.0425531914893 68.11594202898556% 86.47058823529412%;
  --rh-color-purple-20-rgb: 208 197 244;
  --rh-color-purple-30-hsl: 254.32835820895522 60.36036036036033% 78.23529411764706%;
  --rh-color-purple-30-rgb: 182 166 233;
  --rh-color-purple-40-hsl: 254.25742574257427 54.010695187165794% 63.33333333333333%;
  --rh-color-purple-40-rgb: 135 111 212;
  --rh-color-purple-50-hsl: 254.2857142857143 49.60629921259843% 49.80392156862745%;
  --rh-color-purple-50-rgb: 94 64 190;
  --rh-color-purple-60-hsl: 254.0425531914894 54.65116279069767% 33.72549019607843%;
  --rh-color-purple-60-rgb: 61 39 133;
  --rh-color-purple-70-hsl: 254.48275862068965 60.416666666666664% 18.823529411764707%;
  --rh-color-purple-70-rgb: 33 19 77;
  --rh-color-red-orange-10: #ffe3d9;
  --rh-color-red-orange-20: #fbbea8;
  --rh-color-red-orange-30: #f89b78;
  --rh-color-red-orange-40: #f4784a;
  --rh-color-red-orange-50: #f0561d;
  --rh-color-red-orange-60: #b1380b;
  --rh-color-red-orange-70: #731f00;
  --rh-color-red-orange-10-hsl: 15.789473684210513 100% 92.54901960784314%;
  --rh-color-red-orange-10-rgb: 255 227 217;
  --rh-color-red-orange-20-hsl: 15.903614457831333 91.20879120879121% 82.15686274509804%;
  --rh-color-red-orange-20-rgb: 251 190 168;
  --rh-color-red-orange-30-hsl: 16.406249999999996 90.14084507042254% 72.15686274509804%;
  --rh-color-red-orange-30-rgb: 248 155 120;
  --rh-color-red-orange-40-hsl: 16.235294117647054 88.54166666666671% 62.35294117647059%;
  --rh-color-red-orange-40-rgb: 244 120 74;
  --rh-color-red-orange-50-hsl: 16.208530805687207 87.55186721991701% 52.74509803921569%;
  --rh-color-red-orange-50-rgb: 240 86 29;
  --rh-color-red-orange-60-hsl: 16.265060240963855 88.29787234042554% 36.86274509803921%;
  --rh-color-red-orange-60-rgb: 177 56 11;
  --rh-color-red-orange-70-hsl: 16.17391304347826 100% 22.54901960784314%;
  --rh-color-red-orange-70-rgb: 115 31 0;
  --rh-color-red-10: #fce3e3;
  /* Lightest brand red */
  --rh-color-red-20: #fbc5c5;
  /* Lighter brand red */
  --rh-color-red-30: #f9a8a8;
  /* Light brand red */
  --rh-color-red-40: #f56e6e;
  /* Brand red (light and dark theme) */
  --rh-color-red-50: #ee0000;
  /* Dark brand red */
  --rh-color-red-60: #a60000;
  /* Darker brand red */
  --rh-color-red-70: #5f0000;
  --rh-color-red-10-hsl: 0 80.64516129032265% 93.92156862745098%;
  --rh-color-red-10-rgb: 252 227 227;
  --rh-color-red-20-hsl: 0 87.09677419354838% 87.84313725490196%;
  --rh-color-red-20-rgb: 251 197 197;
  --rh-color-red-30-hsl: 0 87.0967741935484% 81.76470588235294%;
  --rh-color-red-30-rgb: 249 168 168;
  --rh-color-red-40-hsl: 0 87.09677419354841% 69.6078431372549%;
  --rh-color-red-40-rgb: 245 110 110;
  --rh-color-red-50-hsl: 0 100% 46.666666666666664%;
  --rh-color-red-50-rgb: 238 0 0;
  --rh-color-red-60-hsl: 0 100% 32.549019607843135%;
  --rh-color-red-60-rgb: 166 0 0;
  --rh-color-red-70-hsl: 0 100% 18.627450980392158%;
  --rh-color-red-70-rgb: 95 0 0;
  /* Alert - Default background */
  --rh-color-teal-10: #daf2f2;
  --rh-color-teal-20: #b9e5e5;
  /* Label (Cyan) border color */
  --rh-color-teal-30: #9ad8d8;
  --rh-color-teal-40: #63bdbd;
  /* Alert - Default accent */
  --rh-color-teal-50: #37a3a3;
  --rh-color-teal-60: #147878;
  /* Alert - Default title text */
  --rh-color-teal-70: #004d4d;
  --rh-color-teal-10-hsl: 180 47.99999999999998% 90.19607843137254%;
  --rh-color-teal-10-rgb: 218 242 242;
  --rh-color-teal-20-hsl: 180 45.833333333333336% 81.17647058823529%;
  --rh-color-teal-20-rgb: 185 229 229;
  --rh-color-teal-30-hsl: 180 44.28571428571429% 72.54901960784314%;
  --rh-color-teal-30-rgb: 154 216 216;
  --rh-color-teal-40-hsl: 180 40.54054054054054% 56.470588235294116%;
  --rh-color-teal-40-rgb: 99 189 189;
  --rh-color-teal-50-hsl: 180 49.54128440366972% 42.745098039215684%;
  --rh-color-teal-50-rgb: 55 163 163;
  --rh-color-teal-60-hsl: 180 71.42857142857142% 27.450980392156865%;
  --rh-color-teal-60-rgb: 20 120 120;
  --rh-color-teal-70-hsl: 180 100% 15.098039215686274%;
  --rh-color-teal-70-rgb: 0 77 77;
  /* Alert - Warning background */
  --rh-color-yellow-10: #fff4cc;
  --rh-color-yellow-20: #ffe072;
  --rh-color-yellow-30: #ffcc17;
  /* Alert - Warning accent */
  --rh-color-yellow-40: #dca614;
  --rh-color-yellow-50: #b98412;
  --rh-color-yellow-60: #96640f;
  /* Alert - Warning title text */
  --rh-color-yellow-70: #73480b;
  --rh-color-yellow-10-hsl: 47.058823529411775 100% 90%;
  --rh-color-yellow-10-rgb: 255 244 204;
  --rh-color-yellow-20-hsl: 46.80851063829787 100% 72.35294117647058%;
  --rh-color-yellow-20-rgb: 255 224 114;
  --rh-color-yellow-30-hsl: 46.81034482758621 100% 54.509803921568626%;
  --rh-color-yellow-30-rgb: 255 204 23;
  --rh-color-yellow-40-hsl: 43.79999999999999 83.33333333333334% 47.05882352941176%;
  --rh-color-yellow-40-rgb: 220 166 20;
  --rh-color-yellow-50-hsl: 40.95808383233534 82.26600985221675% 39.80392156862745%;
  --rh-color-yellow-50-rgb: 185 132 18;
  --rh-color-yellow-60-hsl: 37.77777777777777 81.81818181818181% 32.35294117647059%;
  --rh-color-yellow-60-rgb: 150 100 15;
  --rh-color-yellow-70-hsl: 35.192307692307686 82.53968253968253% 24.705882352941178%;
  --rh-color-yellow-70-rgb: 115 72 11;
  /* Primary interactive - default (Light theme) */
  --rh-color-interactive-primary-default-on-light: #0066cc;
  /* Primary interactive - default (Dark theme) */
  --rh-color-interactive-primary-default-on-dark: #92c5f9;
  /* Primary interactive - hover (Light theme) */
  --rh-color-interactive-primary-hover-on-light: #003366;
  /* Primary interactive - hover (Dark theme) */
  --rh-color-interactive-primary-hover-on-dark: #b9dafc;
  /* Primary interactive - active (Light theme) */
  --rh-color-interactive-primary-active-on-light: #003366;
  /* Primary interactive - active (Dark theme) */
  --rh-color-interactive-primary-active-on-dark: #b9dafc;
  /* Primary interactive - focus (Light theme) */
  --rh-color-interactive-primary-focus-on-light: #003366;
  /* Primary interactive - focus (Dark theme) */
  --rh-color-interactive-primary-focus-on-dark: #b9dafc;
  /* Primary interactive visited - default (Light theme) */
  --rh-color-interactive-primary-visited-default-on-light: #5e40be;
  /* Primary interactive visited - default (Dark theme) */
  --rh-color-interactive-primary-visited-default-on-dark: #b6a6e9;
  /* Primary interactive visited - hover (Light theme) */
  --rh-color-interactive-primary-visited-hover-on-light: #21134d;
  /* Primary interactive visited - hover (Dark theme) */
  --rh-color-interactive-primary-visited-hover-on-dark: #ece6ff;
  /* Primary interactive visited - active (Light theme) */
  --rh-color-interactive-primary-visited-active-on-light: #21134d;
  /* Primary interactive visited - active (Dark theme) */
  --rh-color-interactive-primary-visited-active-on-dark: #ece6ff;
  /* Primary interactive visited - focus (Light theme) */
  --rh-color-interactive-primary-visited-focus-on-light: #21134d;
  /* Primary interactive visited - focus (Dark theme) */
  --rh-color-interactive-primary-visited-focus-on-dark: #ece6ff;
  /* Secondary interactive - default (Light theme) */
  --rh-color-interactive-secondary-default-on-light: #4d4d4d;
  /* Secondary interactive - default (Dark theme) */
  --rh-color-interactive-secondary-default-on-dark: #c7c7c7;
  /* Secondary interactive - hover (Light theme) */
  --rh-color-interactive-secondary-hover-on-light: #4d4d4d;
  /* Secondary interactive - hover (Dark theme) */
  --rh-color-interactive-secondary-hover-on-dark: #c7c7c7;
  /* Secondary interactive - active (Light theme) */
  --rh-color-interactive-secondary-active-on-light: #4d4d4d;
  /* Secondary interactive - active (Dark theme) */
  --rh-color-interactive-secondary-active-on-dark: #c7c7c7;
  /* Secondary interactive - focus (Light theme) */
  --rh-color-interactive-secondary-focus-on-light: #4d4d4d;
  /* Secondary interactive - focus (Dark theme) */
  --rh-color-interactive-secondary-focus-on-dark: #c7c7c7;
  /* Secondary interactive visited - default (Light theme) */
  --rh-color-interactive-secondary-visited-default-on-light: #4d4d4d;
  /* Secondary interactive visited - default (Dark theme) */
  --rh-color-interactive-secondary-visited-default-on-dark: #c7c7c7;
  /* Secondary interactive visited - hover (Light theme) */
  --rh-color-interactive-secondary-visited-hover-on-light: #4d4d4d;
  /* Secondary interactive visited - hover (Dark theme) */
  --rh-color-interactive-secondary-visited-hover-on-dark: #c7c7c7;
  /* Secondary interactive visited - active (Light theme) */
  --rh-color-interactive-secondary-visited-active-on-light: #4d4d4d;
  /* Secondary interactive visited - active (Dark theme) */
  --rh-color-interactive-secondary-visited-active-on-dark: #c7c7c7;
  /* Secondary interactive visited - focus (Light theme) */
  --rh-color-interactive-secondary-visited-focus-on-light: #4d4d4d;
  /* Secondary interactive visited - focus (Dark theme) */
  --rh-color-interactive-secondary-visited-focus-on-dark: #c7c7c7;
  /* Inline link hover (dark theme) */
  --rh-color-interactive-blue-lightest: #b9dafc;
  /* Inline link (dark theme) */
  --rh-color-interactive-blue-lighter: #92c5f9;
  /* Inline link (light theme) */
  --rh-color-interactive-blue-darker: #0066cc;
  /* Inline link hover (light theme) */
  --rh-color-interactive-blue-darkest: #003366;
  /* Inline link visited hover (dark theme) */
  --rh-color-interactive-purple-lightest: #ece6ff;
  /* Inline link visited (dark theme) */
  --rh-color-interactive-purple-lighter: #b6a6e9;
  /* Inline link visited (light theme) */
  --rh-color-interactive-purple-darker: #5e40be;
  /* Inline link visited hover (light theme) */
  --rh-color-interactive-purple-darkest: #ece6ff;
  /* Danger status color (light theme) */
  --rh-color-status-danger-on-light: #b1380b;
  /* Danger status color (dark theme) */
  --rh-color-status-danger-on-dark: #f0561d;
  /* Caution status color (light theme) */
  --rh-color-status-caution-on-light: #ca6c0f;
  /* Caution status color (dark theme) */
  --rh-color-status-caution-on-dark: #f5921b;
  /* Warning status color (light theme) */
  --rh-color-status-warning-on-light: #dca614;
  /* Warning status color (dark theme) */
  --rh-color-status-warning-on-dark: #ffcc17;
  /* Neutral accent color (light theme) */
  --rh-color-status-neutral-on-light: #4d4d4d;
  /* Neutral accent color (dark theme) */
  --rh-color-status-neutral-on-dark: #c7c7c7;
  /* Note/tip status color (light theme) */
  --rh-color-status-note-on-light: #5e40be;
  /* Note/tip status color (dark theme) */
  --rh-color-status-note-on-dark: #b6a6e9;
  /* Info status color (light theme) */
  --rh-color-status-info-on-light: #5e40be;
  /* Info status color (dark theme) */
  --rh-color-status-info-on-dark: #b6a6e9;
  /* Success status color (light theme) */
  --rh-color-status-success-on-light: #3d7317;
  /* Success status color (dark theme) */
  --rh-color-status-success-on-dark: #87bb62;
  /* Primary surface (light theme) */
  --rh-color-surface-lightest: #ffffff;
  /* Tertiary surface (light theme) */
  --rh-color-surface-lighter: #f2f2f2;
  /* Secondary surface (light theme) */
  --rh-color-surface-light: #e0e0e0;
  /* Tertiary surface (dark theme) */
  --rh-color-surface-dark: #383838;
  /* Alternative tertiary surface (not available for use with context provider) */
  --rh-color-surface-dark-alt: #292929;
  /* Secondary surface (dark theme) */
  --rh-color-surface-darker: #1f1f1f;
  /* Primary surface (dark theme) */
  --rh-color-surface-darkest: #151515;
  /* Danger status surface color (light theme) */
  --rh-color-surface-status-danger-on-light: #ffe3d9;
  /* Danger status surface color (dark theme) */
  --rh-color-surface-status-danger-on-dark: #ffe3d9;
  /* Caution status surface color (light theme) */
  --rh-color-surface-status-caution-on-light: #ffe8cc;
  /* Caution status surface color (dark theme) */
  --rh-color-surface-status-caution-on-dark: #ffe8cc;
  /* Warning status surface color (light theme) */
  --rh-color-surface-status-warning-on-light: #fff4cc;
  /* Warning status surface color (dark theme) */
  --rh-color-surface-status-warning-on-dark: #73480b;
  /* Default status surface color (light theme) */
  --rh-color-surface-status-default-on-light: #f2f2f2;
  /* Default status surface color (dark theme) */
  --rh-color-surface-status-default-on-dark: #f2f2f2;
  /* Neutral status surface color (light theme) */
  --rh-color-surface-status-neutral-on-light: #f2f2f2;
  /* Neutral status surface color (dark theme) */
  --rh-color-surface-status-neutral-on-dark: #f2f2f2;
  /* Info status surface color (light theme) */
  --rh-color-surface-status-info-on-light: #ece6ff;
  /* Info status surface color (dark theme) */
  --rh-color-surface-status-info-on-dark: #ece6ff;
  /* Success status surface color (light theme) */
  --rh-color-surface-status-success-on-light: #e9f7df;
  /* Success status surface color (dark theme) */
  --rh-color-surface-status-success-on-dark: #e9f7df;
  /* Primary text color for light theme */
  --rh-color-text-primary-on-light: #151515;
  /* Primary text color for dark theme */
  --rh-color-text-primary-on-dark: #ffffff;
  /* Secondary text color for light theme */
  --rh-color-text-secondary-on-light: #4d4d4d;
  /* Secondary text color for dark theme */
  --rh-color-text-secondary-on-dark: #c7c7c7;
  /* Brand text color for light theme */
  --rh-color-text-brand-on-light: #ee0000;
  /* Brand text color for dark theme */
  --rh-color-text-brand-on-dark: #ee0000;
  --rh-color-white-hsl: 0 0% 100%;
  --rh-color-white-rgb: 255 255 255;
  --rh-color-black-hsl: 0 0% 0%;
  --rh-color-black-rgb: 0 0 0;
  /* Heading font family */
  --rh-font-family-heading: RedHatDisplay, 'Red Hat Display', 'Noto Sans Arabic', 'Noto Sans Hebrew', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans Malayalam', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans Thai', Helvetica, Arial, sans-serif;
  /* Body text font family */
  --rh-font-family-body-text: RedHatText, 'Red Hat Text', 'Noto Sans Arabic', 'Noto Sans Hebrew', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans Malayalam', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans Thai', Helvetica, Arial, sans-serif;
  /* Code font family */
  --rh-font-family-code: RedHatMono, 'Red Hat Mono', 'Courier New', Courier, monospace;
  /* 12px font size */
  --rh-font-size-body-text-xs: 0.75rem;
  /* 14px font size */
  --rh-font-size-body-text-sm: 0.875rem;
  /* 16px font size */
  --rh-font-size-body-text-md: 1rem;
  /* 18px font size */
  --rh-font-size-body-text-lg: 1.125rem;
  /* 20px font size */
  --rh-font-size-body-text-xl: 1.25rem;
  /* 24px font size */
  --rh-font-size-body-text-2xl: 1.5rem;
  /* 12px font size */
  --rh-font-size-code-xs: 0.75rem;
  /* 14px font size */
  --rh-font-size-code-sm: 0.875rem;
  /* 16px font size */
  --rh-font-size-code-md: 1rem;
  /* 18px font size */
  --rh-font-size-code-lg: 1.125rem;
  /* 20px font size */
  --rh-font-size-code-xl: 1.25rem;
  /* 24px font size */
  --rh-font-size-code-2xl: 1.5rem;
  /* h6 heading font size */
  --rh-font-size-heading-xs: 1.25rem;
  /* h5 heading font size */
  --rh-font-size-heading-sm: 1.5rem;
  /* h4 heading font size */
  --rh-font-size-heading-md: 1.75rem;
  /* h3 heading font size */
  --rh-font-size-heading-lg: 2.25rem;
  /* h2 heading font size */
  --rh-font-size-heading-xl: 2.5rem;
  /* h1 heading font size */
  --rh-font-size-heading-2xl: 3rem;
  /* Regular font weight */
  --rh-font-weight-body-text-regular: 400;
  /* Medium font weight */
  --rh-font-weight-body-text-medium: 500;
  /* Regular font weight */
  --rh-font-weight-code-regular: 400;
  /* Medium font weight */
  --rh-font-weight-code-medium: 500;
  /* Regular font weight for headings */
  --rh-font-weight-heading-regular: 300;
  /* Medium font weight for headings */
  --rh-font-weight-heading-medium: 500;
  /* Bold font weight for headings */
  --rh-font-weight-heading-bold: 700;
  /* Extra letter spacing for small body text sizes */
  --rh-letter-spacing-body-text: 0.0125rem;
  /* Line height for headings */
  --rh-line-height-heading: 1.3;
  /* Line height for body text */
  --rh-line-height-body-text: 1.5;
  /* Line height for code */
  --rh-line-height-code: 1.5;
  /* 16px icon box */
  --rh-size-icon-01: 16px;
  /* 24px icon box */
  --rh-size-icon-02: 24px;
  /* 32px icon box */
  --rh-size-icon-03: 32px;
  /* 40px icon box */
  --rh-size-icon-04: 40px;
  /* 48px icon box */
  --rh-size-icon-05: 48px;
  /* 64px icon box */
  --rh-size-icon-06: 64px;
  /* 80px icon box */
  --rh-size-icon-07: 80px;
  /* 96px icon box */
  --rh-size-icon-08: 96px;
  /* 128px icon box */
  --rh-size-icon-09: 128px;
  /* Mobile portrait */
  --rh-media-xs: (min-width: 576px);
  /* Mobile landscape */
  --rh-media-sm: (min-width: 768px);
  /* Tablet portrait */
  --rh-media-md: (min-width: 992px);
  /* Tablet landscape */
  --rh-media-lg: (min-width: 1200px);
  /* Desktop small */
  --rh-media-xl: (min-width: 1440px);
  /* Desktop Large */
  --rh-media-2xl: (min-width: 1680px);
  /* 0% opacity */
  --rh-opacity-0: 0%;
  /* 10% opacity */
  --rh-opacity-10: 10%;
  /* 20% opacity */
  --rh-opacity-20: 20%;
  /* 30% opacity */
  --rh-opacity-30: 30%;
  /* 40% opacity */
  --rh-opacity-40: 40%;
  /* 50% opacity */
  --rh-opacity-50: 50%;
  /* 60% opacity */
  --rh-opacity-60: 60%;
  /* 70% opacity */
  --rh-opacity-70: 70%;
  /* 80% opacity */
  --rh-opacity-80: 80%;
  /* 90% opacity */
  --rh-opacity-90: 90%;
  /* 100% opacity */
  --rh-opacity-100: 100%;
  /* Small box shadow */
  --rh-box-shadow-sm: 0 2px 4px 0 rgba(21, 21, 21, 0.2);
  /* Medium box shadow */
  --rh-box-shadow-md: 0 4px 6px 1px rgba(21, 21, 21, 0.25);
  /* Large box shadow */
  --rh-box-shadow-lg: 0 6px 8px 2px rgba(21, 21, 21, 0.3);
  /* Extra large box shadow */
  --rh-box-shadow-xl: 0 8px 24px 3px rgba(21, 21, 21, 0.35);
  /* 1px length token */
  --rh-length-4xs: 1px;
  /* 2px length token */
  --rh-length-3xs: 2px;
  /* 3px length token */
  --rh-length-2xs: 3px;
  /* 4px length token */
  --rh-length-xs: 4px;
  /* 6px length token */
  --rh-length-sm: 6px;
  /* 8px length token */
  --rh-length-md: 8px;
  /* 16px length token */
  --rh-length-lg: 16px;
  /* 24px length token */
  --rh-length-xl: 24px;
  /* 32px length token */
  --rh-length-2xl: 32px;
  /* 48px length token */
  --rh-length-3xl: 48px;
  /* 64px length token */
  --rh-length-4xl: 64px;
  /* 80px length token */
  --rh-length-5xl: 80px;
  /* 96px length token */
  --rh-length-6xl: 96px;
  /* 128px length token */
  --rh-length-7xl: 128px;
  /* 4px spacer */
  --rh-space-xs: 4px;
  /* 6px spacer */
  --rh-space-sm: 6px;
  /* 8px spacer */
  --rh-space-md: 8px;
  /* 16px spacer */
  --rh-space-lg: 16px;
  /* 24px spacer */
  --rh-space-xl: 24px;
  /* 32px spacer */
  --rh-space-2xl: 32px;
  /* 48px spacer */
  --rh-space-3xl: 48px;
  /* 64px spacer */
  --rh-space-4xl: 64px;
  /* 80px spacer */
  --rh-space-5xl: 80px;
  /* 96px spacer */
  --rh-space-6xl: 96px;
  /* 128px spacer */
  --rh-space-7xl: 128px;
}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQuY3NzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzZXQuY3NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQUMsZUFBZSxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTR0QjNDLENBQUMifQ==