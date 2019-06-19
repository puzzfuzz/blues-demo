function __noOp__(){}

export const getRandomInt = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const timeout = (ms = 100) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Apply a random timeout between 200 and 500ms to passed in callback,
//  simulating variable server latency.
// URL for illustrative purposes only, ignored currently
export const apiMock = async (url, cb = __noOp__) => {
  await timeout(getRandomInt(200, 500));
  return cb();
};
