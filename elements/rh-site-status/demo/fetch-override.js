
const { fetch: originalFetch } = window;

export function overrideFetch(ok, status, statusText, json) {
  window.fetch = async () => {
    return Promise.resolve({
      ok,
      status,
      statusText,
      json
    });
  };
}
