import {css} from 'lit';
export const styles = css`:host([on="dark"]) {
  --rh-tooltip__content--BackgroundColor: var(--rh-color-surface-lightest, #ffffff);
  --rh-tooltip__content--Color: var(--rh-color-black-900, #151515);
}

:host([position="left"]),
:host([position="right"]){
  --_rh-tooltip--TextAlignment: "start";
}

#tooltip {
  line-height: var(--rh-line-height-body-text, 1.5);
  max-width: var(--rh-tooltip--MaxWidth, 18.75rem);
  text-align: var(--_rh-tooltip--TextAlignment, center);
  padding:
    var(
      --rh-tooltip__content--PaddingTop,
      var(--rh-space-lg, 16px)
    )
    var(
      --rh-tooltip__content--PaddingRight,
      var(--rh-space-lg, 16px)
    )
    var(
      --rh-tooltip__content--PaddingBottom,
      var(--rh-space-lg, 16px)
    )
    var(
      --rh-tooltip__content--PaddingLeft,
      var(--rh-space-lg, 16px)
    );
  font-size:
    var(
      --rh-tooltip__content--FontSize,
      var(--rh-font-size-body-text-sm, 0.875rem)
    );
  box-shadow: var(--rh-box-shadow-sm, 0 2px 4px 0 rgba(21, 21, 21, 0.2));
  color:
    var(
      --rh-tooltip__content--Color,
      var(--rh-color-text-primary-on-dark, #ffffff)
    );
  background-color:
    var(
      --rh-tooltip__content--BackgroundColor,
      var(--rh-color-surface-darkest, #151515)
    );
}

#container {
  --_floating-arrow-size: var(--rh-tooltip__arrow--Width, 11px);
}

#tooltip:after {
  background-color:
    var(
      --rh-tooltip__content--BackgroundColor,
      var(--rh-color-surface-darkest, #151515)
    );
}
`;
export default styles;
