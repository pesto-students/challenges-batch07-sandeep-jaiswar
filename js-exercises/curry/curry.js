function curry(fn) {
  return function firstFunc(...input) {
    if (fn.length <= input.length) {
      return fn.apply(fn, input);
    }
    return function addAllRemainingVal(...input2) {
      return firstFunc.apply(fn, input.concat(input2));
    };
  };
}

export {
  curry,
};
