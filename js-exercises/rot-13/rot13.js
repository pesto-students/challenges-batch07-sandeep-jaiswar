function rot13(args) {
  const AlphaStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (const char of args) {
    if (char.match(/[A-Za-z]/)) {
      const index = AlphaStr.search(char);
      let newInd = index + 12;
      if (newInd+1 > 25) {
        newInd -= 25;
      }else{
        newInd+=1;
      }
      result += AlphaStr[newInd];
    } else {
      result += char;
    }
  }
  return result;
}

export {
  rot13,
};
