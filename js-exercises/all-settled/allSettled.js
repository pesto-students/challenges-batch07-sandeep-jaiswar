const allSettled = (promises) => {
  const resultArr = [];
  let completedPromises = 0;
  return new Promise((resolve) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((response) => {
        resultArr[index] = { status: 'fulfilled', value: response };
        completedPromises += 1;
        if (completedPromises === promises.length) resolve(resultArr);
      }).catch((error) => {
        resultArr[index] = { status: 'rejected', Reason: `Error: ${error.message}` };
        completedPromises += 1;
        if (completedPromises === promises.length) resolve(resultArr);
      });
    });
  });
};

export { allSettled };
