import { LitElement } from 'lit';

export abstract class BaseAccordion extends LitElement {
  static isAccordion(target: EventTarget | null): target is BaseAccordion {
    return target instanceof BaseAccordion;
  }
}
