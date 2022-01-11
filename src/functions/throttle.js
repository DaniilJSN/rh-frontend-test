export const throttle = (func, thottlingTime) => {
  let context,
    savedArgs,
    isThrottled = null;

  return function wrapper(...args) {
    if (isThrottled) {
      context = this;
      savedArgs = args;
      return;
    }

    func.apply(context, savedArgs);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(context, savedArgs);
        savedArgs = context = null;
      }
    }, thottlingTime);
  };
};
