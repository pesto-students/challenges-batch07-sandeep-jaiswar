/* eslint-disable no-console */
function abbreviateString(str) {
  try {
    if (typeof str === 'string') {
      const nameArray = str.split(' ');
      console.log(`${nameArray[0]} ${nameArray[nameArray.length - 1][0].toUpperCase()}.`);
    } else {
      throw new Error('Invalid Input');
    }
  } catch (e) {
    console.error(e);
  }
}

abbreviateString('Hacktober Fest');

export { abbreviateString };
