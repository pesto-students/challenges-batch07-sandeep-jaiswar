const sumEvenArgs = (...args) => args.reduce((e, val) => ((val % 2 === 0) ? e + val : e), 0);

export { sumEvenArgs };
