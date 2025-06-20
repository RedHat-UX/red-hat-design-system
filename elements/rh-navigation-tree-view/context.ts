import { createContext } from '@lit/context';

export const parentContext =
  createContext<{ parent: HTMLElement | null; depth: number }>(Symbol('parent-context'));
