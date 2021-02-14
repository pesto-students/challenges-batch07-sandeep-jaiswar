function removeFalsyValues(array) {
  return array.filter(e => !!e);
}

export {
  removeFalsyValues,
};
