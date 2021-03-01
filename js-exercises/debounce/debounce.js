function debounce(fn, timeInMs) {
  let timeout;
  return function executedDebouncedFn(...args) {
    const context = () => {
      clearTimeout(timeout);
      fn(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(context, timeInMs);
  };
}

export { debounce };
