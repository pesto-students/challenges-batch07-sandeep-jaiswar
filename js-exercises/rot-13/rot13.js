function rot13(args) {
  let rotatedString = '';
  for (const char in args) {
    if (args[char].charCodeAt(0) > 77 && args[char].charCodeAt(0) < 91) {
      rotatedString += String.fromCharCode(args[char].charCodeAt(0) + 13 - 90 + 64);
    } else if (args[char].charCodeAt(0) <= 77 && args[char].charCodeAt(0) > 64) {
      rotatedString += String.fromCharCode(args[char].charCodeAt(0) + 13);
    } else {
      rotatedString += args[char];
    }
  }
  return rotatedString;
}

export {
  rot13,
};
