function __noOp__(){}

export const randomFromInterval = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const timeout = (ms = 100) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Apply a random timeout between 200 and 500ms to passed in callback,
//  simulating variable server latency.
// URL for illustrative purposes only, ignored currently
export const apiMock = async (url, cb = __noOp__) => {
  await timeout(randomFromInterval(200, 500));
  return cb();
};

/**
 * Convets the passed in value to a number.
 * Useful when reading value off URL params
 * @param v
 * @returns {number}
 * @throws if value fails to convert or convert results in NaN
 */
export const toNum = (v) => {
  if (typeof v === 'number') {
    return v;
  }

  let _v = Number(v);

  if (Number.isNaN(_v )) {
    throw new Error(`${v} is NaN`);
  }
  return _v;
};
