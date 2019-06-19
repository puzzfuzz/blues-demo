function __noOp__(){}

export const getRandomInt = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const timeout = (ms = 100) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const apiMock = async (cb = __noOp__) => {
  await timeout(getRandomInt(200, 500));
  return cb();
};
