const allPromises = (promises) => {
  const resultArr = [];
  let completedPromises = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        resultArr[index] = res;
        completedPromises += 1;
        if (completedPromises === promises.length) resolve(resultArr);
      }).catch((error) => {
        reject(error);
      });
    });
  });
};

export { allPromises };
