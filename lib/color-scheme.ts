/** Color scheme values accepted by the page-level scheme controls. */
export type ColorScheme = 'light' | 'dark' | 'light dark';

let selectedScheme: ColorScheme | undefined;
let preferredScheme: MediaQueryList | undefined;

function updateDocumentSchemeToken(): void {
  if (!globalThis.document?.body) {
    return;
  }

  const scheme = selectedScheme === 'light' || selectedScheme === 'dark' ?
    selectedScheme
    : preferredScheme?.matches ? 'dark' : 'light';

  document.body.style.setProperty('--color-scheme', scheme);
}

/**
 * Applies the selected scheme to the document and publishes the currently
 * active light/dark scheme as an inherited custom property. System mode tracks
 * changes to the user's preferred color scheme.
 */
export function setDocumentColorScheme(scheme?: ColorScheme): void {
  if (!globalThis.document?.body) {
    return;
  }

  selectedScheme = scheme;

  if (scheme) {
    document.body.style.setProperty('color-scheme', scheme);
  } else {
    document.body.style.removeProperty('color-scheme');
  }

  if (!preferredScheme && typeof globalThis.matchMedia === 'function') {
    preferredScheme = globalThis.matchMedia('(prefers-color-scheme: dark)');
    if (typeof preferredScheme.addEventListener === 'function') {
      preferredScheme.addEventListener('change', updateDocumentSchemeToken);
    } else {
      preferredScheme.addListener(updateDocumentSchemeToken);
    }
  }

  updateDocumentSchemeToken();
}
