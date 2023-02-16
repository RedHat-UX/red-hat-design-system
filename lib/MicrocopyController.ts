import type { ReactiveController, ReactiveControllerHost } from 'lit';

export class MicrocopyController extends Map<string, string> implements ReactiveController {
  constructor(private host: ReactiveControllerHost, obj: Record<string, string>) {
    super(Object.entries(obj));
  }

  get(key: string) {
    return super.get(key) ?? key;
  }

  set(key: string, value: string) {
    super.set(key, value);
    this.host.requestUpdate();
    return this;
  }

  clear() {
    super.clear();
    this.host.requestUpdate();
  }

  delete(key: string) {
    const r = super.delete(key);
    this.host.requestUpdate();
    return r;
  }

  join(obj: Record<string, string>) {
    for (const [key, value] of Object.entries(obj)) {
      this.set(key, value);
    }
    this.host.requestUpdate();
    return this;
  }

  hostConnected?(): void
}
