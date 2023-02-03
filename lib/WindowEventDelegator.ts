import type { ReactiveController } from 'lit';

declare global {
    interface Window {
        eventDelegator:() => windowEventDelegator,
        _eventDelegator:windowEventDelegator
    }
}

window.eventDelegator = ():windowEventDelegator => {
  window._eventDelegator = window._eventDelegator || new windowEventDelegator();
  return window._eventDelegator;
};
type DelegatedEventSubscriber = ReactiveController | Element;
type DelegatedEventSubscription = Map<DelegatedEventSubscriber, EventListener>;

/**
 * allows a subscribing ReactiveController or Element to be notified via calback of a window event
 */
export class windowEventDelegator {
  // elements by event
  #subscribers = new Map<keyof WindowEventMap, DelegatedEventSubscription>();

  /**
     * adds ReactiveController or Element and callback to an event's notifications list
     */
  subscribe(
    subscriber: ReactiveController | Element,
    eventName: keyof WindowEventMap,
    callback: EventListener
  ) {
    if (!this.#subscribers.get(eventName)?.get(subscriber)) {
      // add event for subscriptions
      if (this.#subscribers?.get(eventName)) {
        this.#subscribers?.set(eventName, new Map());
        window.addEventListener(eventName, this.#handleEvent);
      }

      // add subscriber and callback to event subscriptions
      this.#subscribers.get(eventName)?.set(subscriber, callback);
    }
  }

  /**
     * removes ReactiveController or Element and callback to an event's notifications list
     */
  unsubscribe(
    subscriber: ReactiveController | Element,
    eventName: keyof WindowEventMap,
    callback: EventListener
  ) {
    if (this.#subscribers.get(eventName)?.get(subscriber) === callback) {
      // remove subscriber and callback from event subscriptions
      this.#subscribers.get(eventName)?.delete(subscriber);
      const entries = [...(this.#subscribers?.get(eventName)?.entries() || [])];

      // remove event listener if there are not remain subscribers
      if (entries.length < 1) {
        this.#subscribers?.delete(eventName);
        window.removeEventListener(eventName, this.#handleEvent);
      }
    }
  }

  #handleEvent(event:Event) {
    const eventName:string = event.type;
    const subscriptions = [...this.#subscribers.get(eventName as keyof WindowEventMap)?.values() || []];
    subscriptions.forEach(callback => callback(event));
  }
}
