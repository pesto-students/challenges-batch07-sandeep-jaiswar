function sumFibs(num) {
  let tracker = 1;
  let sum = 0;
  while (tracker <= num) {
    let currentNum;
    currentNum = findFibNum(tracker);
    if (currentNum <= num && currentNum % 2 != 0) {
      sum += currentNum;
    }
    tracker += 1;
  }
  return sum;
}
function findFibNum(n, memo) {
  memo = memo || {};
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }
  return memo[n] = findFibNum(n - 1, memo) + findFibNum(n - 2, memo);
}
function cacheFunction(sumFibs) {
  const cache = {};
  return n => {
    if (n in cache) {
      return cache[n];
    }

    const result = sumFibs(n);
    cache[n] = result;
    return result;
  };
}

export { sumFibs, cacheFunction };
