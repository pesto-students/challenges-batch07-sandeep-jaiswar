/* eslint-disable no-plusplus */
function duplicateLetters(...args) {
  const result = {};
  let max = 0;
  for (let i = 0; i < args[0].length; i++) {
    if (result[args[0][i]] === undefined) {
      result[args[0][i]] = 1;
    } else {
      result[args[0][i]] += 1;
    }
    if (result[args[0][i]] > max) {
      max = result[args[0][i]];
    }
  }
  if (max === 1) {
    return false;
  }
  return max;
}

export {
  duplicateLetters,
};
