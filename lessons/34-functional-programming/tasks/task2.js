const memoizeResultCreator = (...funcs) => {
  const paramFuncs = funcs.slice(0, funcs.length - 1);
  const resultFunc = funcs[funcs.length - 1];
  const cache = [];

  let isNeedToChange = false;
  let res;
  return function (value) {
    const result = paramFuncs.map((paramFn, index) => {
      if (paramFn(value) !== cache[index]) {
        isNeedToChange = true;
      }
      return paramFn(value);
    });

    if (isNeedToChange) {
      res = resultFunc(...result);
      cache.push(...result);
      isNeedToChange = false;
    }
    return res;
  };
};

module.exports = {
  memoizeResultCreator,
};
