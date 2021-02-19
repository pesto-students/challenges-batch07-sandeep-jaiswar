function dropElements(elements, predicate) {
  const resultArr = [];
  elements.forEach(e => {
    if (predicate(e)) {
      resultArr.push(e);
    }
  });
  return resultArr;
}

export { dropElements };
