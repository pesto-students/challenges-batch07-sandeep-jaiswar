const deepCopyObject = objToCopy => {
  if (objToCopy === null) {
    return null;
  }
  if (Array.isArray(objToCopy)) {
    return [...objToCopy];
  }
  if (typeof (objToCopy) !== 'object') {
    return objToCopy;
  }
  const obj = {};
  for (const key in objToCopy) {
    if (Object.prototype.hasOwnProperty.call(objToCopy, key)) {
      obj[key] = deepCopyObject(objToCopy[key]);
    }
  }
  return obj;
};

export { deepCopyObject };
