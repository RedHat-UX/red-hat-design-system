export function overrideFetch(ok, status, statusText, json) {
  window.fetch = new Proxy(window.fetch, {
    apply: (target, thisArg, args) => {
      if (args[0] === 'https://status.redhat.com/index.json') {
        return Promise.resolve({
          ok,
          status,
          statusText,
          json
        });
      }
      return target.apply(thisArg, args);
    }
  });
}
