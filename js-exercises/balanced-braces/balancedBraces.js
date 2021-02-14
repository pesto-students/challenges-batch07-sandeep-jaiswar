function balancedBraces(args) {
  const leftBracketArray = [];
  const decider = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  for (const char of args) {
    if (['{', '[', '('].includes(char)) {
      leftBracketArray.push(char);
    } else if (['}', ']', ')'].includes(char)) {
      if (char === decider[leftBracketArray[leftBracketArray.length - 1]]) {
        leftBracketArray.pop();
      } else {
        return false;
      }
    }
  }
  if (leftBracketArray.length === 0) {
    return true;
  }
  return false;
}

export {
  balancedBraces,
};
