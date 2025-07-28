import { createContext } from '@lit/context';

export type BorderedContext = '' | 'inline-start';

export const borderedContext = createContext<BorderedContext>('rh-bordered-context');
