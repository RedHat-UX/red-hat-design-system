import type { ReactiveController, ReactiveControllerHost } from 'lit';
import './WindowEventDelegator.js';

/**
 *
 */
export class FloatingPositionController implements ReactiveController {
  #delegator = window.eventDelegator();

  constructor(public host: ReactiveControllerHost & HTMLElement) {
    this.host.addController(this);
  }


  #delay = 100;
  // queue of callbacks to prevent them form running multiple times in the same 100ms
  #queue = [];
  #clearingQueue = false;

  #startQueue() {
    if (!this.#clearingQueue) { setTimeout(this.#clearQueue.bind(this), 100); }
    this.#clearingQueue = true;
  }

  #clearQueue() {
    // this.#queue.forEach(subscribers=>console.log(subscribers));
    this.#queue = [];
  }

  queueUpdate() {
    // if(!this.#queue.includes(sub)) this.#queue.push(sub);
    this.#startQueue();
  }

  hostConnected() {
    this.#delegator.subscribe(this, 'scroll', this.queueUpdate.bind(this));
    this.#delegator.subscribe(this, 'resize', this.queueUpdate.bind(this));
  }
}
