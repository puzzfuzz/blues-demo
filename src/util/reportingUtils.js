


export const noticeError = (errorString) => {
  // TODO - notify monitoring service (Sentry, DataDog, etc.)

  console.error(errorString);
};
