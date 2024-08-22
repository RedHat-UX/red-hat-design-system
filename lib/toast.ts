/**
 * Modified: Adam Argyle's Gui Challenges Toast
 * https://github.com/argyleink/gui-challenges/blob/main/toast/toast.js
 * Apache License https://github.com/argyleink/gui-challenges/blob/main/LICENSE
 */

import type { RhAlert } from '@rhds/elements/rh-alert/rh-alert';

interface ToastOptions {
  message: string;
  heading?: string;
  state?: RhAlert['state'];
}

class Toaster {
  static #node = document.createElement('section');
  static #template = document.createElement('template');
  static #styleSheet = new CSSStyleSheet();

  static {
    this.#template.innerHTML = `
      <rh-alert class="gui-toast"
                state="success"
                role="status"
                aria-live="polite">
        <h3 slot="header">Success</h3>
        <p class="text"></p>
      </rh-alert>
    `;

    this.#styleSheet.replaceSync(/* css*/`
      .gui-toast-group {
        position: fixed;
        z-index: 1;
        inset-block-start: var(--rh-space-lg, 16px);
        inset-inline-end: var(--rh-space-lg, 16px);;
        padding-block-end: var(--rh-space-4xl, 64px);

        display: grid;
        justify-items: center;
        justify-content: center;
        gap: var(--rh-space-lg, 16px);

        /* optimizations */
        pointer-events: none;
      }

      .gui-toast {
        --_duration: 3s;
        --_travel-distance: 0;

        pointer-events: all;
        will-change: transform;
        animation:
          fade-in .3s ease,
          slide-in .3s ease,
          fade-out .3s ease var(--_duration);

        @media (--motionOK) {
          --_travel-distance: var(--rh-space-4xl, 64px);
        }
      }

      @keyframes fade-in {
        from { opacity: 0 }
      }

      @keyframes fade-out {
        to { opacity: 0 }
      }

      @keyframes slide-in {
        from { transform: translateY(var(--_travel-distance, var(--rh-space-lg, 16px))) }
      }
    `);

    this.#node.classList.add('gui-toast-group');
    // TODO: possibly allow other roots
    document.adoptedStyleSheets = [...document.adoptedStyleSheets ?? [], this.#styleSheet];
    document.body.append(this.#node);
  }

  static #create({ message, heading, state }: Required<ToastOptions>): RhAlert {
    const node = this.#template.content.cloneNode(true) as RhAlert;
    node.querySelector<HTMLElement>('p.text')!.innerText = message;
    node.querySelector<HTMLElement>('[slot=header]')!.innerText = heading;
    node.state = state;
    return node;
  };

  static #add(toast: RhAlert) {
    const { matches: motionOK } = window.matchMedia('(prefers-reduced-motion: no-preference)');
    if (this.#node.children.length && motionOK) {
      this.#flip(toast);
    } else {
      this.#node.appendChild(toast);
    }
  };

  static #remove(toast: RhAlert) {
    this.#node.removeChild(toast);
  }

  /**
   * @see *https://aerotwist.com/blog/flip-your-animations/
   * @param toast
   */
  static #flip(toast: RhAlert) {
  // FIRST
    const first = this.#node.offsetHeight;

    // add new child to change container size
    this.#node.appendChild(toast);

    // LAST
    const last = this.#node.offsetHeight;

    // INVERT
    const invert = last - first;

    // PLAY
    const animation = this.#node.animate([
      { transform: `translateY(${invert}px)` },
      { transform: 'translateY(0)' },
    ], {
      duration: 150,
      easing: 'ease-out',
    });

    animation.startTime = document.timeline.currentTime;
  };

  /**
   * Toast a message with an rh-alert
   * Consider this as a candidate for adding as a static method on RhAlert
   * @param options
   * @param options.message alert text
   * @param [options.heading] alert heading
   * @param [options.state] `<rh-alert state="...">`
   */
  public static async toast({ message, heading = 'Success', state = 'info' }: ToastOptions) {
    const toast = this.#create({ heading, message, state });
    this.#add(toast);
    await Promise.all(toast.getAnimations().map(x => x.finished));
    this.#remove(toast);
  };
}


export const toast = Toaster.toast.bind(Toaster);
