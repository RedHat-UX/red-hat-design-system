import { createContext } from '@lit/context';

export const rhNavigationVerticalParentContext =
  createContext<{
    parent: HTMLElement | null;
    depth: number; }
  >(Symbol('rh-navigation-vertical-parent-context'));
